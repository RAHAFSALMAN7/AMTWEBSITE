import React, { useEffect, useState } from "react";
import { Linkedin, Twitter, Github } from "lucide-react";
import { useTranslation } from "react-i18next";
import { sanity } from "../sanityClient";

const iconMap: any = {
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
};

const Footer = () => {
  const [data, setData] = useState<any>(null);
  const { t } = useTranslation();

  useEffect(() => {
    sanity
      .fetch(
        `*[_type == "footer" && enabled == true][0]{
          phone,
          email,
          officeHours,
          socials,
          mapUrl,
          bottomLinks,
          copyright
        }`
      )
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return null;

  return (
    <footer
      className="relative text-white"
      style={{ backgroundColor: "#4C4D4E" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* BRAND */}
        <div>
          {/* اللوجو من public */}
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
            {data.officeHours.map((h: string, i: number) => (
              <p key={i} className="text-white/80">
                {h}
              </p>
            ))}
          </div>

          <div className="flex gap-4 mt-6">
            {data.socials.map((s: any, i: number) => {
              const Icon = iconMap[s.icon];
              return (
                <a
                  key={i}
                  href={s.url}
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
        <span>{data.copyright}</span>
        <div className="flex gap-6">
          {data.bottomLinks.map((b: string, i: number) => (
            <span key={i}>{b}</span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
