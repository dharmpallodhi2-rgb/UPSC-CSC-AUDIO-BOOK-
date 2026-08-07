// UPSC Level Geography Quiz - 50 Questions with Statement-based MCQ Format
const GEOGRAPHY_QUIZ = {
    id: 'geography',
    title: 'Geography - UPSC CSE Level',
    description: 'Master Indian & World Geography concepts for UPSC Exam',
    totalQuestions: 50,
    passingScore: 60,
    language: 'hi',
    
    questions: [
        {
            id: 1,
            question: "भारत की सबसे लंबी नदी कौन सी है?",
            statements: [
                { text: "गंगा नदी", isCorrect: true },
                { text: "ब्रह्मपुत्र नदी", isCorrect: false },
                { text: "यमुना नदी", isCorrect: false },
                { text: "सिंधु नदी", isCorrect: false }
            ],
            explanation: "गंगा नदी 2,525 किमी की लंबाई के साथ भारत की सबसे लंबी नदी है। यह हिमालय से निकलकर बंगाल की खाड़ी में गिरती है।"
        },
        {
            id: 2,
            question: "भारत का सबसे ऊंचा पर्वत शिखर कौन सा है?",
            statements: [
                { text: "कंचनजंगा", isCorrect: false },
                { text: "मकालू", isCorrect: false },
                { text: "माउंट एवरेस्ट", isCorrect: true },
                { text: "धौलागिरी", isCorrect: false }
            ],
            explanation: "माउंट एवरेस्ट 8,849 मीटर की ऊंचाई के साथ विश्व का सबसे ऊंचा पर्वत है और यह भारत-नेपाल सीमा पर स्थित है।"
        },
        {
            id: 3,
            question: "भारत का सबसे बड़ा रेगिस्तान कौन सा है?",
            statements: [
                { text: "राजस्थान का रेगिस्तान (थार)", isCorrect: true },
                { text: "गोबी रेगिस्तान", isCorrect: false },
                { text: "कालाहारी रेगिस्तान", isCorrect: false },
                { text: "लूट रेगिस्तान", isCorrect: false }
            ],
            explanation: "थार रेगिस्तान भारत का सबसे बड़ा रेगिस्तान है जो मुख्यतः राजस्थान में फैला हुआ है। इसका कुल क्षेत्रफल लगभग 2,32,100 वर्ग किमी है।"
        },
        {
            id: 4,
            question: "पश्चिमी घाट पर्वतमाला किन राज्यों से होकर गुजरती है?",
            statements: [
                { text: "महाराष्ट्र, कर्नाटक और तमिलनाडु", isCorrect: false },
                { text: "गुजरात, महाराष्ट्र, गोवा, कर्नाटक, केरल", isCorrect: true },
                { text: "केवल कर्नाटक और केरल", isCorrect: false },
                { text: "राजस्थान, गुजरात और महाराष्ट्र", isCorrect: false }
            ],
            explanation: "पश्चिमी घाट गुजरात से शुरू होकर महाराष्ट्र, गोवा, कर्नाटक और केरल से होकर गुजरते हुए 1,600 किमी तक फैली हुई है।"
        },
        {
            id: 5,
            question: "भारत की सबसे बड़ी झील कौन सी है?",
            statements: [
                { text: "चिल्का झील", isCorrect: true },
                { text: "वुलर झील", isCorrect: false },
                { text: "सांभर झील", isCorrect: false },
                { text: "लोकतक झील", isCorrect: false }
            ],
            explanation: "चिल्का झील ओडिशा में स्थित भारत की सबसे बड़ी लैगून झील है। इसका क्षेत्रफल लगभग 1,165 वर्ग किमी है।"
        },
        {
            id: 6,
            question: "पूर्वी घाट और पश्चिमी घाट की संयोजन बिंदु कहां है?",
            statements: [
                { text: "नीलगिरि", isCorrect: true },
                { text: "पालघाट", isCorrect: false },
                { text: "कोडैकनाल", isCorrect: false },
                { text: "ऊटी", isCorrect: false }
            ],
            explanation: "नीलगिरि पहाड़ियां पश्चिमी और पूर्वी घाटों के मिलन बिंदु पर स्थित हैं और तमिलनाडु में हैं।"
        },
        {
            id: 7,
            question: "विश्व की सबसे बड़ी डेल्टा कौन सी है?",
            statements: [
                { text: "नील डेल्टा", isCorrect: false },
                { text: "गंगा-ब्रह्मपुत्र डेल्टा (सुंदरबन)", isCorrect: true },
                { text: "अमेजन डेल्टा", isCorrect: false },
                { text: "मिसिसिपी डेल्टा", isCorrect: false }
            ],
            explanation: "सुंदरबन डेल्टा, जो गंगा और ब्रह्मपुत्र नदियों द्वारा निर्मित है, विश्व का सबसे बड़ा डेल्टा है।"
        },
        {
            id: 8,
            question: "भारत की राजधानी दिल्ली किस नदी के किनारे स्थित है?",
            statements: [
                { text: "यमुना", isCorrect: true },
                { text: "गंगा", isCorrect: false },
                { text: "सतलुज", isCorrect: false },
                { text: "हिंडन", isCorrect: false }
            ],
            explanation: "दिल्ली यमुना नदी के किनारे स्थित है, जो गंगा की एक प्रमुख सहायक नदी है।"
        },
        {
            id: 9,
            question: "कोलकाता किस नदी पर स्थित है?",
            statements: [
                { text: "हूगली", isCorrect: true },
                { text: "ब्रह्मपुत्र", isCorrect: false },
                { text: "गंगा", isCorrect: false },
                { text: "दामोदर", isCorrect: false }
            ],
            explanation: "कोलकाता हूगली नदी के किनारे स्थित है, जो गंगा की एक मुख्य शाखा है।"
        },
        {
            id: 10,
            question: "भारत की सबसे दक्षिणतम बिंदु कौन सी है?",
            statements: [
                { text: "इंदिरा पॉइंट", isCorrect: true },
                { text: "कन्याकुमारी", isCorrect: false },
                { text: "रामेश्वरम", isCorrect: false },
                { text: "त्रिवेंद्रम", isCorrect: false }
            ],
            explanation: "इंदिरा पॉइंट अंडमान और निकोबार द्वीप समूह में स्थित है और भारत की सबसे दक्षिणतम बिंदु है।"
        },
        {
            id: 11,
            question: "भारत की सबसे पश्चिमी बिंदु कौन सी है?",
            statements: [
                { text: "गुहार मोती", isCorrect: true },
                { text: "खिमर बिंदु", isCorrect: false },
                { text: "परेल बिंदु", isCorrect: false },
                { text: "पोराबंदर", isCorrect: false }
            ],
            explanation: "गुहार मोती गुजरात के कच्छ जिले में स्थित है और भारत की सबसे पश्चिमी बिंदु है।"
        },
        {
            id: 12,
            question: "भारत की सबसे पूर्वी बिंदु कौन सी है?",
            statements: [
                { text: "किबिथू", isCorrect: true },
                { text: "अरुणाचल प्रदेश", isCorrect: false },
                { text: "मणिपुर", isCorrect: false },
                { text: "मिजोरम", isCorrect: false }
            ],
            explanation: "किबिथू अरुणाचल प्रदेश में स्थित है और भारत की सबसे पूर्वी बिंदु है।"
        },
        {
            id: 13,
            question: "भारत की सबसे उत्तरी बिंदु कौन सी है?",
            statements: [
                { text: "इंदिरा कोल", isCorrect: true },
                { text: "नुब्रा", isCorrect: false },
                { text: "लेह", isCorrect: false },
                { text: "कश्मीर", isCorrect: false }
            ],
            explanation: "इंदिरा कोल जम्मू और कश्मीर के लद्दाख क्षेत्र में स्थित है और भारत की सबसे उत्तरी बिंदु है।"
        },
        {
            id: 14,
            question: "भारत की राजस्थान सीमा की लंबाई कितनी है?",
            statements: [
                { text: "1,038 किमी", isCorrect: true },
                { text: "890 किमी", isCorrect: false },
                { text: "1,200 किमी", isCorrect: false },
                { text: "750 किमी", isCorrect: false }
            ],
            explanation: "भारत-पाकिस्तान सीमा राजस्थान से होकर लगभग 1,038 किमी तक जाती है।"
        },
        {
            id: 15,
            question: "भारत की कुल तटीय लंबाई कितनी है?",
            statements: [
                { text: "7,516 किमी", isCorrect: true },
                { text: "6,500 किमी", isCorrect: false },
                { text: "8,000 किमी", isCorrect: false },
                { text: "7,000 किमी", isCorrect: false }
            ],
            explanation: "भारत की कुल तटीय लंबाई द्वीपों सहित 7,516 किमी है (प्रायद्वीपीय भूभाग के लिए 6,100 किमी)।"
        },
        {
            id: 16,
            question: "दक्कन पठार किन राज्यों में फैला है?",
            statements: [
                { text: "महाराष्ट्र, कर्नाटक, तेलंगाना और तमिलनाडु", isCorrect: true },
                { text: "केवल महाराष्ट्र और कर्नाटक", isCorrect: false },
                { text: "राजस्थान और मध्य प्रदेश", isCorrect: false },
                { text: "आंध्र प्रदेश और ओडिशा", isCorrect: false }
            ],
            explanation: "दक्कन पठार भारत के दक्षिणी भाग में विंध्य और सतपुड़ा श्रेणियों के दक्षिण में स्थित है।"
        },
        {
            id: 17,
            question: "हिमालय की सबसे ऊंची चोटी भारत में कौन सी है?",
            statements: [
                { text: "कंचनजंगा", isCorrect: true },
                { text: "मकालू", isCorrect: false },
                { text: "अन्नपूर्णा", isCorrect: false },
                { text: "धौलागिरी", isCorrect: false }
            ],
            explanation: "कंचनजंगा (8,586 मीटर) हिमालय की सबसे ऊंची चोटी है जो भारत के क्षेत्र में है, सिक्किम में स्थित है।"
        },
        {
            id: 18,
            question: "मॉनसून की उत्पत्ति कहां से होती है?",
            statements: [
                { text: "हिंद महासागर और अरब सागर", isCorrect: true },
                { text: "बंगाल की खाड़ी", isCorrect: false },
                { text: "प्रशांत महासागर", isCorrect: false },
                { text: "अटलांटिक महासागर", isCorrect: false }
            ],
            explanation: "भारत में दक्षिण-पश्चिम मॉनसून हिंद महासागर और अरब सागर से उत्पन्न होता है।"
        },
        {
            id: 19,
            question: "भारत में मॉनसून किस महीने में आता है?",
            statements: [
                { text: "जून से सितंबर", isCorrect: true },
                { text: "मई से अगस्त", isCorrect: false },
                { text: "जुलाई से अक्टूबर", isCorrect: false },
                { text: "अप्रैल से सितंबर", isCorrect: false }
            ],
            explanation: "दक्षिण-पश्चिम मॉनसून भारत में जून से सितंबर तक सामान्यतः होता है।"
        },
        {
            id: 20,
            question: "भारत में सर्वाधिक वर्षा वाला स्थान कौन सा है?",
            statements: [
                { text: "मॉसिनराम, मेघालय", isCorrect: true },
                { text: "चेरापूंजी", isCorrect: false },
                { text: "कोलकाता", isCorrect: false },
                { text: "मुंबई", isCorrect: false }
            ],
            explanation: "मॉसिनराम मेघालय में विश्व के सबसे वर्षा वाले स्थानों में से एक है, जहां औसत वार्षिक वर्षा 11,873 मिमी है।"
        },
        {
            id: 21,
            question: "त्रॉपिक ऑफ कैंसर (कर्क रेखा) भारत के किन राज्यों से होकर गुजरती है?",
            statements: [
                { text: "गुजरात, राजस्थान, मध्य प्रदेश, छत्तीसगढ़, झारखंड और त्रिपुरा", isCorrect: true },
                { text: "केवल उत्तर प्रदेश और बिहार", isCorrect: false },
                { text: "महाराष्ट्र और कर्नाटक", isCorrect: false },
                { text: "पंजाब और हरियाणा", isCorrect: false }
            ],
            explanation: "कर्क रेखा (23.5° N) गुजरात से शुरू होकर 8 राज्यों से होकर गुजरती है।"
        },
        {
            id: 22,
            question: "भारत में सबसे अधिक वन क्षेत्र किस राज्य में है?",
            statements: [
                { text: "मध्य प्रदेश", isCorrect: true },
                { text: "ओडिशा", isCorrect: false },
                { text: "अरुणाचल प्रदेश", isCorrect: false },
                { text: "महाराष्ट्र", isCorrect: false }
            ],
            explanation: "मध्य प्रदेश के पास भारत का सबसे बड़ा वन क्षेत्र है, जो कुल राज्य क्षेत्र का लगभग 30% है।"
        },
        {
            id: 23,
            question: "पंजाब का अर्थ क्या है?",
            statements: [
                { text: "पांच नदियों की भूमि", isCorrect: true },
                { text: "पहाड़ों की भूमि", isCorrect: false },
                { text: "पूर्वी क्षेत्र", isCorrect: false },
                { text: "अनाज की भूमि", isCorrect: false }
            ],
            explanation: "पंजाब शब्द फारसी से आया है जिसका अर्थ 'पांच नदियों की भूमि' है - ये नदियां हैं सतलुज, व्यास, राव, चिनाब और झेलम।"
        },
        {
            id: 24,
            question: "भारत का कौन सा राज्य सबसे बड़ा है (क्षेत्रफल में)?",
            statements: [
                { text: "राजस्थान", isCorrect: true },
                { text: "मध्य प्रदेश", isCorrect: false },
                { text: "महाराष्ट्र", isCorrect: false },
                { text: "उत्तर प्रदेश", isCorrect: false }
            ],
            explanation: "राजस्थान 3,42,239 वर्ग किमी क्षेत्रफल के साथ भारत का सबसे बड़ा राज्य है।"
        },
        {
            id: 25,
            question: "भारत का कौन सा राज्य सबसे अधिक जनसंख्या वाला है?",
            statements: [
                { text: "उत्तर प्रदेश", isCorrect: true },
                { text: "महाराष्ट्र", isCorrect: false },
                { text: "बिहार", isCorrect: false },
                { text: "राजस्थान", isCorrect: false }
            ],
            explanation: "उत्तर प्रदेश भारत का सबसे अधिक आबादी वाला राज्य है, जहां लगभग 23.3 करोड़ लोग रहते हैं।"
        },
        {
            id: 26,
            question: "विश्व की सबसे ऊंची बिल्डिंग कहां स्थित है?",
            statements: [
                { text: "दुबई, संयुक्त अरब अमीरात", isCorrect: true },
                { text: "न्यूयॉर्क, USA", isCorrect: false },
                { text: "शंघाई, चीन", isCorrect: false },
                { text: "टोक्यो, जापान", isCorrect: false }
            ],
            explanation: "बुर्ज खलीफा दुबई में स्थित है और इसकी ऊंचाई 828 मीटर है, जो विश्व की सबसे ऊंची बिल्डिंग है।"
        },
        {
            id: 27,
            question: "अमेजन वर्षावन किन देशों में फैला है?",
            statements: [
                { text: "मुख्यतः ब्राजील, पेरू और कोलंबिया", isCorrect: true },
                { text: "केवल ब्राजील", isCorrect: false },
                { text: "ब्राजील और वेनेजुएला", isCorrect: false },
                { text: "सभी दक्षिण अमेरिकी देशों में", isCorrect: false }
            ],
            explanation: "अमेजन वर्षावन 9 देशों में फैला है, लेकिन मुख्यतः ब्राजील, पेरू और कोलंबिया में।"
        },
        {
            id: 28,
            question: "विश्व की सबसे लंबी नदी कौन सी है?",
            statements: [
                { text: "नील नदी, अफ्रीका", isCorrect: true },
                { text: "अमेजन नदी, दक्षिण अमेरिका", isCorrect: false },
                { text: "यांग्त्जी नदी, चीन", isCorrect: false },
                { text: "मिसिसिपी नदी, USA", isCorrect: false }
            ],
            explanation: "नील नदी अफ्रीका में 6,650 किमी की लंबाई के साथ विश्व की सबसे लंबी नदी है।"
        },
        {
            id: 29,
            question: "विश्व का सबसे ऊंचा पर्वत शिखर कौन सा है?",
            statements: [
                { text: "माउंट एवरेस्ट, नेपाल-चीन", isCorrect: true },
                { text: "के2, पाकिस्तान", isCorrect: false },
                { text: "कंचनजंगा, भारत", isCorrect: false },
                { text: "लहोत्से, नेपाल", isCorrect: false }
            ],
            explanation: "माउंट एवरेस्ट 8,849 मीटर की ऊंचाई के साथ विश्व का सबसे ऊंचा पर्वत है।"
        },
        {
            id: 30,
            question: "विश्व का सबसे गहरा महासागर क्षेत्र कौन सा है?",
            statements: [
                { text: "मारियाना ट्रेंच, प्रशांत महासागर", isCorrect: true },
                { text: "कुराइल-कमचटका ट्रेंच", isCorrect: false },
                { text: "टोंगा ट्रेंच", isCorrect: false },
                { text: "जावा ट्रेंच", isCorrect: false }
            ],
            explanation: "मारियाना ट्रेंच प्रशांत महासागर में 11,034 मीटर की गहराई के साथ सबसे गहरा महासागरीय क्षेत्र है।"
        },
        {
            id: 31,
            question: "भारत में कितने यूनेस्को विश्व धरोहर स्थल हैं?",
            statements: [
                { text: "52", isCorrect: true },
                { text: "42", isCorrect: false },
                { text: "62", isCorrect: false },
                { text: "45", isCorrect: false }
            ],
            explanation: "भारत में 52 यूनेस्को विश्व धरोहर स्थल हैं, जिनमें ताजमहल, अजंता-एलोरा गुफाएं आदि शामिल हैं।"
        },
        {
            id: 32,
            question: "भारत के किस राज्य में सबसे अधिक यूनेस्को विश्व धरोहर स्थल हैं?",
            statements: [
                { text: "मध्य प्रदेश", isCorrect: true },
                { text: "दिल्ली", isCorrect: false },
                { text: "महाराष्ट्र", isCorrect: false },
                { text: "राजस्थान", isCorrect: false }
            ],
            explanation: "मध्य प्रदेश के पास भारत में सबसे अधिक यूनेस्को विश्व धरोहर स्थल हैं।"
        },
        {
            id: 33,
            question: "भारत में कितने संघ शासित प्रदेश हैं?",
            statements: [
                { text: "8", isCorrect: true },
                { text: "7", isCorrect: false },
                { text: "9", isCorrect: false },
                { text: "6", isCorrect: false }
            ],
            explanation: "भारत में वर्तमान में 8 संघ शासित प्रदेश हैं: दिल्ली, पुडुचेरी, लद्दाख, जम्मू और कश्मीर, अंडमान और निकोबार, दादरा और नगर हवेली, लक्षद्वीप, और चंडीगढ़।"
        },
        {
            id: 34,
            question: "भारत में कितने राज्य हैं?",
            statements: [
                { text: "28", isCorrect: true },
                { text: "29", isCorrect: false },
                { text: "27", isCorrect: false },
                { text: "30", isCorrect: false }
            ],
            explanation: "भारत में 28 राज्य हैं। तेलंगाना 2014 में 29वां राज्य बना था, लेकिन 2019 में लद्दाख को अलग किया गया।"
        },
        {
            id: 35,
            question: "सतपुड़ा पर्वतमाला किस दिशा में स्थित है?",
            statements: [
                { text: "विंध्य श्रेणी के दक्षिण में", isCorrect: true },
                { text: "विंध्य श्रेणी के उत्तर में", isCorrect: false },
                { text: "पश्चिमी घाट के पास", isCorrect: false },
                { text: "पूर्वी घाट के पास", isCorrect: false }
            ],
            explanation: "सतपुड़ा श्रेणी विंध्य पर्वतमाला के दक्षिण में मध्य भारत में स्थित है।"
        },
        {
            id: 36,
            question: "भारत में कौन सा राज्य 'गोल्ड स्टेट' के नाम से जाना जाता है?",
            statements: [
                { text: "कर्नाटक", isCorrect: true },
                { text: "ओडिशा", isCorrect: false },
                { text: "राजस्थान", isCorrect: false },
                { text: "महाराष्ट्र", isCorrect: false }
            ],
            explanation: "कर्नाटक को 'गोल्ड स्टेट' या 'सोने की भूमि' के रूप में जाना जाता है क्योंकि यह भारत का प्रमुख सोना उत्पादक राज्य है।"
        },
        {
            id: 37,
            question: "भारत में सबसे बड़ा द्वीप कौन सा है?",
            statements: [
                { text: "अंडमान द्वीप", isCorrect: true },
                { text: "निकोबार द्वीप", isCorrect: false },
                { text: "श्रीलंका", isCorrect: false },
                { text: "लक्षद्वीप", isCorrect: false }
            ],
            explanation: "अंडमान द्वीप भारत का सबसे बड़ा द्वीप है। अंडमान और निकोबार द्वीप समूह में कुल 572 द्वीप हैं।"
        },
        {
            id: 38,
            question: "भारत के किस राज्य में प्रवाल भित्तियां (कोरल रीफ्स) मिलती हैं?",
            statements: [
                { text: "महाराष्ट्र, कर्नाटक, केरल और गुजरात", isCorrect: true },
                { text: "केवल महाराष्ट्र", isCorrect: false },
                { text: "केवल पश्चिमी तटीय राज्य", isCorrect: false },
                { text: "पूर्वी तटीय राज्य", isCorrect: false }
            ],
            explanation: "भारत की प्रवाल भित्तियां मुख्यतः महाराष्ट्र, कर्नाटक, केरल, गुजरात और द्वीप समूहों में पाई जाती हैं।"
        },
        {
            id: 39,
            question: "भारत की कौन सी नदी 'बाढ़ का कहर' के लिए प्रसिद्ध है?",
            statements: [
                { text: "कोसी नदी", isCorrect: true },
                { text: "गंगा नदी", isCorrect: false },
                { text: "ब्रह्मपुत्र नदी", isCorrect: false },
                { text: "महानदी", isCorrect: false }
            ],
            explanation: "कोसी नदी, जो बिहार से होकर बहती है, अपनी बार-बार बाढ़ के लिए प्रसिद्ध है और इसे 'बिहार का शोक' भी कहा जाता है।"
        },
        {
            id: 40,
            question: "लाल मिट्टी भारत में मुख्यतः किन राज्यों में पाई जाती है?",
            statements: [
                { text: "दक्षिण भारत - तमिलनाडु, कर्नाटक, तेलंगाना", isCorrect: true },
                { text: "पंजाब और हरियाणा", isCorrect: false },
                { text: "उत्तर प्रदेश", isCorrect: false },
                { text: "गुजरात और राजस्थान", isCorrect: false }
            ],
            explanation: "लाल मिट्टी मुख्यतः दक्षिण भारत में तमिलनाडु, कर्नाटक, तेलंगाना और आंध्र प्रदेश में पाई जाती है।"
        },
        {
            id: 41,
            question: "जलोढ़ मिट्टी भारत में सर्वाधिक कहां पाई जाती है?",
            statements: [
                { text: "गंगा और ब्रह्मपुत्र के मैदानों में", isCorrect: true },
                { text: "दक्कन पठार में", isCorrect: false },
                { text: "पश्चिमी घाट में", isCorrect: false },
                { text: "राजस्थान में", isCorrect: false }
            ],
            explanation: "जलोढ़ मिट्टी गंगा और ब्रह्मपुत्र नदियों के मैदानों में भारत में सर्वाधिक पाई जाती है।"
        },
        {
            id: 42,
            question: "भारत का कौन सा शहर 'सिटी ऑफ पैलेसेज' के नाम से जाना जाता है?",
            statements: [
                { text: "बेंगलुरु", isCorrect: false },
                { text: "मैसूर", isCorrect: true },
                { text: "हैदराबाद", isCorrect: false },
                { text: "कोचीन", isCorrect: false }
            ],
            explanation: "मैसूर को 'सिटी ऑफ पैलेसेज' के नाम से जाना जाता है क्योंकि यहां कई राजकीय महल हैं, विशेषकर मैसूर पैलेस।"
        },
        {
            id: 43,
            question: "भारत का सबसे बड़ा बांध कौन सा है?",
            statements: [
                { text: "टेहरी बांध", isCorrect: true },
                { text: "भाखड़ा नांगल बांध", isCorrect: false },
                { text: "नर्मदा बांध", isCorrect: false },
                { text: "दामोदर बांध", isCorrect: false }
            ],
            explanation: "टेहरी बांध उत्तराखंड में 260.5 मीटर की ऊंचाई के साथ भारत का सबसे बड़ा बांध है।"
        },
        {
            id: 44,
            question: "नर्मदा नदी किन राज्यों से होकर बहती है?",
            statements: [
                { text: "मध्य प्रदेश, महाराष्ट्र और गुजरात", isCorrect: true },
                { text: "केवल मध्य प्रदेश", isCorrect: false },
                { text: "मध्य प्रदेश और राजस्थान", isCorrect: false },
                { text: "मध्य प्रदेश, राजस्थान और गुजरात", isCorrect: false }
            ],
            explanation: "नर्मदा नदी मध्य प्रदेश, महाराष्ट्र और गुजरात से होकर 1,312 किमी लंबाई के साथ बहती है।"
        },
        {
            id: 45,
            question: "भारत में कितने जैव विविधता हॉटस्पॉट हैं?",
            statements: [
                { text: "4", isCorrect: true },
                { text: "3", isCorrect: false },
                { text: "5", isCorrect: false },
                { text: "6", isCorrect: false }
            ],
            explanation: "भारत में 4 जैव विविधता हॉटस्पॉट हैं: पश्चिमी घाट, पूर्वोत्तर भारत, हिमालय और सुंदरबन।"
        },
        {
            id: 46,
            question: "भारत का कौन सा राज्य 'धान का कटोरा' के नाम से जाना जाता है?",
            statements: [
                { text: "पंजाब", isCorrect: false },
                { text: "छत्तीसगढ़", isCorrect: true },
                { text: "बिहार", isCorrect: false },
                { text: "उत्तर प्रदेश", isCorrect: false }
            ],
            explanation: "छत्तीसगढ़ को 'धान का कटोरा' या 'राइस बाउल' के नाम से जाना जाता है क्योंकि यह देश का सबसे बड़ा चावल उत्पादक राज्य है।"
        },
        {
            id: 47,
            question: "भारत में कितने राष्ट्रीय उद्यान हैं?",
            statements: [
                { text: "104", isCorrect: true },
                { text: "100", isCorrect: false },
                { text: "110", isCorrect: false },
                { text: "95", isCorrect: false }
            ],
            explanation: "भारत में वर्तमान में 104 राष्ट्रीय उद्यान हैं, जो विभिन्न प्रकार की वनस्पति और जीवन-जंतुओं की सुरक्षा करते हैं।"
        },
        {
            id: 48,
            question: "भारत का सबसे बड़ा राष्ट्रीय उद्यान कौन सा है?",
            statements: [
                { text: "हेमिस राष्ट्रीय उद्यान, लद्दाख", isCorrect: true },
                { text: "गीर वन राष्ट्रीय उद्यान", isCorrect: false },
                { text: "कार्बेट राष्ट्रीय उद्यान", isCorrect: false },
                { text: "बांधवगढ़ राष्ट्रीय उद्यान", isCorrect: false }
            ],
            explanation: "हेमिस राष्ट्रीय उद्यान लद्दाख में 4,400 वर्ग किमी क्षेत्र के साथ भारत का सबसे बड़ा राष्ट्रीय उद्यान है।"
        },
        {
            id: 49,
            question: "भारत में सबसे अधिक जनसंख्या घनत्व वाला राज्य कौन सा है?",
            statements: [
                { text: "बिहार", isCorrect: true },
                { text: "बंगाल", isCorrect: false },
                { text: "उत्तर प्रदेश", isCorrect: false },
                { text: "दिल्ली", isCorrect: false }
            ],
            explanation: "बिहार का जनसंख्या घनत्व 1,102 व्यक्ति प्रति वर्ग किमी है, जो भारत में सर्वाधिक है (संघ शासित प्रदेशों को छोड़कर)।"
        },
        {
            id: 50,
            question: "भारत में सबसे कम जनसंख्या घनत्व वाला राज्य कौन सा है?",
            statements: [
                { text: "अरुणाचल प्रदेश", isCorrect: true },
                { text: "मेघालय", isCorrect: false },
                { text: "सिक्किम", isCorrect: false },
                { text: "नागालैंड", isCorrect: false }
            ],
            explanation: "अरुणाचल प्रदेश का जनसंख्या घनत्व लगभग 17 व्यक्ति प्रति वर्ग किमी है, जो भारत में सबसे कम है।"
        }
    ]
};
