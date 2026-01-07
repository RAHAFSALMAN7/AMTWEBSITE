import React, { useEffect, useRef } from "react";

export default function AboutUsPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const values = [
    {
      icon: "/images/Client Focus.png",
      title: "Client Focus",
      text: "We put clients at the center of everything we do.",
    },
    {
      icon: "/images/Integrity & Transparency.png",
      title: "Integrity & Transparency",
      text: "We act with honesty and openness in all that we do.",
    },
    {
      icon: "/images/Innovation.png",
      title: "Innovation",
      text: "We strive for continuous improvement and creativity.",
    },
    {
      icon: "/images/Commitment & accountability.png",
      title: "Commitment & Accountability",
      text: "We take ownership of our actions and responsibilities.",
    },
    {
      icon: "/images/team work.png",
      title: "Team Work",
      text: "We collaborate and support each other to achieve success.",
    },
    {
      icon: "/images/Layer 1.png",
      title: "Excellence",
      text: "We deliver quality and excellence in everything we do.",
    },
  ];

  return (
    <div className="w-full font-sans overflow-x-hidden">
      {/* ===== Header ===== */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#851A18] via-[#a11919] via-[#b91d1b] to-[#6d1412] animate-gradient-shift"></div>
        <img
          src="/images/banaraboutus.png"
          alt="About Us Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-white text-5xl md:text-7xl font-bold uppercase tracking-[0.2em] drop-shadow-2xl">
            About Us
          </h1>
          <div className="mt-4 w-24 h-1 bg-white/80 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* ===== Our Company ===== */}
      <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#851A18]/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 fade-in">
            {/* ===== VIDEO ===== */}
            <div className="lg:w-1/2">
              <div className="relative group">
                <video
                  src="/video/videoplayback.mp4"
                  controls
                  className="w-full h-[350px] md:h-[450px] object-cover rounded-2xl shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* ===== TEXT ===== */}
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20"></div>
                <div className="relative p-12">
                  <div className="mb-6">
                    <div className="inline-block px-4 py-2 bg-[#851A18]/10 rounded-full text-[#851A18] text-sm font-semibold tracking-wide uppercase mb-4">
                      Who We Are
                    </div>
                    <h2 className="text-[#851A18] text-4xl md:text-5xl font-bold leading-tight">
                      OUR COMPANY
                    </h2>
                  </div>
                  <div className="space-y-6 text-[#292929]">
                    <p className="text-lg leading-relaxed">
                      Advanced Micro Technologies (AMT) specializes in delivering
                      high-quality network solutions customized for each client.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Our focus on innovation as a system integrator ensures
                      continuous technical development and project success.
                    </p>
                  </div>
                  <div className="mt-8 w-16 h-1 bg-gradient-to-r from-[#851A18] to-[#a11919] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Our Strategy ===== */}
      <section className="relative py-32 bg-gradient-to-br from-[#1a1a1a] via-[#2c2c2c] to-[#1f1f1f] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="fade-in">
            <div className="mb-16">
              <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-semibold tracking-wide uppercase mb-6">
                Our Vision
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                Our strategy is to become a leading{" "}
                <span className="bg-gradient-to-r from-[#851A18] to-[#a11919] bg-clip-text text-transparent">
                  Technology System Integration
                </span>{" "}
                company in the region
              </h2>
            </div>

            <div className="relative mb-16 group">
              <img
                src="/images/985.png"
                alt="Strategy"
                className="mx-auto w-full max-w-5xl h-[400px] object-cover rounded-3xl shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#851A18]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                "We provide assistance from concept design to final commissioning and handover.",
                "International partners are carefully selected to ensure best practices.",
                "Turnkey solutions in ICT, security systems, audio-video solutions, and low current systems.",
              ].map((text, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-8 rounded-2xl border border-white/10">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ATM Values ===== */}
      <section className="relative py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#851A18]/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 fade-in">
            <div className="inline-block px-6 py-3 bg-[#851A18]/10 backdrop-blur-sm rounded-full text-[#851A18] text-sm font-semibold tracking-wide uppercase mb-6">
              Our Foundation
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#851A18] mb-4">
              ATM Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#851A18] to-[#a11919] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 fade-in">
            {values.map((value, idx) => (
              <div key={idx} className="group relative overflow-hidden">
                <div className="relative h-full p-8 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#851A18] to-[#a11919] opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>

                  <div className="relative z-10 flex flex-col items-center text-center h-full">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#851A18]/10 to-[#a11919]/10 group-hover:from-white/20 group-hover:to-white/10 flex items-center justify-center transition-all duration-500">
                        <img
                          src={value.icon}
                          alt={value.title}
                          className="w-10 h-10 group-hover:brightness-0 group-hover:invert"
                        />
                      </div>
                    </div>

                    <h4 className="text-[#851A18] group-hover:text-white text-lg font-bold mb-4 transition-colors duration-500">
                      {value.title}
                    </h4>

                    <p className="text-gray-600 group-hover:text-white/90 text-sm leading-relaxed">
                      {value.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Footer Divider ===== */}
      <div className="relative h-4 bg-gradient-to-r from-[#6d1412] via-[#851A18] to-[#a11919] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
      </div>
    </div>
  );
}
