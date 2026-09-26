/* Company + demo content for Rayash Real Estate (رياش للتسويق العقاري) */

const COMPANY = {
  phone: "920014891",
  whatsapp: "966920014891",
  email: "info@ror.sa",
  city: { ar: "جدة", en: "Jeddah" },
  address: {
    ar: "جدة، حي الشراع، طريق الأمير نايف بن عبدالعزيز",
    en: "Jeddah, Al-Shera'a District, Prince Naif Bin Abdulaziz Road"
  },
  mapEmbed: "https://www.google.com/maps?q=Al+Shera'a,+Jeddah,+Saudi+Arabia&output=embed",
  hours: {
    ar: "الأحد - الخميس: 9:00 ص - 6:00 م",
    en: "Sun - Thu: 9:00 AM - 6:00 PM"
  },
  fal: "1200XXXXXX",
  cr: "4030XXXXXX",
  social: {
    facebook: "https://facebook.com",
    x: "https://x.com",
    whatsapp: "https://wa.me/966920014891",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com"
  }
};

/* ---------------- Properties ---------------- */
const IMG = {
  villa1:"https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
  villa2:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  villa3:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
  villa4:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  apt1:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
  apt2:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
  apt3:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
  apt4:"https://images.unsplash.com/photo-1571055107559-3e67626fa8be?auto=format&fit=crop&w=1200&q=80",
  interior1:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
  interior2:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
  interior3:"https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
  office1:"https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  land1:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
  skyline:"https://images.unsplash.com/photo-1600298881974-6be191ceeda1?auto=format&fit=crop&w=1600&q=80"
};

