import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { sanity, urlFor } from "../sanityClient";
import { localize } from "../utils/localize";
import OptimizedImage from "./OptimizedImage";

export default function AboutUsPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [data, setData] = useState<any>(null);
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith("ar") ? "ar" : "en";

  /* ===== INTERSECTION OBSERVER ===== */
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [data]);

  /* ===== FETCH FROM SANITY ===== */
  useEffect(() => {
    sanity
      .fetch(`
        *[_type == "aboutPage" && enabled == true][0]{
          heroTitle,
          heroImage,
          whoBadge,
          whoTitle,
          whoText1,
          whoText2,
          whoVideo{
            asset->{url}
          },
          visionText,
          values[]{
            title,
            text,
            icon
          },
          teamTitle,
          teamDescription,
          teamRoles
        }
      `)
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return null;

  const pageStyle = {
    backgroundImage: "url('/bac.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className="relative w-full font-sans overflow-x-hidden text-white"
      style={pageStyle}
    >
      <div
        className="absolute inset-0 backdrop-blur-[2px]"
        style={{ backgroundColor: "rgba(76,77,78,0.85)" }}
      />

      <div className="relative z-10">

        {/* HEADER */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          {data.heroImage && (
            <OptimizedImage
              src={urlFor(data.heroImage).url()}
              alt={`${localize(data.heroTitle, lang)} — about AMT banner background photography`}
              className="absolute inset-0 w-full h-full object-cover opacity-10"
              width={1920}
              height={400}
              loading="lazy"
            />
          )}

          <div className="text-center fade-in">
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-[0.2em]">
              {localize(data.heroTitle, lang)}
            </h1>
            <div className="mt-4 w-24 h-[2px] bg-white/40 mx-auto rounded-full" />
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16 fade-in">

              <div className="lg:w-1/2">
                {data.whoVideo?.asset?.url && (
                  <video
                    src={data.whoVideo.asset.url}
                    controls
                    className="w-full h-[350px] md:h-[450px] object-cover rounded-2xl shadow-xl"
                  />
                )}
              </div>

              <div className="lg:w-1/2">
                <div className="p-12 bg-white rounded-3xl shadow-xl text-[#1F2937]">
                  <span className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold uppercase mb-4">
                    {localize(data.whoBadge, lang)}
                  </span>

                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#6B2C32]">
                    {localize(data.whoTitle, lang)}
                  </h2>

                  <p className="text-lg leading-relaxed mb-4">
                    {localize(data.whoText1, lang)}
                  </p>

                  <p className="text-lg leading-relaxed">
                    {localize(data.whoText2, lang)}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* VISION */}
        <section className="py-32">
          <div className="container mx-auto px-6 text-center fade-in">
            <span className="inline-block px-6 py-3 bg-white/20 rounded-full text-sm uppercase mb-6">
              {t("about.ourVision")}
            </span>

            <h2 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
              {localize(data.visionText, lang)}
            </h2>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 fade-in">
              {data.values?.map((value: any, idx: number) => (
                <div
                  key={idx}
                  className="p-8 bg-white rounded-2xl shadow-xl text-center text-[#1F2937]"
                >
                  {value.icon && (
                    <OptimizedImage
                      src={urlFor(value.icon).url()}
                      alt={`${localize(value.title, lang)} — company value icon`}
                      className="w-10 h-10 mx-auto mb-4 opacity-80"
                      width={40}
                      height={40}
                      loading="lazy"
                    />
                  )}

                  <h4 className="text-lg font-bold mb-3 text-[#6B2C32]">
                    {localize(value.title, lang)}
                  </h4>

                  <p className="text-sm leading-relaxed">
                    {localize(value.text, lang)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="py-32">
          <div className="container mx-auto px-6 text-center fade-in">

            <h2 className="text-3xl md:text-5xl font-bold">
              {localize(data.teamTitle, lang)}
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-white/80 text-lg">
              {localize(data.teamDescription, lang)}
            </p>

          </div>
        </section>

        {/* EXPANDED SEO-FRIENDLY CONTENT */}
        <section className="pb-24">
          <div className="container mx-auto px-6 fade-in">
            <details className="max-w-5xl mx-auto bg-white/10 rounded-2xl border border-white/20 shadow-lg">
              <summary className="cursor-pointer list-none px-6 py-4 text-center">
                <span className="inline-flex items-center justify-center rounded-lg bg-white text-[#1F2937] px-6 py-3 font-semibold">
                  Read More
                </span>
              </summary>

              <div className="px-6 pb-8 pt-2 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Enterprise connectivity, security, and smart collaboration
                </h2>
                <p className="text-lg leading-relaxed mb-8">
                  Advanced Micro Technologies (AMT) engineers ICT, low-current, audio-visual, and outside plant programs for organizations that need dependable digital infrastructure—from campus networks to unified communications and modern physical security.
                </p>

                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  ICT foundations: data networks, UC, and hardened security
                </h3>
                <p className="leading-relaxed mb-4">
                  Strong routing, switching, wireless, voice, and security layers keep your teams online and your data protected. Explore how AMT designs, integrates, and supports these systems from design through operations.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-8">
                  <li>Data network solutions for resilient campus and WAN connectivity</li>
                  <li>Unified communications and collaboration integration</li>
                  <li>Network security services including access control to apps and endpoints</li>
                </ul>

                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Low-current systems: CCTV, access control, and life safety
                </h3>
                <p className="leading-relaxed mb-4">
                  Physical security and life-safety platforms work best when video, access, and alerting share a coherent architecture. AMT delivers standards-aware integration so monitoring centers and field teams stay aligned.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-8">
                  <li>CCTV and smart video solutions with analytics-ready platforms</li>
                  <li>Access control systems with open integration pathways</li>
                  <li>Fire alarm and detection for safer facilities</li>
                </ul>

                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Digital workspaces and smart contact paths for stakeholders
                </h3>
                <p className="leading-relaxed mb-8">
                  Modern enterprises need frictionless ways to reach specialists—whether scheduling a consultation, sharing project documents, or aligning scopes across sites. AMT focuses on practical handoffs between your business teams and our integration engineers.
                </p>

                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Contact AMT to scope your next network, security, or AV rollout
                </h3>

                <h3 className="text-xl md:text-2xl font-bold mt-8 mb-3">
                  In-depth service guides (amt-arabia.net)
                </h3>
                <p className="leading-relaxed mb-4">
                  Short technical explainers map how we phrase delivery for CCTV, access, network infrastructure, and smart buildings—then connect to the same portfolios you will see on detailed solution pages.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-8">
                  <li>Enterprise CCTV systems and IP video</li>
                  <li>Access control and identity management</li>
                  <li>Network infrastructure and structured cabling</li>
                  <li>Smart building solutions and OT/IT integration</li>
                  <li>Audio visual systems Saudi Arabia — corporate sound &amp; collaboration</li>
                </ul>

                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Frequently asked questions
                </h3>

                <h4 className="text-lg md:text-xl font-semibold mb-2">
                  What types of ICT projects does AMT deliver?
                </h4>
                <p className="leading-relaxed mb-5">
                  AMT designs and integrates data networks, wireless, unified communications, IP telephony, security-centric networking, and data center–related infrastructure for enterprises and campuses—aligned to your standards, vendors, and timelines.
                </p>

                <h4 className="text-lg md:text-xl font-semibold mb-2">
                  Do you provide low-current and physical security solutions?
                </h4>
                <p className="leading-relaxed mb-5">
                  Yes. AMT implements CCTV and VMS ecosystems, access control platforms, fire alarm and detection, and synchronized timing systems, with an emphasis on maintainable architectures and vendor-neutral integration where appropriate.
                </p>

                <h4 className="text-lg md:text-xl font-semibold mb-2">
                  Can AMT support audio-visual and meeting-room deployments?
                </h4>
                <p className="leading-relaxed mb-5">
                  AMT delivers meeting-room AV, auditoriums and theaters, IPTV and digital signage, interactive displays, and structured video-wall mounting—typically integrated with collaboration platforms such as Microsoft Teams in hybrid environments.
                </p>

                <h4 className="text-lg md:text-xl font-semibold mb-2">
                  Which regions does AMT serve?
                </h4>
                <p className="leading-relaxed mb-5">
                  AMT supports customers across the Kingdom of Saudi Arabia and the broader region, with remote coordination available for multinational programs that require consistent engineering documentation and delivery discipline.
                </p>

                <h4 className="text-lg md:text-xl font-semibold mb-2">
                  How do I request a consultation or proposal?
                </h4>
                <p className="leading-relaxed">
                  Use the contact page to share your goals, facility locations, timelines, and any RFP materials. The AMT team responds with next steps, clarification questions, and practical scoping guidance for your ICT, security, AV, or OSP initiative.
                </p>
              </div>
            </details>
          </div>
        </section>

      </div>
    </div>
  );
}
