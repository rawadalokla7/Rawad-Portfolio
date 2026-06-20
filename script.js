/**
 * Rawad Khaled Alokla - Modern Static Portfolio Controller
 * ----------------------------------------------------------------------------
 * Handcrafted with high optimization and clean vanilla JavaScript.
 * Implements bilingual support (AR/EN), dynamic active-scrollbar indicator,
 * mobile drawer toggle, and three fully operational developer sandbox suites.
 * ----------------------------------------------------------------------------
 */

// Global State
let isAr = true; // Default to Arabic as aligned with current layout
let activeSection = "about";

// Data Source Dictionary
const translations = {
  en: {
    navAbout: "About Us",
    navServices: "Services",
    navProjects: "Projects",
    navEducation: "Education",
    navPrice: "Price Matrix",
    navContact: "Let's Talk",
    logoName: "RAWAD",
    heroHeading: "HI, I'M RAWAD",
    heroDesc: "A 3D CREATOR & WEB ARCHITECT DRIVEN BY CRAFTING STRIKING AND UNFORGETTABLE PROJECTS",
    heroSub: "A web creator driven by crafting striking and pixel-perfect applications",
    heroActiveCTA: "Active Direct",
    heroEngLabel: "Bachelor of Info Eng.",
    heroLocLabel: "Damascus / Quneitra, Syria",
    heroCTA: "Contact Me Now",
    aboutHeading: "About Me",
    aboutText: "Motivated and detail-oriented Front-End Developer with a solid foundation in modern web technologies. Experienced in building responsive, user-friendly web applications using HTML, CSS, JavaScript, and React.js. Passionate about developing scalable interfaces and continuously improving performance and user experience. Currently expanding knowledge in networking (CCNA) and Linux systems (Red Hat).",
    servicesPre: "CAPABILITIES",
    servicesHeading: "Services",
    servicesDesc: "structured web frameworks integrated with physical visual high-end outcomes.",
    
    // Services
    service1_title: "3D Modeling",
    service1_desc: "Engineering standard low-poly and subdivision high-fidelity 3D assets with optimized mesh topology for real-time interactive renderers.",
    service2_title: "Rendering",
    service2_desc: "Producing photorealistic still outputs and high-contrast ambient setups with custom studio lighting and complex material physical layers.",
    service3_title: "Motion Design",
    service3_desc: "Bringing graphics to life with weighted keyframe easing, liquid morphs, dynamic camera transitions, and looping kinetic states.",
    service4_title: "Branding",
    service4_desc: "Formulating cohesive assets including logotypes, spatial design tokens, custom vectors, and strict typographic system constraints.",
    service5_title: "Web Design",
    service5_desc: "Engineering fluid grid proportions, immersive dark interfaces, premium typography pairings, and tactile desktop scroll animations.",

    // Projects Showcase
    projectsHeading: "Projects Showcase",
    project1_cat: "3D & Mathematics",
    project1_title: "WaveFlow - 3D Wave Sandbox",
    project1_desc: "A parameters-optimized 3D wave mapping and real-time mesh generator. Tinker with frequency, speed, and complex color-blended equations directly within our high-performance canvas sandbox.",
    project1_tag1: "HTML5 Canvas",
    project1_tag2: "Math Physics",
    project1_tag3: "3D Simulation",
    project1_tag4: "Control Knobs",

    project2_cat: "UI/UX & Design Systems",
    project2_title: "Aura - Glassmorphic Craft Studio",
    project2_desc: "A state-of-the-art interactive Tailwind & CSS glassmorphism builder. Customize backdrop blur, opacity layers, and gradient dual glows to instantly generate production-ready code blocks.",
    project2_tag1: "Tailwind Engine",
    project2_tag2: "Glassmorphism",
    project2_tag3: "CSS Generator",
    project2_tag4: "Glow Presets",

    project3_cat: "Asynchronous Engineering",
    project3_title: "Solaris - JSON API Inspector",
    project3_desc: "A developer-grade HTTP request inspector and async sandbox. Select profile or skill endpoints to mock variable network latency, track terminal stream logs, and preview live JSON responses.",
    project3_tag1: "Asynchronous JS",
    project3_tag2: "REST API",
    project3_tag3: "JSON Parser",
    project3_tag4: "Console Stream",

    launchLive: "Launch Live App",
    closeLive: "Close Live App",
    codeRepo: "Code Repo",

    // Interactive Badges
    activeApp1Label: "Live Demo Suite: Active Session on WaveFlow",
    activeApp2Label: "Live Demo Suite: Active Session on Aura Designer",
    activeApp3Label: "Live Demo Suite: Active Session on Solaris REST API",

    // Education
    educationPre: "ACADEMIC CRITERIA",
    educationHeading: "Education",
    educationDesc: "academic rigor paired with intensive full-stack industrial training courses.",
    eduDegree: "Bachelor of Information Engineering",
    eduSchool: "Al Ittihad Private University (IPU)",
    eduPeriod: "Graduation: 2025",
    eduDetail1: "Focused on modern software engineering principles, algorithms, and systems architectures.",
    eduDetail2: "Graduated with a solid academic foundation in computational networks and engineering database designs.",
    eduDomain: "CORE STREAMS:",

    // Courses
    courseHeader1: "SSIS ACADEMY",
    coursePeriod1: "Timeline: 27/02/2025 – 25/03/2025",
    courseHeader2: "NEW HORIZONS CERTIFICATION",
    coursePeriod2: "Timeline: 08/07/2023 – 25/09/2023",

    // Pricing
    pricePre: "PACKAGING OPTIONS",
    priceHeading: "Pricing",
    priceDesc: "simple structures configured for clear targets, with production-grade velocity.",
    bookBtn: "BOOK PACKAGE",
    priceCard1_title: "Creative Consult",
    priceCard1_desc: "Focused architectural review, layout system guidelines, and asset optimization strategy.",
    priceCard2_title: "Responsive Web / App",
    priceCard2_desc: "Full single-page react development with modern frameworks and strict performance indices.",
    priceCard3_title: "Elite Interactive Suite",
    priceCard3_desc: "Bespoke high-performance visual interfaces with creative kinetic code simulations.",
    pricePopular: "MOST POPULAR",

    // Contact form
    contactPre: "SECURE TRANSMISSION LAYER",
    contactHeading: "Contact",
    contactIntro: "Whether you have queries, opportunities, or a bold spatial interactive concept, let's write something gorgeous.",
    contactDetailsTitle: "PROFESSIONAL CHANNELS",
    contactForgeTitle: "Forge A Connection",
    contactFormTitle: "SECURE MAIL TRANSMITTER",
    formName: "Your Name",
    formEmail: "Your Email",
    formSubject: "Subject Theme",
    formMessage: "Your Message",
    btnSubmit: "Transmit Message",
    btnSubmitting: "TRANSMITTING MAIL...",
    msgSuccess: "Transmission compiled successfully.",
    msgError: "Check values. All input fields required.",

    // Footer
    footerPre: "CRAFTED PORTFOLIO",
    footerCopy: "© 2026 RAWAD. ENGINEERED WITH MAXIMUM INTENT FOR PRODUCTION-GRADE PERFORMANCE.",
    footerBottom: "DESIGN INTEGRITY ASSURED • LATENCY INJECTED MOCK CLUSTER",

    // App controls & Placeholders
    app1_sub: "PROJECT 01: MOTION & CALCULUS ENGINE",
    app1_title: "KINETIC VECTOR GENERATIVE STUDIO",
    app1_copied: "COPIED",
    app1_copy: "COPY CONFIG",
    app1_speed_lbl: "Propagation Speed",
    app1_amp_lbl: "Vector Amplitude",
    app1_wave_lbl: "Wavelength Factor",
    app1_density_lbl: "Curve Grid Density",
    app1_palette: "COLOR PALETTE:",
    app1_pal1: "Holographic Cyberpunk",
    app1_pal2: "Sunset Horizon",
    app1_pal3: "Matrix Aurora",

    app2_sub: "PROJECT 02: AURA GLASSMORPHISM DESIGNER",
    app2_title: "INTERACTIVE GLASSMORPHISM CUSTOMIZER",
    app2_control: "DENSITY & DESIGN CONTROLS",
    app2_blur_lbl: "Backdrop Blur",
    app2_opacity_lbl: "Background Opacity",
    app2_border_lbl: "Border Opacity",
    app2_glow_lbl: "Aura Glow Power",
    app2_tilt_lbl: "Spatial Card Scale",
    app2_emitter: "AURA GRADIENT PICKER:",
    app2_card_tag: "AURA VER. 2.6",
    app2_card_title: "PREMIUM GLASS COMPOSITION",
    app2_card_desc: "This card represents pure mathematical structure designed with transparent boundaries.",
    app2_copy_tw: "COPY TAILWIND CODE",
    app2_copied_tw: "COPIED TAILWIND",
    app2_copy_css: "COPY RAW CSS CODE",
    app2_copied_css: "COPIED RAW CSS",

    app3_sub: "PROJECT 03: ASYNC API DEBUGGER",
    app3_title: "LIVE REST API PLAYGROUND",
    app3_endpoint: "CHOOSE DESIRED API ENDPOINT:",
    app3_latency: "SIMULATED LATENCY",
    app3_run_request: "RUN REQUEST (GET)",
    app3_running_request: "LOADING RESPONSE STRUCT...",
    app3_copy_res: "COPY RESPONSE",
    app3_copied_res: "COPIED!",
    app3_res_body: "RAW RESPONSE BODY (200 OK):"
  },
  ar: {
    navAbout: "من أنا",
    navServices: "الخدمات",
    navProjects: "المشاريع",
    navEducation: "التعليم والشهادات",
    navPrice: "منظومة التسعير",
    navContact: "تواصل معي",
    logoName: "رواد",
    heroHeading: "مرحباً، أنا رواد",
    heroDesc: "مصمم ثلاثي أبعاد ومطور ومخطط ويب يسعى لبناء مشاريع مذهلة وتجارب لا تُنسى",
    heroSub: "مطور برمجيات ذو رؤية بصرية متكاملة لبناء منصات فائقة الاستجابة",
    heroActiveCTA: "متاح للتوظيف",
    heroEngLabel: "بكالوريوس هندسة معلومات",
    heroLocLabel: "دمشق، سوريا",
    heroCTA: "تواصل معي الآن",
    aboutHeading: "نبذة عني",
    aboutText: "مطور واجهات أمامية شغوف ومحترف ذو أساس متين وخبرة عميقة في تقنيات الويب الحديثة. متمكن من بناء تطبيقات ويب سريعة الاستجابة وسهلة الاستخدام باستخدام HTML و CSS و JavaScript و React.js. أهتم بتطوير واجهات جاهزة للتوسيع وتحسين الأداء وتجربة المستخدم بشكل مستمر. أقوم حالياً بتوسيع معرفتي في الشبكات (CCNA) وأنظمة لينكس (Red Hat).",
    servicesPre: "مجالات الإبداع والحلول",
    servicesHeading: "الخدمات الإبداعية",
    servicesDesc: "مجموعة متطورة من هندسة واجهات البرمجيات وتنسيقات الأبعاد الرقمية",
    
    // Services
    service1_title: "النمذجة ثلاثية الأبعاد",
    service1_desc: "تصميم وهندسة مجسمات ثلاثية الأبعاد بدقة هندسية عالية لخدمة بيئات العرض والمحاكاة التفاعلية الفورية.",
    service2_title: "الرندرة والإخراج الفني",
    service2_desc: "إنتاج لقطات وصور واقعية وتكوينات محيطة عالية التباين مع إضاءة استوديو مخصصة وخامات فيزيائية معقدة.",
    service3_title: "تصميم الحركة والأنيميشن",
    service3_desc: "المساهمة في إحياء الأصول الرسومية بحركات انسيابية، تحولات لزجة، انتقالات كاميرا ديناميكية وحالات حركية متكررة.",
    service4_title: "الهوية البصرية والبراندينغ",
    service4_desc: "صياغة أصول متماسكة تشمل الشعارات، رموز التصميم الفراغي، النواقل الرسومية وعناصر طباعة النصوص الدقيقة.",
    service5_title: "تصميم واجهات الويب",
    service5_desc: "هندسة نسب شبكية مرنة، واجهات داكنة غامرة، اقتران خطوط راقية وحركات تفاعلية ملموسة عند التمرير.",

    // Projects Showcase
    projectsHeading: "معرض الأعمال ومجالات الويب",
    project1_cat: "رسم ثلاثي الأبعاد ورياضيات",
    project1_title: "WaveFlow - 3D Wave Sandbox",
    project1_desc: "محاكي ثلاثي أبعاد تفاعلي لتوليد ورسم التموجات الرياضية المعقدة في الوقت الفعلي. تحكم في التردد، السرعة، وسعة الموجة مع مراقبة الأداء المباشر للشبكة الحسابية.",
    project1_tag1: "مساحة عرض HTML5",
    project1_tag2: "رياضيات وفيزياء",
    project1_tag3: "تمثيل ثلاثي الأبعاد",
    project1_tag4: "وحدات تحكم حركية",

    project2_cat: "تصميم النظم وواجهات المستخدم",
    project2_title: "Aura - Glassmorphic Craft Studio",
    project2_desc: "أداة تفاعلية لتصميم خامات الزجاج الحديث (Glassmorphic) بشكل فوري. تحكم في التمويه، الشفافية، والتوهج الجانبي لتوليد وتصدير أكواد التنسيقات مباشرة لمشروعك.",
    project2_tag1: "محرك تنسيقات Tailwind",
    project2_tag2: "خامات الزجاج الفاخر",
    project2_tag3: "مولد كود CSS",
    project2_tag4: "توهج وتدرجات",

    project3_cat: "هندسة الأنظمة اللامتزامنة",
    project3_title: "Solaris - JSON API Inspector",
    project3_desc: "منصة محاكاة واختبار واجهات البرمجة (APIs) غير المتزامنة. حدد مسارات معالجة البيانات لمراقبة تدفق الأسطر البرمجية للكونسول المباشر وتحليل استجابات الـ JSON مع اختبار سرعة الاستجابة.",
    project3_tag1: "برمجة لامتزامنة JavaScript",
    project3_tag2: "واجهة برمجة تطبيقات REST",
    project3_tag3: "محلل JSON الاستجابي",
    project3_tag4: "قراءة التدفق المباشر",

    launchLive: "تشغيل التطبيق التفاعلي",
    closeLive: "إغلاق التطبيق الحركي",
    codeRepo: "مستودع الكود",

    // Interactive Badges
    activeApp1Label: "العرض التجريبي والتفاعلي المباشر لـ WaveFlow Sandbox",
    activeApp2Label: "العرض التجريبي والتفاعلي المباشر لـ Aura Designer",
    activeApp3Label: "العرض التجريبي والتفاعلي المباشر لـ Solaris REST API",

    // Education
    educationPre: "التحصيل الأكاديمي والتدريب",
    educationHeading: "التعليم والتدريب",
    educationDesc: "الخلفية الأكاديمية والشهادات المهنية لضمان الحلول المتكاملة",
    eduDegree: "بكالوريوس في هندسة المعلومات",
    eduSchool: "جامعة الاتحاد الخاصة (IPU)",
    eduPeriod: "التخرج والاستحقاق: ٢٠٢٥",
    eduDetail1: "التركيز على مبادئ هندسة البرمجيات الحديثة، الخوارزميات، وبنيات الأنظمة وقواعد البيانات البرمجية.",
    eduDetail2: "تخرج بأساس أكاديمي متين في تصميم قواعد البيانات البرمجية وهندسة شبكات الحاسب المتكاملة.",
    eduDomain: "مجالات العمل الرئيسية:",

    // Courses
    courseHeader1: "الجمعية العلمية السورية للمعلوماتية",
    coursePeriod1: "التوقيت: ٢٧/٠٢/٢٠٢٥ – ٢٥/٠٣/٢٠٢٥",
    courseHeader2: "معهد نيو هورايزنز العالمي New Horizons",
    coursePeriod2: "التوقيت: ٠٨/٠٧/٢٠٢٣ – ٢٥/٠٩/٢٠٢٣",

    // Pricing
    pricePre: "منظومة الباقات والأسعار",
    priceHeading: "الأسعار والباقات",
    priceDesc: "باقات تسعير واضحة تضمن تقديم جودة لا تقبل المنافسة لخدمة أهداف مشاريع البرمجة والتصميم.",
    bookBtn: "احجز الباقة البرمجية",
    priceCard1_title: "استشارة إبداعية",
    priceCard1_desc: "جلسة برمجية مركزة لمراجعة تصميم نظام الويب وهيكلة الأصول ثلاثية الأبعاد والنمذجة.",
    priceCard2_title: "تطبيق لاندينغ متكامل",
    priceCard2_desc: "تصميم وتطوير تطبيق ويب كامل سريع الاستجابة ومحمي متكامل برمجياً بأحدث التقنيات.",
    priceCard3_title: "تجربة ويب حركية متكاملة",
    priceCard3_desc: "أقصى مستويات التفاعل الرقمي وتطويع الأبعاد للحصول على واجهة ويب بصرية فاخرة.",
    pricePopular: "الأكثر طلباً",

    // Contact form
    contactPre: "قنوات الاتصال المباشر",
    contactHeading: "تواصل معي",
    contactIntro: "سواء كان لديك استفسار، فرصة عمل، أو فكرة برمجية إبداعية، تواصل معي لنبني شيئاً مذهلاً.",
    contactDetailsTitle: "معلومات الهوية والاتصال",
    contactForgeTitle: "دعونا ننسج شراكة",
    contactFormTitle: "استمارة بريد آمنة وبطيئة الاستجابة",
    formName: "الاسم الكريم",
    formEmail: "البريد الإلكتروني",
    formSubject: "عنوان الطلب",
    formMessage: "تفاصيل طلبك هنا...",
    btnSubmit: "إرسال الطلب البريد",
    btnSubmitting: "جاري الترسيل والدمج...",
    msgSuccess: "تم الإرسال والعملية اكتملت بنجاح! شكراً لك.",
    msgError: "يرجى تعبئة كافة الحقول بشكل صحيح لكتابة الطلب.",

    // Footer
    footerPre: "حقوق التطوير والملكية مجدولة",
    footerCopy: "© ٢٠٢٦ رواد العكلة. صُمم بأعلى درجات الالتزام والجودة لتقديم واجهات فائقة السرعة والاستجابة.",
    footerBottom: "بوابة الأداء الفائق والسرعة المكتملة",

    // App controls & Placeholders
    app1_sub: "مشروع الأجهزة الحركية والنمذجة",
    app1_title: "محاكي الموجات الحركية ثلاثي الأبعاد",
    app1_copied: "تم النسخ",
    app1_copy: "نسخ الإعدادات",
    app1_speed_lbl: "سرعة التموج",
    app1_amp_lbl: "سعة الارتفاع",
    app1_wave_lbl: "طول الموجة",
    app1_density_lbl: "كثافة الخطوط",
    app1_palette: "تدرج الألوان:",
    app1_pal1: "حلم الثمانينات",
    app1_pal2: "الغروب الدافئ",
    app1_pal3: "المصفوفة الحيوية",

    app2_sub: "مشروع الواجهة وتأثير الزجاج",
    app2_title: "مصمم التأثيرات الزجاجية والهوية",
    app2_control: "مفاتيح التحكم بالأبعاد",
    app2_blur_lbl: "درجة التمويه (Blur)",
    app2_opacity_lbl: "شفافية الخلفية",
    app2_border_lbl: "قوة الحدود المعدنية",
    app2_glow_lbl: "شدة الهالة الخلفية",
    app2_tilt_lbl: "درجة الانحراف التراكمي",
    app2_emitter: "بواعث التوهج والظلال:",
    app2_card_tag: "إصدار النظم ٢.٦",
    app2_card_title: "تصميم زجاجي تفاعلي فاخر",
    app2_card_desc: "يقوم هذا الكود بإنشاء لوحة مخصصة ثلاثية الأبعاد ذات حدود متوهجة دقيقة خالية من العشوائية.",
    app2_copy_tw: "نسخ كود Tailwind",
    app2_copied_tw: "تم نسخ الكود!",
    app2_copy_css: "نسخ كود CSS خالص",
    app2_copied_css: "تم نسخ كود الـ CSS",

    app3_sub: "مشروع الـ API واختبار البيانات",
    app3_title: "لوحة اختبار وفحص سيرفر البيانات",
    app3_endpoint: "اختر مسار البيانات (Endpoints):",
    app3_latency: "محاكاة سرعة الاتصال",
    app3_run_request: "تشغيل طلب الاتصال",
    app3_running_request: "جاري جلب البيانات...",
    app3_copy_res: "نسخ الكود",
    app3_copied_res: "تم النسخ",
    app3_res_body: "هيكل البيانات الراجع (JSON):"
  }
};

