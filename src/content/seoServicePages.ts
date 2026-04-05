import type { AppLocale } from "../utils/localeRouting";

export type ServicePageId =
  | "cctv-systems"
  | "access-control"
  | "network-infrastructure"
  | "smart-building-solutions"
  | "audio-visual-systems";

export type ServicePageCopy = {
  h1: string;
  introLead: string;
  outcomeBullets: [string, string, string, string];
  paragraphs: [string, string, string, string];
  midCta: {
    title: string;
    body: string;
    primaryCta: string;
    secondaryLine: string;
    secondaryLink?: { to: string; en: string; ar: string };
  };
  bottomCta: {
    title: string;
    body: string;
    primaryCta: string;
  };
};

/** SEO H2 headings — Saudi market + technical intent. */
export const SEO_SERVICE_SUBHEADINGS: Record<
  ServicePageId,
  Record<AppLocale, [string, string, string]>
> = {
  "cctv-systems": {
    en: [
      "CCTV design that fits Riyadh, Eastern Province & Jeddah enterprise estates",
      "VMS, recording, and cyber hygiene your CISO and NOC can defend",
      "Delivery: phased rollout, acceptance tests, and handover your teams keep",
    ],
    ar: [
      "تصميم CCTV يلائم حرم الرياض والشرقية وجدة للمؤسسات",
      "VMS والتسجيل والأمن السيبراني الذي يدافع عنه فريقكم",
      "التسليم: طرح مراحل وقبول وتسليم تستمرون عليه",
    ],
  },
  "access-control": {
    en: [
      "Physical access that keeps pace with HR, contractors, and compliance in KSA",
      "Readers, panels, and integration—without mystery cables or shared admin risk",
      "National programs: standards, documentation, audits, and repeatable delivery",
    ],
    ar: [
      "الدخول المادي يواكب الموارد البشرية والمقاولين والامتثال في المملكة",
      "قراءات ولوحات وتكامل—بدون «أسلاك غامضة» أو مخاطر إدارة مشتركة",
      "برامج وطنية: معايير وتوثيق وتدقيق وتسليم متكرر",
    ],
  },
  "network-infrastructure": {
    en: [
      "Campus LAN, fiber backbone & cabling for Saudi digital workloads",
      "Wireless engineered for offices, logistics yards, and education sites",
      "Baseline your network before CCTV, UC, or segmentation spend explodes",
    ],
    ar: [
      "LAN الحرم والعمود الفقري للألياف والكابل لأعباء رقمية سعودية",
      "لاسلكي مُهندس للمكاتب واللوجستيات والتعليم",
      "خط أساس للشبكة قبل تفجير إنفاق CCTV أو UC أو التجزئة",
    ],
  },
  "smart-building-solutions": {
    en: [
      "Smart buildings in Saudi Arabia: OT, IT, FM, and security on one plan",
      "Trustworthy data: time sync, identity, and governance for operators",
      "Pilots that convert—then scale across towers, campuses, and ports",
    ],
    ar: [
      "مبانٍ ذكية في المملكة: التشغيل وتقنية المعلومات والمرافق والأمن في خطة",
      "بيانات جديرة بالثقة: زمن وهوية وحوكمة للمشغلين",
      "تجارب تحوّل ثم تتوسع على أبراج وحرم وموانئ",
    ],
  },
  "audio-visual-systems": {
    en: [
      "Audio system KSA programs: intelligibility, coverage maps, and SPL you can defend",
      "Meeting rooms, PA, and venue DSP—aligned to IT switching, multicast, and support models",
      "Commissioning, training, and handover that keep corporate sound from becoming shelfware",
    ],
    ar: [
      "برامج أنظمة الصوت في المملكة: وضوح وخرائط تغطية ومستوى صوت يمكن الدفاع عنه",
      "قاعات اجتماعات وإذاعة وDSP للمرافق—بما يتوافق مع التبديل والبث متعدد ونموذج الدعم",
      "تشغيل وتدريب وتسليم يبقي الصوت المؤسسي بعيدًا عن «البرامج الراكدة»",
    ],
  },
};

export const SERVICE_PATH_BY_ID: Record<ServicePageId, string> = {
  "cctv-systems": "/services/cctv-systems",
  "access-control": "/services/access-control",
  "network-infrastructure": "/services/network-infrastructure",
  "smart-building-solutions": "/services/smart-building-solutions",
  "audio-visual-systems": "/services/audio-visual-systems",
};

