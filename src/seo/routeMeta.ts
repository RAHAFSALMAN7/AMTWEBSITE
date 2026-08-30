import type { AppLocale } from "../utils/localeRouting";
import { getStaticNewsPageMeta } from "../content/staticSeoNewsArticles";
import { DEFAULT_OG_IMAGE_PATH } from "./siteConfig";

export type PageMeta = {
  title: string;
  description: string;
  keywords?: string;
};

/** Path without locale prefix, lowercase, e.g. /about, /ict/data-network */
const META: Record<string, Record<AppLocale, PageMeta>> = {
  "/": {
    en: {
      title: "AMT | ICT, Low-Current & Smart Infrastructure Integrator",
      description:
        "Advanced Micro Technologies delivers enterprise ICT, CCTV, access control, AV, data centers, and OSP networks across Saudi Arabia—with trusted integration and support.",
      keywords:
        "ICT integration Saudi Arabia, low current systems, corporate network, data center, unified communications, CCTV, smart building technology",
    },
    ar: {
      title: "AMT | تكامل أنظمة الاتصالات والأنظمة الخفيفة والبنية الذكية",
      description:
        "تقدّم شركة التقنيات الدقيقة المتقدمة حلول الاتصالات والبنية التحتية للمؤسسات: شبكات البيانات، أنظمة المراقبة، التحكم بالدخول، الصوتيات، مراكز البيانات، وشبكات OSP في السعودية.",
      keywords:
        "تكامل تقنية المعلومات، أنظمة التيار الخفيف، شبكات المؤسسات، مركز بيانات، اتصالات موحدة، كاميرات مراقبة",
    },
  },
  "/about": {
    en: {
      title: "About AMT | Enterprise Technology Integration Partner",
      description:
        "Learn how AMT helps organizations design and deploy reliable ICT, security, AV, and infrastructure solutions—with a team focused on scalable, future-ready outcomes.",
      keywords: "about AMT, technology integrator KSA, enterprise IT partner, infrastructure consulting",
    },
    ar: {
      title: "من نحن | AMT شريك تكامل تقني للمؤسسات",
      description:
        "تعرّف على AMT وكيف تساعد المؤسسات على تصميم ونشر حلول الاتصالات والأمن والصوتيات والبنية التحتية بموثوقية وقابلية للتوسع.",
      keywords: "من نحن AMT، تكامل تقني، شريك تقنية مؤسسات",
    },
  },
  "/careers": {
    en: {
      title: "Careers at AMT | Join Our ICT & Infrastructure Team",
      description:
        "Explore careers at AMT — build enterprise ICT, security, AV, and outside plant infrastructure with a team focused on real projects and long-term growth across Saudi Arabia.",
      keywords: "AMT careers, jobs Saudi Arabia, ICT jobs, network engineer jobs, security systems careers, AV technician jobs",
    },
    ar: {
      title: "الوظائف في AMT | انضم إلى فريق الاتصالات والبنية التحتية",
      description:
        "اكتشف الفرص الوظيفية في AMT وابنِ بنية تحتية للاتصالات والأمن والصوتيات وشبكات OSP مع فريق يركز على مشاريع حقيقية ونمو طويل الأمد في السعودية.",
      keywords: "وظائف AMT، وظائف تقنية المعلومات، وظائف مهندس شبكات، وظائف أنظمة أمنية، وظائف فني صوتيات",
    },
  },
  "/services": {
    en: {
      title: "Technology Solutions | AMT ICT & Infrastructure Services",
      description:
        "Explore AMT solution portfolios spanning ICT, low-current, AV, and OSP—built for secure connectivity, collaboration, and operational resilience across your estate.",
      keywords: "ICT solutions, infrastructure services, security systems integration, AV integrator",
    },
    ar: {
      title: "الحلول التقنية | خدمات الاتصالات والبنية لدى AMT",
      description:
        "اكتشف محفظة حلول AMT في الاتصالات والأنظمة الخفيفة والصوتيات وشبكات OSP لربط آمن وتعاون فعّال واستمرارية تشغيل.",
      keywords: "حلول تقنية، تكامل أنظمة، صوتيات، بنية تحتية",
    },
  },
  "/solution-details": {
    en: {
      title: "Solution Areas | ICT, Security, AV & Outside Plant | AMT",
      description:
        "Browse AMT solution categories—from data networks and telephony to CCTV, fire alarm, meeting-room AV, and fiber OSP—each backed by proven integration expertise.",
      keywords: "solution catalog, data network, IP telephony, low voltage, fiber deployment",
    },
    ar: {
      title: "مجالات الحلول | اتصالات وأمن وصوتيات و OMT لدى AMT",
      description:
        "تصفّح فئات الحلول من شبكات البيانات والهاتفية إلى أنظمة المراقبة وإنذار الحريق وقاعات الاجتماعات وألياف OSP مع خبرة تكامل مثبتة.",
      keywords: "حلول تقنية، شبكات، أمن، صوتيات",
    },
  },
  "/projects": {
    en: {
      title: "Case Studies & Projects | AMT Signature Deployments",
      description:
        "See how AMT delivers campus networks, security, and collaboration at scale—highlighting technologies used and measurable outcomes for leading organizations.",
      keywords: "technology case study, campus network project, enterprise deployment KSA",
    },
    ar: {
      title: "مشاريع ودراسات حالة | تنفيذات مميزة من AMT",
      description:
        "اطلع على كيف تنفّذ AMT شبكات الحرم الجامعي والأمن والتعاون على نطاق واسع مع تقنيات ونتائج قابلة للقياس.",
      keywords: "مشاريع تقنية، شبكات مؤسسات، دراسة حالة",
    },
  },
  "/contact": {
    en: {
      title: "Contact AMT | Request a Consultation on Your Next Build",
      description:
        "Reach the AMT team for ICT, low-current, AV, or OSP projects. Share your goals, timelines, and sites—we respond with practical next steps and scope guidance.",
      keywords: "contact AMT, IT integrator inquiry, project consultation Saudi Arabia",
    },
    ar: {
      title: "اتصل بـ AMT | استشرنا لمشروعك القادم",
      description:
        "تواصل مع فريق AMT لمشاريع الاتصالات أو الأنظمة الخفيفة أو الصوتيات أو OSP—شاركنا الأهداف والجداول الزمنية لخطوات واضحة.",
      keywords: "تواصل AMT، استشارة تقنية، مشاريع مؤسسات",
    },
  },
  "/osp-solutions": {
    en: {
      title: "Outside Plant (OSP) Networks | Fiber & Copper | AMT",
      description:
        "AMT designs and builds outside plant networks—fiber and copper deployment, splicing, test, and documentation—for broadband-ready, compliant field infrastructure.",
      keywords: "outside plant fiber, OSP deployment, fiber splicing, broadband infrastructure KSA",
    },
    ar: {
      title: "شبكات OSP الخارجية | ألياف ونحاس | AMT",
      description:
        "تصمم وتنفّذ AMT شبكات المسافات الخارجية من نشر الألياف والنحاس والربط والاختبار والتوثيق لبنية جاهزة للنطاق العريض.",
      keywords: "شبكات OSP، ألياف بصرية، بنية تحتية",
    },
  },
  "/ict/data-network": {
    en: {
      title: "Data Network Solutions | Switched Campus & WAN | AMT",
      description:
        "Enterprise data networking from AMT—resilient switching, routing, and campus designs that keep users, apps, and sites connected with clarity and control.",
      keywords: "enterprise LAN, campus network design, data network integrator, WAN routing",
    },
    ar: {
      title: "حلول شبكات البيانات | حرم مؤسسي و WAN | AMT",
      description:
        "شبكات بيانات مؤسسية من AMT—تبديل وتوجيه وتصميم حرم يربط المستخدمين والتطبيقات والمواقع بثبات ومرونة.",
    },
  },
  "/ict/unified-communications": {
    en: {
      title: "Unified Communications & Collaboration | AMT",
      description:
        "Integrate voice, video, messaging, and meeting platforms with AMT—so teams collaborate securely on modern UC stacks aligned to your IT standards.",
      keywords: "unified communications, Teams rooms, video collaboration integration",
    },
    ar: {
      title: "الاتصالات الموحدة والتعاون | AMT",
      description:
        "تكامل الصوت والفيديو والرسائل ومنصات الاجتماعات مع AMT لتعاون آمن يتماشى مع معايير تقنية المعلومات لديك.",
    },
  },
  "/ict/wireless": {
    en: {
      title: "Wireless & Wi-Fi Solutions | Secure Enterprise WLAN | AMT",
      description:
        "High-performance wireless from AMT—coverage planning, secure authentication, and operations-friendly WLAN designs for offices, venues, and campuses.",
      keywords: "enterprise Wi-Fi, wireless LAN design, secure WLAN KSA",
    },
    ar: {
      title: "حلول الشبكات اللاسلكية وواي فاي المؤسسية | AMT",
      description:
        "شبكات لاسلكية عالية الأداء من AMT—تخطيط التغطية ومصادقة آمنة وتصميم تشغيلي للمكاتب والمؤسسات.",
    },
  },
  "/ict/data-center": {
    en: {
      title: "Data Center Design & Integration | AMT",
      description:
        "Data center solutions that balance performance, efficiency, and resilience—guided by AMT integration experience across compute, storage, and facility-scale projects.",
      keywords: "data center integration, enterprise DC design, server room solutions",
    },
    ar: {
      title: "تصميم وتكامل مراكز البيانات | AMT",
      description:
        "حلول مراكز بيانات توازن الأداء والكفاءة والمرونة مع خبرة AMT في مشاريع الحوسبة والتخزين والمرافق.",
    },
  },
  "/ict/network-security": {
    en: {
      title: "Network Security & Hardening | NAC, Firewall, Encryption | AMT",
      description:
        "Protect critical assets with AMT network security—access control, encryption, OS hardening, firewall zoning, and monitoring aligned to enterprise policy.",
      keywords: "network security, NAC, firewall zoning, enterprise encryption",
    },
    ar: {
      title: "أمن الشبكات والتصليب | NAC وجدار ناري وتشفير | AMT",
      description:
        "حماية الأصول الحساسة مع AMT—التحكم بالوصول والتشفير وتصليب الأنظمة والجدران والمراقبة وفق سياسات المؤسسة.",
    },
  },
  "/ict/ip-telephony": {
    en: {
      title: "IP Telephony & Voice Networks | AMT",
      description:
        "Modern IP telephony deployments with AMT—reliable voice infrastructure, migration planning, and integration alongside your broader data and UC strategy.",
      keywords: "IP telephony, VoIP integration, enterprise voice network",
    },
    ar: {
      title: "الهاتفية على بروتوكول الإنترنت وصوت المؤسسات | AMT",
      description:
        "نشر هاتفية IP حديثة مع AMT—بنية صوتية موثوقة وتخطيط ترحيل وتكامل مع استراتيجية البيانات والاتصالات الموحدة.",
    },
  },
  "/low-current/fire-alarm": {
    en: {
      title: "Fire Alarm & Life Safety Systems | Detection & Alerting | AMT",
      description:
        "Code-aligned fire detection and alerting from AMT—accurate smoke and heat sensing, occupant notification, and integration paths for complex facilities.",
      keywords: "fire alarm systems, smoke detection, life safety integration KSA",
    },
    ar: {
      title: "أنظمة إنذار الحريق والسلامة | كشف وإنذار | AMT",
      description:
        "أنظمة كشف إنذار حريق متوافقة مع AMT—استشعار دخان وحرارة وإخطار مكوّن ومسارات تكامل للمنشآت المعقدة.",
    },
  },
  "/low-current/cctv": {
    en: {
      title: "CCTV & Smart Video Security | Analytics-Ready VMS | AMT",
      description:
        "Centralized CCTV and VMS from AMT—smart video networks, analytics-ready platforms, and cloud-friendly options that scale campus and enterprise security.",
      keywords: "CCTV integration, video management software, smart surveillance",
    },
    ar: {
      title: "CCTV وأمن الفيديو الذكي | أنظمة إدارة فيديو | AMT",
      description:
        "CCTV وVMS مركزي من AMT—شبكات فيديو ذكية ومنصات تحليلات وخيارات سحابية قابلة للتوسع لأمن المؤسسات.",
    },
  },
  "/low-current/access-control": {
    en: {
      title: "Access Control & Identity at the Door | Lenel, Open APIs | AMT",
      description:
        "Enterprise access control with AMT—credentialing, biometrics, integrations, and open platforms that unify video and physical security operations.",
      keywords: "access control systems, Lenel partner, biometric access KSA",
    },
    ar: {
      title: "التحكم بالدخول والهوية | تكامل وفيديو مادي | AMT",
      description:
        "تحكم بالدخول مؤسسي مع AMT—اعتمادات بيومترية وتكامل ومنصات مفتوحة توحد أمن الفيديو والمباني.",
    },
  },
  "/low-current/master-clock": {
    en: {
      title: "Master Clock & Time Sync Systems | Precision Timing | AMT",
      description:
        "Legally traceable time and synchronized clocks from AMT—critical for broadcast, finance, healthcare, and mission networks that demand clock integrity.",
      keywords: "master clock system, network time sync, synchronized clocks",
    },
    ar: {
      title: "ساعة رئيسية ومزامنة زمنية | دقة توقيت | AMT",
      description:
        "وقت قانوني قابل للتتبع وساعات متزامنة من AMT—للبث والمالية والرعاية الصحية والشبكات الحساسة للزمن.",
    },
  },
  "/av/meeting-rooms": {
    en: {
      title: "Meeting Room AV & Conference Integration | AMT",
      description:
        "Professional meeting-room AV from AMT—clear audio, crisp video, and platform-aligned rooms for Teams and hybrid collaboration at enterprise scale.",
      keywords: "meeting room AV, conference room integration, Teams room systems",
    },
    ar: {
      title: "صوتيات غرف الاجتماعات والمؤتمرات | AMT",
      description:
        "صوتيات احترافية لغرف الاجتماع من AMT—صوت واضح وصورة عالية وغرف متوافقة مع Teams وتعاون هجين.",
    },
  },
  "/av/auditoriums": {
    en: {
      title: "Auditorium & Theater AV Systems | AMT",
      description:
        "Large-venue AV for auditoriums and theaters—sound, lighting, projection, and control layered for clarity, impact, and long-term serviceability.",
      keywords: "auditorium AV, theater sound system, large venue integration",
    },
    ar: {
      title: "أنظمة صوتيات المسارح والقاعات الكبرى | AMT",
      description:
        "صوتيات لقاعات ومسارح كبرى—صوت وإضاءة وعرض وتحكم بوضوح أداء وقابلية صيانة.",
    },
  },
  "/av/iptv": {
    en: {
      title: "IPTV & Digital Signage Platforms | AMT",
      description:
        "IPTV and signage from AMT—managed content, scheduling, and multi-screen delivery for corporate, hospitality, and operational communications.",
      keywords: "IPTV headend, digital signage enterprise, content scheduling",
    },
    ar: {
      title: "IPTV ولافتات رقمية مؤسسية | AMT",
      description:
        "IPTV ولافات من AMT—إدارة محتوى وجدولة وتوزيع متعدد الشاشات للفنادق والمؤسسات.",
    },
  },
  "/av/video-wall": {
    en: {
      title: "Video Wall Mounting & Alignment | Precision LED/LCD | AMT",
      description:
        "Structural-grade video wall mounting with multi-axis alignment—built for maintenance access, architectural flexibility, and scalable display footprints.",
      keywords: "video wall mount, LED wall installation, display alignment",
    },
    ar: {
      title: "تركيب ومحاذاة جدران الفيديو | LED/LCD | AMT",
      description:
        "حاملات جدار فيديو هيكلية مع محاذاة متعددة المحاور—صيانة سهلة ومرونة معمارية وقابلية توسع.",
    },
  },
  "/av/interactive-screens": {
    en: {
      title: "Interactive Displays & Touch Collaboration | AMT",
      description:
        "Interactive screens for learning and collaboration—multi-touch, wireless presentation paths, and lifecycle support from AMT integrators.",
      keywords: "interactive display, touch screen collaboration, smart board integration",
    },
    ar: {
      title: "شاشات تفاعلية وتعاون لمسي | AMT",
      description:
        "شاشات تفاعلية للتعلّم والتعاون—لمس متعدد وعرض لاسلكي ودعم دورة حياة من فريق AMT.",
    },
  },
  "/services/cctv-systems": {
    en: {
      title: "Enterprise CCTV Systems & IP Video | AMT Arabia",
      description:
        "Design, deploy, and operate enterprise CCTV and IP video platforms across KSA—analytics-ready cameras, secure VMS architecture, centralized monitoring, and lifecycle support from amt-arabia.net.",
      keywords:
        "CCTV systems Saudi Arabia, CCTV systems in the Kingdom, enterprise IP cameras, video management, smart surveillance, amt-arabia",
    },
    ar: {
      title: "أنظمة كاميرات مراقبة وفيديو IP للمؤسسات | إيه إم تي العربية",
      description:
        "تصميم ونشر وتشغيل منصات CCTV وفيديو IP مؤسسية في المملكة—كاميرات جاهزة للتحليلات، بنية VMS آمنة، مراقبة مركزية، ودعم مستمر.",
      keywords: "CCTV، أنظمة مراقبة، فيديو مؤسسات، amt-arabia",
    },
  },
  "/services/access-control": {
    en: {
      title: "Access Control & Identity Management | AMT Arabia",
      description:
        "Secure entry points with enterprise access control—readers, biometrics, badges, integrations with video and intrusion systems, and open platforms scaled for campuses, towers, and industrial sites in Saudi Arabia.",
      keywords:
        "access control systems Saudi, access control systems KSA, enterprise badge readers, biometric access, physical security Saudi Arabia, amt-arabia",
    },
    ar: {
      title: "التحكم بالدخول وإدارة الهوية للمؤسسات | إيه إم تي العربية",
      description:
        "تأمين نقاط الدخول بحلول تحكم بالدخول مؤسسية—قارئات، بيومترية، بطاقات، تكامل مع الفيديو والتسلل، ومنصات قابلة للتوسع للحرم والأبراج والصناعة.",
      keywords: "تحكم بالدخول، أنظمة بيومترية، أمن مباني، amt-arabia",
    },
  },
  "/services/network-infrastructure": {
    en: {
      title: "Network Infrastructure & Structured Cabling | AMT Arabia",
      description:
        "End-to-end network infrastructure for resilient enterprises—campus switching and routing, fiber/Copper plant, wireless, segmentation, and performance-tested documentation aligned to your ICT standards in the Kingdom.",
      keywords:
        "network infrastructure Saudi Arabia, structured cabling, enterprise LAN, campus network, fiber backbone",
    },
    ar: {
      title: "البنية التحتية للشبكات والكابلات المنظمة | إيه إم تي العربية",
      description:
        "بنية شبكية شاملة لمؤسسات مرنة—تبديل وتوجيه الحرم، نبات ألياف ونحاس، لاسلكي، تجزئة الشبكة، وتوثيق مختبر أداء وفق معايير تقنية المعلومات.",
      keywords: "بنية تحتية شبكات، كابل منظم، LAN مؤسسات، amt-arabia",
    },
  },
  "/services/smart-building-solutions": {
    en: {
      title: "Smart Building Solutions & IoT Integration | AMT Arabia",
      description:
        "Unify low-current, ICT, and operational systems into smarter buildings—monitoring, energy-aware controls, integrated security, and data paths that scale for mixed-use developments across Saudi Arabia.",
      keywords:
        "smart building Saudi Arabia, building automation, IoT integration, integrated security, BMS ICT",
    },
    ar: {
      title: "حلول المباني الذكية وتكامل إنترنت الأشياء | إيه إم تي العربية",
      description:
        "مواءمة الأنظمة الخفيفة وتقنية المعلومات والتشغيل في مبانٍ أذكى—مراقبة، تحكم موفر للطاقة، أمن متكامل، ومسارات بيانات قابلة للتوسع للمشاريع المختلطة.",
      keywords: "مبنى ذكي، أتمتة مباني، تكامل IoT، amt-arabia",
    },
  },
};