// Raw profile data to feed mock API endpoints in sandbox
const profileData = {
  name: "Rawad Khaled Alokla",
  nameAr: "رواد خالد العقلة",
  title: "3D Creator & Senior Front-End Developer",
  phone: "0935878256",
  email: "rawadalo777@gmail.com",
  github: "https://github.com/rawadalokla7",
  linkedin: "https://www.linkedin.com/in/rawad-alokla",
  education: "Bachelor of Information Engineering (Grad: 2025)",
  location: "Damascus, Syria"
};

// Document Load Init
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage();
  initMobileMenu();
  initScrollTracker();
  initContactForm();
  
  // Initialize standard 3D live apps bindings
  initInteractiveShowroom();
  initMagneticPortrait();
  initScrollAnimations();
});

// Interactive Magnetic Avatar Portrait effect matching original React mechanics
function initMagneticPortrait() {
  const card = document.getElementById("profile-portrait-card");
  if (!card) return;

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const xOffset = x * 0.08;
    const yOffset = y * 0.08;
    
    card.style.animation = "none";
    card.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0) scale(1.02)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transition = "transform 0.4s ease-out";
    card.style.transform = "translate3d(0, 0, 0) scale(1)";
    
    setTimeout(() => {
      if (card) {
        card.style.transition = "all 0.3s ease-out"; // restore original Tailwind transition behavior
        if (!card.matches(":hover")) {
          card.style.animation = "floatPortrait 6s ease-in-out infinite";
        }
      }
    }, 400);
  });
}

