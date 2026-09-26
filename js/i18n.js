/* Bilingual dictionary + language engine for Rayash Real Estate */

const translations = {
  ar: {
    meta:{ title:"رياش للتسويق العقاري | عقارات فاخرة في جدة", desc:"رياش للتسويق العقاري — شريككم الموثوق للعقارات الفاخرة في جدة، بيع وإيجار وإدارة أملاك واستشارات استثمارية." },
    nav:{ home:"الرئيسية", properties:"العقارات", projects:"المشاريع", about:"من نحن", services:"الخدمات", contact:"اتصل بنا" },
    common:{
      callUs:"اتصل بنا", langSwitch:"English", whatsappCta:"تواصل عبر واتساب",
      viewDetails:"عرض التفاصيل", viewAll:"عرض كل العقارات", loadMore:"عرض المزيد", send:"إرسال", sending:"جارٍ الإرسال...",
      successMsg:"تم استلام طلبك بنجاح، سيتواصل معك فريقنا قريباً.",
      sar:"ريال", perMonth:"شهرياً", sqm:"م²", beds:"غرف", baths:"حمامات", area:"المساحة",
      forSale:"للبيع", forRent:"للإيجار", scrollTop:"العودة للأعلى"
    },
    footer:{
      about:"رياش للتسويق العقاري شريككم الموثوق في المملكة العربية السعودية، نبني مستقبلك العقاري بثقة وتميز، ونقدم حلولاً عقارية متكاملة تجمع بين الخبرة المحلية والرؤية المستقبلية.",
      quicklinks:"روابط سريعة", ourServices:"خدماتنا", contactInfo:"تواصل معنا", followUs:"تابعنا",
      falLabel:"رخصة فال", crLabel:"السجل التجاري",
      rights:"© 2026 رياش للتسويق العقاري. جميع الحقوق محفوظة.",
      privacy:"سياسة الخصوصية", terms:"الشروط والأحكام"
    },
    home:{
      heroEyebrow:"رياش للتسويق العقاري", heroTitle:"نبني مستقبلك العقاري بثقة وتميز",
      heroLead:"شريككم الموثوق للعقارات الفاخرة في جدة — بيع، إيجار، إدارة أملاك واستشارات استثمارية بأعلى معايير الاحترافية.",
      ctaBrowse:"تصفح العقارات", ctaRequest:"للطلبات العقارية",
      searchCity:"المدينة", searchType:"نوع العقار", searchPurpose:"الغرض", searchPrice:"النطاق السعري", searchBtn:"ابحث الآن",
      allCities:"كل الأحياء", allTypes:"كل الأنواع", typeApartment:"شقة", typeVilla:"فيلا", typeLand:"أرض", typeOffice:"مكتب",
      purposeSale:"للبيع", purposeRent:"للإيجار", anyPrice:"أي سعر",
      valuesEyebrow:"القيم", valuesTitle:"القيم التي نؤمن بها",
      v1t:"الابتكار", v1d:"البحث المستمر عن طرق وأساليب جديدة لتحسين خدماتنا.",
      v2t:"الشفافية", v2d:"التعامل بوضوح وصراحة مع العملاء والشركاء.",
      v3t:"الاحترافية", v3d:"تقديم خدمات بمستوى عالٍ من الاحترافية والكفاءة.",
      aboutEyebrow:"معلومات عنا", aboutTitle:"نربط بين الباحثين عن الفخامة وأصحاب العقارات المميزة",
      aboutText:"نحن متخصصون في ربط المشترين والبائعين للعقارات الفاخرة في السعودية. فريقنا المتمرس مكرس لتقديم أعلى مستوى من الخدمة والخبرة لعملائنا.",
      aboutBtn:"المزيد عنا",
      servicesEyebrow:"خدمات", servicesTitle:"المنتجات والخدمات", servicesLead:"اكتشف النطاق الواسع من الخدمات العقارية التي نقدمها.",
      s1t:"خدمات تسويق العقارات", s1d:"تقديم خطط تسويقية مخصصة للعقارات السكنية والتجارية.",
      s2t:"الاستشارات العقارية", s2d:"تقديم استشارات متخصصة لمساعدة العملاء في اتخاذ قرارات مستنيرة.",
      s3t:"إدارة العقارات", s3d:"تقديم خدمات إدارة الممتلكات لضمان استدامة واستثمار أمثل للعقارات.",
      s4t:"المبادرات", s4d:"إطلاق المبادرات المجتمعية التي تتناسب مع رؤية المملكة 2030.",
      featuredEyebrow:"عقارات", featuredTitle:"عقارات مميزة", featuredLead:"تصفح أبرز العقارات المتاحة للبيع والإيجار حالياً.",
      whyEyebrow:"لماذا رياش", whyTitle:"لماذا رياش العقارية؟",
      w1t:"الخبرة والاحترافية", w1d:"فريق عمل متخصص يجمع بين المعرفة العميقة بالسوق والرؤية المبتكرة.",
      w2t:"الثقة والمصداقية", w2d:"نهتم ببناء علاقة طويلة الأمد مع عملائنا من خلال تقديم خدمات شفافة وموثوقة.",
      w3t:"تنوع الخدمات", w3d:"سواء كنت تبحث عن شراء، بيع، أو استثمار نقدم لك خيارات تناسب جميع احتياجاتك.",
      w4t:"الالتزام بالجودة", w4d:"نضمن أن تكون جميع التعاملات العقارية متميزة بمعايير عالية من الجودة والدقة.",
      statsTitle:"رياش في أرقام", statYears:"سنة خبرة", statDeals:"مليار ريال صفقات ناجحة", statClients:"عميل راضٍ",
      testimonialsEyebrow:"آراء العملاء", testimonialsTitle:"ماذا يقول عملاؤنا",
      partnersTitle:"شركاء النجاح",
      ctaTitle:"جاهز لإيجاد عقارك المثالي؟", ctaText:"تواصل مع فريقنا اليوم واحصل على استشارة مجانية بلا التزام.",
      ctaBtn:"احجز استشارتك المجانية"
    },
    properties:{
      metaTitle:"العقارات | رياش للتسويق العقاري", metaDesc:"تصفح شققاً وفللاً وأراضي ومكاتب للبيع والإيجار في أحياء جدة الراقية مع رياش للتسويق العقاري.",
      pageTitle:"العقارات", pageLead:"تصفح مجموعتنا الواسعة من العقارات الفاخرة للبيع والإيجار في جدة.",
      filtersTitle:"تصفية النتائج", purposeLabel:"الغرض", all:"الكل", typeLabel:"نوع العقار",
      districtLabel:"الحي", priceLabel:"النطاق السعري (ريال)", areaLabel:"المساحة (م²)", bedsLabel:"عدد الغرف",
      apply:"تطبيق الفلاتر", reset:"إعادة تعيين",
      sortLabel:"ترتيب حسب", sortNewest:"الأحدث", sortPriceAsc:"السعر: من الأقل", sortPriceDesc:"السعر: من الأعلى", sortAreaDesc:"المساحة: الأكبر",
      resultsFound:"عقار متاح", noResults:"لا توجد عقارات مطابقة لبحثك، حاول تعديل الفلاتر."
    },
    property:{
      back:"العودة إلى العقارات", overview:"نظرة عامة", features:"المميزات", description:"الوصف التفصيلي",
      calcTitle:"حاسبة التمويل العقاري", calcPrice:"قيمة العقار (ريال)", calcDown:"الدفعة الأولى (%)",
      calcYears:"مدة التمويل (سنوات)", calcRate:"معدل الفائدة السنوي (%)", calcMonthly:"القسط الشهري التقديري",
      bookTitle:"احجز معاينة", bookLead:"املأ النموذج وسنتواصل معك لتحديد موعد المعاينة.",
      formName:"الاسم الكامل", formPhone:"رقم الجوال", formEmail:"البريد الإلكتروني", formDate:"التاريخ المفضل للمعاينة",
      formMessage:"ملاحظات إضافية", formSubmit:"إرسال طلب المعاينة",
      locationTitle:"الموقع على الخريطة", similarTitle:"عقارات مشابهة"
    },
    projects:{
      metaTitle:"المشاريع | رياش للتسويق العقاري", metaDesc:"اكتشف مشاريع رياش العقارية التطويرية في جدة، نسب الإنجاز ومخططات الوحدات المتاحة.",
      pageTitle:"المشاريع", pageLead:"تعرف على مشاريعنا التطويرية الحالية ونسب الإنجاز وخطط الوحدات.",
      progress:"نسبة الإنجاز", unitsTitle:"مخطط الوحدات", unitType:"نوع الوحدة", totalUnits:"عدد الوحدات", status:"الحالة",
      available:"متاح", limited:"محدود", soldout:"مكتمل البيع"
    },
    about:{
      metaTitle:"من نحن | رياش للتسويق العقاري", metaDesc:"تعرف على قصة رياش للتسويق العقاري، رؤيتنا، رسالتنا، وفريق القيادة الذي يقود الشركة نحو الريادة.",
      pageTitle:"من نحن", pageLead:"قصتنا، رؤيتنا، وفريقنا الذي يقود رياش نحو الريادة في السوق العقاري.",
      storyEyebrow:"قصتنا", storyTitle:"رحلة بناء الثقة في السوق العقاري السعودي",
      storyText1:"انطلقت رياش للتسويق العقاري من مدينة جدة برؤية واضحة: أن تكون الجسر الموثوق بين الباحثين عن الفخامة وأصحاب العقارات المميزة.",
      storyText2:"على مدار سنوات من العمل، رسّخنا حضورنا في أحياء جدة الراقية من خلال فريق متمرس يجمع بين الخبرة المحلية العميقة والمعايير الاحترافية العالمية.",
      visionTitle:"الرؤية", visionText:"أن نكون الشركة الرائدة في مجال تسويق العقارات في المنطقة، معترف بنا من قبل العملاء والشركاء كمزود للخدمات العقارية المبتكرة والموثوقة.",
      missionTitle:"الرسالة", missionText:"تقديم خدمات تسويق عقاري متكاملة ومتميزة تلبي احتياجات العملاء، من خلال استخدام أحدث التقنيات واستراتيجيات التسويق المبتكرة، مع التركيز على الجودة والشفافية في التعاملات.",
      valuesTitle:"قيمنا", statsTitle:"إنجازاتنا بالأرقام",
      leadershipEyebrow:"القيادة والإدارة", leadershipTitle:"فريق القيادة",
      leadershipLead:"لدينا فريق قيادة يتمتع بخبرة واسعة في مجال العقارات والتسويق، ملتزم بتقديم أفضل الخدمات للعملاء والشركاء.",
      l1name:"أيمن الغامدي", l1role:"رئيس مجلس الإدارة", l1bio:"يتمتع بخبرة واسعة في المجال العقاري جعلته أحد الأسماء البارزة في هذا القطاع، ويمتلك شركة تطوير عقاري نفذت العديد من المشاريع المتميزة.",
      l2name:"عبد الله الزهراني", l2role:"المدير العام", l2bio:"اسم رائد في المجال العقاري بخبرة تزيد عن 20 عاماً، يمتلك إلماماً بخبايا السوق العقاري في مدينة جدة خاصة، ومستشار موثوق لدى العديد من العملاء.",
      l3name:"محمد المقبل", l3role:"مدير التسويق والمبيعات", l3bio:"يقود منظومة التسويق والمبيعات بروح عملية ونهج قائم على البيانات، يربط بين الاستراتيجية والتنفيذ لزيادة معدلات التحويل."
    },
    services:{
      metaTitle:"الخدمات | رياش للتسويق العقاري", metaDesc:"خدمات رياش العقارية: تسويق العقارات، الاستشارات العقارية، إدارة الأملاك، والاستشارات الاستثمارية في جدة.",
      pageTitle:"الخدمات", pageLead:"حلول عقارية متكاملة تغطي التسويق، الاستشارات، إدارة الأملاك، والمبادرات المجتمعية.",
      sv1title:"خدمات تسويق العقارات", sv1desc:"نصمم خططاً تسويقية مخصصة لعقارك تشمل التصوير الاحترافي، الإعلانات الرقمية المستهدفة، والعرض على أبرز المنصات العقارية لضمان أسرع وأفضل صفقة.",
      sv1f1:"تصوير احترافي وجولات افتراضية", sv1f2:"حملات إعلانية رقمية مستهدفة", sv1f3:"إدراج على المنصات العقارية الكبرى", sv1f4:"تقارير أداء دورية",
      sv2title:"الاستشارات العقارية", sv2desc:"فريق من الخبراء يقدم لك تحليلاً دقيقاً للسوق ومقارنة الأسعار لمساعدتك على اتخاذ قرار استثماري أو سكني مستنير.",
      sv2f1:"دراسة جدوى استثمارية", sv2f2:"تحليل مقارن للأسعار", sv2f3:"استشارات قانونية وتمويلية", sv2f4:"تحديد أفضل المواقع الاستثمارية",
      sv3title:"إدارة الأملاك", sv3desc:"ندير عقارك من الألف إلى الياء: تحصيل الإيجارات، الصيانة الدورية، والتواصل مع المستأجرين لضمان أفضل عائد استثماري.",
      sv3f1:"تحصيل الإيجارات وتقارير مالية", sv3f2:"صيانة دورية ومتابعة فنية", sv3f3:"إدارة عقود المستأجرين", sv3f4:"تسويق الوحدات الشاغرة",
      sv4title:"الاستشارات الاستثمارية", sv4desc:"نساعد المستثمرين الأفراد والمؤسسات على بناء محفظة عقارية متوازنة تحقق أعلى عائد بأقل مخاطرة.",
      sv4f1:"تحليل فرص الاستثمار", sv4f2:"تنويع المحفظة العقارية", sv4f3:"متابعة أداء الاستثمار", sv4f4:"تقارير سوقية دورية",
      processTitle:"كيف نعمل", p1t:"التواصل الأولي", p1d:"نستمع لاحتياجاتك ونحدد أهدافك العقارية بدقة.",
      p2t:"دراسة وتحليل", p2d:"نقدم تحليلاً للسوق وخيارات تناسب ميزانيتك وأهدافك.",
      p3t:"التنفيذ", p3d:"ننفذ الخطة المتفق عليها بشفافية كاملة معك.",
      p4t:"المتابعة", p4d:"نستمر بمتابعة النتائج وتقديم الدعم بعد إتمام الصفقة.",
      ctaTitle:"تحتاج استشارة عقارية؟", ctaText:"تواصل معنا الآن واحصل على استشارة مجانية من فريق الخبراء لدينا.", ctaBtn:"تواصل معنا"
    },
    contact:{
      metaTitle:"اتصل بنا | رياش للتسويق العقاري", metaDesc:"تواصل مع رياش للتسويق العقاري في جدة عبر الهاتف أو واتساب أو النموذج الإلكتروني.",
      pageTitle:"اتصل بنا", pageLead:"نحن هنا للإجابة على استفساراتك ومساعدتك في رحلتك العقارية.",
      formTitle:"أرسل لنا رسالة", formLead:"املأ النموذج التالي وسيتواصل معك فريقنا في أقرب وقت.",
      infoTitle:"معلومات التواصل", phoneLabel:"رقم الهاتف", emailLabel:"البريد الإلكتروني",
      addressLabel:"العنوان", hoursLabel:"ساعات العمل", mapTitle:"موقعنا على الخريطة",
      formName:"الاسم الكامل", formPhone:"رقم الجوال", formSubject:"الموضوع", formMessage:"رسالتك", formSubmit:"إرسال الرسالة"
    }
  },

  en: {
    meta:{ title:"Rayash Real Estate | Luxury Properties in Jeddah", desc:"Rayash Real Estate Marketing — your trusted partner for luxury properties in Jeddah: sale, rent, property management and investment consulting." },
    nav:{ home:"Home", properties:"Properties", projects:"Projects", about:"About Us", services:"Services", contact:"Contact" },
    common:{
      callUs:"Call Us", langSwitch:"العربية", whatsappCta:"Chat on WhatsApp",
      viewDetails:"View Details", viewAll:"View All Properties", loadMore:"Load More", send:"Send", sending:"Sending...",
      successMsg:"Your request has been received. Our team will contact you shortly.",
      sar:"SAR", perMonth:"/month", sqm:"sqm", beds:"Beds", baths:"Baths", area:"Area",
      forSale:"For Sale", forRent:"For Rent", scrollTop:"Back to top"
    },
    footer:{
      about:"Rayash Real Estate Marketing is your trusted partner in Saudi Arabia. We build your real estate future with confidence and distinction, offering integrated solutions that blend local expertise with future vision.",
      quicklinks:"Quick Links", ourServices:"Our Services", contactInfo:"Contact Info", followUs:"Follow Us",
      falLabel:"FAL License", crLabel:"Commercial Registration",
      rights:"© 2026 Rayash Real Estate Marketing. All rights reserved.",
      privacy:"Privacy Policy", terms:"Terms & Conditions"
    },
    home:{
      heroEyebrow:"Rayash Real Estate", heroTitle:"Building Your Real Estate Future with Confidence",
      heroLead:"Your trusted partner for luxury properties in Jeddah — sale, rent, property management and investment consulting at the highest professional standards.",
      ctaBrowse:"Browse Properties", ctaRequest:"Property Requests",
      searchCity:"City", searchType:"Property Type", searchPurpose:"Purpose", searchPrice:"Price Range", searchBtn:"Search Now",
      allCities:"All Districts", allTypes:"All Types", typeApartment:"Apartment", typeVilla:"Villa", typeLand:"Land", typeOffice:"Office",
      purposeSale:"For Sale", purposeRent:"For Rent", anyPrice:"Any Price",
      valuesEyebrow:"Values", valuesTitle:"The Values We Believe In",
      v1t:"Innovation", v1d:"Continuously seeking new methods to improve our services.",
      v2t:"Transparency", v2d:"Dealing with clarity and honesty with clients and partners.",
      v3t:"Professionalism", v3d:"Delivering services with a high level of professionalism and efficiency.",
      aboutEyebrow:"About Us", aboutTitle:"Connecting Luxury Seekers with Distinguished Properties",
      aboutText:"We specialize in connecting buyers and sellers of luxury properties in Saudi Arabia. Our experienced team is dedicated to delivering the highest level of service and expertise to our clients.",
      aboutBtn:"More About Us",
      servicesEyebrow:"Services", servicesTitle:"Products & Services", servicesLead:"Discover the wide range of real estate services we offer.",
      s1t:"Property Marketing", s1d:"Custom marketing plans for residential and commercial properties.",
      s2t:"Real Estate Consulting", s2d:"Specialized advice to help clients make informed decisions.",
      s3t:"Property Management", s3d:"Property management services ensuring sustainability and optimal investment.",
      s4t:"Initiatives", s4d:"Launching community initiatives aligned with Saudi Vision 2030.",
      featuredEyebrow:"Properties", featuredTitle:"Featured Properties", featuredLead:"Browse our top properties currently available for sale and rent.",
      whyEyebrow:"Why Rayash", whyTitle:"Why Rayash Real Estate?",
      w1t:"Expertise & Professionalism", w1d:"A specialized team combining deep market knowledge with innovative vision.",
      w2t:"Trust & Credibility", w2d:"We build long-term relationships with our clients through transparent, reliable service.",
      w3t:"Diverse Services", w3d:"Whether buying, selling or investing, we offer options for all your needs.",
      w4t:"Commitment to Quality", w4d:"We ensure every real estate transaction meets high standards of quality and accuracy.",
      statsTitle:"Rayash in Numbers", statYears:"Years of Experience", statDeals:"Billion SAR in Successful Deals", statClients:"Satisfied Clients",
      testimonialsEyebrow:"Testimonials", testimonialsTitle:"What Our Clients Say",
      partnersTitle:"Partners of Success",
      ctaTitle:"Ready to Find Your Perfect Property?", ctaText:"Contact our team today and get a free, no-obligation consultation.",
      ctaBtn:"Book Your Free Consultation"
    },
    properties:{
      metaTitle:"Properties | Rayash Real Estate", metaDesc:"Browse apartments, villas, land and offices for sale and rent in Jeddah's finest districts with Rayash Real Estate.",
      pageTitle:"Properties", pageLead:"Browse our extensive collection of luxury properties for sale and rent in Jeddah.",
      filtersTitle:"Filter Results", purposeLabel:"Purpose", all:"All", typeLabel:"Property Type",
      districtLabel:"District", priceLabel:"Price Range (SAR)", areaLabel:"Area (sqm)", bedsLabel:"Bedrooms",
      apply:"Apply Filters", reset:"Reset",
      sortLabel:"Sort By", sortNewest:"Newest", sortPriceAsc:"Price: Low to High", sortPriceDesc:"Price: High to Low", sortAreaDesc:"Area: Largest",
      resultsFound:"properties found", noResults:"No properties match your search. Try adjusting the filters."
    },
    property:{
      back:"Back to Properties", overview:"Overview", features:"Features", description:"Detailed Description",
      calcTitle:"Mortgage Calculator", calcPrice:"Property Price (SAR)", calcDown:"Down Payment (%)",
      calcYears:"Financing Term (Years)", calcRate:"Annual Interest Rate (%)", calcMonthly:"Estimated Monthly Payment",
      bookTitle:"Book a Viewing", bookLead:"Fill out the form and we'll contact you to schedule a viewing.",
      formName:"Full Name", formPhone:"Mobile Number", formEmail:"Email Address", formDate:"Preferred Viewing Date",
      formMessage:"Additional Notes", formSubmit:"Send Viewing Request",
      locationTitle:"Location on Map", similarTitle:"Similar Properties"
    },
    projects:{
      metaTitle:"Projects | Rayash Real Estate", metaDesc:"Discover Rayash's real estate development projects in Jeddah, completion rates and available unit plans.",
      pageTitle:"Projects", pageLead:"Explore our current development projects, completion rates and unit plans.",
      progress:"Completion Rate", unitsTitle:"Unit Plan", unitType:"Unit Type", totalUnits:"Total Units", status:"Status",
      available:"Available", limited:"Limited", soldout:"Sold Out"
    },
    about:{
      metaTitle:"About Us | Rayash Real Estate", metaDesc:"Learn about Rayash Real Estate Marketing's story, vision, mission, and the leadership team driving the company forward.",
      pageTitle:"About Us", pageLead:"Our story, vision, and the team leading Rayash toward market leadership.",
      storyEyebrow:"Our Story", storyTitle:"A Journey of Building Trust in the Saudi Real Estate Market",
      storyText1:"Rayash Real Estate Marketing launched from Jeddah with a clear vision: to be the trusted bridge between luxury seekers and distinguished property owners.",
      storyText2:"Over years of work, we've established our presence across Jeddah's finest districts through an experienced team combining deep local expertise with international professional standards.",
      visionTitle:"Vision", visionText:"To be the leading real estate marketing company in the region, recognized by clients and partners as a provider of innovative and trusted real estate services.",
      missionTitle:"Mission", missionText:"To deliver integrated, distinguished real estate marketing services that meet client needs, using the latest technologies and innovative marketing strategies, with a focus on quality and transparency.",
      valuesTitle:"Our Values", statsTitle:"Our Achievements in Numbers",
      leadershipEyebrow:"Leadership", leadershipTitle:"Leadership Team",
      leadershipLead:"We have a leadership team with extensive experience in real estate and marketing, committed to delivering the best services to clients and partners.",
      l1name:"Ayman Al-Ghamdi", l1role:"Chairman of the Board", l1bio:"Has extensive experience in real estate that made him one of the prominent names in the sector, and owns a real estate development company that has executed numerous distinguished projects.",
      l2name:"Abdullah Al-Zahrani", l2role:"General Manager", l2bio:"A leading name in real estate with over 20 years of experience, with deep knowledge of the Jeddah real estate market, and a trusted advisor to many clients.",
      l3name:"Mohammed Al-Muqbil", l3role:"Marketing & Sales Director", l3bio:"Leads the marketing and sales system with a practical, data-driven approach, linking strategy with execution to increase conversion rates."
    },
    services:{
      metaTitle:"Services | Rayash Real Estate", metaDesc:"Rayash real estate services: property marketing, real estate consulting, property management, and investment consulting in Jeddah.",
      pageTitle:"Services", pageLead:"Integrated real estate solutions covering marketing, consulting, property management, and community initiatives.",
      sv1title:"Property Marketing", sv1desc:"We design custom marketing plans for your property including professional photography, targeted digital ads, and listing on top real estate platforms to secure the fastest, best deal.",
      sv1f1:"Professional photography & virtual tours", sv1f2:"Targeted digital ad campaigns", sv1f3:"Listing on major real estate platforms", sv1f4:"Regular performance reports",
      sv2title:"Real Estate Consulting", sv2desc:"A team of experts provides precise market analysis and price comparison to help you make an informed investment or residential decision.",
      sv2f1:"Investment feasibility studies", sv2f2:"Comparative price analysis", sv2f3:"Legal & financing consultation", sv2f4:"Identifying the best investment locations",
      sv3title:"Property Management", sv3desc:"We manage your property end-to-end: rent collection, periodic maintenance, and tenant communication to ensure the best return on investment.",
      sv3f1:"Rent collection & financial reports", sv3f2:"Periodic maintenance & technical follow-up", sv3f3:"Tenant contract management", sv3f4:"Marketing vacant units",
      sv4title:"Investment Consulting", sv4desc:"We help individual and institutional investors build a balanced real estate portfolio that achieves the highest return with the lowest risk.",
      sv4f1:"Investment opportunity analysis", sv4f2:"Real estate portfolio diversification", sv4f3:"Investment performance monitoring", sv4f4:"Periodic market reports",
      processTitle:"How We Work", p1t:"Initial Contact", p1d:"We listen to your needs and define your real estate goals precisely.",
      p2t:"Study & Analysis", p2d:"We provide market analysis and options that suit your budget and goals.",
      p3t:"Execution", p3d:"We execute the agreed plan with full transparency with you.",
      p4t:"Follow-up", p4d:"We continue monitoring results and providing support after the deal closes.",
      ctaTitle:"Need Real Estate Advice?", ctaText:"Contact us now and get a free consultation from our team of experts.", ctaBtn:"Contact Us"
    },
    contact:{
      metaTitle:"Contact Us | Rayash Real Estate", metaDesc:"Get in touch with Rayash Real Estate Marketing in Jeddah by phone, WhatsApp, or our online form.",
      pageTitle:"Contact Us", pageLead:"We're here to answer your questions and help you on your real estate journey.",
      formTitle:"Send Us a Message", formLead:"Fill out the form below and our team will contact you as soon as possible.",
      infoTitle:"Contact Information", phoneLabel:"Phone Number", emailLabel:"Email Address",
      addressLabel:"Address", hoursLabel:"Working Hours", mapTitle:"Our Location on the Map",
      formName:"Full Name", formPhone:"Mobile Number", formSubject:"Subject", formMessage:"Your Message", formSubmit:"Send Message"
    }
  }
};

