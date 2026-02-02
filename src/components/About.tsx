import React, { useEffect, useRef, useState } from "react";
import { sanity, urlFor } from "../sanityClient";

export default function AboutUsPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [data, setData] = useState<any>(null);

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

  return (
    <div className="w-full font-sans overflow-x-hidden text-[#1F2937] bg-white">

      {/* ===== HEADER ===== */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAFA] via-[#F5F5F5] to-[#FFFFFF]" />

        {data.heroImage && (
          <img
            src={urlFor(data.heroImage).url()}
            alt="About Us Banner"
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
        )}

        <div className="relative z-10 text-center fade-in">
          <h1 className="text-[#6B2C32] text-5xl md:text-7xl font-bold uppercase tracking-[0.2em]">
            {data.heroTitle}
          </h1>
          <div className="mt-4 w-24 h-[1.5px] bg-[#E5E7EB] mx-auto rounded-full" />
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
      <section className="relative py-32 bg-[#FAFAFA] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E5E7EB] rounded-full blur-3xl opacity-40" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 fade-in">

            <div className="lg:w-1/2">
              {data.whoVideo?.asset?.url && (
                <video
                  src={data.whoVideo.asset.url}
                  controls
                  className="w-full h-[350px] md:h-[450px] object-cover rounded-2xl shadow-md"
                />
              )}
            </div>

            <div className="lg:w-1/2">
              <div className="p-12 bg-white rounded-3xl shadow-md border border-[#E5E7EB]">
                <span className="inline-block px-4 py-2 bg-[#F3F4F6] rounded-full text-[#6B7280] text-sm font-semibold uppercase mb-4">
                  {data.whoBadge}
                </span>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#6B2C32]">
                  {data.whoTitle}
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-[#374151]">
                  {data.whoText1}
                </p>

                <p className="text-lg leading-relaxed text-[#374151]">
                  {data.whoText2}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== VISION ===== */}
      <section className="relative py-32 bg-[#F9FAFB]">
        <div className="container mx-auto px-6 text-center fade-in">
          <span className="inline-block px-6 py-3 bg-white border border-[#E5E7EB] rounded-full text-sm uppercase mb-6 text-[#6B7280]">
            Our Vision
          </span>

          <h2 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
            {data.visionText}
          </h2>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="relative py-32 bg-white">
        <div className="container mx-auto px-6">

          <div className="text-center mb-20 fade-in">
            <span className="inline-block px-6 py-3 bg-[#F3F4F6] rounded-full text-[#6B7280] text-sm uppercase mb-6">
              Our Values
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#6B2C32]">
              What Drives AMT
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 fade-in">
            {data.values?.map((value: any, idx: number) => (
              <div
                key={idx}
                className="p-8 bg-[#FAFAFA] rounded-2xl border border-[#E5E7EB] text-center hover:bg-white transition"
              >
                {value.icon && (
                  <img
                    src={urlFor(value.icon).url()}
                    className="w-10 h-10 mx-auto mb-4 opacity-70"
                  />
                )}

                <h4 className="text-lg font-bold mb-3 text-[#6B2C32]">
                  {value.title}
                </h4>

                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {value.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="relative py-32 bg-[#F9FAFB] overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#6B2C32]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#6B2C32]/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24 fade-in">
            <span className="inline-block px-6 py-3 bg-white border border-[#E5E7EB] rounded-full text-sm uppercase mb-6 text-[#6B7280]">
              Our Team
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-[#6B2C32]">
              {data.teamTitle}
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-[#6B7280] text-lg">
              {data.teamDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 fade-in">
            {data.teamRoles?.map((role: string, i: number) => (
              <div
                key={i}
                className="group relative p-10 bg-white/70 backdrop-blur-xl rounded-3xl
                border border-[#E5E7EB] hover:border-[#6B2C32]
                transition-all duration-500 shadow-sm hover:shadow-xl"
              >
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#6B2C32]/10 group-hover:bg-[#6B2C32]/20 transition" />

                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#F3F4F6]
                text-[#6B2C32] font-bold text-xl mb-8">
                  {role.charAt(0)}
                </div>

                <h3 className="text-xl font-bold mb-4">
                  {role}
                </h3>

                <p className="text-sm text-[#6B7280] leading-relaxed">
                  A collective of specialists focused on delivering reliable,
                  scalable, and future-ready solutions.
                </p>

                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#6B2C32]
                group-hover:w-full transition-all duration-500 rounded-b-3xl" />
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