// Scroll animation trigger using IntersectionObserver
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-12");
        entry.target.classList.add("opacity-100", "translate-y-0");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  const cards = [
    document.getElementById("about-card")
  ];
  
  // Also animate layout sections for general slickness
  cards.forEach(el => {
    if (el) observer.observe(el);
  });
}

// Splits the summary text and injects word-by-word tracing interactive effects
function renderAboutWords() {
  const container = document.getElementById("about-text-container");
  if (!container) return;

  const rawText = translations[isAr ? "ar" : "en"]["aboutText"] || "";
  const words = rawText.split(" ");
  container.innerHTML = "";

  words.forEach((word, index) => {
    const span = document.createElement("span");
    span.textContent = word;
    span.className = "text-white/60 hover:text-white transition-all duration-300 cursor-default inline-block select-all transform hover:scale-110";
    span.style.transition = "all 0.3s ease-out";
    
    // Proximity lighting highlight like React
    span.addEventListener("mouseenter", () => {
      container.childNodes.forEach((child, idx) => {
        if (Math.abs(idx - index) <= 2) {
          child.className = "text-white select-all inline-block scale-110 transition-all duration-300 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]";
        } else {
          child.className = "text-white/30 select-all inline-block scale-98 transition-all duration-300";
        }
      });
    });

    span.addEventListener("mouseleave", () => {
      container.childNodes.forEach((child) => {
        child.className = "text-white/60 select-all inline-block scale-100 transition-all duration-300";
      });
    });

    container.appendChild(span);
  });
}