const PROPERTIES = [
  {
    id:1, purpose:"rent", type:"apartment",
    title:{ar:"شقة فاخرة للإيجار في حي السليمانية",en:"Luxury Apartment for Rent in Al Sulaimaniyah"},
    district:{ar:"السليمانية، جدة",en:"Al Sulaimaniyah, Jeddah"},
    price:40000, area:200, beds:3, baths:3,
    cover:IMG.apt1, gallery:[IMG.apt1,IMG.interior1,IMG.interior2,IMG.interior3],
    desc:{ar:"شقة فاخرة بتشطيب راقٍ في قلب حي السليمانية، تصميم عصري ومساحات واسعة مع إطلالة هادئة، قريبة من الخدمات والمرافق الحيوية.",
          en:"A luxury finely-finished apartment in the heart of Al Sulaimaniyah, modern design and spacious layout with a calm view, close to key services and amenities."},
    features:{ar:["مطبخ مجهز بالكامل","مصعد خاص","موقف سيارات مغطى","نظام أمن وحراسة 24/7","تكييف مركزي","غرفة خادمة"],
              en:["Fully fitted kitchen","Private elevator","Covered parking","24/7 security","Central A/C","Maid's room"]}
  },
  {
    id:2, purpose:"rent", type:"apartment",
    title:{ar:"شقة جاهزة للسكن المباشر",en:"Move-in Ready Apartment"},
    district:{ar:"حي الشراع، جدة",en:"Al Shera'a, Jeddah"},
    price:40000, area:170, beds:3, baths:2,
    cover:IMG.apt2, gallery:[IMG.apt2,IMG.interior2,IMG.interior1,IMG.interior3],
    desc:{ar:"شقة جاهزة للسكن الفوري بتشطيبات حديثة، تصميم عملي يناسب العائلات، وقربها من طريق الأمير نايف يسهل الوصول لجميع الخدمات.",
          en:"Ready-to-move apartment with modern finishes, a practical family-friendly layout, near Prince Naif Road for easy access to services."},
    features:{ar:["تشطيب حديث","بلكونة واسعة","مخزن داخلي","إنترنت فايبر جاهز","أمن وحراسة","صيانة دورية"],
              en:["Modern finish","Spacious balcony","Storage room","Fiber internet ready","Security","Regular maintenance"]}
  },
  {
    id:3, purpose:"rent", type:"villa",
    title:{ar:"فيلا فاخرة للإيجار في حي اللؤلؤ",en:"Luxury Villa for Rent in Al Lulu"},
    district:{ar:"حي اللؤلؤ، جدة",en:"Al Lulu, Jeddah"},
    price:110000, area:625, beds:5, baths:6,
    cover:IMG.villa1, gallery:[IMG.villa1,IMG.villa2,IMG.interior1,IMG.interior2],
    desc:{ar:"فيلا واسعة بتصميم معماري مميز في حي اللؤلؤ الراقي، مسبح خاص وحديقة خارجية، مثالية للعائلات الباحثة عن الخصوصية والفخامة.",
          en:"Spacious villa with distinctive architecture in the upscale Al Lulu district, private pool and garden, ideal for families seeking privacy and luxury."},
    features:{ar:["مسبح خاص","حديقة خارجية","مجلس رجال ونساء منفصل","مصعد داخلي","غرفة سائق","نظام مراقبة ذكي"],
              en:["Private pool","Outdoor garden","Separate majlis","Internal elevator","Driver's room","Smart CCTV system"]}
  },
  {
    id:4, purpose:"rent", type:"apartment",
    title:{ar:"شقة للإيجار في حي اللؤلؤ",en:"Apartment for Rent in Al Lulu"},
    district:{ar:"حي اللؤلؤ، جدة",en:"Al Lulu, Jeddah"},
    price:35000, area:625, beds:3, baths:3,
    cover:IMG.apt3, gallery:[IMG.apt3,IMG.interior3,IMG.interior1,IMG.interior2],
    desc:{ar:"شقة بمساحات كبيرة وتوزيع ذكي للغرف، تقع في موقع متميز قريب من الواجهة البحرية والمولات الكبرى.",
          en:"An apartment with generous space and smart room layout, located near the waterfront and major malls."},
    features:{ar:["إطلالة مفتوحة","مطبخ راكب","موقفان خاصان","صالة استقبال واسعة","تدفئة وتبريد مركزي"],
              en:["Open view","Fitted kitchen","Two private parking spots","Spacious reception hall","Central heating/cooling"]}
  },
  {
    id:5, purpose:"sale", type:"villa",
    title:{ar:"فيلا للبيع في حي أبحر الشمالية",en:"Villa for Sale in North Obhur"},
    district:{ar:"أبحر الشمالية، جدة",en:"North Obhur, Jeddah"},
    price:4200000, area:700, beds:6, baths:7,
    cover:IMG.villa2, gallery:[IMG.villa2,IMG.villa3,IMG.interior2,IMG.interior1],
    desc:{ar:"فيلا استثنائية على مقربة من الواجهة البحرية بأبحر الشمالية، تشطيبات سوبر لوكس ومساحات خارجية واسعة تناسب الاستثمار أو السكن.",
          en:"An exceptional villa near the North Obhur waterfront, super-lux finishing and generous outdoor spaces, ideal for investment or living."},
    features:{ar:["سوبر لوكس","قريبة من البحر","مسبح ومجلس خارجي","مصعد وغرفة سائق","نظام طاقة شمسية"],
              en:["Super lux finish","Near the sea","Pool and outdoor majlis","Elevator & driver's room","Solar power system"]}
  },
  {
    id:6, purpose:"sale", type:"apartment",
    title:{ar:"شقة للبيع في حي الروضة",en:"Apartment for Sale in Al Rawdah"},
    district:{ar:"الروضة، جدة",en:"Al Rawdah, Jeddah"},
    price:1350000, area:230, beds:4, baths:4,
    cover:IMG.apt4, gallery:[IMG.apt4,IMG.interior1,IMG.interior3,IMG.interior2],
    desc:{ar:"شقة راقية للبيع في أحد أرقى أحياء جدة، قريبة من المدارس العالمية والمراكز التجارية، خيار مثالي للسكن أو الاستثمار.",
          en:"An elegant apartment for sale in one of Jeddah's finest districts, close to international schools and malls — ideal for living or investment."},
    features:{ar:["تمليك حر","مطبخ مجهز","3 مواقف خاصة","نظام أمان متكامل","صالة رياضية بالمبنى"],
              en:["Freehold ownership","Fitted kitchen","3 private parking spots","Full security system","Building gym"]}
  },
  {
    id:7, purpose:"sale", type:"villa",
    title:{ar:"فيلا دوبلكس للبيع في حي الزهراء",en:"Duplex Villa for Sale in Al Zahra"},
    district:{ar:"الزهراء، جدة",en:"Al Zahra, Jeddah"},
    price:2950000, area:450, beds:5, baths:5,
    cover:IMG.villa3, gallery:[IMG.villa3,IMG.villa4,IMG.interior2,IMG.interior3],
    desc:{ar:"فيلا دوبلكس حديثة بتصميم عصري في حي الزهراء الهادئ، مدخلين منفصلين ومساحات معيشة واسعة تناسب العائلات الكبيرة.",
          en:"A modern duplex villa in the quiet Al Zahra district, separate entrances and spacious living areas ideal for large families."},
    features:{ar:["مدخلان منفصلان","حديقة أمامية وخلفية","غرفة معيشة مستقلة بكل دور","تكييف مركزي","تشطيب سوبر لوكس"],
              en:["Two separate entrances","Front & rear garden","Independent living room per floor","Central A/C","Super lux finishing"]}
  },
  {
    id:8, purpose:"sale", type:"land",
    title:{ar:"أرض تجارية للبيع في حي النزهة",en:"Commercial Land for Sale in Al Nuzha"},
    district:{ar:"النزهة، جدة",en:"Al Nuzha, Jeddah"},
    price:5800000, area:900, beds:0, baths:0,
    cover:IMG.land1, gallery:[IMG.land1,IMG.skyline,IMG.office1,IMG.land1],
    desc:{ar:"أرض تجارية على شارع رئيسي بحي النزهة، موقع استثماري مميز يصلح لإنشاء مجمع تجاري أو مبنى إداري.",
          en:"Commercial land on a main street in Al Nuzha, a prime investment location suitable for a commercial complex or office building."},
    features:{ar:["واجهة على شارع رئيسي","صك إلكتروني","جاهزة للبناء فوراً","قرب من المحاور الحيوية"],
              en:["Frontage on a main street","Electronic deed","Ready to build immediately","Close to major roads"]}
  },
  {
    id:9, purpose:"rent", type:"office",
    title:{ar:"مكتب إداري للإيجار في طريق الملك عبدالعزيز",en:"Office for Rent on King Abdulaziz Road"},
    district:{ar:"الشاطئ، جدة",en:"Al Shati, Jeddah"},
    price:65000, area:180, beds:0, baths:2,
    cover:IMG.office1, gallery:[IMG.office1,IMG.interior3,IMG.interior1,IMG.skyline],
    desc:{ar:"مكتب إداري بتشطيب راقٍ داخل برج تجاري حديث في حي الشاطئ، مناسب للشركات والمكاتب الاستشارية.",
          en:"An elegantly finished office inside a modern commercial tower in Al Shati, suitable for companies and consultancy offices."},
    features:{ar:["استقبال مجهز","قاعة اجتماعات","مواقف للزوار","مصاعد عالية السرعة","أمن على مدار الساعة"],
              en:["Equipped reception","Meeting room","Visitor parking","High-speed elevators","Round-the-clock security"]}
  },
  {
    id:10, purpose:"sale", type:"apartment",
    title:{ar:"شقة للبيع في حي الصفا",en:"Apartment for Sale in Al Safa"},
    district:{ar:"الصفا، جدة",en:"Al Safa, Jeddah"},
    price:980000, area:190, beds:3, baths:3,
    cover:IMG.apt3, gallery:[IMG.apt3,IMG.interior2,IMG.interior3,IMG.interior1],
    desc:{ar:"شقة عصرية بموقع هادئ في حي الصفا، قريبة من المساجد والمدارس والأسواق، بتصميم داخلي أنيق وعملي.",
          en:"A modern apartment in a quiet part of Al Safa, close to mosques, schools and markets, with an elegant and practical interior."},
    features:{ar:["تمليك حر","غرفة ملابس","بلكونتان","مطبخ مغلق","موقف خاص"],
              en:["Freehold ownership","Walk-in closet","Two balconies","Closed kitchen","Private parking"]}
  },
  {
    id:11, purpose:"rent", type:"villa",
    title:{ar:"فيلا للإيجار في حي المرجان",en:"Villa for Rent in Al Murjan"},
    district:{ar:"المرجان، جدة",en:"Al Murjan, Jeddah"},
    price:95000, area:520, beds:5, baths:5,
    cover:IMG.villa4, gallery:[IMG.villa4,IMG.villa1,IMG.interior1,IMG.interior2],
    desc:{ar:"فيلا عائلية واسعة في حي المرجان القريب من الواجهة البحرية الشمالية، تصميم داخلي فاخر ومساحات خارجية مظللة.",
          en:"A spacious family villa in Al Murjan near the north waterfront, luxurious interior and shaded outdoor spaces."},
    features:{ar:["مسبح خاص","ملحق خارجي","مجلس رجال منفصل","حديقة مظللة","تكييف مركزي"],
              en:["Private pool","Outdoor annex","Separate men's majlis","Shaded garden","Central A/C"]}
  },
  {
    id:12, purpose:"sale", type:"apartment",
    title:{ar:"بنتهاوس للبيع في حي الشاطئ",en:"Penthouse for Sale in Al Shati"},
    district:{ar:"الشاطئ، جدة",en:"Al Shati, Jeddah"},
    price:3600000, area:340, beds:4, baths:5,
    cover:IMG.apt1, gallery:[IMG.apt1,IMG.interior1,IMG.interior2,IMG.skyline],
    desc:{ar:"بنتهاوس فاخر بإطلالة بانورامية على البحر الأحمر في حي الشاطئ، تراس خاص وتشطيبات استثنائية.",
          en:"A luxury penthouse with panoramic Red Sea views in Al Shati, private terrace and exceptional finishing."},
    features:{ar:["إطلالة بحرية بانورامية","تراس خاص","مصعد خاص","مطبخ إيطالي","نظام منزل ذكي"],
              en:["Panoramic sea view","Private terrace","Private elevator","Italian kitchen","Smart home system"]}
  }
];

