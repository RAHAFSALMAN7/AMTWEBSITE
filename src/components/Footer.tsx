import { useEffect, useState } from "react";
import { Linkedin, Instagram, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { sanity } from "../sanityClient";
import { localize } from "../utils/localize";

// 🔹 خريطة الأيقونات
const iconMap: Record<string, any> = {
  linkedin: Linkedin,
  instagram: Instagram,
  x: X,
};

const Footer = () => {
  const [data, setData] = useState<any>(null);
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith("ar") ? "ar" : "en";

  useEffect(() => {
    sanity
      .fetch(
        `*[_type == "footer" && enabled == true][0]{
          phone,
          email,
          officeHours,
          mapUrl,
          bottomLinks,
          copyright
        }`
      )
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return null;

  const officeHoursRaw = localize(data.officeHours, lang);
  const officeHours = Array.isArray(officeHoursRaw)
    ? officeHoursRaw.map((item) => localize(item, lang)).filter(Boolean)
    : [];

  const bottomLinksRaw = localize(data.bottomLinks, lang);
  const bottomLinks = Array.isArray(bottomLinksRaw)
    ? bottomLinksRaw.map((item) => localize(item, lang)).filter(Boolean)
    : [];

  // 🔹 روابط التواصل الثابتة
  const socialLinks: Record<string, string> = {
    linkedin: "https://www.linkedin.com/company/amt-example", // عدّل حسب حسابك
    instagram: "https://www.instagram.com/amt_arabia/",
    x: "https://x.com/amt_arabia2009",
  };

  return (
    <footer
      className="relative text-white"
      style={{ backgroundColor: "#4C4D4E" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* BRAND */}
        <div>
          <img src="/amt1.png" alt="AMT Logo" className="w-56" />
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold text-lg mb-3 text-white">
            {t("common.contactUs")}
          </h4>

          <p>
            {t("common.tel")}{" "}
            <a href={`tel:${data.phone}`} className="text-white">
              {data.phone}
            </a>
          </p>

          <p>
            {t("common.email")}{" "}
            <a href={`mailto:${data.email}`} className="text-white">
              {data.email}
            </a>
          </p>

          <div className="mt-6">
            <h4 className="font-semibold mb-2 text-white">
              {t("common.officeHours")}
            </h4>

            {officeHours?.map((h: string, i: number) => (
              <p key={i} className="text-white/80">
                {h}
              </p>
            ))}
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6">
            {Object.entries(socialLinks).map(([key, url]) => {
              const Icon = iconMap[key.toLowerCase()];
              if (!Icon || typeof url !== "string") return null;
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* MAP */}
        <div>
          <iframe
            src={data.mapUrl}
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: 12 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/20 px-6 py-6 flex flex-col lg:flex-row justify-between text-sm text-white/80">
        <span>{localize(data.copyright, lang)}</span>

        <div className="flex gap-6">
          {bottomLinks?.map((b: string, i: number) => (
            <span key={i}>{b}</span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