// Update Language Text rendering on Document
function applyLanguage() {
  const direction = isAr ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", direction);
  document.documentElement.setAttribute("lang", isAr ? "ar" : "en");
  
  // Set directional text alignment on body
  document.body.className = `min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-sans antialiased overflow-x-hidden ${direction}`;
  
  // Query all components annotated with `data-translate` tag
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    // Skip about text if it's managed by word splitter
    if (key === "aboutText") return;
    if (translations[isAr ? "ar" : "en"][key]) {
      el.textContent = translations[isAr ? "ar" : "en"][key];
    }
  });

  // Handle placeholders translate
  document.querySelectorAll("[data-translate-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-translate-placeholder");
    if (translations[isAr ? "ar" : "en"][key]) {
      el.setAttribute("placeholder", translations[isAr ? "ar" : "en"][key]);
    }
  });

  // Swap language button text UI
  const langText = document.getElementById("lang-btn-text");
  if (langText) langText.textContent = isAr ? "English" : "عربي";

  // Re-run the interactive word trace rendering for "About Me"
  renderAboutWords();

  // Regenerate calculations panel for wave simulations
  if (waveState.isRunning) {
    updateCalculationOverlay();
  }
}

// Global toggle Language method declared on window
window.toggleSiteLanguage = function() {
  isAr = !isAr;
  applyLanguage();
  
  // Re-run icons replacement to avoid layout shifting
  if (window.lucide) {
    window.lucide.createIcons();
  }
};

// Navbar mobile controls
function initMobileMenu() {
  const burgerBtn = document.getElementById("btn-mobile-menu");
  const mobileMenuDrawer = document.getElementById("mobile-menu-drawer");
  let mobileOpen = false;

  if (burgerBtn && mobileMenuDrawer) {
    burgerBtn.addEventListener("click", () => {
      mobileOpen = !mobileOpen;
      if (mobileOpen) {
        mobileMenuDrawer.classList.remove("hidden");
        burgerBtn.innerHTML = `<i data-lucide="x" class="w-5 h-5 text-white"></i>`;
      } else {
        mobileMenuDrawer.classList.add("hidden");
        burgerBtn.innerHTML = `<i data-lucide="menu" class="w-5 h-5 text-white"></i>`;
      }
      lucide.createIcons();
    });
  }

  // Handle mobile anchors clicks
  window.navigateToMobileSection = function(id) {
    mobileOpen = false;
    if (mobileMenuDrawer) mobileMenuDrawer.classList.add("hidden");
    if (burgerBtn) {
      burgerBtn.innerHTML = `<i data-lucide="menu" class="w-5 h-5 text-white"></i>`;
      lucide.createIcons();
    }
    
    setTimeout(() => {
      scrollToAnchor(id);
    }, 100);
  };
}

// Navigation scroll and offset highlights
window.scrollToAnchor = function(id) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};

function initScrollTracker() {
  window.addEventListener("scroll", () => {
    const sections = ["about", "services", "projects", "education", "price", "contact"];
    const scrollPos = window.scrollY + 255;
    
    for (const sec of sections) {
      const el = document.getElementById(sec);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          activeSection = sec;
          
          // Reset highlights
          document.querySelectorAll("[id^='nav-link-']").forEach((link) => {
            link.classList.remove("text-cyan-400", "font-bold", "border-b", "border-cyan-400", "pb-1");
            link.classList.add("text-white/60");
          });

          // Set active highlight link
          const activeBtn = document.getElementById(`nav-link-${sec}`);
          if (activeBtn) {
            activeBtn.classList.remove("text-white/60");
            activeBtn.classList.add("text-cyan-400", "font-bold", "border-b", "border-cyan-400", "pb-1");
          }
          break;
        }
      }
    }
  });
}

