
//firebase deploy --only functions //deployment
var dateFormat = require('dateformat');


// Cut off time. Child nodes older than this will be deleted.
const CUT_OFF_TIME = 2;

// const MAIN_REFERENCE_NAME = "db_tlfree_test";
// const MAIN_OLD_REFERENCE_NAME = "db_tlfree_test_old";
const MAIN_REFERENCE_NAME = "db_tlfree";
const MAIN_OLD_REFERENCE_NAME = "db_tlfree_old";

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

// Get a database reference to our posts
var db = admin.database();
var ref = db.ref("db_tlfree");

var data = "";
var nodemailer = require('nodemailer');
//var smtpTransport = require('nodemailer-smtp-transport');
var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        //type: 'OAuth2',
        user: "tlfreeonline@gmail.com",
        pass: "Tlfree123123"
    }
});

exports.moveOldEvent = functions.https.onRequest((request, response) => {
    console.log("moveOldEvent start");
    var refMain = admin.database().ref(MAIN_REFERENCE_NAME);
    var refMainOld = admin.database().ref(MAIN_OLD_REFERENCE_NAME);

    // get todays date as a string 'yyyymmdd' that could be translated to integer
    
    // var today = new Date();
    // var dd = today.getDate();
    // var mm = today.getMonth() + 1; //January is 0!
    // var yyyy = today.getFullYear();
    // if (dd < 10) {
    //     dd = '0' + dd;
    // }
    // if (mm < 10) {
    //     mm = '0' + mm;
    // }
    // console.log("yyyy = " + yyyy);
    // console.log("mm = " + mm);
    // console.log("dd = " + dd);
    const todayString = dateFormat(Date.now(), "yyyymmdd");
    console.log("today: " + todayString);
    var numberOfNodeMoved = 0;

    refMain.once("value")
        .then(snapshot => {
            const nodesToCopy = {};
            const nodesToRemove = {};

            snapshot.forEach(snapshotChild => {
                var fullDateString = snapshotChild.child("full_date").val();
                var dateDifference = parseInt(todayString) - parseInt(fullDateString);
                //console.log("todayString = " + todayString);
                //console.log("dateDifference = " + dateDifference);
                //console.log("fullDateString = " + fullDateString);
                //console.log("dateDifference = " + dateDifference);

                if (dateDifference > CUT_OFF_TIME) {
                    console.log("node to be moved keys' = " + snapshotChild.key);
                    nodesToCopy[snapshotChild.key] = snapshotChild.val();
                    nodesToRemove[snapshotChild.key] = null;
                    numberOfNodeMoved++;
                }
            });
            refMainOld.update(nodesToCopy, (error) => {
                if (error) {
                    console.error("Error updating (copy) data: ", error);
                    response.send("error #1");
                }
            });

            refMain.update(nodesToRemove, (error) => {
                if (error) {
                    console.error("Error updating (remove) data: ", error);
                    response.send("error #2");
                }
            });

            console.log("Success, moved " + numberOfNodeMoved.toString() + " nodes");
            response.send("Success, moved " + numberOfNodeMoved.toString() + " nodes");
            return;
        }).catch(reason => {
            // handle the error
            console.error("error: " + reason);
            response.send("error #3");
        });

    // response.send("Success, moved nodes2");
});

exports.createLocationEmptyFields = functions.database.ref('/db_tlfree/{eventGuid}').onCreate((snapshot, context) => {
    try {
        var guid = ref.child(snapshot.key);
        if (guid.location === undefined) {
            var obj = { location: { address: "", latitude: 0, longtitude: 0 } };
            guid.update(obj, function (error) {
                if (error) {
                    console.log("error while trying to update location to " + guid + " : " + error);
                } else {
                    console.log("location was successfully created for " + snapshot.key);
                }
            });
        }
    }
    catch (err) {
        console.log("An error occurred : " + err);
    }
    return true;
});

exports.backupDB = functions.https.onRequest((request, response) => {
    var rootRef = admin.database().ref(); // Ref to database root
    rootRef.once("value", function (snapshot) {
        data = JSON.stringify(snapshot.val());
        send(response);
        //send back response 
        //response.status(200).send("The time is now.");
    });
});
var maillist = [
    'tlfreeonline@gmail.com',
    'omer.big@gmail.com '
];
maillist.toString();
function inputmail() {
    ///////Email
    const from = 'tlfreeonline@gmail.com';
    const to = maillist;
    const subject = 'backup_tlfree_db';
    var mailOption = {
        from: from,
        to: to,
        subject: subject,
        attachments: [{ 'filename': 'tlfree_db.json', 'content': data }]
    }
    return mailOption;
}

function send(response) {
    smtpTransport.sendMail(inputmail(), function (err, success) {
        if (err) {
            console.log("Mail not sent : " + err);
            response.status(200).send("Mail not sent : " + err);
        }
        if (success) {
            console.log("Mail sent");
            response.status(200).send("Mail sent!");
        }

    });
}