/* ---------------- Projects ---------------- */
const PROJECTS = [
  {
    id:1, progress:78,
    title:{ar:"مشروع أبراج اللؤلؤ السكني",en:"Al Lulu Residential Towers"},
    district:{ar:"حي اللؤلؤ، جدة",en:"Al Lulu, Jeddah"},
    desc:{ar:"مجمع سكني متكامل من 3 أبراج يضم شققاً بمساحات متعددة وخدمات مشتركة تشمل مسبح ونادي رياضي وحديقة مركزية.",
          en:"An integrated residential complex of 3 towers offering apartments of various sizes with shared amenities including a pool, gym, and central garden."},
    cover:IMG.apt1,
    units:[
      {ar:"استوديو",en:"Studio",total:40,status:"available"},
      {ar:"غرفتان",en:"2 Bedrooms",total:60,status:"limited"},
      {ar:"3 غرف",en:"3 Bedrooms",total:50,status:"available"},
      {ar:"بنتهاوس",en:"Penthouse",total:10,status:"soldout"}
    ]
  },
  {
    id:2, progress:45,
    title:{ar:"مشروع فيلات واحة أبحر",en:"Obhur Oasis Villas"},
    district:{ar:"أبحر الشمالية، جدة",en:"North Obhur, Jeddah"},
    desc:{ar:"مجتمع سكني مغلق يضم 32 فيلا مستقلة بتصميمات عصرية ومساحات خضراء واسعة قريبة من الواجهة البحرية.",
          en:"A gated community of 32 standalone villas with modern designs and expansive green spaces near the waterfront."},
    cover:IMG.villa2,
    units:[
      {ar:"فيلا 5 غرف",en:"5BR Villa",total:18,status:"available"},
      {ar:"فيلا 6 غرف",en:"6BR Villa",total:14,status:"limited"}
    ]
  },
  {
    id:3, progress:100,
    title:{ar:"برج رياش التجاري",en:"Rayash Business Tower"},
    district:{ar:"طريق الملك عبدالعزيز، جدة",en:"King Abdulaziz Rd, Jeddah"},
    desc:{ar:"برج مكاتب إدارية بتشطيبات فندقية مكتمل التسليم بالكامل، يضم وحدات مكتبية جاهزة للتشغيل الفوري.",
          en:"A fully delivered administrative office tower with hotel-grade finishing, offering ready-to-operate office units."},
    cover:IMG.office1,
    units:[
      {ar:"مكتب صغير",en:"Small Office",total:24,status:"limited"},
      {ar:"مكتب كبير",en:"Large Office",total:12,status:"soldout"}
    ]
  }
];

