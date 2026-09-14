const GEO_Q = [
['भारत का सबसे बड़ा नदी बेसिन कौन-सा है?',['गंगा','गोदावरी','कृष्णा','नर्मदा'],0],
['हिमालय की सबसे बाहरी श्रेणी कौन-सी है?',['हिमाद्रि','हिमाचल','शिवालिक','काराकोरम'],2],
['दक्कन का पठार मुख्यतः किस चट्टान से बना है?',['बेसाल्ट','चूना पत्थर','बलुआ पत्थर','संगमरमर'],0],
['वायुमंडल में सर्वाधिक मात्रा किस गैस की है?',['ऑक्सीजन','नाइट्रोजन','कार्बन डाइऑक्साइड','आर्गन'],1],
['ओजोन परत मुख्यतः किस मंडल में है?',['क्षोभमंडल','समतापमंडल','मध्यमंडल','बहिर्मंडल'],1],
['कोरिओलिस बल का मुख्य कारण क्या है?',['परिक्रमण','घूर्णन','गुरुत्वाकर्षण','सौर विकिरण'],1],
['उत्तरी गोलार्ध में चक्रवात किस दिशा में घूमता है?',['घड़ी की दिशा','घड़ी की विपरीत दिशा','उत्तर से दक्षिण','पूर्व से पश्चिम'],1],
['भूमध्य रेखा पर कोरिओलिस बल कैसा होता है?',['अधिकतम','न्यूनतम','शून्य','ध्रुवों जितना'],2],
['ज्वार-भाटा मुख्यतः किन पिंडों से प्रभावित है?',['सूर्य और चंद्रमा','मंगल और शुक्र','बृहस्पति और शनि','केवल सूर्य'],0],
['पृथ्वी की सूर्य के चारों ओर कक्षा कैसी है?',['वृत्ताकार','दीर्घवृत्ताकार','परवलयाकार','सीधी'],1],
['भारतीय मानक समय किस देशांतर पर आधारित है?',['75°E','82°30′E','90°E','68°E'],1],
['कर्क रेखा भारत के कितने राज्यों से गुजरती है?',['6','7','8','9'],2],
['भारत के मुख्य भूभाग का दक्षिणतम बिंदु कौन-सा है?',['इंदिरा प्वाइंट','कन्याकुमारी','मिनिकॉय','रामेश्वरम'],1],
['अंडमान और निकोबार को कौन-सा चैनल अलग करता है?',['8 डिग्री','9 डिग्री','10 डिग्री','11 डिग्री'],2],
['मौसिनराम किस राज्य में स्थित है?',['असम','मेघालय','मणिपुर','त्रिपुरा'],1],
['तमिलनाडु को शीत ऋतु में वर्षा मुख्यतः किससे मिलती है?',['दक्षिण-पश्चिम मानसून','उत्तर-पूर्व मानसून','पश्चिमी विक्षोभ','स्थानीय संवहन'],1],
['लू किस प्रकार की हवा है?',['ठंडी नम','गर्म शुष्क','ठंडी शुष्क','गर्म नम'],1],
['भाबर क्षेत्र की प्रमुख विशेषता क्या है?',['जलभराव','नदियों का भूमिगत हो जाना','दलदली वन','काली मिट्टी'],1],
['तराई क्षेत्र की प्रमुख विशेषता क्या है?',['अत्यधिक शुष्कता','दलदली और जलभराव','लावा मैदान','रेतीले टीले'],1],
['लेटराइट मिट्टी के निर्माण में कौन-सी प्रक्रिया प्रमुख है?',['कम निक्षालन','तीव्र निक्षालन','हिमानीकरण','लवणीकरण'],1],
['काली मिट्टी किस फसल के लिए विशेष रूप से उपयुक्त है?',['कपास','चाय','जूट','केसर'],0],
['जलोढ़ मिट्टी मुख्यतः कहाँ मिलती है?',['गंगा-ब्रह्मपुत्र मैदान','दक्कन पठार','अरावली','पश्चिमी घाट'],0],
['रेगिस्तानी मिट्टी में सामान्यतः क्या कम होता है?',['रेत','खनिज','जैविक पदार्थ','लवण'],2],
['नर्मदा नदी किस प्रकार की घाटी से बहती है?',['भ्रंश घाटी','हिमानी घाटी','कार्स्ट घाटी','डेल्टा घाटी'],0],
['ताप्ती नदी का सामान्य प्रवाह किस दिशा में है?',['पूर्व','पश्चिम','उत्तर','दक्षिण'],1],
['भारत का सबसे बड़ा प्रायद्वीपीय नदी बेसिन कौन-सा है?',['कृष्णा','गोदावरी','कावेरी','नर्मदा'],1],
['सुंदरबन किस प्रकार की वनस्पति के लिए प्रसिद्ध है?',['कांटेदार वन','मैंग्रोव','शंकुधारी वन','पर्णपाती वन'],1],
['प्रवाल भित्तियों के लिए कौन-सी दशा उपयुक्त है?',['ठंडा गहरा जल','गर्म उथला स्वच्छ जल','गंदला नदी जल','ध्रुवीय जल'],1],
['महासागरों का सबसे बड़ा महासागर कौन-सा है?',['अटलांटिक','प्रशांत','हिंद','आर्कटिक'],1],
['विश्व का सबसे बड़ा गर्म मरुस्थल कौन-सा है?',['गोबी','सहारा','कालाहारी','अटाकामा'],1],
['अटाकामा मरुस्थल की शुष्कता में कौन-सी धारा महत्वपूर्ण है?',['गल्फ स्ट्रीम','हम्बोल्ट','कुरोशियो','अगुलहास'],1],
['भूमध्यसागरीय जलवायु की प्रमुख विशेषता क्या है?',['गर्म ग्रीष्म और शुष्क, शीत ऋतु में वर्षा','पूरे वर्ष वर्षा','पूरे वर्ष हिमपात','गर्म और शुष्क पूरे वर्ष'],0],
['एल नीनो किस क्षेत्र के असामान्य गर्म होने से जुड़ा है?',['पूर्वी-मध्य उष्णकटिबंधीय प्रशांत','उत्तरी अटलांटिक','हिंद महासागर का पश्चिमी भाग','दक्षिणी अटलांटिक'],0],
['ला नीना में पूर्वी प्रशांत का सतही जल सामान्यतः कैसा होता है?',['अधिक गर्म','अधिक ठंडा','स्थिर','लवणरहित'],1],
['दक्षिण-पश्चिम मानसून के आगमन में कौन-सा कारक महत्वपूर्ण है?',['भूमि-समुद्र तापीय अंतर','केवल हिमपात','केवल ज्वार','केवल समुद्री लवणता'],0],
['पश्चिमी विक्षोभ भारत में मुख्यतः किस मौसम में वर्षा देता है?',['ग्रीष्म','शीत','मानसून','शरद'],1],
['मानसून ब्रेक का अर्थ क्या है?',['मानसून का स्थायी अंत','वर्षा गतिविधि में अस्थायी कमी','तूफान का बनना','समुद्र का गर्म होना'],1],
['जेट स्ट्रीम किसे प्रभावित कर सकती है?',['वायुमंडलीय परिसंचरण और मानसून','केवल ज्वार','केवल भूकंप','केवल मिट्टी'],0],
['समुद्र तल प्रसरण सिद्धांत किससे जुड़ा है?',['हैरी हेस','अल्फ्रेड वेगनर','न्यूटन','कोपरनिकस'],0],
['महाद्वीपीय विस्थापन सिद्धांत किसने दिया?',['हैरी हेस','अल्फ्रेड वेगनर','डार्विन','प्लेटो'],1],
['मध्य-महासागरीय कटक किस प्लेट सीमा पर बनते हैं?',['अभिसारी','अपसारी','रूपांतरण','स्थिर'],1],
['हिमालय का निर्माण मुख्यतः किस कारण हुआ?',['भारतीय और यूरेशियन प्लेटों का अभिसरण','अपसरण','ज्वारीय बल','हवा का अपरदन'],0],
['P-तरंगों की प्रमुख विशेषता क्या है?',['सबसे धीमी भूकंपीय तरंग','सबसे तेज भूकंपीय तरंग','केवल सतह पर चलती हैं','तरल में नहीं चलतीं'],1],
['S-तरंगें किस माध्यम से नहीं गुजर सकतीं?',['ठोस','द्रव','पृथ्वी की पर्पटी','चट्टान'],1],
['भूकंप की आधुनिक व्यापक मापनी कौन-सी है?',['मोमेंट मैग्नीट्यूड स्केल','ब्यूफोर्ट स्केल','सेल्सियस स्केल','फुजिता स्केल'],0],
['पृथ्वी की आंतरिक सबसे बाहरी ठोस परत कौन-सी है?',['क्रोड','मेंटल','भूपर्पटी','आंतरिक क्रोड'],2],
['पृथ्वी का सबसे बड़ा आंतरिक स्तर कौन-सा है?',['भूपर्पटी','मेंटल','आंतरिक क्रोड','बाह्य क्रोड'],1],
['अपक्षय का अर्थ क्या है?',['चट्टानों का अपने स्थान पर टूटना','नदी द्वारा परिवहन','हवा द्वारा निक्षेपण','समुद्र में अवसादन'],0],
['अपरदन का अर्थ क्या है?',['चट्टानों का केवल गर्म होना','अपक्षयित पदार्थ का हटना/परिवहन','भूकंप का उत्पन्न होना','बादल बनना'],1],
['डेल्टा का निर्माण मुख्यतः किस प्रक्रिया से होता है?',['निक्षेपण','ज्वालामुखिता','भूकंप','हिमानीकरण'],0],
['V-आकार की घाटियाँ सामान्यतः किससे बनती हैं?',['नदी अपरदन','हिमानी अपरदन','समुद्री निक्षेपण','हवा'],0],
['U-आकार की घाटियाँ सामान्यतः किससे संबंधित हैं?',['नदी','हिमानी','पवन','कार्स्ट'],1],
['बालू के टीले मुख्यतः किस प्रक्रिया से बनते हैं?',['पवन निक्षेपण','हिमानीकरण','ज्वालामुखिता','समुद्री अपक्षय'],0],
['कार्स्ट स्थलाकृति किस चट्टान से विशेष रूप से जुड़ी है?',['ग्रेनाइट','चूना पत्थर','बेसाल्ट','गनीस'],1],
['भू-जल का प्रमुख स्रोत क्या है?',['वर्षा का अंतःस्रवण','ज्वार','ज्वालामुखी','हिमालयी हवा'],0],
['जल चक्र में वाष्पीकरण के लिए ऊर्जा मुख्यतः कहाँ से आती है?',['सूर्य','चंद्रमा','पृथ्वी का क्रोड','ज्वार'],0],
['सापेक्ष आर्द्रता किससे संबंधित है?',['हवा में जलवाष्प की मात्रा और तापमान','केवल वायुदाब','केवल पवन वेग','केवल वर्षा'],0],
['वायुदाब ऊँचाई बढ़ने पर सामान्यतः क्या करता है?',['बढ़ता है','घटता है','स्थिर रहता है','दोगुना होता है'],1],
['समुद्र तल पर सामान्य वायुदाब लगभग कितना है?',['1013.25 hPa','500 hPa','2000 hPa','760 hPa'],0],
['बादल बनने की प्रमुख प्रक्रिया क्या है?',['संघनन','उर्ध्वपातन ही','निक्षेपण','अपक्षय'],0],
['क्यूम्यलोनिंबस बादल किससे जुड़े होते हैं?',['गरज-चमक वाले तूफान','स्वच्छ आकाश','केवल कोहरा','ध्रुवीय रात'],0],
['ओरोग्राफिक वर्षा किस कारण होती है?',['पर्वत से ऊपर उठती नम हवा','रेगिस्तानी गर्मी','ज्वार','भूकंप'],0],
['वर्षाछाया क्षेत्र सामान्यतः किस ओर बनता है?',['पवनाभिमुख ढाल','पवनविमुख ढाल','समुद्र के बीच','नदी के स्रोत पर'],1],
['भारत में मानसूनी वर्षा का सबसे महत्वपूर्ण स्रोत कौन-सा है?',['दक्षिण-पश्चिम मानसूनी हवाएँ','पश्चिमी विक्षोभ','ध्रुवीय हवाएँ','स्थानीय ज्वार'],0],
['अरावली पर्वतमाला मानसून के संदर्भ में कैसी स्थिति रखती है?',['दक्षिण-पश्चिम मानसून के समानांतर होने से प्रभाव सीमित','हमेशा भारी वर्षा कराती है','भारत की सबसे ऊँची है','समुद्र के भीतर है'],0],
['पश्चिमी घाट के पश्चिमी ढाल पर अधिक वर्षा का प्रमुख कारण क्या है?',['पर्वतीय अवरोध','महाद्वीपीयता','ध्रुवीय हवा','रेगिस्तानी प्रभाव'],0],
['मेघालय में भारी वर्षा का प्रमुख कारण क्या है?',['नम हवाओं का पर्वतीय उत्थान','हिमानीकरण','मरुस्थलीकरण','ठंडी समुद्री धारा'],0],
['भारत में सबसे लंबी तटरेखा वाला राज्य कौन-सा है?',['गुजरात','तमिलनाडु','केरल','ओडिशा'],0],
['भारत का सबसे बड़ा खारे पानी का लैगून कौन-सा है?',['चिलिका','वेम्बनाड','पुलिकट','लोकटक'],0],
['लोकटक झील किस राज्य में है?',['मणिपुर','मेघालय','असम','मिजोरम'],0],
['वेम्बनाड झील किस राज्य में है?',['केरल','गोवा','कर्नाटक','ओडिशा'],0],
['पुलिकट झील किन राज्यों की सीमा पर है?',['आंध्र प्रदेश और तमिलनाडु','केरल और कर्नाटक','ओडिशा और बंगाल','गुजरात और महाराष्ट्र'],0],
['सियाचिन ग्लेशियर किस पर्वत क्षेत्र में है?',['काराकोरम','अरावली','सतपुड़ा','नीलगिरि'],0],
['भारत की सबसे ऊँची चोटी जो पूरी तरह भारत में स्थित है, कौन-सी है?',['कंचनजंघा','नंदा देवी','अनामुडी','धौलागिरि'],1],
['नंदा देवी किस राज्य में है?',['उत्तराखंड','हिमाचल प्रदेश','सिक्किम','अरुणाचल प्रदेश'],0],
['नीलगिरि पहाड़ियाँ मुख्यतः किन राज्यों के संगम क्षेत्र में हैं?',['तमिलनाडु, केरल और कर्नाटक','गुजरात, राजस्थान और MP','बिहार, झारखंड और बंगाल','असम, नागालैंड और मणिपुर'],0],
['सतपुड़ा और विंध्य के बीच कौन-सी नदी बहती है?',['नर्मदा','गंगा','यमुना','कावेरी'],0],
['महानदी का डेल्टा मुख्यतः किस राज्य में है?',['ओडिशा','गुजरात','केरल','गोवा'],0],
['कावेरी नदी का उद्गम कहाँ है?',['ब्रह्मगिरि पहाड़ियाँ','अमरकंटक','यमुनोत्री','त्र्यंबकेश्वर'],0],
['गोदावरी का उद्गम किस क्षेत्र में है?',['त्र्यंबकेश्वर के पास','अमरकंटक','यमुनोत्री','महाबलेश्वर'],0],
['कृष्णा नदी का उद्गम कहाँ है?',['महाबलेश्वर क्षेत्र','नासिक','अमरकंटक','मानसरोवर'],0],
['ब्रह्मपुत्र भारत में किस नाम से प्रवेश करती है?',['सियांग/दिहांग','भागीरथी','अलकनंदा','कोसी'],0],
['गंगा की प्रमुख सहायक नदी यमुना का उद्गम कहाँ है?',['यमुनोत्री','गंगोत्री','अमरकंटक','मानसरोवर'],0],
['कोसी नदी को किस उपनाम से जाना जाता है?',['बिहार का शोक','बंगाल का शोक','दक्षिण की गंगा','रेगिस्तान की नदी'],0],
['दामोदर नदी को ऐतिहासिक रूप से किस नाम से जाना जाता है?',['बंगाल का शोक','बिहार का शोक','दक्षिण की गंगा','नीली नदी'],0],
['सुंदरबन डेल्टा किन नदियों की संयुक्त प्रणाली से बना है?',['गंगा-ब्रह्मपुत्र-मेघना','नर्मदा-ताप्ती','गोदावरी-कृष्णा','कावेरी-महानदी'],0],
['भारत में काली मिट्टी का व्यापक क्षेत्र किस पठार से जुड़ा है?',['दक्कन ट्रैप','छोटानागपुर','मालवा ही नहीं','मेघालय पठार'],0],
['लाल मिट्टी का लाल रंग मुख्यतः किस तत्व से जुड़ा है?',['लोहा','कैल्शियम','सोडियम','पोटैशियम'],0],
['पीटयुक्त मिट्टी में किसकी मात्रा अधिक हो सकती है?',['जैविक पदार्थ','रेत','लवण ही','चूना'],0],
['कृषि के लिए जलोढ़ मिट्टी का प्रमुख लाभ क्या है?',['उर्वरता','अत्यधिक अम्लता','कम पोषक तत्व','केवल रेतीली बनावट'],0],
['कपास की खेती के लिए कौन-सी मिट्टी प्रसिद्ध है?',['काली मिट्टी','लाल मिट्टी','लेटराइट','मरुस्थलीय'],0],
['चाय की खेती के लिए कैसी दशाएँ सामान्यतः अनुकूल हैं?',['आर्द्र जलवायु और अम्लीय मिट्टी','अत्यधिक शुष्कता','क्षारीय रेगिस्तान','ध्रुवीय जलवायु'],0],
['जूट की खेती के लिए कौन-सी दशाएँ अनुकूल हैं?',['गर्म आर्द्र जलवायु और जलोढ़ मिट्टी','शुष्क ठंडी जलवायु','रेगिस्तानी मिट्टी','हिमानी मिट्टी'],0],
['भारत में मसाला फसलों के लिए प्रसिद्ध क्षेत्र कौन-सा है?',['पश्चिमी घाट','थार','लद्दाख','गंगा का ऊपरी मैदान'],0],
['थार मरुस्थल मुख्यतः किस राज्य में है?',['राजस्थान','गुजरात','हरियाणा','पंजाब'],0],
['थार में वर्षा की मात्रा सामान्यतः किस दिशा में घटती है?',['पूर्व से पश्चिम','पश्चिम से पूर्व','दक्षिण से उत्तर ही','उत्तर से दक्षिण'],0],
['भारत का शीत मरुस्थल किस क्षेत्र में है?',['लद्दाख','राजस्थान','कच्छ','बुंदेलखंड'],0],
['कच्छ का रण किस प्रकार की भौगोलिक विशेषता है?',['लवणीय दलदली मैदान','हिमानी मैदान','ज्वालामुखी पठार','घना वर्षावन'],0],
['भारत में मानसून की वापसी सामान्यतः कहाँ से शुरू होती है?',['उत्तर-पश्चिम भारत','दक्षिण भारत','पूर्वोत्तर भारत','अंडमान'],0],
['अंतर-उष्णकटिबंधीय अभिसरण क्षेत्र का संक्षिप्त नाम क्या है?',['ITCZ','ENSO','IOD','NAO'],0],
['ENSO किससे संबंधित है?',['एल नीनो-दक्षिणी दोलन','केवल ज्वार','हिमनद','चक्रवात की आँख'],0],
['हिंद महासागर द्विध्रुव का संक्षिप्त नाम क्या है?',['IOD','ITCZ','ENSO','NAO'],0],
['पश्चिमी तट पर वर्षा में पश्चिमी घाट की भूमिका क्या है?',['नम मानसूनी हवाओं को ऊपर उठाना','हवाओं को पूरी तरह रोकना','रेगिस्तान बनाना','हिमपात कराना'],0],
['महाद्वीपीयता का अर्थ क्या है?',['समुद्र के प्रभाव से दूरी बढ़ने पर तापांतर बढ़ना','समुद्र के पास अधिक वर्षा ही','ज्वार का बढ़ना','पर्वत का बनना'],0],
['समुद्री समीर सामान्यतः कब चलता है?',['दिन में समुद्र से भूमि की ओर','रात में समुद्र से भूमि की ओर','दिन में भूमि से समुद्र की ओर','केवल सर्दियों में'],0],
['स्थलीय समीर सामान्यतः कब चलता है?',['रात में भूमि से समुद्र की ओर','दिन में समुद्र से भूमि की ओर','दिन में भूमि से समुद्र की ओर','केवल मानसून में'],0],
['हवा की गति मापने का उपकरण कौन-सा है?',['एनीमोमीटर','बैरोमीटर','हाइग्रोमीटर','रेनगेज'],0],
['वायुदाब मापने का उपकरण कौन-सा है?',['बैरोमीटर','एनीमोमीटर','थर्मामीटर','हाइग्रोमीटर'],0],
['आर्द्रता मापने का उपकरण कौन-सा है?',['हाइग्रोमीटर','बैरोमीटर','रेनगेज','एनीमोमीटर'],0],
['वर्षा मापने का उपकरण कौन-सा है?',['रेनगेज','बैरोमीटर','हाइग्रोमीटर','एनीमोमीटर'],0]
];
const QUIZ_DB = { geography: GEO_Q.map((x,i)=>({hi:{q:x[0],options:x[1]},en:{q:x[0],options:x[1]},correct:x[2],id:'geo-'+(i+1)})) };

