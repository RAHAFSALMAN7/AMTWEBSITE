import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { sanity, urlFor } from '../sanityClient';
import { localize } from '../utils/localize';

interface NewsDetailsData {
  title: any;
  fullText: any;
  mainImage: any;
  gallery?: any[];
  videoUrl?: string;
}

const NewsDetails: React.FC = () => {
  const { slug, locale } = useParams();
  const [news, setNews] = useState<NewsDetailsData | null>(null);
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith("ar") ? "ar" : "en";

  useEffect(() => {
    sanity
      .fetch(
        `
        *[_type == "news" && slug.current == $slug][0]{
          "title": title[$locale],
          "fullText": fullText[$locale],
          mainImage,
          gallery,
          videoUrl
        }
        `,
        { slug, locale: locale || "en" }
      )
      .then((data) => setNews(data));
  }, [slug, locale]);

  if (!news) {
    return <p className="text-center py-20">{t("common.loading")}</p>;
  }

  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      <Link to={`/${locale || "en"}`} className="underline mb-6 inline-block">
        {t("common.backToNews")}
      </Link>

      <h1 className="text-3xl font-bold mb-6">{localize(news.title, lang)}</h1>

      {news.videoUrl ? (
        <video
          src={news.videoUrl}
          controls
          className="w-full rounded-xl mb-8"
        />
      ) : (
        <img
          src={urlFor(news.mainImage).width(1200).url()}
          alt={localize(news.title, lang)}
          className="rounded-xl mb-8"
        />
      )}

      <p className="whitespace-pre-line mb-10">{localize(news.fullText, lang)}</p>

      {news.gallery && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {news.gallery.map((img, i) => (
            <img
              key={i}
              src={urlFor(img).width(600).url()}
              className="rounded-lg"
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default NewsDetails;
