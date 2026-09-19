const baanData = [
  {
    id: 1,
    type: "Doha",
    hindi:
      "निश्चय प्रेम प्रतीति ते, विनय करैं सनमान। तेहि के कारज सकल शुभ, सिद्ध करैं हनुमान॥",
    english:
      "With firm faith, love, humility, and respect, devotees seek Hanuman's blessings for the successful completion of auspicious work.",
    audio: "/audio/baan/01.mp3",
  },

  {
    id: 2,
    type: "Chaupai",
    hindi:
      "जय हनुमंत संत हितकारी। सुन लीजै प्रभु अरज हमारी॥",
    english:
      "Victory to Hanuman, the benefactor of saints. O Lord, please listen to our humble prayer.",
    audio: "/audio/baan/02.mp3",
  },

  {
    id: 3,
    type: "Chaupai",
    hindi:
      "जन के काज विलंब न कीजै। आतुर दौरि महासुख दीजै॥",
    english:
      "Please do not delay in helping your devotees; come swiftly and bless them with great happiness.",
    audio: "/audio/baan/03.mp3",
  },

  {
    id: 4,
    type: "Chaupai",
    hindi:
      "जैसे कूदि सिंधु महिपारा। सुरसा बदन पैठि विस्तारा॥",
    english:
      "Just as you leapt across the ocean and overcame the challenge of Surasa through your power and wisdom.",
    audio: "/audio/baan/04.mp3",
  },

  {
    id: 5,
    type: "Chaupai",
    hindi:
      "आगे जाय लंकिनी रोका। मारेहु लात गई सुरलोका॥",
    english:
      "When Lankini stopped you at the entrance of Lanka, you struck her and continued on your divine mission.",
    audio: "/audio/baan/05.mp3",
  },

  {
    id: 6,
    type: "Chaupai",
    hindi:
      "जाय विभीषण को सुख दीन्हा। सीता निरखि परम पद लीन्हा॥",
    english:
      "You brought comfort to Vibhishana and, after seeing Sita, continued your sacred mission.",
    audio: "/audio/baan/06.mp3",
  },

  {
    id: 7,
    type: "Chaupai",
    hindi:
      "बाग उजारी सिंधु महँ बोरा। अति आतुर जमकातर तोरा॥",
    english:
      "You destroyed the grove and displayed your immense strength, striking fear into the forces of evil.",
    audio: "/audio/baan/07.mp3",
  },

  {
    id: 8,
    type: "Chaupai",
    hindi:
      "अक्षय कुमार को मारि संहारा। लूम लपेट लंक को जारा॥",
    english:
      "You defeated Akshay Kumar and burned Lanka with your blazing tail.",
    audio: "/audio/baan/08.mp3",
  },

  {
    id: 9,
    type: "Chaupai",
    hindi:
      "लंक जारि असुर संहारे। सियाराम जी के काज सँवारे॥",
    english:
      "After burning Lanka and defeating the demons, you successfully completed the work of Sita and Rama.",
    audio: "/audio/baan/09.mp3",
  },

  {
    id: 10,
    type: "Chaupai",
    hindi:
      "लक्ष्मण मूर्छित पड़े सकारे। लाय संजीवन प्राण उबारे॥",
    english:
      "When Lakshmana lay unconscious, you brought the Sanjeevani herb and helped restore his life.",
    audio: "/audio/baan/10.mp3",
  },

  {
    id: 11,
    type: "Chaupai",
    hindi:
      "पैठि पताल तोरि जमकारा। अहिरावण के सैन्य संहारा॥",
    english:
      "You entered the netherworld, confronted Ahiravana, and destroyed his forces.",
    audio: "/audio/baan/11.mp3",
  },

  {
    id: 12,
    type: "Chaupai",
    hindi:
      "बायें भुजा असुर दल मारा। दाहिने भुजा संत उबारा॥",
    english:
      "With your powerful arms you defeated the forces of evil and protected the saints.",
    audio: "/audio/baan/12.mp3",
  },

  {
    id: 13,
    type: "Chaupai",
    hindi:
      "सुर नर मुनि जन अरु गंधर्वा। जय जय जय हनुमंत उचरवा॥",
    english:
      "Gods, humans, sages, and celestial beings all proclaim victory to Hanuman.",
    audio: "/audio/baan/13.mp3",
  },

  {
    id: 14,
    type: "Chaupai",
    hindi:
      "काज किये बड़े देवन्ह के तुम। रामचंद्र के काज सँवारे॥",
    english:
      "You have accomplished great tasks for the divine beings and successfully served Lord Rama.",
    audio: "/audio/baan/14.mp3",
  },

  {
    id: 15,
    type: "Chaupai",
    hindi:
      "हे बजरंगी बलि बलवाना। करहु कृपा मम अरज सुजाना॥",
    english:
      "O powerful Bajrangi, mighty and strong, please kindly hear and accept my humble prayer.",
    audio: "/audio/baan/15.mp3",
  },

  {
    id: 16,
    type: "Chaupai",
    hindi:
      "ॐ हनु हनु हनु हनुमंत हठीले। बैरिहि मारु बज्र की कीले॥",
    english:
      "O mighty and resolute Hanuman, destroy the forces of hostility with your thunderbolt-like strength.",
    audio: "/audio/baan/16.mp3",
  },

  {
    id: 17,
    type: "Chaupai",
    hindi:
      "ॐ ह्रीं ह्रीं ह्रीं हनुमंत कपीसा। ॐ हुँ हुँ हुँ हनु अरि उर शीसा॥",
    english:
      "A devotional invocation to Hanuman, the Lord of the Vanaras, seeking his powerful protection against adversity.",
    audio: "/audio/baan/17.mp3",
  },

  {
    id: 18,
    type: "Chaupai",
    hindi:
      "जय अंजनि कुमार बलवंता। शंकर सुवन वीर हनुमंता॥",
    english:
      "Victory to the mighty son of Anjana, the heroic Hanuman, regarded as the son of Shankar.",
    audio: "/audio/baan/18.mp3",
  },

  {
    id: 19,
    type: "Chaupai",
    hindi:
      "बदन कराल काल कुल घालक। राम सहाय सदा प्रतिपालक॥",
    english:
      "With a formidable presence you destroy evil and always protect those who serve Lord Rama.",
    audio: "/audio/baan/19.mp3",
  },

  {
    id: 20,
    type: "Chaupai",
    hindi:
      "भूत प्रेत पिशाच निशाचर। अग्नि बेताल काल मारीमर॥",
    english:
      "A devotional invocation seeking protection from negative and harmful forces through Hanuman's divine power.",
    audio: "/audio/baan/20.mp3",
  },

  {
    id: 21,
    type: "Chaupai",
    hindi:
      "इन्हें मारु तोहि सपथ राम की। राखु नाथ मरजाद नाम की॥",
    english:
      "By the sacred name of Lord Rama, destroy these obstacles and uphold the honor of your divine name.",
    audio: "/audio/baan/21.mp3",
  },

  {
    id: 22,
    type: "Chaupai",
    hindi:
      "सत्य होहु हरि सपथ पाय कै। रामदूत धरु मारु धाय कै॥",
    english:
      "By the oath of Lord Hari, let this prayer be fulfilled; O messenger of Rama, come swiftly to protect.",
    audio: "/audio/baan/22.mp3",
  },

  {
    id: 23,
    type: "Chaupai",
    hindi:
      "जय जय जय हनुमंत अगाधा। दुःख पावत जन केहि अपराधा॥",
    english:
      "Victory to the boundless Hanuman. Why should your devotees suffer when they seek your protection?",
    audio: "/audio/baan/23.mp3",
  },

  {
    id: 24,
    type: "Chaupai",
    hindi:
      "पूजा जप तप नेम अचारा। नहिं जानत कछु दास तुम्हारा॥",
    english:
      "Your humble servant may not know all the rituals, prayers, austerities, and disciplines.",
    audio: "/audio/baan/24.mp3",
  },

  {
    id: 25,
    type: "Chaupai",
    hindi:
      "बन उपबन मग गिरि गृह माहीं। तुमरे बल हम डरपत नाहीं॥",
    english:
      "Whether in forests, gardens, mountains, homes, or along the roads, those who trust in your strength have no fear.",
    audio: "/audio/baan/25.mp3",
  },

  {
    id: 26,
    type: "Chaupai",
    hindi:
      "जनकसुता हरि दास कहावौं। ताके बल पर संकट न आवौं॥",
    english:
      "I seek to be known as a servant of the daughter of King Janaka, trusting in divine strength against difficulties.",
    audio: "/audio/baan/26.mp3",
  },

  {
    id: 27,
    type: "Chaupai",
    hindi:
      "जय जय जय धुनि होत अकासा। सुमिरत होत दुसह दुःख नाशा॥",
    english:
      "When your victory is proclaimed throughout the heavens and your name is remembered, unbearable suffering is traditionally believed to disappear.",
    audio: "/audio/baan/27.mp3",
  },

  {
    id: 28,
    type: "Chaupai",
    hindi:
      "चरन शरण कर जोरि मनावौं। यहि अवसर अब केहि गोहरावौं॥",
    english:
      "With folded hands, I seek refuge at your feet; at this moment, whom else can I call upon?",
    audio: "/audio/baan/28.mp3",
  },

  {
    id: 29,
    type: "Chaupai",
    hindi:
      "उठु उठु चलु तोहि राम दुहाई। पायँ परौं कर जोरि मनाई॥",
    english:
      "Rise and come swiftly, invoking the name of Rama; I bow at your feet with folded hands.",
    audio: "/audio/baan/29.mp3",
  },

  {
    id: 30,
    type: "Chaupai",
    hindi:
      "ॐ चं चं चं चं चपल चलंता। ॐ हनु हनु हनु हनुमंता॥",
    english:
      "A devotional invocation calling upon the swift and powerful Hanuman.",
    audio: "/audio/baan/30.mp3",
  },

  {
    id: 31,
    type: "Chaupai",
    hindi:
      "ॐ हं हं हं हाँक देत कपि चंचल। ॐ सं सं सं सहम पराने खल दल॥",
    english:
      "A powerful devotional invocation to Hanuman, calling upon his mighty force to overcome evil.",
    audio: "/audio/baan/31.mp3",
  },

  {
    id: 32,
    type: "Chaupai",
    hindi:
      "अपने जन को तुरत उबारौ। सुमिरत होय आनंद हमारौ॥",
    english:
      "Please quickly rescue your devotee; remembering you brings joy and hope.",
    audio: "/audio/baan/32.mp3",
  },

  {
    id: 33,
    type: "Chaupai",
    hindi:
      "यह बजरंग बाण जेहि मारै। ताहि कहो फिर कौन उबारै॥",
    english:
      "The Bajrang Baan is described devotionally as a powerful invocation; those who take refuge in Hanuman seek his protection.",
    audio: "/audio/baan/33.mp3",
  },

  {
    id: 34,
    type: "Chaupai",
    hindi:
      "पाठ करै बजरंग बाण की। हनुमत रक्षा करैं प्राण की॥",
    english:
      "Those who recite the Bajrang Baan seek Hanuman's protection and blessings.",
    audio: "/audio/baan/34.mp3",
  },

  {
    id: 35,
    type: "Doha",
    hindi:
      "प्रेम प्रतीति कपि भजै, सदा धरै उर ध्यान। तेहि के कारज सकल शुभ, सिद्ध करैं हनुमान॥",
    english:
      "One who worships Hanuman with love, faith, and constant remembrance seeks his blessings for the successful completion of auspicious endeavors.",
    audio: "/audio/baan/35.mp3",
  },
];

export default baanData;