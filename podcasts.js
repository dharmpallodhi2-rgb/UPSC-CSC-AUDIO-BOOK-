const PODCAST_LIST = [
    { 
        id: 8, 
        category: "History", 
        title: "सिंधु घाटी सभ्यता का रहस्य और पतन", 
        desc: "सिंधु घाटी सभ्यता की विशेषताएं, नगरीय नियोजन और उसके पतन के मुख्य कारणों का विश्लेषण।",
        plays: "1.9k", 
        date: "08 Aug 2026", 
        episode: "Episode 08", 
        duration: "Full Audio", 
        image: "file_00000000267882118f657cd0d3bb25cb.png", 
        audioUrl: "सिंधु_घाटी_सभ्यता_का_रहस्य_और_पतन_compressed.m4a", 
        isPremium: false 
    },
    { 
        id: 7, 
        category: "Ethics", 
        title: "एथिक्स केस स्टडी हल करने का तरीका", 
        desc: "यूपीएससी परीक्षा में एथिक्स केस स्टडी को सही तरीके से हल करने की संपूर्ण गाइड।",
        plays: "New", 
        date: "06 Aug 2026", 
        episode: "Episode 07", 
        duration: "Full Audio", 
        image: "file_00000000fd7481faac51cd57a3070f5c.png", 
        audioUrl: "एथिक्स_केस_स्टडी_हल_करने_का_तरीका_compressed.m4a", 
        isPremium: true 
    },
    { 
        id: 6, 
        category: "Economy", 
        title: "GDP का गणित और अर्थव्यवस्था की हकीकत", 
        desc: "GDP की गणना, सीमाएँ और इसका समाज- अर्थव्यवस्था पर क्या असर होता है।",
        plays: "1.2K", 
        date: "28 Jul 2026", 
        episode: "Episode 06", 
        duration: "48:12", 
        image: "file_000000005394820881e19440753f77bc.png", 
        audioUrl: "GDP_का_गणित_और_अर्थव्यवस्था_की_हकीकत_compressed.m4a", 
        isPremium: false 
    },
    { 
        id: 5, 
        category: "Geography", 
        title: "एल नीनो और ला नीना का खेल", 
        desc: "एल नीनो-ला नीना की क्रियावली और भारत पर प्रभाव।",
        plays: "3.4K", 
        date: "12 Jun 2026", 
        episode: "Episode 05", 
        duration: "35:20", 
        image: "IMG_20260801_215005_232.jpg", 
        audioUrl: "एल_नीनो_और_ला_नीना_का_खेल_compressed.m4a", 
        isPremium: false 
    },
    { 
        id: 4, 
        category: "Geography", 
        title: "पृथ्वी का इंजन: प्लेट विवर्तनिकी", 
        desc: "प्लेट टैक्टोनिक्स के सिद्धांत और भौगोलिक प्रभाव।",
        plays: "980", 
        date: "24 Jun 2026", 
        episode: "Episode 04", 
        duration: "29:10", 
        image: "file_00000000928c81fa83b7e8a0a2355421.png", 
        audioUrl: "पृथ्वी_का_इंजन_प्लेट_विवर्तनिकी_और_भू_आकृति_विज्ञान_compressed.m4a", 
        isPremium: false 
    },
    { 
        id: 3, 
        category: "Geography", 
        title: "भारत का आकार, स्थिति, समय और पड़ोस", 
        desc: "Bharat ki geographical स्थिति, time zones और पड़ोसी देशों का संक्षिप्त परिचय।",
        plays: "2.1K", 
        date: "18 Jun 2026", 
        episode: "Episode 03", 
        duration: "40:05", 
        image: "IMG_20260801_223530_539.jpg", 
        audioUrl: "भारत_का_आकार_स्थिति_समय_और_पड़ोस_compressed.m4a", 
        isPremium: false 
    },
    { 
        id: 2, 
        category: "Polity", 
        title: "भारतीय संविधान के छह मौलिक अधिकार", 
        desc: "मौलिक अधिकारों का महत्व और UPSC के लिए उपयोगी बिंदु।",
        plays: "2.8K", 
        date: "15 Jul 2026", 
        episode: "Episode 02", 
        duration: "33:45", 
        image: "file_0000000053888207920345384bbfc299.png", 
        audioUrl: "भारतीय_संविधान_के_छह_मौलिक_अधिकार_compressed.m4a", 
        isPremium: false 
    },
    { 
        id: 1, 
        category: "Economy", 
        title: "पैसे का सफ़र: बैंकिंग, RBI और डिजिटल रुपया", 
        desc: "बैंकिंग सिस्टम, RBI की भूमिका और डिजिटल रुपया क्या है—सरल भाषा में।",
        plays: "1.5K", 
        date: "02 Jul 2026", 
        episode: "Episode 01", 
        duration: "42:00", 
        image: "IMG_20260802_142802_943.jpg", 
        audioUrl: "पैसे_का_सफ़र_बैंकिंग_RBI_और_डिजिटल_रुपया.m4a", 
        isPremium: false 
    }
];

// Expose to global scope so index.html script can use it
window.PODCAST_LIST = PODCAST_LIST;
