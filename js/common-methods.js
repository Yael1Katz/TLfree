function createEventLocationList() {
    var eventsLocation = {};
    // eventsLocation["-LEEUBTJ8HMxdvQbaL37"] = { address: "עיריית תל אביב, תל אביב יפו" };
    // eventsLocation["-LEETvIW5QjYSfPCa4pS"] = { address: "אחוזת בית 2, תל אביב יפו" };
    // eventsLocation["-LFpf_y7DttCe0dkJxvE"] = { address: "Derech Menachem Begin 121, Tel Aviv-Yafo" };
    // eventsLocation["-LFCDwyGEtHoZH_VwgLZ"] = { address: "Rothschild Blvd 22, Tel Aviv-Yafo" };
    // eventsLocation["-LFGdu0__jw5eCZwUWkc"] = { address: "אחד העם 54, תל אביב יפו" };
    // eventsLocation["-LFkkDOXZnxUDm8BoDyl"] = { address: "54 Ahad HaAm Street" };
    // eventsLocation["-LFGeDD5_1LlFgr3Fs3o"] = { address: "namal tlv" };
    // eventsLocation["-LFCDibfpJ8th5d_RBUr"] = { address: "2 Tushiya Street Tel Aviv-Yafo" };
    // eventsLocation["-LFCDFJSwKPqzcAZMDJK"] = { address: "121 Menachem Begin 121, Tel Aviv, Israel" };
    // eventsLocation["-LFCCmOjN63WgeQ8TSXS"] = { address: "הירקון 165, תל אביב יפו" };
    // eventsLocation["-LFkju_tF2Z-llZPz5fQ"] = { address: "39 Rothschild Tel Aviv-Yafo" };
    // eventsLocation["-LFarXkn6Ecq9KrHxs9V"] = { address: "Hamanor 14  Tel Aviv , Jaffa" };
    // eventsLocation["-LExkMzDpPAUpTn1iMhg"] = { address: "Urban Place - Rothschild" };
    // eventsLocation["-LExk5ZakxXPtVG50I7w"] = { address: "Iban Gabirol 30, Tel Aviv-Yafo" };
    // eventsLocation["-LFMXfGXDtCHSYwn4ien"] = { address: "שלמה אבן גבירול 69, תל אביב יפו" };
    // eventsLocation["-LFkjc_cAV8Eyk-chmgP"] = { address: "David Elazar 12, Tel Aviv-Yafo" };
    // eventsLocation["-LExjrl2Zt13XcPLe7iJ"] = { address: "Ahad Haam 54, Tel Aviv, Floor 5, Tel Aviv-Yafo, il" };
    // eventsLocation["-LFpfOWugzcXfer8NHSv"] = { address: "טיילור מייד, אלנבי, תל אביב יפו" };
    // eventsLocation["-LEOOW31fTlt9XVGQl5c"] = { address: "dizzy frishdon דיזנגוף תל אביב יפו" };
    // eventsLocation["-LG-KCYalkujkffNPP4y"] = { address: "MindSpace, Tel Aviv, il" };
    // eventsLocation["-LFGfKWYxM8DERN51nPj"] = { address: "Yigal Alon Street 98, Tel Aviv-Yafo" };
    // eventsLocation["-LG-K0LQDL4phUA9fhSk"] = { address: "17 Osvaldo Aranha Street, Tel Aviv" };
    // eventsLocation["-LG-Jqxq-rHNhy5mmvYA"] = { address: "ספריית בית אריאלה, שדרות שאול המלך, תל אביב יפו" };
    // eventsLocation["-LFpf9mIugGNpHvI1noE"] = { address: "dizzy frishdon דיזנגוף תל אביב יפו" };
    // eventsLocation["-LFMXITXtq7ro-lS7yKr"] = { address: "HaYarkon Street 99, Tel Aviv-Yafo" };
    // eventsLocation["-LExjglShhcG8SsAAP6N"] = { address: "54 Ahad HaAm Street" };
    // eventsLocation["-LFCCKNxcKVunFTfFTd0"] = { address: "Yigal Alon Street 98, Tel Aviv-Yafo" };
    // eventsLocation["-LFMX2QseposSpz-4_gQ"] = { address: "אחוזת בית 2, תל אביב יפו" };
    // eventsLocation["-LFaqjhPvSlvYLqF1of7"] = { address: "dizzy frishdon דיזנגוף תל אביב יפו" };
    // eventsLocation["-LFGfA0DkuyTXKwuskUo"] = { address: "Yigal Alon Street 98, Tel Aviv-Yafo" };
    // eventsLocation["-LG-JYgbk8OLVgQoum7W"] = { address: "Tailor Made, אלנבי, תל אביב יפו" };
    // eventsLocation["-LG-Jg7kTcARC2xKozGT"] = { address: "Nahalat Binyamin 52, Tel Aviv, Israel" };
    // eventsLocation["-LEONgi_M67Q_kOS62o3"] = { address: "Dvora HaNevi'a Street 121, תל אביב יפו" };
    // eventsLocation["-LG-JCPK35N-eYS1p6iI"] = { address: "Jaffa Port, תל אביב יפו" };
    // eventsLocation["-LEONronsGashM2ClIM5"] = { address: "Idelson St 29, Tel Aviv-Yafo, Israel" };
    // eventsLocation["-LFRFE1ORlSC2y0SVQ-9"] = { address: "כיכר ביאליק, ביאליק, תל אביב יפו, Tel Aviv, Israel" };
    // eventsLocation["-LFRBPNoK0lQcHoCtRs_"] = { address: "גבעון, תל אביב יפו" };
    // eventsLocation["-LFRBBxESc7UbE2HpNGA"] = { address: "גן הפסגה, תל אביב יפו" };
    // eventsLocation["-LFRBdrVp9C2VwAM_5T5"] = { address: "כיכר הבימה, תל אביב יפו" };
    // eventsLocation["-LFRBsdnxfcRRUpxY3Ef"] = { address: "מרכז סוזן דלל למחול ולתיאטרון, יחיאלי, תל אביב יפו" };
    // eventsLocation["-LEsTmP4lf7yjRixAINf"] = { address: "אחד העם 54, תל אביב יפו" };
    // eventsLocation["-LFRCQGxxQCI2fGogqbi"] = { address: "מרכז ביכורי העתים, לינקולן, תל אביב יפו" };
    // eventsLocation["-LFRCdEdyPz378DNLZ06"] = { address: "צייטלין 22, תל-אביב יפו" };
    // eventsLocation["-LFRCrjWfkouWa_HeoWk"] = { address: "אחוזת בית 2, תל-אביב יפו" };
    // eventsLocation["-LFRD7sskLzY3jQlT3NI"] = { address: "גן העצמאות, הירקון, תל אביב יפו" };
    // eventsLocation["-LFRC53gYi5HfxCnZbit"] = { address: "תאטרון תמונע, שונצינו, תל אביב יפו" };
    // eventsLocation["-LFRDkCqPOBlQDi1kq8V"] = { address: "גן מאיר, תל אביב יפו" };
    // eventsLocation["-LFRE0V0xZ5CqM1aG71R"] = { address: "כיכר קדומים" };
    // eventsLocation["-LFkj-pxkGUnCIJZkVCB"] = { address: "Yigal Alon Street 98, Tel Aviv-Yafo" };
    // eventsLocation["-LFGdTv6lj-0LClKeQ8q"] = { address: "מוזיאון תל אביב לאמנות, מתחם גולדה מאיר, שדרות שאול המלך, תל אביב יפו" };
    // eventsLocation["-LFREWLhFuFGwRjRv9Bn"] = { address: "התיאטרון הקאמרי" };
    // eventsLocation["-LFREj9P23v9WplIFZHe"] = { address: "איכילוב, ויצמן‬, תל אביב יפו" };
    // eventsLocation["-LFREzK5-hrcnhFTc2wZ"] = { address: "איכילוב, ויצמן‬, תל אביב יפו" };
    // eventsLocation["-LFaqAKddBHNGMg4Oz8z"] = { address: "104 Rothschild Boulevard, Tel Aviv" };
    // eventsLocation["-LEsTX5ALg4PumiV4RWK"] = { address: "Azrieli Sarona Tower. 53rd floor, Tel Aviv, il" };
    // eventsLocation["-LFkjLa5y_Zu-8GQ3QDr"] = { address: "Yigal Alon Street 98, Tel Aviv-Yafo" };
    // eventsLocation["-LFCD0r5d32WWiaIWbC2"] = { address: "אחוזת בית 2, תל אביב יפו" };
    // eventsLocation["-LGLufU75AJOvu3uy6af"] = { address: "יגאל אלון 98, תל אביב יפו" };
    // eventsLocation["-LGLuDw9DXNnoUzwxWfi"] = { address: "Yigal Alon Street 98, Tel Aviv-Yafo" };
    // eventsLocation["-LGLtvw2dGE9TrU3brg_"] = { address: "הנרייטה סולד 23, תל אביב יפו" };
    // eventsLocation["-LGLtEi5p4qL2y67Hp1y"] = { address: "29 Nahalat Binyamin" };
    // eventsLocation["-LGLszKenzCRkbhEBVuf"] = { address: "Yigal Alon Street 98, Tel Aviv-Yafo" };
    // eventsLocation["-LGLsdTJSIFzPBIfJioE"] = { address: "ריינס 1, תל אביב יפו" };
    // eventsLocation["-LGLsLeN5qjlSI8dd7J5"] = { address: "30 Ibn Gabirol Tel Aviv" };
    // eventsLocation["-LGiUTfGgs3_Lz39Rw2N"] = { address: "Raoul Wallenberg 36, Tel Aviv-Yafo" };
    // eventsLocation["-LGiUB3a1sTR1AY8JROm"] = { address: "Dizzy Frishdon" };
    // eventsLocation["-LGiTxiKZOO9lT2cei8h"] = { address: "tikal knowledge" };
    // eventsLocation["-LGiTf2mSA7MNrUsWvc8"] = { address: "35 Ahad HaAm Street" };
    // eventsLocation["-LGgPnMhulPjiyzafQJw"] = { address: "54 Ahad HaAm Street" };
    // eventsLocation["-LGgPNONsJDmOvyTKPzP"] = { address: "אחד העם 9, תל אביב יפו" };
    // eventsLocation["-LGgOu7gLez_IfrR_w3B"] = { address: "לונדון מיניסטור" };
    // eventsLocation["-LGgOagj-LPM904Y_JD_"] = { address: "עיריית תל אביב, תל אביב יפו" };
    // eventsLocation["-LGgO119h7SDQD_r0jza"] = { address: "54 Ahad HaAm Street" };
    // eventsLocation["-LGgNOplshz0xcRLxsQE"] = { address: "Anna Frank 12, Ramat Gan" };
    // eventsLocation["-LGgMz_5Nxx2W09lxlgU"] = { address: "Namal Tel Aviv" };
    // eventsLocation["-LGgMYQQnqYvrEwWPDhQ"] = { address: "Yigal Alon Street 98, Tel Aviv-Yafo" };
    // eventsLocation["-LGgLo3qnZjooO5oblSV"] = { address: "Namal Tel Aviv" };
    // eventsLocation["-LGgLOLw7d2kP_V_mFRB"] = { address: "קומה 1, קרליבך 10, תל אביב יפו" };
    // eventsLocation["-LGgL93JiOKy45o6k-XQ"] = { address: "Yigal Alon Street 94, תל אביב יפו" };
    // eventsLocation["-LGzdv2YfK9OGD2XGJIn"] = { address: "9 Ahad HaAm Street" };
    // eventsLocation["-LGzdZ1q6A3r-sFL3TJ6"] = { address: "בית אריאלה" };
    // eventsLocation["-LGzd60vUHCslIMhS8ir"] = { address: "רחוב יוסף יקותיאלי 4, תל אביב יפו" };
    // eventsLocation["-LGzcbTS81K16eFWe77Y"] = { address: "מנחם בגין 121, תל אביב יפו" };
    // eventsLocation["-LGzc9xEueqM7RjA8VON"] = { address: "Dizzy Frishdon" };
    // eventsLocation["-LGzbslo7DjXKJgmBQVu"] = { address: "Yigal Alon Street 98, Tel Aviv-Yafo" };
    // eventsLocation["-LGzbS7BHmhXd_ssm6wr"] = { address: "עיריית תל אביב, תל אביב יפו" };
    // eventsLocation["-LGiUTfGgs3_Lz39Rw2N"] = { address: "Raoul Wallenberg 36, building no. 8, 3rd floor, Kiriat Atidim Tel Aviv" };
    // eventsLocation["-LGiUB3a1sTR1AY8JROm"] = { address: "Dizzy Frishdon" };
    // eventsLocation["-LHStNsrWmpjos48fe8m"] = { address: "Derech Menachem Begin 121, Tel Aviv-Yafo" };
    // eventsLocation["-LHStE2OruqNim9A6R1M"] = { address: "Rothschild Street 104, Tel Aviv-Yafo" };
    // eventsLocation["-LHSskovVStVqBX_vlMA"] = { address: "דב הוז 16, תל אביב יפו" };
    // eventsLocation["-LHSsU48wIuvStfpGf9_"] = { address: "35 Ahad HaAm Street" };
    // eventsLocation["-LHSrv-3_dA2cUK7Qb3L"] = { address: "Yigal Alon Street 98, Tel Aviv-Yafo" };
    // eventsLocation["-LHSrjewt_0f6cbz6aSh"] = { address: "9 Ahad HaAm Street" };
    // eventsLocation["-LHSrY5em4P31DqObVXF"] = { address: "ידע עם 8, רמת גן" };
    // eventsLocation["-LHSrHlJ_JU_LjoXDLW4"] = { address: "Yigal Alon Street 98, Tel Aviv-Yafo" };
    // eventsLocation["-LHSqMbdPsBu_Oe-_4_M"] = { address: "מכללת מנטור רמת גן" };
    // eventsLocation["-LHSpklGoBC6PCkVgWxD"] = { address: "Yigal Alon Street 98, Tel Aviv-Yafo" };
    // eventsLocation["-LHYKhh_0uOIYcAPEL87"] = { address: "Dizzy Frishdon" };
    // eventsLocation["-LHYKWdq_qh7KmQR-aCF"] = { address: "Yigal Alon Street 98, Tel Aviv-Yafo" };
    // eventsLocation["-LHYKIkp0XD2cYHv0-GV"] = { address: "54 Ahad HaAm Street" };
    // eventsLocation["-LHYK39qrmhMLUmB-iTo"] = { address: "קרליבך 10, תל אביב יפו" };
    // eventsLocation["-LHYJqJJGClfVsWuSLPZ"] = { address: "Dizzy Frishdon" };
    // eventsLocation["-LHYHMMEsm2MLyz2Vwdz"] = { address: "54 Ahad HaAm Street" };
    // eventsLocation["-LHYGW46z0ZQRftCBewi"] = { address: "54 Ahad HaAm Street" };
    // eventsLocation["-LHYFo6zF7nqIwAgoPOg"] = { address: "Osvaldo Aranha St 17, תל אביב יפו" };
    // eventsLocation["-LHcTixnRHZH-Vsg5qey"] = { address: "פארק הירקון, תל אביב יפו" };
    // eventsLocation["-LHcTWdghjg6yJtv69I_"] = { address: "Ibe Gabirol Street 2, Tel Aviv-Yafo" };
    // eventsLocation["-LHcSvyJRlI42-89x7cg"] = { address: "Yigal Alon Street 98, Tel Aviv-Yafo" };
    // eventsLocation["-LHcSXWISi5CrYW4Bslx"] = { address: "הוברמן 1, תל אביב יפו" };
    // eventsLocation["-LHcRrKWdqF66ivK2_bD"] = { address: "חילזון 12, רמת גן" };
    // eventsLocation["-LHcM9DXEBTjMbu_IVkA"] = { address: "Nahalat Binyamin 52, Tel Aviv-Yafo" };
    // eventsLocation["-LHcLjPsse0lJgKD2hnr"] = { address: "Yigal Alon Street 98, Tel Aviv-Yafo" };
    // eventsLocation["-LHcLOvBixwckqoTfUF0"] = { address: "Aluf Kalman Magen 3, Tel Aviv-Yafo" };
    // eventsLocation["-LHcL6Ok30lCnIgDNnaO"] = { address: "טיילור מייד, אלנבי, תל אביב יפו" };
    // eventsLocation["-LHn4UabYevbnSa3lnGh"] = { address: "מזאה 9, תל אביב יפו" };
    // eventsLocation["-LHn4E5lWd8ZSDRKyhTa"] = { address: "מזאה 9, תל אביב יפו" };
    // eventsLocation["-LHn4-cT9z7E4hTfMCs1"] = { address: "Yigal Alon Street 98, Tel Aviv-Yafo" };
    // eventsLocation["-LHn3ljotYNRgqThseM3"] = { address: "לייט האוס, נמל תל-אביב" };
    // eventsLocation["-LHn3a3Vo-OW6oRVGI9F"] = { address: "54 Ahad HaAm Street" };
    // eventsLocation["-LHn3OMRi-rcoTRnITeQ"] = { address: "Yigal Alon Street 98, Tel Aviv-Yafo" };
    // eventsLocation["-LHn2xnqt7Fx65QJTxB6"] = { address: "Yigal Alon Street 98, Tel Aviv-Yafo" };
    // eventsLocation["-LI_u8M4Wd8ZSDRKyhTa"] = { address: "9 Ahad HaAm Street" };
    // eventsLocation["-LI_tv2h9z7E4hTfMCs1"] = { address: "Shaul Hameleh 4, Tel Aviv-Yafo" };
    // eventsLocation["-LI_tXm-tYNRgqThseM3"] = { address: "54 Ahad HaAm Street" };
    // eventsLocation["-LI_tIq8o-OW6oRVGI9F"] = { address: "Check Point Software Technologies, הסוללים, תל אביב יפו" };
    // eventsLocation["-LI_tA0Ei-rcoTRnITeQ"] = { address: "35 Ahad HaAm Street" };
    // eventsLocation["-LI_smYMt7Fx65QJTxB6"] = { address: "Dizzy Frishdon" };
    // eventsLocation["-LIQpRW5Zr2DPkE3Vuf1"] = { address: "Dizengoff St 99, תל אביב יפו" };
    // eventsLocation["-LIQp6ucLQ9On1pzZQN4"] = { address: "54 Ahad HaAm Street" };
    // eventsLocation["-LIQoqpIYevbnSa3lnGh"] = { address: "Yigal Alon Street 98, Tel Aviv-Yafo" };
    // eventsLocation["-LIQoJxaWd8ZSDRKyhTa"] = { address: "Yigal Alon Street 98, Tel Aviv-Yafo" };
    // eventsLocation["-LIQnzMP9z7E4hTfMCs1"] = { address: "Abraham Hostel Tel Aviv, לבונטין, תל אביב יפו" };
    // eventsLocation["-LIQnpV5tYNRgqThseM3"] = { address: "Sderot Rothschild 60, תל אביב יפו" };
    // eventsLocation["-LIQnekto-OW6oRVGI9F"] = { address: "Yigal Alon Street 98, Tel Aviv-Yafo" };
    // eventsLocation["-LIQnKzAi-rcoTRnITeQ"] = { address: "Le Wagon TLV, בן יהודה, תל אביב יפו" };
    // eventsLocation["-LIQmaV3t7Fx65QJTxB6"] = { address: "דרך זאב זבוטינסקי 1, Ramat Gan" };
    // eventsLocation["-LI6he2h9z7E4hTfMCs1"] = { address: "Yigal Alon Street 98, Tel Aviv-Yafo" };
    // eventsLocation["-LI6hTo3tYNRgqThseM3"] = { address: "54 Ahad HaAm Street" };
    // eventsLocation["-LI6h0jbo-OW6oRVGI9F"] = { address: "Yigal Alon Street 98, Tel Aviv-Yafo" };*/
    // eventsLocation["-LIjop6dYevbnSa3lnGh"] = { address: "Dizzy Frishdon" };
    // eventsLocation["-LIjocgIWd8ZSDRKyhTa"] = { address: "32 HaArbaa Street" };
    // eventsLocation["-LIjoU7f9z7E4hTfMCs1"] = { address: "Dizzy Frishdon" };
    // eventsLocation["-LIjn8QKo-OW6oRVGI9F"] = { address: "Tel Aviv University" };
    // eventsLocation["-LIjmxF4i-rcoTRnITeQ"] = { address: "רוטשילד 20, תל אביב יפו" };
    // eventsLocation["-LIjmctHt7Fx65QJTxB6"] = { address: "Ahad Haam 54, Tel Aviv" };
    // eventsLocation["-LJ4amzqzCcYreWZeOo0"] = { address: "רוטשילד 11, תל אביב יפו" };
    // eventsLocation["-LJ4aYi1z_Ubb0k9XnRt"] = { address: "אבן גבירול 69, תל-אביב יפו" };
    // eventsLocation["-LJ4aKsd2uNnS1B0nIPd"] = { address: "גן הפסגה, תל אביב יפו" };
    // eventsLocation["-LJ4aC412U_g8-swBe5w"] = { address: "רלבג 15, Tel Aviv, Israel" };
    // eventsLocation["-LJ4_rFbhjIX_G8oQGJX"] = { address: "אבן גבירול 69, תל-אביב יפו" };
    // eventsLocation["-LJ4_hFtZr2DPkE3Vuf1"] = { address: "רוטשילד 11, תל אביב יפו" };
    // eventsLocation["-LJ4_Z-fLQ9On1pzZQN4"] = { address: "רלבג 15, Tel Aviv, Israel" };
    // eventsLocation["-LJ4_PcgYevbnSa3lnGh"] = { address: "גן הפסגה, תל אביב יפו" };
    // eventsLocation["-LJ4_GN_Wd8ZSDRKyhTa"] = { address: "דרמה בר, נחלת בנימין, תל אביב יפו" };
    // eventsLocation["-LJ4_7FP9z7E4hTfMCs1"] = { address: "רוטשילד 11, תל אביב יפו" };
    // eventsLocation["-LJ4ZnMdtYNRgqThseM3"] = { address: "סינמטק, הארבעה, תל אביב יפו" };
    // eventsLocation["-LJ4ZfFso-OW6oRVGI9F"] = { address: "Dizzy Frishdon" };
    // eventsLocation["-LJ4ZGfai-rcoTRnITeQ"] = { address: "שביל המרץ 3, תל אביב יפו" };
    // eventsLocation["-LJ4Z-oHt7Fx65QJTxB6"] = { address: "רוטשילד 11, תל אביב יפו" };
    // eventsLocation["-LIvrX3qZr2DPkE3Vuf1"] = { address: "9 Ahad HaAm Street" };
    // eventsLocation["-LIvrDE0LQ9On1pzZQN4"] = { address: "Israel Galili 6, תל אביב יפו" };
    // eventsLocation["-LIvr-8RYevbnSa3lnGh"] = { address: "Dizzy Frishdon" };
    // eventsLocation["-LIvqdD1Wd8ZSDRKyhTa"] = { address: "Rothschild 22, Tel Aviv-Yafo" };
    // eventsLocation["-LIvqU3c9z7E4hTfMCs1"] = { address: "Derech Menachem Begin 65, Tel Aviv-Yafo" };
    // eventsLocation["-LIvq4istYNRgqThseM3"] = { address: "WeWork Dubnov, תל אביב יפו" };
    // eventsLocation["-LIvpfC3o-OW6oRVGI9F"] = { address: "Maze Street 9, תל אביב יפו" };
    // eventsLocation["-LIvpQmVi-rcoTRnITeQ"] = { address: "HaBarzel 19d, תל אביב יפו" };
    // eventsLocation["-LJOo_pM2U_g8-swBe5w"] = { address: "Rothschild Boulevard 22, Tel Aviv-Yafo" };
    // eventsLocation["-LJOny8TZr2DPkE3Vuf1"] = { address: "בית רובינשטיין, תל אביב יפו" };
    // eventsLocation["-LJOngdELQ9On1pzZQN4"] = { address: "קפה שפירא, רלבג, תל אביב יפו" };
    // eventsLocation["-LJOnXwTYevbnSa3lnGh"] = { address: "Rothschild 11, Tel Aviv-Yafo" };
    // eventsLocation["-LJOnPAFWd8ZSDRKyhTa"] = { address: "Rothschild 11, Tel Aviv-Yafo" };
    // eventsLocation["-LJOnGlU9z7E4hTfMCs1"] = { address: "עיריית תל אביב תל אביב יפו" };
    // eventsLocation["-LJOn7vctYNRgqThseM3"] = { address: "גן הפסגה, תל אביב יפו" };
    // eventsLocation["-LJOmzYMo-OW6oRVGI9F"] = { address: "54 Ahad HaAm Street" };
    // eventsLocation["-LJOmfEkt7Fx65QJTxB6"] = { address: "שדרות רוטשילד 60, תל אביב יפו" };
    // eventsLocation["-LJEaH0lZr2DPkE3Vuf1"] = { address: "קפה שפירא, רלבג, תל אביב יפו" };
    // eventsLocation["-LJEa7GWLQ9On1pzZQN4"] = { address: "עיריית תל אביב תל אביב יפו" };
    // eventsLocation["-LJE_yMTYevbnSa3lnGh"] = { address: "Rothschild 11, Tel Aviv-Yafo" };
    // eventsLocation["-LJE_i7QWd8ZSDRKyhTa"] = { address: "Rothschild 11, Tel Aviv-Yafo" };
    // eventsLocation["-LJE_XtM9z7E4hTfMCs1"] = { address: "Yigal Alon Street 94, Tel Aviv-Yafo" };
    // eventsLocation["-LJE_995tYNRgqThseM3"] = { address: "Yigal Alon Street 98, Tel Aviv-Yafo" };
    // eventsLocation["-LK1U3nG2U_g8-swBe5w"] = { address: "פארק אדית וולפסון, תל אביב יפו" };
    // eventsLocation["-LK1TvRrhjIX_G8oQGJX"] = { address: "HaGalil 6, Tel Aviv-Yafo" };
    // eventsLocation["-LK1TmfKZr2DPkE3Vuf1"] = { address: "Sderot Abba Eban 1, הרצליה" };
    // eventsLocation["-LK1TZzzLQ9On1pzZQN4"] = { address: "פארק אדית וולפסון, תל אביב יפו" };
    // eventsLocation["-LK1TRQIYevbnSa3lnGh"] = { address: "Dizengoff Street 77, תל אביב יפו" };
    // eventsLocation["-LK1TExzWd8ZSDRKyhTa"] = { address: "הנגב 11, תל אביב יפו" };
    // eventsLocation["-LK1T6MO9z7E4hTfMCs1"] = { address: "Montefiore 15, תל אביב יפו" };
    // eventsLocation["-LK1SuJ8tYNRgqThseM3"] = { address: "דרמה בר, נחלת בנימין, תל אביב יפו" };
    // eventsLocation["-LJwMktzWd8ZSDRKyhTa"] = { address: "Lilienblum 28, תל אביב יפו" };
    // eventsLocation["-LJwM94G9z7E4hTfMCs1"] = { address: "חוף גורדון, תל אביב יפו" };
    // eventsLocation["-LJwLxkAtYNRgqThseM3"] = { address: "מזאה 9, תל אביב יפו" };
    // eventsLocation["-LJwLVu4o-OW6oRVGI9F"] = { address: "Yigal Alon Street 98, Tel Aviv-Yafo" };
    // eventsLocation["-LJwLKWCi-rcoTRnITeQ"] = { address: "HaArbaa Street 32, תל אביב יפו" };
    // eventsLocation["-LJwLANvt7Fx65QJTxB6"] = { address: "רוטשילד 60, תל אביב יפו" };
    // eventsLocation["-LJrsr25tYNRgqThseM3"] = { address: "Yigal Alon Street 98, Tel Aviv-Yafo" };
    // eventsLocation["-LJrsi3Io-OW6oRVGI9F"] = { address: "ספריית בית אריאלה, שדרות שאול המלך, תל אביב יפו" };
    // eventsLocation["-LJihqFQ2U_g8-swBe5w"] = { address: "אוניברסיטת תל אביב, תל אביב יפו" };
    // eventsLocation["-LJigamzLQ9On1pzZQN4"] = { address: "HaPelech Street 7, תל אביב יפו" };
    // eventsLocation["-LJigSgSYevbnSa3lnGh"] = { address: "Kiryat Atidim 8, הברזל, תל אביב יפו" };
    // eventsLocation["-LJigJK3Wd8ZSDRKyhTa"] = { address: "dizzy frishdon" };
    // eventsLocation["-LJigBYY9z7E4hTfMCs1"] = { address: "דרמה בר, נחלת בנימין, תל אביב יפו" };
    // eventsLocation["-LKX0guHpjjb9pVlBBPg"] = { address: "Ahuzat Bayit 2, Tel Aviv-Yafo" };
    // eventsLocation["-LKX0TWIcIJxQCV-FrtS"] = { address: "Rothschild Boulevard 31, תל אביב יפו" };
    // eventsLocation["-LKX0270UQpNd9UgytIW"] = { address: "30 Ibn Gabirol Tel Aviv" };
    // eventsLocation["-LKX-uRCCJ2XHcZUwDVR"] = { address: "Yigal Alon Street 98, Tel Aviv-Yafo" };
    // eventsLocation["-LKX-hNfiqXwfj4r3WTd"] = { address: "30 Ibn Gabirol Tel Aviv" };
    // eventsLocation["-LKWzOvxuiBG0kxxKGlG"] = { address: "Kiryat Atidim 8, הברזל, תל אביב יפו" };
    // eventsLocation["-LKGnmyHtipi16bhBXuR"] = { address: "Yigal Alon Street 94, Tel Aviv-Yafo" };
    // eventsLocation["-LKGnbKNbOirJb1vCWOm"] = { address: "Mitcham Hatachana, Tel Aviv" };
    // eventsLocation["-LKGnPpBqwbV12ooyTKe"] = { address: "Rothschild 104 Tel Aviv" };
    // eventsLocation["-LKGmuZ0k27kws0_qLFn"] = { address: "Nahalat Binyamin 52 Tel Aviv" };
    // eventsLocation["-LKGm_DN4HL4kdNkKf-M"] = { address: "Rothschild 1 Tel Aviv" };
    // eventsLocation["-LKGlq27z_Ubb0k9XnRt"] = { address: "Dizengoff St 200, Tel Aviv-Yafo" };
    // eventsLocation["-LKGleVG2uNnS1B0nIPd"] = { address: "Ben Yehuda 32, Tel Aviv" };

    //eventsLocation[""] = { address: "" };
    return eventsLocation;
}