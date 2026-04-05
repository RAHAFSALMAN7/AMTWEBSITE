/**
 * SEO-focused blog / news topic seeds for Saudi Arabia (KSA).
 * Use with Sanity “news” or a future blog collection — titles are search-intent oriented.
 */
export type SaudiBlogTopic = {
  /** Suggested URL slug */
  slug: string;
  /** Primary topic line */
  title: string;
  /** Keywords / angles to cover */
  targetKeywords: string[];
  /** Content angle */
  angle: string;
};

export const SAUDI_SEO_BLOG_TOPICS: SaudiBlogTopic[] = [
  {
    slug: "enterprise-cctv-standards-ksa-2026",
    title: "Enterprise CCTV standards in Saudi Arabia: what IT and security teams align on first",
    targetKeywords: [
      "CCTV enterprise Saudi Arabia",
      "VMS network design KSA",
      "IP camera retention policy",
    ],
    angle: "Bridge physical security and IT governance for giga-project and corporate campuses.",
  },
  {
    slug: "access-control-biometric-cards-riyadh",
    title: "Access control in Riyadh towers: biometrics, visitor management, and audit-ready logs",
    targetKeywords: [
      "access control Riyadh",
      "biometric access KSA",
      "visitor management enterprise",
    ],
    angle: "Conversion-focused guide for mixed-use and HQ rollouts.",
  },
  {
    slug: "structured-cabling-fiber-campus-eastern-province",
    title: "Structured cabling and fiber backbone for Eastern Province industrial campuses",
    targetKeywords: [
      "structured cabling Khobar",
      "fiber backbone Saudi Arabia",
      "data center cabling KSA",
    ],
    angle: "Tie cable plant quality to uptime for OT/IT convergence.",
  },
  {
    slug: "wifi-6e-enterprise-jeddah",
    title: "Wi‑Fi 6E planning for large Jeddah sites: density, segmentation, and secure onboarding",
    targetKeywords: [
      "Wi-Fi enterprise Jeddah",
      "wireless survey Saudi Arabia",
      "corporateWLAN security",
    ],
    angle: "Help facilities and IT agree on RF and policy before AP counts balloon.",
  },
  {
    slug: "smart-building-bms-cybersecurity",
    title: "Smart buildings in KSA: connecting BMS, CCTV, and access without weakening cybersecurity",
    targetKeywords: [
      "smart building Saudi Arabia",
      "BMS cybersecurity",
      "OT IT segmentation",
    ],
    angle: "Risk narrative + checklist for CISOs and FM directors.",
  },
  {
    slug: "cctv-analytics-retail-neom-corridor",
    title: "Video analytics for retail & logistics hubs: loss prevention vs. privacy-by-design in KSA",
    targetKeywords: [
      "video analytics retail Saudi",
      "loss prevention CCTV",
      "privacy compliance surveillance",
    ],
    angle: "Balance operations value with responsible deployment language.",
  },
  {
    slug: "unified-communications-teams-rooms-ksa",
    title: "Microsoft Teams Rooms rollout in Saudi enterprises: AV, network, and support playbooks",
    targetKeywords: [
      "Teams Rooms Saudi Arabia",
      "meeting room AV Riyadh",
      "unified communications KSA",
    ],
    angle: "Cross-sell ICT + AV integration story with measurable adoption KPIs.",
  },
  {
    slug: "network-segmentation-nac-campus",
    title: "Network segmentation and NAC for university and healthcare campuses in Saudi Arabia",
    targetKeywords: [
      "network segmentation KSA",
      "NAC campus network",
      "healthcare network security Saudi",
    ],
    angle: "Technical depth for IT leads evaluating Zero Trust style controls.",
  },
  {
    slug: "outside-plant-fiber-5g-backhaul-ksa",
    title: "Outside plant (OSP) fiber builds: testing, documentation, and handover best practices",
    targetKeywords: [
      "OSP fiber Saudi Arabia",
      "fiber splicing testing KSA",
      "5G backhaul fiber",
    ],
    angle: "Show engineering discipline AMT brings to field builds.",
  },
  {
    slug: "physical-security-integration-lenel-video",
    title: "Integrating access control with video: open platforms, APIs, and operator workflows",
    targetKeywords: [
      "access control integration CCTV",
      "Lenel Saudi Arabia",
      "physical security integration",
    ],
    angle: "Vendor-neutral integration story tied to SOC efficiency.",
  },
];