export const SEO_SERVICE_PAGES: Record<ServicePageId, Record<AppLocale, ServicePageCopy>> = {
  "cctv-systems": {
    en: {
      h1: "CCTV Systems Saudi Arabia | Enterprise IP Cameras, VMS & Network-Ready Video",
      introLead: `Teams shortlisting CCTV systems Saudi Arabia integrators often inherit fragmented estates—then discover CCTV systems in the Kingdom only perform when IT, security, and facilities co-own scope. Organizations across Riyadh, the Eastern Province, and Jeddah are replacing “just add cameras” thinking with programs that win executive approval: fewer blind spots, faster investigations, predictable bandwidth, and evidence packages auditors recognize. If procurement is tired of quotes that ignore VLAN design, retention math, or SOC workflows, you are ready for an integrator who sells outcomes—not box counts. AMT helps you fund the right phase first, prove value, and scale across KSA sites without breaking IT governance on amt-arabia.net.`,
      outcomeBullets: [
        "Stakeholder-ready scopes: coverage, compliance, retention, and risk posture spelled out early",
        "IT-aligned transport, identity, monitoring, and change control—video joins the enterprise responsibly",
        "Phased capital plans for HQ towers, logistics campuses, industrial plants, and education districts",
        "Handover your teams can operate: runbooks, roles, training boundaries, health checks",
      ],
      paragraphs: [
        `A conversion-focused CCTV program starts with measurable outcomes: reduce incident response time, deter loss, protect staff, and deliver HD evidence that holds up when legal and HR need clarity—not blurry JPEGs and missing chain of custody. We interview operations, facilities, cybersecurity, and procurement together so camera counts follow priorities, not vendor bundles. For Saudi enterprises balancing giga-project timelines with corporate standards, that alignment is what turns a budget line into a defended investment.`,
        `Network readiness separates polished pilots from painful production. We document uplinks, multicast or recording topology, storage resilience, and management access paths before purchase orders fly. VLAN strategy, jump hosts or PAM where needed, certificate hygiene, and logging to your SIEM (when appropriate) keep your CISO engaged as a partner—not surprised after install. When analytics or hybrid/cloud extensions enter the plan, we translate vendor promises into SLAs your WAN team believes.`,
        `Our delivery model is intentionally boring in the best way: factory acceptance where required, staged cutovers, labeling discipline, imagery of cable paths, and acceptance tests written in plain language. We train operators on daily tasks versus engineering-only admin, so your SOC and guards adopt the platform. Expansion waves reuse patterns—same VMS baselines, same naming—so a new tower in Riyadh doesn’t invent a parallel architecture.`,
        `Ready to move from fragmented cameras to a governed IP video platform? Send facility lists, rough camera counts, stakeholder goals, and timeline constraints through our contact channel. We will respond with a workshop agenda, a risk-informed phasing proposal, and a commercial structure aligned to how Saudi enterprises actually buy—so the next steering committee meeting ends with a decision, not another deferral.`,
      ],
      midCta: {
        title: "Book a CCTV scope & network readiness session",
        body: "Share your sites and priorities—we return a phased plan, integration assumptions, and budget anchors your IT and security leads can approve together.",
        primaryCta: "Request consultation",
        secondaryLine: "Prefer to browse all portfolios first? Explore the full solutions catalog.",
        secondaryLink: {
          to: "/solution-details",
          en: "Browse the full solutions catalog",
          ar: "تصفّح جميع الحلول",
        },
      },
      bottomCta: {
        title: "Start your KSA CCTV modernization this quarter",
        body: "Tell us about your current VMS, camera estate, and compliance drivers. We’ll map the fastest path to measurable risk reduction.",
        primaryCta: "Contact AMT Arabia",
      },
    },
    ar: {
      h1: "أنظمة CCTV في السعودية | كاميرات IP مؤسسية و VMS وفيديو جاهز للشبكة",
      introLead: `عند مقارنة مُكاملي أنظمة CCTV في السعودية، يتكرر نفس الدرس: أنظمة CCTV في المملكة لا تعطي قيمة كاملة إلا عندما يتشارك تقنية المعلومات والأمن والمرافق في النطاق. المؤسسات في الرياض والمنطقة الشرقية وجدة تستبدل فكرة «أضف كاميرات» ببرامج تحصل على موافقة الإدارة: أعمى أقل، تحقيقات أسرع، عرض نطاق متوقع، وحزم أدلة يعترف المدقق بها. إذا سئم المشتري من عروض تتجاهل VLAN أو احتساب الاحتفاظ أو سير عمل مركز العمليات، فأنتم جاهزون لمُكامل يبيع نتائج لا أعداد صناديق. تساعدكم إيه إم تي على تمويل المرحلة الصحيحة أولًا وإثبات القيمة والتوسع بمواقع في المملكة دون كسر حوكمة تقنية المعلومات على amt-arabia.net.`,
      outcomeBullets: [
        "نطاق جاهز لأصحاب المصلحة: تغطية وامتثال واحتفاظ ووضع مخاطر من البداية",
        "نقل وهوية ومراقبة وتغيير بما يتوافق مع تقنية المعلومات—فيديو ينضم للمؤسسة بمسؤولية",
        "خطط رأس مال مراحل لأبراج ومخازن وصناعة وتعليم",
        "تسليم يشغّله فريقكم: أدلة تشغيل وأدوار وحدود تدريب وفحوصات صحة",
      ],
      paragraphs: [
        `يبدأ برنامج CCTV التحويلي بنتائج قابلة للقياس: تقصير زمن الاستجابة للحوادث، ردع الخسارة، حماية العاملين، وأدلة HD تثبت عندما يحتاج القانون والموارد البشرية إلى وضوح—لا صور مشوشة ولا سلسلة حضانة مفقودة. نجري مقابلات للتشغيل والمرافق والأمن السيبراني والمشتريات معًا لتتبع أعداد الكاميرات الأولويات لا حزم المورّد. للمؤسسات السعودية التي توازن جداول مشاريع ضخمة ومعايير مؤسسات، هذا التواؤم هو ما يحوّل بند ميزانية إلى استثمار يُدافع عنه.`,
        `جاهزية الشبكة تفصل التجارب المصقولة عن الإنتاج المؤلم. نوثّق الوصلات، طوبولوجيا التسجيل أو البث المتعدد، مرونة التخزين، ومسارات الإدارة قبل أوامر الشراء. استراتيجية VLAN، قفزات إدارية آمنة، نظافة الشهادات، والتسجيل نحو SIEM (حيث يلائم) يبقي مدير الأمن السيبراني شريكًا لا مُفاجَأ بعد التركيب. وعند دخول التحليلات أو الامتداد الهجين/السحابي، نترجم وعود المورّد إلى اتفاقيات خدمة يصدّقها فريق الشبكة.`,
        `نموذج التسليم لدينا ممل بأفضل معنى: قبول مصنع عند الحاجة، قطع مرحلية، انضباط تسمية، صور مسارات كابلات، واختبارات قبول بلغة واضحة. ندرّب المشغلين على المهام اليومية لا الإدارة الهندسية فقط لتعتمد غرف العمليات والحراس. موجات التوسع تعيد استخدام الأنماط—نفس مرجعية VMS ونفس التسمية—فلا يخترع برج جديد في الرياض بنية متوازية.`,
        `هل أصبحتم جاهزين للانتقال من كاميرات متفرقة إلى منصة فيديو IP محكومة؟ أرسلوا قوائم المرافئ وأعداد الكاميرات التقريبية وأهداف أصحاب المصلحة وقيود الجدول عبر قناة الاتصال. نرد بجدول ورشة عمل ومقترح مراحل مستنير بالمخاطر وبنية تجارية بما يتوافق مع شراء المؤسسات السعودية فعليًا—لتنتهي اجتماعات اللجنة بقرار لا تأجيل آخر.`,
      ],
      midCta: {
        title: "احجز جلسة نطاق CCTV وجاهزية شبكة",
        body: "شارِكوا مواقعكم وأولوياتكم—نعيد خطة مراحل وافتراضات تكامل ومراسي ميزانية يمكن لقادة تقنية المعلومات والأمن اعتمادها معًا.",
        primaryCta: "اطلب استشارة",
        secondaryLine: "تفضّلون تصفّح المحافظ أولًا؟ انتقلوا إلى صفحة جميع الحلول.",
        secondaryLink: {
          to: "/solution-details",
          en: "Browse the full solutions catalog",
          ar: "تصفّح جميع الحلول",
        },
      },
      bottomCta: {
        title: "ابدأوا تحديث CCTV في المملكة هذا الربع",
        body: "أخبرونا عن VMS الحالية ومزرعة الكاميرات ودوافع الامتثال. سنرسم أسرع مسار لتقليل مخاطر قابلة للقياس.",
        primaryCta: "تواصل مع إيه إم تي العربية",
      },
    },
  },
  "access-control": {
    en: {
      h1: `Access Control Systems Saudi Arabia | Enterprise Badge, Biometric & Door Security`,
      introLead: `Access control systems Saudi facilities depend on must survive HR churn, contractor rotations, and audit questions—not just opening doors on day one. Every unwanted tailgating story starts with a policy gap: contractors inherit doors they shouldn’t, badges outlive terminations, or guards revert to manual overrides because integrations weren’t finished. For headquarters in Riyadh, logistics hubs near Dammam, and education campuses across the Kingdom, modern access control is as much about identity governance as hardware on the frame. AMT designs programs procurement can defend—clear BOQ, staged cutovers, documentation auditors expect, and integrations with CCTV that actually help SOC operators instead of spamming them.`,
      outcomeBullets: [
        "Reduce tailgating and orphaned credentials with lifecycle-aware policies and auditing",
        "Integrate doors with VMS, intrusion, and elevators where open APIs allow meaningful correlation",
        "Survivable controller approaches for WAN events—no mystery “everything offline” surprises",
        "KSA-wide rollout playbooks so acquisitions reuse standards instead of reinventing them",
      ],
      paragraphs: [
        `Buyers should insist on clarity: which openings are life-safety constrained, which require anti-passback, which need biometrics versus cards versus mobile credentials for high-assurance zones? We translate your risk register into reader strategies, power budgets for strikes, battery expectations, and controller diversity so a single vendor glitch doesn’t freeze an entire tower. That’s the sort of decision-making Saudi enterprises expect when capex is competing with digital transformation budgets.`,
        `Integration is where programs convert from installed to operational. We sequence VMS event subscriptions, intrusion inputs, and elevator interfaces with test plans guards can rehearse—so the first real alarm isn’t a training day. Shared operator accounts and blanket admin passwords disappear; privilege is tied to roles and ticketed changes. The result is access control analytics leadership trusts when they read monthly CSO reports.`,
        `Scale demands repeatability. Whether you operate a handful of premium assets or a portfolio stretching from Jeddah corniche sites to industrial parks, we document naming, VLAN patterns (where IP-connected), labeling, and commissioning steps that internal teams can clone. Post-go-live, we leave governance hooks—access reviews, tamper alerts, badging workflows—so “project mode” doesn’t evaporate on day 91.`,
        `If your next milestone is a CIO/CISO joint sign-off, send floor summaries, current vendors, and integration must-haves. AMT will schedule a discovery workshop and produce a proposal you can compare apples-to-apples against single-trade installers—because we engineer for adoption, not change orders.`,
      ],
      midCta: {
        title: "Schedule an access control discovery workshop",
        body: "Bring floor plans and integration goals—we’ll show phased CAPEX, risk reductions, and realistic timelines for Saudi operations.",
        primaryCta: "Talk to specialists",
        secondaryLine: "Pair access with video—review our enterprise CCTV service page.",
        secondaryLink: {
          to: "/services/cctv-systems",
          en: "Enterprise CCTV systems",
          ar: "أنظمة CCTV للمؤسسات",
        },
      },
      bottomCta: {
        title: "Modernize physical identity without freezing operations",
        body: "Hybrid work, contractors, and audits all demand better door governance. Let’s plan upgrades your teams can sustain.",
        primaryCta: "Get in touch",
      },
    },
    ar: {
      h1: "أنظمة التحكم بالدخول في السعودية | بطاقات مؤسسية وقياسات حيوية وأمن أبواب",
      introLead: `أنظمة التحكم بالدخول في المنشآت السعودية يجب أن تصمد أمام تبدّل الموارد البشرية والمقاولين وأسئلة المدققين—لا أن تفتح أبوابًا يوم الإطلاق فقط. تبدأ قصص تجاوز الدخول غير المرغوب بفجوة سياسة: يَرِث المقاولون أبوابًا لا يجب أن يفتَحوا، أو تبقى البطاقات بعد إنهاء الخدمة، أو يعيد الحراس التجاوز اليدوي لأن التكامل لم يُكمَل. لمقر الرياض ومراكز اللوجستيك قرب الدمام وحرم تعليمية في أنحاء المملكة، التحكم بالدخول الحديث حوكمة هوية قدرها العتاد على الإطار. تصمّم إيه إم تي برامج يدافع المشتري عنها—كميات واضحة، قطع مراحل، توثيق يتوقده المدققون، وتكامل مع CCTV يساعد مشغلي مركز العمليات لا يزعجهم.`,
      outcomeBullets: [
        "تقليل تجاوز الدخول والاعتمادات اليتيمة بسياسات واعية بدورة الحياة وتدقيق",
        "دمج الأبواب مع الفيديو والتسلل والمصاعد حيث تسمح واجهات مفتوحة بارتباط ذي معنى",
        "نهج وحدات تحكم صامد عند أحداث الشبكة الواسعة",
        "أدلة طرح وطنية فالاستحواذات تعيد المعايير لا تخترع من الصفر",
      ],
      paragraphs: [
        `يجب أن يصر المشترون على الوضوح: أي فتحات مقيدة بالسلامة، وأين anti-passback، وأين بيومترية مقابل بطاقات مقابل اعتمادات محمولة لمناطق عالية الضمان؟ نترجم سجل المخاطر لديكم إلى استراتيجيات قارئ وميزانيات طاقة للأقفال وتوقعات بطارية وتنوع وحدات تحكم حتى تعطّل خلل مورّد برجًا بأكمله. هذا مستوى القرار الذي تتوقعه المؤسسات السعودية عندما يتنافس رأس المال مع تحول رقمي.`,
        `التكامل حيث تتحول البرامج من «مُركّبة» إلى «تشغيلية». نرتب اشتراكات أحداث VMS ومداخل التسلل وواجهات المصاعد مع خطط اختبار يتدرب عليها الحراس—فلا يكون أول إنذار حقيقي يوم تدريب. تختفي حسابات المشغلين المشتركة وكلمات المرور الإدارية الشاملة؛ تُربط الامتيازات بالأدوار والتغييرات بتذاكر. النتيجة تحليلات يثق بها القيادة عند قراءة تقارير أمن شهرية.`,
        `التوسع يتطلّب إعادة استخدام. سواء أدارتم أصولًا مميزة قليلة أو محفظة تمتد من مواقع جدة إلى حدائق صناعية، نوثّق التسمية وأنماط VLAN (حيث يُربط IP) والتسميات والتشغيل ليستنسخها فريقكم داخليًا. بعد الإطلاق نترك خطافات حوكمة—مراجعات وصول، تنبيهات عبث، سير عمل للبطاقات—فلا يتبخر «نمط المشروع» في اليوم 91.`,
        `إذا كانت محطتكم التالية موافقة مشتركة لمدير تقنية المعلومات ومدير الأمن السيبراني، أرسلوا ملخص طوابق والمورّدين الحاليين وضروريات التكامل. ستجدّد إيه إم تي ورشة استكشاف وتنتج عرضًا يمكن مقارنته مع منفذي حرفة واحدة—لأننا نهندس للاعتماد لا لتغيير أوامر.`,
      ],
      midCta: {
        title: "جدّدوا ورشة اكتشاف التحكم بالدخول",
        body: "أحضروا مخططات وأهداف تكامل—نعرض مراحل رأس المال وتقليل مخاطر وجداول زمنية واقعية للتشغيل السعودي.",
        primaryCta: "تحدث إلى المتخصصين",
        secondaryLine: "اربطوا الدخول بالفيديو—راجعوا صفحة CCTV المؤسسية.",
        secondaryLink: {
          to: "/services/cctv-systems",
          en: "Enterprise CCTV systems",
          ar: "أنظمة CCTV للمؤسسات",
        },
      },
      bottomCta: {
        title: "حدّثوا الهوية المادية دون تجميد التشغيل",
        body: "عمل هجين ومقاولون وتدقيق يتطلّبون حوكمة أبواب أفضل. لنخطط لترقيات يستدامها فريقكم.",
        primaryCta: "تواصل معنا",
      },
    },
  },
  "network-infrastructure": {
    en: {
      h1: `Network Infrastructure Saudi Arabia | Structured Cabling, Fiber & Enterprise LAN`,
      introLead: `Slow ERP screens, choppy Teams calls, and “mystery” camera drops usually share one root cause: under-documented switching, under-provisioned uplinks, or wireless that was never engineered for today’s density. Saudi enterprises accelerating Vision 2030–aligned digitization cannot afford hobbyist LANs—especially when OT traffic, building systems, and guest Wi-Fi all compete for attention. AMT sells infrastructure outcomes: measurable latency targets, labeled cable plants, firewall-friendly segmentation, wireless that matches policy, and handover packages your NOC maintains without calling vendors for every VLAN tweak.`,
      outcomeBullets: [
        "Segmentation blueprints that separate users, servers, guests, security, and OT intentionally",
        "Structured cabling + fiber testing documentation that survives OPEX transitions",
        "Wi‑Fi designs grounded in surveys—not guesses—for towers, yards, and campuses",
        "Executive-ready roadmaps: what to fund now vs. next fiscal to support CCTV/UC bursts",
      ],
      paragraphs: [
        `Procurement teams deserve more than SKUs—they need an engineering thread tying closet upgrades to business outcomes: fewer outages during month-end close, better guest experiences in mixed-use towers, resilient uplinks for new logistics automation. We facilitate workshops with IT infrastructure, cybersecurity, and business applications so budgets reflect reality, not optimistic datasheets.`,
        `Execution discipline matters on site in Riyadh or industrial cities: bend radius respected, test results labeled per outlet, as-built drawings someone can open three years later. The same closet discipline supports audio system KSA deployments when racks, shielded paths, and PoE headroom stay documented for AV and IPTV teams. We coordinate with your security and AV partners early so camera uplinks, multicast decisions, and PoE budgets don’t become emergency change orders.`,
        `Wireless is a conversion lever—employees quit complaining, warehouses keep scanners online, visitors authenticate cleanly. We pair RF plans with identity and firewall context so each SSID lands in the right zone and logging meets your SOC expectations. The result is fewer “Wi-Fi is fine, must be the app” arguments that waste executive time.`,
        `If you are about to approve a CCTV refresh, UC upgrade, or zero-trust segmentation program, pause for a readiness checkpoint. Send your site list and pain points—AMT returns a candid baseline memo with prioritized fixes so the expensive projects downstream actually deliver ROI.`,
      ],
      midCta: {
        title: "Request a network readiness checkpoint",
        body: "We benchmark switching, uplinks, wireless, and documentation—then align investment waves with CCTV, UC, and Zero Trust goals.",
        primaryCta: "Book infrastructure review",
        secondaryLine: "Pair cabling strength with smart building integration—see our smart services page.",
        secondaryLink: {
          to: "/services/smart-building-solutions",
          en: "Smart building solutions",
          ar: "حلول المباني الذكية",
        },
      },
      bottomCta: {
        title: "Stop funding applications on brittle LAN foundations",
        body: "Let’s engineer the spine your Saudi campuses need before the next digital wave.",
        primaryCta: "Contact engineering",
      },
    },
    ar: {
      h1: "البنية التحتية للشبكات في السعودية | كابل منظم وألياف وLAN مؤسسات",
      introLead: `شاشات ERP البطيئة ومكالمات Teams المتقطعة و«سقوط» الكاميرات الغامض عادة تشترك في سبب جذري: تبديل موثّق سيئًا، أو روابط عليا ناقصة، أو لاسلكي لم يُهندَس أبدًا لكثافة اليوم. المؤسسات السعودية التي تُسرّع رقمنة متوافقة مع رؤية 2030 لا تحتمل شبكات هواة—خصوصًا عندما تتزاحم حركة التشغيل التقني وأنظمة المباني وواي فاي الضيف. تبيع إيه إم تي مخرجات بنية: أهداف زمن انتقال قابلة للقياس، ونبات كابل مُسمّى، وتجزئة صديقة للجدار الناري، ولاسلكي يطابق السياسة، وحزم تسليم يحافظ عليها مركز العمليات دون استدعاء مورّد لكل تعديل VLAN.`,
      outcomeBullets: [
        "مخططات تجزئة تفصل المستخدمين والخوادم والضيوف والأمن والتشغيل التقني عن قصد",
        "كابل منظم + توثيق اختبار ألياف يصمد عند انتقال تشغيل النفقات",
        "تصاميم واي فاي مبنية على مسوح لا تخمينات لأبراج وساحات وحرم",
        "خرائط طريق جاهزة للإدارة: ماذا تموّلون الآن والسنة التالية لدعم طفرات CCTV/UC",
      ],
      paragraphs: [
        `يستحق فريق المشتريات أكثر من أرقام SKU—يحتاجون خيطًا هندسيًا يربط ترقية الخزانة بنتائج أعمال: انقطاعات أقل عند إغلاق الشهر، تجربة ضيوف أفضل في أبراج مختلطة، روابط عليا مرنة لأتمتة لوجستيات جديدة. نيسّر ورش عمل مع بنية تقنية المعلومات والأمن السيبراني وتطبيقات الأعمال فتعكس الميزانيات الواقع لا أوراق بيانات متفائلة.`,
        `انضباط التنفيذ مهم في موقع بالرياض أو مدن صناعية: نصف قطر الانحناء مُحترم، نتائج اختبار مُسمّاة لكل منفذ، رسومات كما بُنيت يفتحها شخص بعد ثلاث سنوات. يدعم انضباط الخزائن أيضًا طرح أنظمة صوتية في المملكة عندما تبقى الرفوف والمسارات المحمية ورأس هامش PoE موثّقة لفرق AV وIPTV. ننسق مبكرًا مع شركاء الأمن والصوتيات حتى روابط الكاميرا وقرارات البث المتعدد وميزانيات PoE لا تصبح أوامر تغيير طارئة.`,
        `اللاسلكي رافعة تحويلية—الموظفون يتوقفون عن الشكوى، المستودعات تُبقي الماسحات متصلة، الضيوف يُوثَّقون نظيفًا. نقرن خطط RF مع سياق الهوية والجدار الناري ليهبط كل SSID في المنطقة الصحيحة ويلبي التسجيل توقعات مركز العمليات. النتيجة جدالات أقل من نوع «الواي فاي سليم فالمشكلة في التطبيق» التي تهدّر وقت الإدارة.`,
        `إذا كنتم على وشك اعتماد تحديث CCTV أو ترقية UC أو برنامج تجزئة ثقة صفر، توقفوا لنقطة جاهزية. أرسلوا قائمة المواقع ونِقَاط الألم—تعيد إيه إم تي مذكرة أساس صادقة مع إصلاحات ذات أولوية فتقدّم المشاريع المكلفة لاحقًا عائد استثمار حقيقيًا.`,
      ],
      midCta: {
        title: "اطلبوا نقطة تحقق لجاهزية الشبكة",
        body: "نقيس التبديل والروابط العليا واللاسلكي والتوثيق—ثم نتواءم موجات الاستثمار مع أهداف CCTV وUC ونموذج الثقة الصفرية.",
        primaryCta: "احجز مراجعة بنية",
        secondaryLine: "اذهبوا إلى حلول المباني الذكية لربط OT/IT.",
        secondaryLink: {
          to: "/services/smart-building-solutions",
          en: "Smart building solutions",
          ar: "حلول المباني الذكية",
        },
      },
      bottomCta: {
        title: "توقفوا عن تمويل تطبيقات على أسس LAN هشة",
        body: "لنُهندس العمود الفقري الذي تحتاجه حرمكم السعودية قبل الموجة الرقمية التالية.",
        primaryCta: "تواصل مع الهندسة",
      },
    },
  },
  "smart-building-solutions": {
    en: {
      h1: `Smart Building Solutions KSA | OT/IT Integration for Saudi Campuses & Towers`,
      introLead: `Smart building solutions KSA executives sponsor only when FM, IT, and security share one definition of truth—not vendor fanfare alone. "Smart" still fails when dashboards lie—because timestamps drift, door alarms mean nothing to HVAC, and IT discovers a new IoT VLAN during an incident. Owners across Saudi Arabia need integration partners who respect cybersecurity baselines while still helping FM teams automate repetitive work: energy insights, faster maintenance dispatch, correlated security events. AMT frames smart programs as executive bets with phased ROI: pilot measurable, expand repeatable, document everything so operators from Jeddah waterfront assets to Eastern Province industrial parks inherit the playbook—not a pile of vendor PDFs.`,
      outcomeBullets: [
        "Unified roadmap across BMS, access, CCTV, energy, and occupant touchpoints",
        "Time sync, naming, identity, and RBAC so analytics become operational truth",
        "Cyber onboarding gates: what joins IT networks vs. segregated OT backbones",
        "Portfolio scaling kits so tower #2 doesn’t pay consulting dollars for tower #1 lessons",
      ],
      paragraphs: [
        `Conversion language for CFOs and COOs is simple: fewer truck rolls, faster mean-time-to-repair, better clarity on energy spend, safer occupant journeys. Smart building solutions Saudi sponsors recognize win when those metrics roll up without manual spreadsheet archaeology. We tie each integration milestone to a metric leadership can read monthly—not vanity sensor counts.`,
        `Technically, we map northbound interfaces, latency classes, and failover behaviors before device manufacturers flood your network. That prevents the classic smart-building regret: flashy lobby demos that Operations cannot sustain.`,
        `Training is part of adoption. Facilities, SOC, and IT share playbooks for escalations, change windows, and vendor coordination. Without that social layer, even perfect architecture decays into manual overrides.`,
        `Ready to align stakeholders? Bring building use cases, vendor contracts, and risk posture. AMT will facilitate a steering session and follow with an executable roadmap plus commercial options that match how you procure smart technology in KSA today.`,
      ],
      midCta: {
        title: "Run a smart-building steering workshop",
        body: "We unite FM, IT, cybersecurity, and physical security around one roadmap—then price pilots with measurable KPIs.",
        primaryCta: "Schedule workshop",
        secondaryLine: "Need network readiness first? Visit network infrastructure services.",
        secondaryLink: {
          to: "/services/network-infrastructure",
          en: "Network infrastructure services",
          ar: "خدمات البنية التحتية للشبكات",
        },
      },
      bottomCta: {
        title: "Turn smart rhetoric into governed operations",
        body: "Tell us about your buildings, tenants, and digital goals—we’ll engineer adoption, not shelfware.",
        primaryCta: "Start the conversation",
      },
    },
    ar: {
      h1: "حلول المباني الذكية في المملكة | تكامل OT/IT لحرم وأبراج سعودية",
      introLead: `حلول المباني الذكية في المملكة لا تُموَّل بثبات إلا عندما تتفق المرافق وتقنية المعلومات والأمن على تعريف واحد للبيانات الصحيحة. يَفشل «الذكي» عندما تكذب اللوحات—لأن الطوابع الزمنية تنجرف أو تنبيهات الأبواب لا تعني شيئًا للتكييف أو يكتشف تقنية المعلومات شبكة IoT جديدة أثناء حادث. يحتاج المالكون في أنحاء المملكة شركاء تكامل يحترمون خطوط الأمن السيبراني مع تمكين مرافقهم من أتمتة العمل المتكرر: رؤى طاقة، إرسال صيانة أسرع، أحداث أمن مترابطة. تُطر برامج إيه إم تي الذكية كرهانات إدارية بعائد مرحلي: تجربة قابلة للقياس، توسع قابل للتكرار، توثيق كل شيء ليَرث المشغّلون من أصول الواجهة البحرية بجدة إلى حدائق المنطقة الشرقية الصناعية الأدلة لا كومة PDF.`,
      outcomeBullets: [
        "خارطة طريق موحّدة بين BMS والدخول وCCTV والطاقة واستخدامات القاطن",
        "زمن وتسمية وهوية وRBAC ليصبح التحليل حقيقة تشغيلية",
        "بوابات اندماج أمنية: ماذا ينضم لشبكات تقنية المعلومات مقابل عمود تقني مبني",
        "حزم توسّع للمحفظة لئلا يدفع البرج الثاني تكاليف استشارية لإعادة تعلّم دروس البرج الأول",
      ],
      paragraphs: [
        `لغة التحويل لمدراء المالية والتشغيل بسيطة: رحلات شاحنات أقل، إصلاح أسرع، وضوح أفضل لإنفاق الطاقة، رحلات قاطنين أكثر أمانًا. نربط كل علامة تكامل بمؤشر يقرأ شهريًا—لا عدد حساسات للمظهر.`,
        `تقنيًا نرسم الواجهات الشمالية وفئات زمن الاستجابة وسلوكيات الفشل قبل أن تغرق الشبكة أجهزة المورّدين. ذلك يمنع ندم «المباني الذكية» الكلاسيكي: عروض ردهة لامعة لا يستدامها التشغيل.`,
        `التدريب جزء من الاعتماد. تشارك المرافق ومركز العمليات وتقنية المعلومات أدلة تصعيد ونوافذ تغيير وتنسيق مورّد. بدون هذه الطبقة الاجتماعية، حتى الهندسة المثلى تتحلّل إلى تجاوزات يدوية.`,
        `هل أصبحتم جاهزين لمواءمة أصحاب المصلحة؟ أحضروا حالات استخدام المبنى وعقود المورّدين ووضعية المخاطر. تيسّر إيه إم تي جلسة قيادة ونتابع بخارطة طريق قابلة للتنفيذ وخيارات تجارية بما يتوافق مع شراء التقنية الذكية في المملكة اليوم.`,
      ],
      midCta: {
        title: "نفّذوا ورشة قيادة مبنى ذكي",
        body: "نوحّد المرافق وتقنية المعلومات والأمن السيبراني والأمن المادي حول خارطة واحدة—ثم نسعّر تجارب بمؤشرات أداء قابلة للقياس.",
        primaryCta: "جدولة ورشة",
        secondaryLine: "تحتاجون جاهزية شبكة أولًا؟ انتقلوا لخدمة البنية الشبكية.",
        secondaryLink: {
          to: "/services/network-infrastructure",
          en: "Network infrastructure services",
          ar: "خدمات البنية التحتية للشبكات",
        },
      },
      bottomCta: {
        title: "حوّلوا خطاب الذكاء إلى تشغيل محكوم",
        body: "أخبرونا عن مبانيكم ومستأجرينكم وأهدافكم الرقمية—سنَهندس الاعتماد لا برامج أرفف.",
        primaryCta: "ابدأوا الحديث",
      },
    },
  },
  "audio-visual-systems": {
    en: {
      h1: "Audio Visual Systems Saudi Arabia | Corporate Audio System KSA, Conferencing & PA",
      introLead: `An audio system KSA leadership teams actually use is engineered for speech intelligibility—not peak volume bragging rights. Across boardrooms in Riyadh, hospitality concourses in Jeddah, and education campuses Kingdom-wide, audio visual systems Saudi enterprises deploy must dovetail with switching, multicast, Dante or AES67 islands, and help-desk workflows IT already runs. AMT treats AV as infrastructure: coverage maps, SPL targets, DSP presets, emergency page precedence, and documentation your NOC and facilities teams can maintain after the integrator’s project team rotates off-site.`,
      outcomeBullets: [
        "Meeting equity: UC platforms, room standards, and acoustic treatments that survive daily use",
        "Public address & background music with priority paging paths operations can rehearse",
        "Network co-design with ICT: PoE, QoS, VLANs, and survivable audio transport choices",
        "Commissioning, training, and labeled handover tied to the same rigor as CCTV and LAN programs",
      ],
      paragraphs: [
        `Procurement for audio visual systems in the Kingdom should demand the same decision hygiene as CCTV systems Saudi Arabia programs: confirm who owns rack space, patch records, and change windows. Boardrooms that look cinematic on demo day but clip on executive voices fail the only KPI that matters—intelligibility under HVAC load.`,
        `Conferencing traffic is networking traffic. We align room endpoints with your campus design so USB bridges are the exception, not the default architecture. When corporate sound in Saudi offices depends on stable Wi-Fi and switch scheduling, AV and IT sign the same acceptance tests.`,
        `For venues and public spaces, we document how emergency pages preempt background channels, how levels are validated after firmware updates, and how facilities staff escalate without calling the original installer for every holiday playlist tweak.`,
        `Ready to standardize an audio visual roadmap? Share floor plates, room types, existing DSP or amplifier families, and collaboration platform standards—AMT will return a phased BOQ, integration assumptions, and references across meeting rooms, digital signage, and performance spaces.`,
      ],
      midCta: {
        title: "Standardize AV acceptance with ICT",
        body: "We workshop coverage, networking, and operator training in one agenda—so your next AV refresh is budgetable and supportable.",
        primaryCta: "Book AV discovery",
        secondaryLine: "Drill into meeting rooms, IPTV, and theaters from the main solution catalog.",
        secondaryLink: {
          to: "/solution-details",
          en: "Open solution portfolios",
          ar: "افتحوا محافظ الحلول",
        },
      },
      bottomCta: {
        title: "Make corporate sound measurable—not subjective",
        body: "Tell us where speech clarity, paging, or hybrid meetings are failing today; we’ll engineer an audio system KSA operators can trust quarter after quarter.",
        primaryCta: "Contact AMT Arabia",
      },
    },
    ar: {
      h1: "أنظمة صوتية ومرئية في السعودية | نظام صوت مؤسسات واجتماعات وإذاعة",
      introLead: `نظام الصوت في المملكة الذي تحتاجه القيادة مُهندس لوضوح الخطاب لا لمجرّد «أعلى صوت». عبر مجالس الرياض وصالات الضيافة في جدة وحرم تعليمية في أنحاء المملكة، أنظمة الصوت والمرئيات التي تنفّذها المؤسسات السعودية يجب أن تندمج مع التبديل والبث متعدد وجزر Dante أو AES67 وسير عمل مكتب المساعدة التي تديرها تقنية المعلومات. تعامل إيه إم تي AV كبنية: خرائط تغطية وأهداف مستوى صوت وضبط DSP وأولوية صفحات الطوارئ وتوثيق يحافظ عليه مركز العمليات والمرافق بعد انصراف فريق المشروع.`,
      outcomeBullets: [
        "إنصاف اجتماعات: منصات UC ومعايير قاعات ومعالجة صوتية تصمد مع الاستخدام اليومي",
        "إذاعة عامة وموسيقى خلفية مع مسارات أسبقية يتدرب عليها التشغيل",
        "تصميم مشترك مع الاتصالات: PoE وQoS وVLAN وخيارات نقل صوتي مرن",
        "تشغيل وتدريب وتسليم مُسمّى بنفس الانضباط المطبّق على CCTV وLAN",
      ],
      paragraphs: [
        `يجب أن يطلب المشتري لأنظمة الصوت والمرئيات في المملكة نفس انضباط القرار المطبّق على أنظمة CCTV في السعودية: من يملك مساحة الرف وسجلات الوصلات ونوافذ التغيير. القاعات التي تبدو سينمائية يوم العرض لكن تقطع أصوات المديرين تفشل المؤشر الوحيد المهم—الوضوح تحت حمل التكييف.`,
        `حركة مؤتمرات هي حركة شبكة. نوائم طرفيات القاعات مع تصميم الحرم ليصبح جسر USB استثناء لا بنية افتراضية. عندما يعتمد الصوت المؤسسي في مكاتب سعودية على واي فاي مستقر وجدولة مفاتيح، يوقع AV وتقنية المعلومات نفس اختبارات القبول.`,
        `للمرافق والمساحات العامة، نوثّق كيف تسبق صفحات الطوارئ القنوات الخلفية وكيف تُتحقق المستويات بعد تحديثات البرامج الثابتة وكيف يصعد المرافقون دون الاتصال بالمُكامل الأصلي لكل تعديل قائمة تشغيل.`,
        `هل أصبحتم جاهزين لتوحيد خارطة AV؟ شاركوا المخططات وأنواع القاعات وعائلات DSP أو المضخم الحالية ومعايير منصات التعاون—تعيد إيه إم تي كميات ومراحل وافتراضات تكامل ومراجع بين غرف الاجتماعات واللافتات والقاعات الاحتفالية.`,
      ],
      midCta: {
        title: "وحّدوا قبول AV مع تقنية المعلومات",
        body: "ننسّق التغطية والشبكة وتدريب المشغّلين في جدول واحد—فتحديث AV القابل للتمويل والدعم.",
        primaryCta: "احجز اكتشاف AV",
        secondaryLine: "اطّلعوا على غرف الاجتماعات وIPTV والمسارح من صفحة الحلول الرئيسية.",
        secondaryLink: {
          to: "/solution-details",
          en: "Open solution portfolios",
          ar: "افتحوا محافظ الحلول",
        },
      },
      bottomCta: {
        title: "اجعلوا الصوت المؤسسي قابلًا للقياس لا للذوق فقط",
        body: "أخبرونا أين يفشل وضوح الخطاب أو الإذاعة أو الاجتماعات الهجينة اليوم؛ سنُهندس نظام صوت في المملكة يثق به المشغّلون ربعًا بعد ربع.",
        primaryCta: "تواصل مع إيه إم تي العربية",
      },
    },
  },
};