// Contact Form submission logic
function initContactForm() {
  const form = document.getElementById("contact-webform");
  const successBadge = document.getElementById("form-msg-success");
  const errorBadge = document.getElementById("form-msg-error");
  const submitBtn = document.getElementById("btn-contact-submit");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("contact-input-name").value;
      const email = document.getElementById("contact-input-email").value;
      const txt = document.getElementById("contact-input-text").value;

      if (!name || !email || !txt) {
        if (errorBadge) {
          errorBadge.classList.remove("hidden");
          setTimeout(() => errorBadge.classList.add("hidden"), 3000);
        }
        return;
      }

      // Simulate sending
      if (submitBtn) {
        const spanText = submitBtn.querySelector("span");
        const originalText = spanText.textContent;
        spanText.textContent = isAr ? "جاري الترسيل والدمج..." : "TRANSMITTING MAIL...";
        submitBtn.setAttribute("disabled", "true");
        submitBtn.classList.add("opacity-60");

        setTimeout(() => {
          submitBtn.removeAttribute("disabled");
          submitBtn.classList.remove("opacity-60");
          spanText.textContent = originalText;
          
          // Clear inputs
          form.reset();

          if (successBadge) {
            successBadge.classList.remove("hidden");
            setTimeout(() => successBadge.classList.add("hidden"), 5000);
          }
        }, 1800);
      }
    });
  }

  // Direct email clip helper
  window.copyEmailAddress = function() {
    navigator.clipboard.writeText(profileData.email).then(() => {
      const copyBtn = document.getElementById("btn-copy-mail");
      const originalHtml = copyBtn.innerHTML;
      copyBtn.innerHTML = `<i data-lucide="check" class="text-emerald-400 w-3 h-3"></i> <span>COPIED!</span>`;
      lucide.createIcons();
      setTimeout(() => {
        copyBtn.innerHTML = originalHtml;
        lucide.createIcons();
      }, 2000);
    });
  };
}

// Showroom live applications open management
let activeShowroomApp = null;

