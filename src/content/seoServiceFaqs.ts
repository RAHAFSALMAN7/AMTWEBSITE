import type { AppLocale } from "../utils/localeRouting";
import type { ServicePageId } from "./seoServicePages";

export type ServiceFaqItem = { q: string; a: string };

export const SERVICE_PAGE_FAQS: Record<ServicePageId, Record<AppLocale, ServiceFaqItem[]>> = {
  "cctv-systems": {
    en: [
      {
        q: "Do you deliver CCTV projects across Saudi Arabia, not only in one city?",
        a: "Yes. AMT supports enterprise CCTV and IP video rollouts throughout the Kingdom—including Riyadh, Jeddah, the Eastern Province (Khobar/Dammam), and major industrial zones—using a delivery model built around documented scopes, staging, and acceptance testing so multi-site programs stay consistent.",
      },
      {
        q: "Can CCTV deployments align with our corporate IT security policies?",
        a: "We design IP video to ride on governed network segments, controlled VMS access, encryption expectations your CISO cares about, and monitoring hooks that integrate with your operations. The goal is security footage as a managed service, not a shadow network bolted onto LAN.",
      },
      {
        q: "How do you help us choose between on-premises, hybrid, or cloud-connected recording?",
        a: "We map retention windows, legal and audit requirements, bandwidth realities, and recovery targets—then recommend an architecture your network team can sustain. Hybrid often wins when enterprises want central oversight without sacrificing local survivability.",
      },
      {
        q: "What does a conversion-focused next step look like with AMT?",
        a: "Share your facility list, camera counts, stakeholder goals, and timeline. We respond with a workshop-style scope alignment, risk assumptions, and a phased plan you can budget against—so procurement and IT approve with confidence.",
      },
      {
        q: "Will AMT integrate CCTV with access control and our SOC workflows?",
        a: "Where platforms support open APIs or certified integrations, we map event correlation between video, access alarms, and ticketing so operators investigate faster. We avoid brittle one-off scripts that become unsupported after go-live.",
      },
    ],
    ar: [
      {
        q: "هل تنفّذون مشاريع CCTV في أنحاء المملكة وليس مدينة واحدة؟",
        a: "نعم. تدعم إيه إم تي العربية طرح كاميرات وبنية فيديو IP للمؤسسات في أنحاء المملكة—بما فيها الرياض وجدة والمنطقة الشرقية (الخبر والدمام) والمناطق الصناعية الكبرى—بنموذج تسليم يعتمد على نطاق موثّق ومراحل واختبارات قبول ليبقى البرنامج متعدد المواقع متسقًا.",
      },
      {
        q: "هل يمكن مواءمة نشر CCTV مع سياسات أمن تقنية المعلومات؟",
        a: "نصمّم الفيديو على بشرات شبكة محكومة، ووصول VMS مضبوط، وتوقعات تشفير يهتم بها مدير الأمن السيبراني، وخطافات مراقبة تندمج مع التشغيل. الهدف أن يكون الفيديو خدمة مُدارة لا شبكة ظل.",
      },
      {
        q: "كيف تساعدونا على الاختيار بين تسجيل محلي أو هجين أو سحابي؟",
        a: "نربط نوافذ الاحتفاظ والمتطلبات القانونية والتدقيق وواقع عرض النطاق وأهداف الاستعادة—ثم نوصي ببنية يستطيع فريق الشبكات إدامتها. غالبًا يفوز النموذج الهجين عند رغبة رؤية مركزية دون التفريط في البقاء المحلي.",
      },
      {
        q: "ما الخطوة التالية العملية مع إيه إم تي؟",
        a: "شاركونا قائمة المرافق وأعداد الكاميرات وأهداف أصحاب المصلحة والجدول الزمني. نرد بمواءمة نطاق مبني على ورشة عمل وافتراضات مخاطرة وخطة مراحل يمكن تمويلها—لاعتماد المشتريات وتقنية المعلومات بثقة.",
      },
      {
        q: "هل تدمجون CCTV مع التحكم بالدخول وسير عمل مركز العمليات؟",
        a: "حيث تدعم المنصات واجهات مفتوحة أو تكاملًا معتمدًا، نخطط لربط الأحداث بين الفيديو وتنبيهات الدخول وتذاكر التشغيل لتسريع التحقيق. نتجنب نصوصًا هشة تفقد الدعم بعد الإطلاق.",
      },
    ],
  },
  "access-control": {
    en: [
      {
        q: "Can you modernize access control without forcing a rip-and-replace across every site?",
        a: "Often yes. We assess badge technologies, panels, readers, and interlocks—then stage a blueprint that reuses viable hardware where risk allows while replacing the weakest controls first. That protects CAPEX while improving real security outcomes in Riyadh and Eastern Province campuses.",
      },
      {
        q: "How quickly can onboarding/offboarding changes reflect at doors?",
        a: "Speed depends on HR connectors, directory governance, and controller design—but we aim for policy changes that propagate in minutes, not days, by reducing manual spreadsheet workflows and clarifying authoritative identity sources.",
      },
      {
        q: "Do you support biometric and mobile credentials for high-security zones?",
        a: "We implement reader strategies matched to your assurance tier—cards, biometrics, mobile credentials, or combinations—while preserving privacy and audit logging suitable for regulated environments in Saudi Arabia.",
      },
      {
        q: "What should we prepare before requesting a proposal?",
        a: "Floor plans with controlled openings, current vendor stack, integration needs (VMS, elevators, intrusion), and your target compliance posture. With that, AMT returns an executable scope, not a generic catalog quote.",
      },
      {
        q: "Will physical access integrate with our IT identity systems?",
        a: "Where appropriate we align physical roles with IT identity lifecycle practices—so contractors, temps, and employees inherit consistent policies and fewer orphaned credentials linger after departures.",
      },
    ],
    ar: [
      {
        q: "هل يمكن حداثة التحكم بالدخول دون استبدال كامل لكل المواقع؟",
        a: "غالبًا نعم. نقيّم تقنيات البطاقات واللوحات والقراءات والارتباطات—ثم نمهّد مخططًا يعيد استخدام العتاد القابل للاستمرار حيث يسمح الخطر بينما نستبدل أضعف الضوابط أولًا. ذلك يحمي رأس المال مع تحسين نتائج الأمن في الرياض والمنطقة الشرقية.",
      },
      {
        q: "ما سرعة انعكاس تغييرات الالتحاق/المغادرة على الأبواب؟",
        a: "يعتمد على روابط الموارد البشرية وحوكمة الدليل وتصميم وحدات التحكم—لكننا نستهدف انتشار السياسات في دقائق لا أيام عبر تقليل الجداول اليدوية وتوضيح مصادر الهوية المرجعية.",
      },
      {
        q: "هل تدعمون البيومترية والاعتمادات المحمولة للمناطق عالية الحساسية؟",
        a: "ننفّذ استراتيجيات قراءة متناسبة مع مستوى الضمان المطلوب—بطاقات، بيومترية، اعتمادات محمولة، أو مزيج—مع احترام الخصوصية وتسجيل تدقيق يلائم بيئات مُنظّمة في المملكة.",
      },
      {
        q: "ما الذي نجهّزه قبل طلب عرض أسعار؟",
        a: "مخططات طوابق مع نقاط التحكم، ومكدس المورّد الحالي، واحتياجات التكامل (فيديو، مصاعد، تسلل)، والوضعية الامتثالية المستهدفة. مع ذلك تعود إيه إم تي بنطاق قابل للتنفيذ لا عرض كتالوج عام.",
      },
      {
        q: "هل يدمج الدخول المادي مع أنظمة هوية تقنية المعلومات؟",
        a: "حيث يلائم نموذج دورة حياة الهوية المادي مع التقنية—فيتّسق المقاولون والمؤقتون والموظفون ويقل اعتام الاعتمادات بعد المغادرة.",
      },
    ],
  },
  "network-infrastructure": {
    en: [
      {
        q: "Why is network segmentation emphasized for Saudi enterprise campuses?",
        a: "Segmentation isolates user, guest, security, and operational traffic so policy reflects trust boundaries—reducing blast radius when incidents occur and making camera, voice, and ERP performance more predictable on congested links.",
      },
      {
        q: "Do you deliver structured cabling and fiber testing documentation for handover?",
        a: "Yes. We emphasize labeled plants, test results that survive audits, and as-built records your internal teams can rely on during expansions across Riyadh, Jeddah, or industrial cities.",
      },
      {
        q: "How do you scope wireless for warehouses versus corporate offices?",
        a: "We start with capacity models, RF survey methodology, and onboarding security—then map SSIDs to firewall zones aligned with your governance. Warehouses prioritize roaming and interference; towers prioritize density and guest separation.",
      },
      {
        q: "Can you help prior to a security hardening or CCTV expansion project?",
        a: "Absolutely. Many clients engage AMT for an honest baseline—identifying uplink bottlenecks, aging switches, and documentation gaps—before funding large physical security or UC programs that will stress the LAN.",
      },
      {
        q: "What is the recommended first call-to-action for IT leaders?",
        a: "Request a network readiness workshop: we bring a checklist covering switching, routing, wireless, NAC alignment, and cable plant maturity—and leave you with a prioritized investment map tied to business outcomes.",
      },
    ],
    ar: [
      {
        q: "لماذا تُبرَز تجزئة الشبكة لحرم المؤسسات في السعودية؟",
        a: "تعزل التجزئة حركة المستخدمين والضيوف والأمن والتشغيل بحيث تعكس السياسة حدود الثقة—فينقص نطاق الانفجار عند الحوادث وتزداد قابلية توقع أداء الكاميرات والصوت وERP على روابط مزدحمة.",
      },
      {
        q: "هل تقدّمون كابلًا منظّمًا وتوثيق اختبار ألياف للتسليم؟",
        a: "نعم. نركّز على نبات مُسمّى ونتائج اختبار تصمد للمراجعة وسجلات كما بُنيت يعتمد عليها فريقكم أثناء التوسعات في الرياض أو جدة أو المدن الصناعية.",
      },
      {
        q: "كيف تحددون نطاق اللاسلكي للمستودعات مقابل المكاتب؟",
        a: "نبدأ بنماذج سعة ومنهجية مسح RF وأمن الانضمام—ثم نربط SSID بمناطق جدار ناري متوافقة مع الحوكمة. تُفضّل المستودعات التجوال والتداخل بينما تُفضّل الأبراج الكثافة وفصل الضيف.",
      },
      {
        q: "هل تساعدون قبل مشروع تعزيز أمني أو توسع كاميرات؟",
        a: "بالتأكيد. يستعين عملاء بإيه إم تي لخط أساس صادق—تحديد اختناقات الوصلات والمبدلات المنهكة وفجوات التوثيق—قبل تمويل برامج أمن مادي أو اتصالات موحدة مرهقة للـ LAN.",
      },
      {
        q: "ما أول خطوة موصى بها لقادة تقنية المعلومات؟",
        a: "اطلبوا ورشة جاهزية شبكة: نأتي بقائمة تغطي التبديل والتوجيه واللاسلكي ومواءمة NAC ونضج نبات الكابلات—وتغادرون بخريطة استثمار ذات أولويات مربوطة بالنتائج.",
      },
    ],
  },
  "smart-building-solutions": {
    en: [
      {
        q: "What does “smart building” mean in practical terms for KSA owners?",
        a: "It means coherent supervision across HVAC, access, video, energy, and occupant apps—so facilities can respond faster, spend less on reactive maintenance, and prove performance to stakeholders without ad-hoc spreadsheets.",
      },
      {
        q: "How do you prevent IoT onboarding from creating cybersecurity debt?",
        a: "We define what joins the enterprise network versus segregated building backbones, enforce onboarding inspections, and align naming, time sync, and privileged access so NOC teams retain visibility.",
      },
      {
        q: "Can pilots scale to portfolio-wide programs across multiple cities?",
        a: "Yes—AMT stages measurable pilots with documented integration patterns, operator training, and monitoring hooks before repeating across regions, reducing the risk of one-off engineering every time a tower goes live.",
      },
      {
        q: "Which internal teams should join the first workshop?",
        a: "Facilities, IT infrastructure, cybersecurity, and physical security leads. When those four agree on trust boundaries and data owners, projects move from debate to funded execution.",
      },
      {
        q: "How do I request a roadmap and budgetary estimate?",
        a: "Use the contact page on amt-arabia.net with your asset register, desired outcomes, and timeline. We return a structured proposal with phases, assumptions, and clear decision points so executives can approve with confidence.",
      },
    ],
    ar: [
      {
        q: "ماذا يعني «مبنى ذكي» عمليًا لمالكين في المملكة؟",
        a: "يعني إشرافًا متماسكًا على التكييف والدخول والفيديو والطاقة وتطبيقات القاطنين—فيمكن للمرافق الاستجابة أسرع وتقليل الصيانة التفاعلية وإثبات الأداء لأصحاب المصلحة دون جداول مؤقتة.",
      },
      {
        q: "كيف تمنعون اندماج IoT من تراكم ديون أمنية؟",
        a: "نحدد ما ينضم لشبكة المؤسسة مقابل عمود فقري مبنى منفصل، ونفرض فحوصات اندماج، ونوائم التسمية والزمن والوصول المميّز حتى يحتفظ مركز العمليات بالرؤية.",
      },
      {
        q: "هل تتوسع التجارب التجريبية إلى برامج محفظة بين مدن؟",
        a: "نعم—تنظّم إيه إم تي تجارب قابلة للقياس مع أنماط تكامل موثّقة وتدريب مشغلين وخطافات مراقبة قبل التكرار بين المناطق، مما يقل خطر هندسة لمرة واحدة عند كل برج.",
      },
      {
        q: "أي فرق داخلية يجب أن تحضر الورشة الأولى؟",
        a: "المرافق، وبنية تقنية المعلومات، والأمن السيبراني، والأمن المادي. عندما يتفق الأربعة على حدود الثقة ومالكي البيانات تنتقل المشاريع من الجدل إلى تمويل التنفيذ.",
      },
      {
        q: "كيف أطلب خارطة طريق وتقديرًا ماليًا؟",
        a: "استخدم صفحة الاتصال على amt-arabia.net مع سجل الأصول والنتائج المرغوبة والجدول الزمني. نعيد عرضًا منظمًا بمراحل وافتراضات ونقاط قرار واضحة لاعتماد الإدارة بثقة.",
      },
    ],
  },
  "audio-visual-systems": {
    en: [
      {
        q: "Do you design corporate audio system KSA rollouts for enterprises, not only single boardrooms?",
        a: "Yes. AMT programs standards across room classes—small huddle, executive board, divisible spaces, and all-hands venues—so audio visual systems Saudi teams procure stay supportable. We document SPL targets, DSP baselines, and network dependencies Kingdom-wide where you operate.",
      },
      {
        q: "How do audio visual systems integrate with our LAN and Wi-Fi policies?",
        a: "We co-design VLANs, PoE budgets, multicast, and QoS with your ICT team before hardware ships. The goal is Dante/AES67 or manufacturer-equivalent traffic riding on segments your NOC already monitors, not ad-hoc consumer bridges.",
      },
      {
        q: "Can you cover public address, background music, and emergency page precedence?",
        a: "Where scope includes PA/BGM, we map priority stacks, failover behavior, and operator runbooks so facilities can rehearse page scenarios. Legal and specialist life-safety scope may still sit with certified partners, but integration documentation stays unified.",
      },
      {
        q: "What should we send to get a credible AV scope and budget anchors?",
        a: "Floor plans with room types, existing amplifier/DSP families, collaboration platform standards (e.g., Teams), acoustic constraints, and preferred brands if any. With that, AMT returns phased BOQs instead of generic catalog quotes.",
      },
      {
        q: "Do you link AV programs to other AMT service pages like CCTV or smart buildings?",
        a: "Yes. Rack discipline, labeling, commissioning language, and training boundaries mirror how we deliver CCTV systems Saudi Arabia and smart building solutions KSA programs—so cross-functional steering committees see one delivery standard.",
      },
    ],
    ar: [
      {
        q: "هل تصمّمون طرح نظام صوت مؤسسات في المملكة لبرامج واسعة لا قاعة واحدة؟",
        a: "نعم. تضع إيه إم تي معايير لفئات القاعات—نقاشات صغيرة ومجالس تنفيذية وقاعات قابلة للقسمة وفعاليات جماعية—حتى تظل أنظمة الصوت والمرئيات التي تشتريها فرق المملكة قابلة للدعم. نوثّق أهداف مستوى صوت ومرجعيات DSP وتبعيات شبكة حيثما تعملون.",
      },
      {
        q: "كيف تندمج أنظمة الصوت والمرئيات مع سياسات LAN وواي فاي لدينا؟",
        a: "نشارك تصميم VLAN وميزانيات PoE والبث متعدد وQoS مع تقنية المعلومات قبل شحن العتاد. الهدف نقل Dante/AES67 أو ما يعادلها على بشرات يراقبها مركز العمليات، لا جسور استهلاكية مؤقتة.",
      },
      {
        q: "هل تغطون الإذاعة العامة والموسيقى الخلفية وأولوية صفحات الطوارئ؟",
        a: "حيث يشمل النطاق PA/BGM، نخطط لمصفوفات أولوية وسلوك فشل وأدلة مشغّلين ليتدرب المرافق على سيناريوهات الصفحات. قد يبقى النطاق القانوني لسلامة الحياة لمتخصصين معتمدين، لكن توثيق التكامل يظل موحدًا.",
      },
      {
        q: "ماذا نرسل لنحصل على نطاق AV وجدارات ميزانية جديرة بالثقة؟",
        a: "مخططات مع أنواع القاعات وعائلات مضخم/DSP الحالية ومعايير منصات التعاون (مثل Teams) وقيود صوتية وعلامات تفضيل إن وجدت. مع ذلك تعيد إيه إم تي كميات مراحل لا عروض كتالوج عامة.",
      },
      {
        q: "هل تربطون برامج AV بصفحات خدمات أخرى مثل CCTV أو المباني الذكية؟",
        a: "نعم. انضباط الرفوف والتسمية ولغة التشغيل والتدريب يعكس تسليم أنظمة CCTV في السعودية وبرامج حلول المباني الذكية في المملكة—فسترى لجان التوجيه نفس معيار التسليم.",
      },
    ],
  },
};
