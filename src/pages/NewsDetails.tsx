import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { sanity, urlFor } from '../sanityClient';

interface NewsDetailsData {
  title: string;
  fullText: string;
  mainImage: any;
  gallery?: any[];
  videoUrl?: string;
}

const NewsDetails: React.FC = () => {
  const { slug } = useParams();
  const [news, setNews] = useState<NewsDetailsData | null>(null);

  useEffect(() => {
    sanity
      .fetch(
        `
        *[_type == "news" && slug.current == $slug][0]{
          title,
          fullText,
          mainImage,
          gallery,
          videoUrl
        }
        `,
        { slug }
      )
      .then((data) => setNews(data));
  }, [slug]);

  if (!news) {
    return <p className="text-center py-20">Loading...</p>;
  }

  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      <Link to="/" className="underline mb-6 inline-block">
        ← Back to News
      </Link>

      <h1 className="text-3xl font-bold mb-6">{news.title}</h1>

      {news.videoUrl ? (
        <video
          src={news.videoUrl}
          controls
          className="w-full rounded-xl mb-8"
        />
      ) : (
        <img
          src={urlFor(news.mainImage).width(1200).url()}
          alt={news.title}
          className="rounded-xl mb-8"
        />
      )}

      <p className="whitespace-pre-line mb-10">{news.fullText}</p>

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