const NEWS_FALLBACK: Record<AppLocale, PageMeta> = {
  en: {
    title: "News | AMT Updates on Technology & Projects",
    description:
      "Read the latest AMT announcements, deployment insights, and technology perspectives across ICT, security, AV, and infrastructure programs.",
    keywords: "AMT news, technology announcements, infrastructure updates",
  },
  ar: {
    title: "الأخبار | تحديثات AMT",
    description:
      "آخر أخبار وإعلانات ورؤى AMT حول الاتصالات والأمن والصوتيات والبنية التحتية.",
    keywords: "أخبار AMT، تقنية، مشاريع",
  },
};

export function getPageMeta(pathWithoutLocale: string, locale: AppLocale): PageMeta {
  const key = pathWithoutLocale === "" ? "/" : pathWithoutLocale;
  if (key.startsWith("/news/")) {
    const slug = key.slice("/news/".length);
    const staticNews = getStaticNewsPageMeta(slug, locale);
    if (staticNews) return staticNews;
    return NEWS_FALLBACK[locale];
  }
  const row = META[key];
  if (row) return row[locale];
  return META["/"][locale];
}

/** Path under /public for og:image (add a 1200×630 image at this path for best social previews). */
export function getDefaultOgImagePath(): string {
  return DEFAULT_OG_IMAGE_PATH;
}