// ===== Enhanced UPSC Quiz Interface =====
(function(){
  let timer=null;
  function db(){return (window.QUIZ_DB||QUIZ_DB);}
  window.startQuiz=function(id){
    const all=db(), source=all[id];
    if(!source||!source.length) return window.showToast('Quiz data not available!');
    const questions=source.slice(0,100);
    window.state.quizState={activeQuizId:id,currentQ:0,answers:{},score:0,lang:'hi',timeLeft:30*60,questions:questions,submitted:false};
    window.changeTab('ActiveQuiz');
    clearInterval(timer);
    timer=setInterval(()=>{
      if(window.state.activeTab!=='ActiveQuiz'){clearInterval(timer);return;}
      const s=window.state.quizState; s.timeLeft=Math.max(0,s.timeLeft-1);
      const el=document.getElementById('quiz-timer-display');
      if(el){const m=Math.floor(s.timeLeft/60),sec=s.timeLeft%60;el.textContent=String(m).padStart(2,'0')+':'+String(sec).padStart(2,'0');}
      if(s.timeLeft<=0){clearInterval(timer);window.submitQuiz(true);}
    },1000);
  };
  window.selectOption=function(i){
    const s=window.state.quizState;if(s.answers[s.currentQ]!==undefined)return;
    s.answers[s.currentQ]=i; window.renderActiveQuiz();
  };
  window.nextQuestion=function(){const s=window.state.quizState;if(s.currentQ<s.questions.length-1){s.currentQ++;window.renderActiveQuiz();document.getElementById('main-content').scrollTop=0;}};
  window.prevQuestion=function(){const s=window.state.quizState;if(s.currentQ>0){s.currentQ--;window.renderActiveQuiz();document.getElementById('main-content').scrollTop=0;}};
  window.jumpQuestion=function(i){window.state.quizState.currentQ=i;window.renderActiveQuiz();};
  window.submitQuiz=function(auto){
    const s=window.state.quizState;if(s.submitted)return;s.submitted=true;clearInterval(timer);
    let score=0;s.questions.forEach((q,i)=>{if(s.answers[i]===q.correct)score++;});s.score=score;
    window.changeTab('QuizResult');if(auto&&window.showToast)window.showToast('समय समाप्त! Test submit हो गया।');
  };
  window.renderActiveQuiz=function(){
    const s=window.state.quizState,q=s.questions[s.currentQ],idx=s.currentQ,total=s.questions.length,ans=s.answers[idx];
    if(!q)return;
    const letters=['A','B','C','D'];
    const answered=ans!==undefined;
    const opts=q.hi.options.map((o,i)=>{
      let cls='bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100';
      if(answered&&i===q.correct)cls='bg-green-50 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-300';
      else if(answered&&i===ans)cls='bg-red-50 dark:bg-red-900/30 border-red-500 text-red-700 dark:text-red-300';
      return `<button ${answered?'disabled':''} onclick="window.selectOption(${i})" class="w-full p-4 mb-3 rounded-2xl border-2 ${cls} flex items-center gap-3 text-left font-semibold transition-all active:scale-[.99]"><span class="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center shrink-0 font-bold">${letters[i]}</span><span>${o}</span>${answered&&i===q.correct?'<i class="fa-solid fa-circle-check ml-auto text-green-500"></i>':''}${answered&&i===ans&&i!==q.correct?'<i class="fa-solid fa-circle-xmark ml-auto text-red-500"></i>':''}</button>`;
    }).join('');
    const palette=Array.from({length:total},(_,i)=>`<button onclick="window.jumpQuestion(${i})" class="w-8 h-8 rounded-lg text-xs font-bold ${i===idx?'bg-orange-500 text-white':s.answers[i]!==undefined?'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300':'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}">${i+1}</button>`).join('');
    const m=Math.floor(s.timeLeft/60),sec=s.timeLeft%60;
    document.getElementById('main-content').innerHTML=`<div class="max-w-4xl mx-auto px-3 md:px-5 pb-8"><div class="sticky top-0 z-10 pt-2 pb-3 bg-gray-50 dark:bg-gray-900"><div class="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-sm border border-gray-200 dark:border-gray-700"><div class="flex items-center justify-between gap-3"><div><p class="text-[11px] text-gray-500 font-semibold">UPSC CSE • GEOGRAPHY</p><p class="font-extrabold text-gray-900 dark:text-white">Question ${idx+1} / ${total}</p></div><div id="quiz-timer-display" class="px-4 py-2 rounded-xl bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-300 font-mono font-extrabold text-lg">${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}</div></div><div class="mt-3 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden"><div class="h-full bg-orange-500" style="width:${((idx+1)/total)*100}%"></div></div></div></div><div class="bg-white dark:bg-gray-800 rounded-2xl p-5 md:p-7 shadow-sm border border-gray-200 dark:border-gray-700 mb-4"><div class="flex items-start gap-3 mb-5"><span class="bg-orange-100 dark:bg-orange-900/40 text-orange-600 font-bold px-3 py-1 rounded-lg text-sm">Q${idx+1}</span><h2 class="text-lg md:text-xl font-extrabold leading-relaxed text-gray-900 dark:text-white">${q.hi.q}</h2></div>${opts}<div class="flex items-center justify-between gap-2 mt-5"><button onclick="window.prevQuestion()" class="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 font-bold ${idx===0?'opacity-40':''}"><i class="fa-solid fa-arrow-left mr-1"></i> Previous</button>${idx===total-1?`<button onclick="window.submitQuiz(false)" class="px-6 py-3 rounded-xl bg-green-600 text-white font-extrabold shadow-md"><i class="fa-solid fa-paper-plane mr-1"></i> Submit Test</button>`:`<button onclick="window.nextQuestion()" class="px-6 py-3 rounded-xl bg-orange-500 text-white font-extrabold shadow-md">Next <i class="fa-solid fa-arrow-right ml-1"></i></button>`}</div></div><div class="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-200 dark:border-gray-700"><div class="flex justify-between items-center mb-3"><span class="font-extrabold">Question Palette</span><span class="text-xs text-gray-500">Green = Answered</span></div><div class="grid grid-cols-8 sm:grid-cols-10 md:grid-cols-12 gap-2 max-h-48 overflow-y-auto">${palette}</div><button onclick="window.submitQuiz(false)" class="w-full mt-4 py-3 rounded-xl bg-red-600 text-white font-extrabold">Submit Test</button></div></div>`;
  };
  window.renderQuizResult=function(){
    const s=window.state.quizState,total=s.questions.length,score=s.score||0,attempted=Object.keys(s.answers).length,wrong=attempted-score,unattempted=total-attempted,p=Math.round(score/total*100);
    const deg=p*3.6;
    document.getElementById('main-content').innerHTML=`<div class="max-w-3xl mx-auto px-4 py-8 pb-20"><div class="text-center mb-6"><div class="w-20 h-20 mx-auto rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center text-4xl mb-3"><i class="fa-solid fa-trophy"></i></div><h1 class="text-3xl font-extrabold">Test Result</h1><p class="text-gray-500 mt-1">UPSC CSE Geography • 100 Questions</p></div><div class="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"><div class="flex flex-col items-center"><div class="w-44 h-44 rounded-full flex items-center justify-center" style="background:conic-gradient(#22c55e 0deg ${deg}deg,#ef4444 ${deg}deg 360deg)"><div class="w-32 h-32 rounded-full bg-white dark:bg-gray-800 flex flex-col items-center justify-center"><span class="text-3xl font-extrabold">${p}%</span><span class="text-xs text-gray-500">Score</span></div></div><div class="text-2xl font-extrabold mt-4">${score} / ${total}</div></div><div class="grid grid-cols-3 gap-3 mt-7"><div class="rounded-2xl bg-green-50 dark:bg-green-900/20 p-4 text-center"><p class="text-2xl font-extrabold text-green-600">${score}</p><p class="text-xs font-bold text-gray-500">Correct</p></div><div class="rounded-2xl bg-red-50 dark:bg-red-900/20 p-4 text-center"><p class="text-2xl font-extrabold text-red-600">${wrong}</p><p class="text-xs font-bold text-gray-500">Wrong</p></div><div class="rounded-2xl bg-gray-100 dark:bg-gray-700 p-4 text-center"><p class="text-2xl font-extrabold">${unattempted}</p><p class="text-xs font-bold text-gray-500">Unattempted</p></div></div><div class="mt-6 space-y-3"><div class="flex justify-between text-sm"><span>Attempted</span><b>${attempted}/${total}</b></div><div class="h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden"><div class="h-full bg-blue-500" style="width:${attempted/total*100}%"></div></div></div><div class="grid grid-cols-2 gap-3 mt-7"><button onclick="window.startQuiz('geography')" class="py-3 rounded-xl bg-orange-500 text-white font-extrabold"><i class="fa-solid fa-rotate-right mr-1"></i> Reattempt</button><button onclick="window.changeTab('Quiz')" class="py-3 rounded-xl border border-gray-300 dark:border-gray-600 font-extrabold">Back to Quiz</button></div></div></div>`;
  };
})();
