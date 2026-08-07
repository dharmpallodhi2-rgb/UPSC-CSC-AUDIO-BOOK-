const PODCAST_LIST = [
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
        image: "file_00000000a3b48211ae12fa2946dcbd7d.png", 
        audioUrl: "GDP_ka_ganit_compressed.m4a", 
        isPremium: false 
    },
    { 
        id: 1, 
        category: "Geography", 
        title: "एल नीनो और ला नीना का खेल", 
        desc: "एल नीनो-ला नीना की क्रियावली और भारत पर प्रभाव।",
        plays: "3.4K", 
        date: "12 Jun 2026", 
        episode: "Episode 01", 
        duration: "35:20", 
        image: "file_00000000123481fa8d6b66edbf7d2bd.png", 
        audioUrl: "El_Nino_La_Nina_compressed.m4a", 
        isPremium: false 
    },
    { 
        id: 2, 
        category: "Geography", 
        title: "भारत का आकार, स्थिति, समय और पड़ोस", 
        desc: "Bharat ki geographical स्थिति, time zones और पड़ोसी देशों का संक्षिप्त परिचय।",
        plays: "2.1K", 
        date: "18 Jun 2026", 
        episode: "Episode 02", 
        duration: "40:05", 
        image: "file_00000000234582ab8d6b66edbf7d2bd.png", 
        audioUrl: "Bharat_ka_akar_compressed.m4a", 
        isPremium: false 
    },
    { 
        id: 3, 
        category: "Geography", 
        title: "पृथ्वी का इंजन: प्लेट विवर्तनिकी", 
        desc: "प्लेट टैक्टोनिक्स के सिद्धांत और भौगोलिक प्रभाव।",
        plays: "980", 
        date: "24 Jun 2026", 
        episode: "Episode 03", 
        duration: "29:10", 
        image: "file_00000000345683cd8d6b66edbf7d2bd.png", 
        audioUrl: "Plate_Tectonics_compressed.m4a", 
        isPremium: false 
    },
    { 
        id: 4, 
        category: "Economy", 
        title: "पैसे का सफ़र: बैंकिंग, RBI और डिजिटल रुपया", 
        desc: "बैंकिंग सिस्टम, RBI की भूमिका और डिजिटल रुपया क्या है—सरल भाषा में।",
        plays: "1.5K", 
        date: "02 Jul 2026", 
        episode: "Episode 04", 
        duration: "42:00", 
        image: "file_00000000456784ef8d6b66edbf7d2bd.png", 
        audioUrl: "Banking_RBI_DigitalRupee_compressed.m4a", 
        isPremium: false 
    },
    { 
        id: 5, 
        category: "Polity", 
        title: "भारतीय संविधान के छह मौलिक अधिकार", 
        desc: "मौलिक अधिकारों का महत्व और UPSC के लिए उपयोगी बिंदु।",
        plays: "2.8K", 
        date: "15 Jul 2026", 
        episode: "Episode 05", 
        duration: "33:45", 
        image: "file_00000000567885gh8d6b66edbf7d2bd.png", 
        audioUrl: "Fundamental_Rights_compressed.m4a", 
        isPremium: false 
    }
];

// Expose to global scope so index.html script can use it
window.PODCAST_LIST = PODCAST_LIST;
