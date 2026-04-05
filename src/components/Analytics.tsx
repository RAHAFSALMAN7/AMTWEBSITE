import { Helmet } from "react-helmet-async";

/**
 * Google Analytics 4 — set `VITE_GA_MEASUREMENT_ID` (e.g. G-XXXXXXXX) in `.env`.
 */
export default function Analytics() {
  const id = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
  if (!id) return null;

  const inline = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${id}', { send_page_view: true });
  `;

  return (
    <Helmet>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
      <script dangerouslySetInnerHTML={{ __html: inline }} />
    </Helmet>
  );
}