function t(key, lang){
  lang = lang || getLang();
  const parts = key.split(".");
  let obj = translations[lang];
  for(const p of parts){ obj = obj && obj[p]; }
  return obj !== undefined ? obj : key;
}

function getLang(){
  return localStorage.getItem("rayash-lang") || "ar";
}

function setLang(lang){
  localStorage.setItem("rayash-lang", lang);
  applyLang(lang);
}

function applyLang(lang){
  document.documentElement.setAttribute("lang", lang === "ar" ? "ar" : "en");
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const val = t(el.getAttribute("data-i18n"), lang);
    if(typeof val === "string") el.textContent = val;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder"), lang));
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el=>{
    el.innerHTML = t(el.getAttribute("data-i18n-html"), lang);
  });

  const title = document.querySelector("title[data-i18n-title]");
  if(title) document.title = t(title.getAttribute("data-i18n-title"), lang);
  const metaDesc = document.querySelector('meta[name="description"][data-i18n-meta]');
  if(metaDesc) metaDesc.setAttribute("content", t(metaDesc.getAttribute("data-i18n-meta"), lang));

  document.querySelectorAll("[data-i18n-lang-label]").forEach(el=>{
    el.textContent = t("common.langSwitch", lang);
  });

  document.dispatchEvent(new CustomEvent("langchange", { detail:{ lang } }));
}

document.addEventListener("DOMContentLoaded", ()=>{
  applyLang(getLang());
  document.querySelectorAll(".lang-switch, [data-lang-toggle]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      setLang(getLang() === "ar" ? "en" : "ar");
    });
  });
});