window.toggleActiveApp = function(id) {
  const contentArea1 = document.getElementById("showroom-app1");
  const contentArea2 = document.getElementById("showroom-app2");
  const contentArea3 = document.getElementById("showroom-app3");

  const btn1 = document.getElementById("btn-toggle-live-project-1");
  const btn2 = document.getElementById("btn-toggle-live-project-2");
  const btn3 = document.getElementById("btn-toggle-live-project-3");

  const apps = {
    "project-1": { container: contentArea1, btn: btn1 },
    "project-2": { container: contentArea2, btn: btn2 },
    "project-3": { container: contentArea3, btn: btn3 }
  };

  // If clicked app is already active, close it
  if (activeShowroomApp === id) {
    apps[id].container.classList.add("hidden");
    resetBtnUI(apps[id].btn);
    activeShowroomApp = null;
    return;
  }

  // Close previous active
  if (activeShowroomApp) {
    apps[activeShowroomApp].container.classList.add("hidden");
    resetBtnUI(apps[activeShowroomApp].btn);
  }

  // Open target
  apps[id].container.classList.remove("hidden");
  setActiveBtnUI(apps[id].btn);
  activeShowroomApp = id;

  // Specific initializations
  if (id === "project-1") {
    startWaveEngine();
  } else if (id === "project-2") {
    renderAuraCardStyles();
  }

  // Wait Minor frame then scroll cleanly
  setTimeout(() => {
    apps[id].container.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 120);
};

function resetBtnUI(btn) {
  if (!btn) return;
  btn.classList.remove("bg-red-500", "text-white", "hover:bg-red-600");
  btn.classList.add("bg-white", "text-black", "hover:bg-cyan-300");
  const span = btn.querySelector("span");
  if (span) span.setAttribute("data-translate", "launchLive");
  const icon = btn.querySelector("i") || btn.querySelector("svg");
  if (btn.id.includes("project-1")) {
    btn.innerHTML = `<i data-lucide="sparkles" class="w-3.5 h-3.5 animated-spin"></i> <span data-translate="launchLive">Launch Live App</span>`;
  } else if (btn.id.includes("project-2")) {
    btn.innerHTML = `<i data-lucide="sliders" class="w-3.5 h-3.5"></i> <span data-translate="launchLive">Launch Live App</span>`;
  } else {
    btn.innerHTML = `<i data-lucide="terminal" class="w-3.5 h-3.5"></i> <span data-translate="launchLive">Launch Live App</span>`;
  }
  applyLanguage();
  lucide.createIcons();
}

function setActiveBtnUI(btn) {
  if (!btn) return;
  btn.classList.remove("bg-white", "text-black", "hover:bg-cyan-300");
  btn.classList.add("bg-red-500", "text-white", "hover:bg-red-600");
  btn.innerHTML = `<i data-lucide="x" class="w-3.5 h-3.5"></i> <span data-translate="closeLive">Close Live App</span>`;
  applyLanguage();
  lucide.createIcons();
}

/**
 * ============================================================================
 * INTERACTIVE APP 1: WaveFlow 3D Wave simulation
 * ============================================================================
 */
let waveState = {
  isRunning: false,
  canvas: null,
  ctx: null,
  speed: 1.2,
  amplitude: 35,
  wavelength: 0.015,
  density: 4,
  colorMode: "cyan-magenta",
  isPlaying: true,
  offset: 0,
  animationId: null
};

function initInteractiveShowroom() {
  waveState.canvas = document.getElementById("waveflow-canvas");
  if (waveState.canvas) {
    waveState.ctx = waveState.canvas.getContext("2d");
  }

  // Listeners App 1
  const sSpeed = document.getElementById("wave-speed-slider");
  const sAmp = document.getElementById("wave-amplitude-slider");
  const sLen = document.getElementById("wave-wavelength-slider");
  const sDen = document.getElementById("wave-density-slider");

  if (sSpeed) sSpeed.addEventListener("input", (e) => {
    waveState.speed = parseFloat(e.target.value);
    document.getElementById("wave-speed-val").textContent = waveState.speed.toFixed(1) + "x";
    updateCalculationOverlay();
  });
  if (sAmp) sAmp.addEventListener("input", (e) => {
    waveState.amplitude = parseInt(e.target.value);
    document.getElementById("wave-amplitude-val").textContent = waveState.amplitude + "px";
    updateCalculationOverlay();
  });
  if (sLen) sLen.addEventListener("input", (e) => {
    waveState.wavelength = parseFloat(e.target.value);
    document.getElementById("wave-wavelength-val").textContent = waveState.wavelength.toFixed(4);
    updateCalculationOverlay();
  });
  if (sDen) sDen.addEventListener("input", (e) => {
    waveState.density = parseInt(e.target.value);
    document.getElementById("wave-density-val").textContent = waveState.density + " curves";
    updateCalculationOverlay();
  });

  // App 1 Controls toggle
  const playBtn = document.getElementById("btn-wave-play");
  if (playBtn) {
    playBtn.addEventListener("click", () => {
      waveState.isPlaying = !waveState.isPlaying;
      playBtn.innerHTML = waveState.isPlaying ? `<i data-lucide="pause" class="w-4 h-4"></i>` : `<i data-lucide="play" class="w-4 h-4"></i>`;
      lucide.createIcons();
    });
  }

  const resetBtn = document.getElementById("btn-wave-reset");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      waveState.speed = 1.2;
      waveState.amplitude = 35;
      waveState.wavelength = 0.015;
      waveState.density = 4;
      
      if (sSpeed) sSpeed.value = 1.2;
      if (sAmp) sAmp.value = 35;
      if (sLen) sLen.value = 0.015;
      if (sDen) sDen.value = 4;

      document.getElementById("wave-speed-val").textContent = "1.2x";
      document.getElementById("wave-amplitude-val").textContent = "35px";
      document.getElementById("wave-wavelength-val").textContent = "0.0150";
      document.getElementById("wave-density-val").textContent = "4 curves";
      
      updateCalculationOverlay();
    });
  }

  const copyConfigBtn = document.getElementById("btn-wave-copy");
  if (copyConfigBtn) {
    copyConfigBtn.addEventListener("click", () => {
      const configString = `const waveConfig = {
  speed: ${waveState.speed},
  amplitude: ${waveState.amplitude},
  wavelength: ${waveState.wavelength},
  density: ${waveState.density},
  colorPreset: "${waveState.colorMode}"
};`;
      navigator.clipboard.writeText(configString).then(() => {
        const origText = copyConfigBtn.querySelector("span").textContent;
        copyConfigBtn.querySelector("span").textContent = isAr ? "تم النسخ" : "COPIED";
        setTimeout(() => {
          copyConfigBtn.querySelector("span").textContent = origText;
        }, 2000);
      });
    });
  }

  // App 1 Color palette pickers
  window.setWaveColorPreset = function(preset, activeBtnId) {
    waveState.colorMode = preset;
    document.querySelectorAll("[id^='btn-wave-color-']").forEach((btn) => {
      btn.className = "px-4 py-2 rounded-xl text-xs font-mono uppercase bg-white/5 border border-white/10 text-white/60 hover:text-white";
    });
    
    const activeBtn = document.getElementById(activeBtnId);
    if (preset === "cyan-magenta") {
      activeBtn.className = "px-4 py-2 rounded-xl text-xs font-mono uppercase bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-400 text-cyan-200";
    } else if (preset === "amber-rose") {
      activeBtn.className = "px-4 py-2 rounded-xl text-xs font-mono uppercase bg-gradient-to-r from-amber-500/20 to-rose-500/20 border border-amber-400 text-amber-200";
    } else {
      activeBtn.className = "px-4 py-2 rounded-xl text-xs font-mono uppercase bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400 text-emerald-200";
    }
  };


  /**
   * ============================================================================
   * INTERACTIVE APP 2: Aura Glassmorphism customizer
   * ============================================================================
   */
  const sBlur = document.getElementById("aura-blur-slider");
  const sBgOp = document.getElementById("aura-opacity-slider");
  const sBorderOp = document.getElementById("aura-border-slider");
  const sGlow = document.getElementById("aura-glow-slider");
  const sTilt = document.getElementById("aura-tilt-slider");

  if (sBlur) sBlur.addEventListener("input", (e) => {
    auraState.blur = parseInt(e.target.value);
    document.getElementById("aura-blur-val").textContent = auraState.blur + "px";
    renderAuraCardStyles();
  });
  if (sBgOp) sBgOp.addEventListener("input", (e) => {
    auraState.bgOpacity = parseFloat(e.target.value);
    document.getElementById("aura-opacity-val").textContent = (auraState.bgOpacity * 100).toFixed(0) + "%";
    renderAuraCardStyles();
  });
  if (sBorderOp) sBorderOp.addEventListener("input", (e) => {
    auraState.borderOpacity = parseFloat(e.target.value);
    document.getElementById("aura-border-val").textContent = (auraState.borderOpacity * 100).toFixed(0) + "%";
    renderAuraCardStyles();
  });
  if (sGlow) sGlow.addEventListener("input", (e) => {
    auraState.glowPower = parseInt(e.target.value);
    document.getElementById("aura-glow-val").textContent = auraState.glowPower + "%";
    renderAuraCardStyles();
  });
  if (sTilt) sTilt.addEventListener("input", (e) => {
    auraState.tilt = parseInt(e.target.value);
    document.getElementById("aura-tilt-val").textContent = auraState.tilt + "px";
    renderAuraCardStyles();
  });

  const resetAuraBtn = document.getElementById("btn-aura-reset");
  if (resetAuraBtn) {
    resetAuraBtn.addEventListener("click", () => {
      auraState.blur = 12;
      auraState.bgOpacity = 0.15;
      auraState.borderOpacity = 0.2;
      auraState.tilt = 2;
      auraState.glowPower = 30;
      auraState.gradientType = "aurora";

      if (sBlur) sBlur.value = 12;
      if (sBgOp) sBgOp.value = 0.15;
      if (sBorderOp) sBorderOp.value = 0.2;
      if (sGlow) sGlow.value = 30;
      if (sTilt) sTilt.value = 2;

      document.getElementById("aura-blur-val").textContent = "12px";
      document.getElementById("aura-opacity-val").textContent = "15%";
      document.getElementById("aura-border-val").textContent = "20%";
      document.getElementById("aura-glow-val").textContent = "30%";
      document.getElementById("aura-tilt-val").textContent = "2px";

      window.setAuraPreset("aurora");
    });
  }

  // App 2 presets emitter
  window.setAuraPreset = function(type) {
    auraState.gradientType = type;
    document.querySelectorAll("[id^='btn-aura-preset-']").forEach((btn) => {
      btn.className = "px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase bg-white/5 border border-white/10 text-white/50 hover:text-white";
    });
    const activeBtn = document.getElementById(`btn-aura-preset-${type}`);
    if (activeBtn) {
      activeBtn.className = "px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase bg-pink-500/20 border border-pink-400 text-pink-300";
    }
    renderAuraCardStyles();
  };

  // Copy code box 1 (Tailwind)
  const copyTwBtn = document.getElementById("btn-copy-tailwind");
  if (copyTwBtn) {
    copyTwBtn.addEventListener("click", () => {
      const code = getTailwindCodeString();
      navigator.clipboard.writeText(code).then(() => {
        const origText = copyTwBtn.querySelector("span").textContent;
        copyTwBtn.querySelector("span").textContent = isAr ? "تم نسخ الكود!" : "COPIED TAILWIND";
        setTimeout(() => {
          copyTwBtn.querySelector("span").textContent = origText;
        }, 2000);
      });
    });
  }

  // Copy code box 2 (CSS)
  const copyCssBtn = document.getElementById("btn-copy-css");
  if (copyCssBtn) {
    copyCssBtn.addEventListener("click", () => {
      const code = getCSSCodeString();
      navigator.clipboard.writeText(code).then(() => {
        const origText = copyCssBtn.querySelector("span").textContent;
        copyCssBtn.querySelector("span").textContent = isAr ? "تم نسخ كود الـ CSS" : "COPIED RAW CSS";
        setTimeout(() => {
          copyCssBtn.querySelector("span").textContent = origText;
        }, 2000);
      });
    });
  }


  /**
   * ============================================================================
   * INTERACTIVE APP 3: Solaris REST Client Explorer
   * ============================================================================
   */
  const latencySlider = document.getElementById("api-latency-slider");
  if (latencySlider) {
    latencySlider.addEventListener("input", (e) => {
      apiState.latency = parseInt(e.target.value);
      document.getElementById("api-latency-val").textContent = apiState.latency + "ms";
    });
  }

  window.setApiEndpoint = function(endpoint, activeBtnId) {
    apiState.selectedEndpoint = endpoint;
    document.querySelectorAll("[id^='btn-api-endpoint-']").forEach((btn) => {
      btn.className = "py-2 px-4 rounded-xl text-left font-mono text-xs text-white/60 bg-white/5 border border-white/5 hover:text-white w-full flex justify-between";
    });
    
    const activeBtn = document.getElementById(activeBtnId);
    if (activeBtn) {
      activeBtn.className = "py-2 px-4 rounded-xl text-left font-mono text-xs bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 w-full flex justify-between";
    }

    // Clear and set idle
    document.getElementById("api-json-response-container").classList.add("hidden");
    const termLogs = document.getElementById("api-terminal-logs");
    termLogs.innerHTML = `<div class="text-white/70">CONSOLE IDLE. Switched path to ${endpoint}. Click RUN REQUEST to query.</div>`;
  };

  const runRequestBtn = document.getElementById("btn-run-request");
  if (runRequestBtn) {
    runRequestBtn.addEventListener("click", () => {
      executeRESTRequest();
    });
  }

  const copyResponseBtn = document.getElementById("btn-copy-response");
  if (copyResponseBtn) {
    copyResponseBtn.addEventListener("click", () => {
      const jsonText = document.getElementById("api-json-pre").textContent;
      navigator.clipboard.writeText(jsonText).then(() => {
        const origText = copyResponseBtn.querySelector("span").textContent;
        copyResponseBtn.querySelector("span").textContent = isAr ? "تم النسخ" : "COPIED!";
        setTimeout(() => {
          copyResponseBtn.querySelector("span").textContent = origText;
        }, 2000);
      });
    });
  }
}