/* ---------------- Testimonials ---------------- */
const TESTIMONIALS = [
  {name:{ar:"فيصل العتيبي",en:"Faisal Al-Otaibi"}, role:{ar:"عميل - بيع",en:"Client - Sale"},
   text:{ar:"تعاملت مع رياش لبيع فيلا العائلة، الفريق كان محترف جداً من التقييم إلى إتمام الصفقة خلال أسابيع قليلة فقط.",
         en:"I worked with Rayash to sell my family villa — the team was extremely professional from valuation to closing within just a few weeks."}},
  {name:{ar:"سارة القحطاني",en:"Sara Al-Qahtani"}, role:{ar:"عميلة - إيجار",en:"Client - Rent"},
   text:{ar:"استأجرت شقة عن طريق رياش، التجربة كانت سلسة والفريق متعاون وسريع الاستجابة في كل خطوة.",
         en:"I rented an apartment through Rayash — the experience was smooth and the team was responsive at every step."}},
  {name:{ar:"محمد الحربي",en:"Mohammed Al-Harbi"}, role:{ar:"مستثمر عقاري",en:"Real Estate Investor"},
   text:{ar:"استشارات رياش الاستثمارية ساعدتني في اختيار موقع مميز، عائد الاستثمار تجاوز توقعاتي.",
         en:"Rayash's investment consultancy helped me pick a prime location — the return exceeded my expectations."}},
  {name:{ar:"نورة الغامدي",en:"Noura Al-Ghamdi"}, role:{ar:"عميلة - إدارة أملاك",en:"Client - Property Management"},
   text:{ar:"يديرون عقاراتي بكل شفافية ويرسلون تقارير دورية، أنصح بالتعامل معهم لكل من يملك عقارات استثمارية.",
         en:"They manage my properties transparently with regular reports — I recommend them to anyone with investment properties."}}
];
