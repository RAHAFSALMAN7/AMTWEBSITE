import React, { useEffect, useRef, useState } from "react";
import { Star, Award } from "lucide-react";
import { useTranslation } from "react-i18next";
import { sanity } from "../sanityClient";
import { localize } from "../utils/localize";

const TestimonialsPage: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith("ar") ? "ar" : "en";

  const sectionRef = useRef<HTMLElement>(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    sanity
      .fetch(`
        *[_type == "testimonialsPage" && enabled == true][0]{
          pageTitle,
          subtitle,
          description,
          partners[]{
            name,
            category
          },
          testimonials[]{
            rating,
            quote,
            author,
            position,
            company
          }
        }
      `)
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return null;

  const pageTitle = localize(data.pageTitle, lang);
  const subtitle = localize(data.subtitle, lang);
  const description = localize(data.description, lang);

  return (
    <section
      ref={sectionRef}
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="py-24 bg-[#E5E5E5]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== HEADER ===== */}
        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full border mb-6">
            <Award className="w-5 h-5 text-[#EB2427]" />
            <span className="font-semibold">{pageTitle}</span>
          </div>

          <h2 className="text-5xl font-black text-[#941B20] mb-6">
            {subtitle}
          </h2>

          <p className="text-xl max-w-3xl mx-auto text-[#941B20]/70">
            {description}
          </p>
        </header>

        {/* ===== PARTNERS ===== */}
        <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-24">
          {data.partners?.map((p: any, i: number) => {
            const name = localize(p.name, lang);
            const category = localize(p.category, lang);

            return (
              <li
                key={i}
                className="bg-white rounded-2xl shadow-md p-4 text-center"
              >
                <strong className="block text-sm">{name}</strong>
                <span className="text-xs opacity-70">
                  {category}
                </span>
              </li>
            );
          })}
        </ul>

        {/* ===== TESTIMONIALS ===== */}
        <h3 className="text-4xl font-bold text-center mb-12">
          {pageTitle}
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {data.testimonials?.map((t: any, i: number) => {
            const quote = localize(t.quote, lang);
            const author = localize(t.author, lang);
            const position = localize(t.position, lang);

            return (
              <article
                key={i}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(t.rating || 5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#EB2427] fill-current"
                    />
                  ))}
                </div>

                <blockquote className="italic mb-6">
                  {quote}
                </blockquote>

                <footer>
                  <strong>{author}</strong>
                  <p className="text-sm">{position}</p>
                  <p className="text-xs text-[#EB2427]">
                    {localize(t.company, lang)}
                  </p>
                </footer>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPage;
