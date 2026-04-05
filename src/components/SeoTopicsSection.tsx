import type { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  AppLocale,
  DEFAULT_LOCALE,
  isSupportedLocale,
  withLocale,
} from "../utils/localeRouting";

/**
 * Crawlable, keyword-focused overview with internal links (layout matches site typography).
 */
const SeoTopicsSection: FC = () => {
  const { t } = useTranslation();
  const { locale } = useParams();
  const activeLocale: AppLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const p = (path: string) => withLocale(path, activeLocale);

  return (
    <section
      className="bg-[#F5F6F8] py-20 px-6 md:px-20 text-[#292929]"
      aria-labelledby="seo-topics-heading"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 id="seo-topics-heading" className="text-3xl md:text-4xl font-extrabold text-[#851A18]">
          {t("seo.topics.title")}
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">{t("seo.topics.intro")}</p>

        <div className="space-y-10 pt-4">
          <div>
            <h3 className="text-xl font-bold text-[#851A18] mb-3">{t("seo.topics.h2_ict")}</h3>
            <p className="text-gray-700 leading-relaxed mb-4">{t("seo.topics.p_ict")}</p>
            <ul className="list-disc ps-5 space-y-2 text-[#851A18] font-medium">
              <li>
                <Link className="hover:underline" to={p("/ict/data-network")}>
                  {t("seo.topics.link_data_network")}
                </Link>
              </li>
              <li>
                <Link className="hover:underline" to={p("/ict/unified-communications")}>
                  {t("seo.topics.link_uc")}
                </Link>
              </li>
              <li>
                <Link className="hover:underline" to={p("/ict/network-security")}>
                  {t("seo.topics.link_security")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#851A18] mb-3">{t("seo.topics.h2_low_current")}</h3>
            <p className="text-gray-700 leading-relaxed mb-4">{t("seo.topics.p_low_current")}</p>
            <ul className="list-disc ps-5 space-y-2 text-[#851A18] font-medium">
              <li>
                <Link className="hover:underline" to={p("/low-current/cctv")}>
                  {t("seo.topics.link_cctv")}
                </Link>
              </li>
              <li>
                <Link className="hover:underline" to={p("/low-current/access-control")}>
                  {t("seo.topics.link_access")}
                </Link>
              </li>
              <li>
                <Link className="hover:underline" to={p("/low-current/fire-alarm")}>
                  {t("seo.topics.link_fire")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#851A18] mb-3">{t("seo.topics.h2_digital")}</h3>
            <p className="text-gray-700 leading-relaxed mb-4">{t("seo.topics.p_digital")}</p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <Link className="font-semibold text-[#851A18] hover:underline" to={p("/contact")}>
                {t("seo.topics.link_contact")}
              </Link>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#851A18] mb-3">{t("seo.topics.h2_guides")}</h3>
            <p className="text-gray-700 leading-relaxed mb-4">{t("seo.topics.p_guides")}</p>
            <ul className="list-disc ps-5 space-y-2 text-[#851A18] font-medium">
              <li>
                <Link className="hover:underline" to={p("/services/cctv-systems")}>
                  {t("seo.topics.link_svc_cctv")}
                </Link>
              </li>
              <li>
                <Link className="hover:underline" to={p("/services/access-control")}>
                  {t("seo.topics.link_svc_ac")}
                </Link>
              </li>
              <li>
                <Link className="hover:underline" to={p("/services/network-infrastructure")}>
                  {t("seo.topics.link_svc_net")}
                </Link>
              </li>
              <li>
                <Link className="hover:underline" to={p("/services/smart-building-solutions")}>
                  {t("seo.topics.link_svc_smart")}
                </Link>
              </li>
              <li>
                <Link className="hover:underline" to={p("/services/audio-visual-systems")}>
                  {t("seo.topics.link_svc_av")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoTopicsSection;
