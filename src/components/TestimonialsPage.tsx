import React, { useEffect, useRef, useState } from "react";
import { Star, Award } from "lucide-react";
import { useLanguage } from "../Context/LanguageContext";
import { sanity } from "../sanityClient";

const TestimonialsPage: React.FC = () => {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    sanity
      .fetch(`
        *[_type == "testimonialsPage" && enabled == true][0]{
          pageTitle,
          subtitle,
          description,
          partners,
          testimonials
        }
      `)
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return null;

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-[#E5E5E5]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full border mb-6">
            <Award className="w-5 h-5 text-[#EB2427]" />
            <span className="font-semibold">{data.pageTitle}</span>
          </div>

          <h2 className="text-5xl font-black text-[#941B20] mb-6">
            {data.subtitle}
          </h2>

          <p className="text-xl max-w-3xl mx-auto text-[#941B20]/70">
            {data.description}
          </p>
        </header>

        {/* PARTNERS */}
        <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-24">
          {data.partners?.map((p: any, i: number) => (
            <li
              key={i}
              className="bg-white rounded-2xl shadow-md p-4 text-center"
            >
              <strong className="block text-sm">{p.name}</strong>
              <span className="text-xs opacity-70">{p.category}</span>
            </li>
          ))}
        </ul>

        {/* TESTIMONIALS */}
        <h3 className="text-4xl font-bold text-center mb-12">
          Testimonials
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {data.testimonials?.map((t: any, i: number) => (
            <article
              key={i}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[#EB2427] fill-current"
                  />
                ))}
              </div>

              <blockquote className="italic mb-6">
                {language === "ar" ? t.quoteAr : t.quoteEn}
              </blockquote>

              <footer>
                <strong>{t.author}</strong>
                <p className="text-sm">
                  {language === "ar" ? t.positionAr : t.positionEn}
                </p>
                <p className="text-xs text-[#EB2427]">{t.company}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPage;
