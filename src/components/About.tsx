import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { sanity, urlFor } from "../sanityClient";

export default function AboutUsPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [data, setData] = useState<any>(null);
  const { t } = useTranslation();

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
      {/* ===== OVERLAY ===== */}
      <div
        className="absolute inset-0 backdrop-blur-[2px]"
        style={{ backgroundColor: "rgba(76,77,78,0.85)" }}
      />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10">

        {/* ===== HEADER ===== */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          {data.heroImage && (
            <img
              src={urlFor(data.heroImage).url()}
              alt="About Us Banner"
              className="absolute inset-0 w-full h-full object-cover opacity-10"
            />
          )}

          <div className="text-center fade-in">
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-[0.2em]">
              {data.heroTitle}
            </h1>
            <div className="mt-4 w-24 h-[2px] bg-white/40 mx-auto rounded-full" />
          </div>
        </section>

        {/* ===== WHO WE ARE ===== */}
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
                    {data.whoBadge}
                  </span>

                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#6B2C32]">
                    {data.whoTitle}
                  </h2>

                  <p className="text-lg leading-relaxed mb-4">
                    {data.whoText1}
                  </p>

                  <p className="text-lg leading-relaxed">
                    {data.whoText2}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="py-32">
          <div className="container mx-auto px-6 text-center fade-in">
            <span className="inline-block px-6 py-3 bg-white/20 rounded-full text-sm uppercase mb-6">
              {t("about.ourVision")}
            </span>

            <h2 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
              {data.visionText}
            </h2>
          </div>
        </section>

        {/* ===== VALUES ===== */}
        <section className="py-32">
          <div className="container mx-auto px-6">

            <div className="text-center mb-20 fade-in">
              <span className="inline-block px-6 py-3 bg-white/20 rounded-full text-sm uppercase mb-6">
                {t("about.ourValues")}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold">
                {t("about.whatDrivesAmt")}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 fade-in">
              {data.values?.map((value: any, idx: number) => (
                <div
                  key={idx}
                  className="p-8 bg-white rounded-2xl shadow-xl text-center text-[#1F2937]"
                >
                  {value.icon && (
                    <img
                      src={urlFor(value.icon).url()}
                      className="w-10 h-10 mx-auto mb-4 opacity-80"
                    />
                  )}

                  <h4 className="text-lg font-bold mb-3 text-[#6B2C32]">
                    {value.title}
                  </h4>

                  <p className="text-sm leading-relaxed">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        <section className="py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-24 fade-in">
              <span className="inline-block px-6 py-3 bg-white/20 rounded-full text-sm uppercase mb-6">
                {t("about.ourTeam")}
              </span>

              <h2 className="text-3xl md:text-5xl font-bold">
                {data.teamTitle}
              </h2>

              <p className="mt-6 max-w-2xl mx-auto text-white/80 text-lg">
                {data.teamDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 fade-in">
              {data.teamRoles?.map((role: string, i: number) => (
                <div
                  key={i}
                  className="p-10 bg-white rounded-3xl shadow-xl text-[#1F2937]"
                >
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gray-100
                  text-[#6B2C32] font-bold text-xl mb-8">
                    {role.charAt(0)}
                  </div>

                  <h3 className="text-xl font-bold mb-4">
                    {role}
                  </h3>

                  <p className="text-sm leading-relaxed">
                    {t("about.teamDescription")}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