// Wave Canvas Runner App 1
function startWaveEngine() {
  if (waveState.isRunning) return;
  waveState.isRunning = true;
  
  // Resize handler
  const handleResize = () => {
    if (waveState.canvas && waveState.canvas.parentElement) {
      waveState.canvas.width = waveState.canvas.parentElement.clientWidth;
      waveState.canvas.height = 320;
    }
  };
  
  handleResize();
  window.addEventListener("resize", handleResize);

  function draw() {
    const ctx = waveState.ctx;
    const canvas = waveState.canvas;
    if (!ctx || !canvas) return;

    // Background trail clear
    ctx.fillStyle = "rgba(12, 12, 12, 0.15)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const count = waveState.density;
    const step = canvas.height / (count + 1);

    for (let i = 0; i < count; i++) {
      ctx.beginPath();
      const currentY = step * (i + 1);

      // Grid line indicator
      ctx.strokeStyle = "rgba(215, 226, 234, 0.03)";
      ctx.beginPath();
      ctx.moveTo(0, currentY);
      ctx.lineTo(canvas.width, currentY);
      ctx.stroke();

      ctx.beginPath();
      for (let x = 0; x < canvas.width; x++) {
        const wavePhase = waveState.offset + i * 0.4;
        const sineValue = Math.sin(x * waveState.wavelength + wavePhase);
        const cosineAddition = Math.cos(x * 0.005 - wavePhase * 0.7) * 0.3;
        const y = currentY + (sineValue + cosineAddition) * waveState.amplitude;

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      // Linear gradients settings
      let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      if (waveState.colorMode === "cyan-magenta") {
        gradient.addColorStop(0, "rgba(6, 182, 212, 0.85)"); 
        gradient.addColorStop(0.5, "rgba(236, 72, 153, 0.7)"); 
        gradient.addColorStop(1, "rgba(59, 130, 246, 0.85)"); 
      } else if (waveState.colorMode === "amber-rose") {
        gradient.addColorStop(0, "rgba(245, 158, 11, 0.85)"); 
        gradient.addColorStop(0.5, "rgba(244, 63, 94, 0.7)"); 
        gradient.addColorStop(1, "rgba(217, 70, 239, 0.85)"); 
      } else {
        gradient.addColorStop(0, "rgba(16, 185, 129, 0.85)"); 
        gradient.addColorStop(0.5, "rgba(6, 182, 212, 0.7)"); 
        gradient.addColorStop(1, "rgba(14, 165, 233, 0.85)"); 
      }

      ctx.strokeStyle = gradient;
      ctx.lineWidth = (i === count - 1) ? 2.5 : 1.2;
      ctx.shadowColor = "rgba(255, 255, 255, 0.1)";
      ctx.shadowBlur = 8;
      ctx.stroke();
      ctx.shadowBlur = 0;
    }

    if (waveState.isPlaying) {
      waveState.offset += waveState.speed * 0.012;
    }

    waveState.animationId = requestAnimationFrame(draw);
  }

  draw();
  updateCalculationOverlay();
}

function updateCalculationOverlay() {
  const container = document.getElementById("wave-raw-overlay");
  if (!container) return;

  const titleText = isAr ? "⚡ الحسابات الفورية" : "⚡ RAW CALCULATIONS";
  const speedSecVal = (waveState.speed * 0.012 * 60).toFixed(2);
  const curvesText = isAr ? "منحنيات" : "curves";

  container.innerHTML = `
    <span class="text-cyan-400 font-bold mb-1 tracking-wider text-[9px] sm:text-xs">${titleText}</span>
    <span>f(x, t) = A * sin(k * x + w * t) + cos(...)</span>
    <span>A = ${waveState.amplitude}px | k = ${waveState.wavelength.toFixed(4)} rad/px</span>
    <span>w (Velocity) = ${speedSecVal} rad/s</span>
    <span>density = ${waveState.density} ${curvesText}</span>
  `;
}

// Interactive App 2 states
let auraState = {
  blur: 12,
  bgOpacity: 0.15,
  borderOpacity: 0.2,
  tilt: 2,
  glowPower: 30,
  gradientType: "aurora"
};

const auraGradients = {
  aurora: "from-cyan-500/30 via-indigo-500/25 to-pink-500/30",
  goldmine: "from-amber-400/25 via-red-500/20 to-rose-600/25",
  matrix: "from-emerald-400/20 via-sky-500/15 to-violet-500/25",
  monochrome: "from-white/10 via-zinc-800/20 to-black/40",
};

const auraBackgroundStyles = {
  aurora: "linear-gradient(45deg, rgba(6, 182, 212, 0.3) 0%, rgba(99, 102, 241, 0.25) 50%, rgba(236, 72, 153, 0.3) 100%)",
  goldmine: "linear-gradient(45deg, rgba(245, 158, 11, 0.25) 0%, rgba(239, 68, 68, 0.2) 50%, rgba(225, 29, 72, 0.25) 100%)",
  matrix: "linear-gradient(45deg, rgba(16, 185, 129, 0.2) 0%, rgba(14, 165, 233, 0.15) 50%, rgba(139, 92, 246, 0.25) 100%)",
  monochrome: "linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, rgba(39, 39, 42, 0.2) 50%, rgba(0, 0, 0, 0.4) 100%)",
};

function renderAuraCardStyles() {
  const card = document.getElementById("preview-aura-glass-card");
  const glowNode = document.getElementById("preview-aura-glow-emitter");
  
  if (card && glowNode) {
    // Style adjustments
    card.style.backgroundColor = `rgba(14, 14, 15, ${auraState.bgOpacity})`;
    card.style.backdropFilter = `blur(${auraState.blur}px)`;
    card.style.webkitBackdropFilter = `blur(${auraState.blur}px)`;
    card.style.borderColor = `rgba(255, 255, 255, ${auraState.borderOpacity})`;
    card.style.transform = `rotate3d(1, 1, 0, ${auraState.tilt}deg)`;

    // Glow emitter adjustment
    glowNode.style.background = auraBackgroundStyles[auraState.gradientType];
    glowNode.style.filter = `blur(${auraState.glowPower}px)`;
    glowNode.style.opacity = auraState.glowPower / 100;
  }
}

function getTailwindCodeString() {
  return `<!-- Tailwind Configuration -->
<div class="relative group">
  <!-- Glowing Background -->
  <div class="absolute -inset-0.5 bg-gradient-to-r ${auraGradients[auraState.gradientType]} rounded-3xl blur-${auraState.glowPower > 20 ? 'lg' : 'md'} opacity-${auraState.glowPower} transition duration-1000 group-hover:opacity-100"></div>
  
  <!-- Glassmorphic Card -->
  <div class="relative px-8 py-6 bg-[#0E0E0F]/[${auraState.bgOpacity}] backdrop-blur-[${auraState.blur}px] border border-white/[${auraState.borderOpacity}] rounded-3xl">
    <h3 class="text-xl font-bold text-white">Interactive Custom Glass</h3>
    <p class="text-sm text-[#D7E2EA]/80 mt-2">Engineered by Rawad Khaled</p>
  </div>
</div>`;
}

function getCSSCodeString() {
  return `/* Modern Glassmorphic Box Styling */
.glass-card {
  background: rgba(14, 14, 15, ${auraState.bgOpacity});
  backdrop-filter: blur(${auraState.blur}px);
  -webkit-backdrop-filter: blur(${auraState.blur}px);
  border: 1px solid rgba(255, 255, 255, ${auraState.borderOpacity});
  border-radius: 24px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}`;
}


// Interactive App 3 API Database
let apiState = {
  selectedEndpoint: "/api/profile",
  latency: 600,
  loading: false
};

const apiRoutesResponse = {
  "/api/profile": {
    id: "rawad-01",
    name: profileData.name,
    career: profileData.title,
    phone: profileData.phone,
    email: profileData.email,
    github: profileData.github,
    linkedin: profileData.linkedin,
    status: "Available for creative opportunities",
    birthDate: "2000-07-23",
    location: profileData.location,
  },
  "/api/education": {
    institution: "Al Ittihad Private University (IPU)",
    degree: "Bachelor of Information Engineering",
    period: "Graduation: 2025",
    highlights: [
      "Focused on modern software engineering principles, algorithms, and systems architectures.",
      "Graduated with a solid academic foundation in computational networks and engineering database designs."
    ],
    trainingCourses: [
      {
        title: "Front-End Development Course",
        from: "Syrian Scientific Informatics Society (SSIS)",
        period: "27/02/2025 – 25/03/2025"
      },
      {
        title: "Full-Stack Development Course",
        from: "New Horizons",
        period: "08/07/2023 – 25/09/2023"
      }
    ]
  },
  "/api/skills": {
    programming: ["HTML5", "CSS3", "JavaScript (ES6+)", "Typescript", "React.js"],
    webCore: ["Responsive Web Design", "UI/UX Principles", "Grid Systems", "CSS variables"],
    tools: ["Git & GitHub version control", "REST API fetching", "Linux Basics (Red Hat)", "Networking (CCNA Progress)"],
    softSkills: ["Problem Solving", "Fluid Communication", "Rapid Self-Learning", "Adaptability"]
  },
  "/api/experience": {
    role: "Freelance / Personal Front-End Developer",
    period: "2023 - Present",
    highlights: [
      "Developed responsive and interactive web applications using HTML, CSS, and JavaScript with semantic standards.",
      "Built dynamic user interfaces using React.js component architecture, maximizing state reuse and performance.",
      "Integrated complex REST APIs elegantly using clean fetching mechanisms to render modern live dashboard data."
    ]
  }
};

function executeRESTRequest() {
  if (apiState.loading) return;
  apiState.loading = true;

  const btn = document.getElementById("btn-run-request");
  const origBtnText = btn.innerHTML;
  btn.setAttribute("disabled", "true");
  btn.className = "flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-mono text-xs uppercase text-white bg-zinc-800 cursor-not-allowed";
  btn.innerHTML = `<i data-lucide="wifi" class="text-emerald-400 animate-pulse w-3 h-3"></i> <span data-translate="app3_running_request">LOADING RESPONSE STRUCT...</span>`;
  applyLanguage();
  lucide.createIcons();

  const termLogs = document.getElementById("api-terminal-logs");
  const jsonContainer = document.getElementById("api-json-response-container");
  const progressLine = document.getElementById("api-progress-panel");
  const progressBar = document.getElementById("api-progress-bar");

  // Reset structures
  jsonContainer.classList.add("hidden");
  progressBar.style.width = "0%";
  progressLine.classList.remove("hidden");

  const now = new Date();
  const ts = () => `[${now.toTimeString().split(" ")[0]}]`;

  const messages = [
    `<div class="text-cyan-400 font-semibold">${ts()} [CLIENT-INIT]: Preparing XMLHttp-fetch trigger to http://rawad.portfolio${apiState.selectedEndpoint}</div>`,
    `<div class="text-zinc-500">${ts()} [DNS-RESOLVE]: Local host binding successfully resolved mapping to 127.0.0.1 (sandbox loopback)</div>`
  ];
  termLogs.innerHTML = messages.join("");

  const steps = 10;
  let currentStep = 1;

  const timer = setInterval(() => {
    currentStep++;
    const progressPerc = (currentStep / steps) * 100;
    progressBar.style.width = progressPerc + "%";

    const logTimestamp = new Date();
    const tsFormat = `[${logTimestamp.toTimeString().split(" ")[0]}]`;

    if (currentStep === 3) {
      messages.push(`<div class="text-yellow-500">${tsFormat} [SECURITY]: Syncing handshake TLS v1.3 symmetric keys over mock cluster</div>`);
    } else if (currentStep === 6) {
      messages.push(`<div class="text-emerald-400 font-bold">${tsFormat} [SERVER-ACK]: 200 OK Response fetched from host endpoint</div>`);
    } else if (currentStep === 9) {
      const respLength = JSON.stringify(apiRoutesResponse[apiState.selectedEndpoint]).length;
      messages.push(`<div class="text-pink-400">${tsFormat} [TRANSPORT]: Reading JSON stream blocks (${respLength} bytes buffered)</div>`);
    }

    termLogs.innerHTML = messages.join("");
    termLogs.scrollTop = termLogs.scrollHeight;

    if (currentStep >= steps) {
      clearInterval(timer);
      apiState.loading = false;
      progressLine.classList.add("hidden");

      // Reset button
      btn.removeAttribute("disabled");
      btn.className = "flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-mono text-xs uppercase text-black font-extrabold bg-white hover:bg-emerald-400 active:scale-95 duration-200";
      btn.innerHTML = origBtnText;
      applyLanguage();
      lucide.createIcons();

      const endTs = `[${new Date().toTimeString().split(" ")[0]}]`;
      messages.push(`<div class="text-emerald-400 font-extrabold">${endTs} [COMPLETED]: Connection securely closed after ${apiState.latency}ms latency constraints.</div>`);
      
      termLogs.innerHTML = messages.join("");
      termLogs.scrollTop = termLogs.scrollHeight;

      // Populate & open response container
      document.getElementById("api-json-pre").textContent = JSON.stringify(apiRoutesResponse[apiState.selectedEndpoint], null, 2);
      jsonContainer.classList.remove("hidden");
    }
  }, apiState.latency / steps);
}
