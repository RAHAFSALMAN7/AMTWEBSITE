import type { ImgHTMLAttributes } from "react";

export type OptimizedImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "loading" | "decoding"
> & {
  /** When true, load eagerly and hint high fetch priority (hero / above-the-fold). */
  priority?: boolean;
};

/**
 * Image helper for CLS + LCP: explicit dimensions when possible, lazy by default.
 * (Vite/React SPA — use this instead of raw &lt;img&gt; where practical.)
 */
export function OptimizedImage({
  priority,
  decoding = "async",
  loading,
  alt,
  ...rest
}: OptimizedImageProps) {
  return (
    <img
      alt={alt ?? ""}
      loading={priority ? "eager" : loading ?? "lazy"}
      decoding={decoding}
      fetchPriority={priority ? "high" : undefined}
      {...rest}
    />
  );
}

export default OptimizedImage;
