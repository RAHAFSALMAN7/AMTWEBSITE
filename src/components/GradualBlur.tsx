import React from "react";

interface GradualBlurProps {
  target?: "parent" | "fixed";
  position?: "top" | "bottom";
  height?: number;      // ارتفاع منطقة البلور بالبيكسل
  strength?: number;    // قوة البلور
  divCount?: number;    // عدد طبقات البلور
  exponential?: boolean;
  opacity?: number;
}

const GradualBlur: React.FC<GradualBlurProps> = ({
  target = "parent",
  position = "bottom",
  height = 100,
  strength = 4,
  divCount = 5,
  exponential = true,
  opacity = 1,
}) => {
  const divs = Array.from({ length: divCount });

  const containerStyle: React.CSSProperties = {
    position: target === "parent" ? "absolute" : "fixed",
    [position]: 0,
    height: `${height}px`,
    width: "100%",
    pointerEvents: "none",
    zIndex: 10,
    isolation: "isolate",
  };

  return (
    <div style={containerStyle}>
      {divs.map((_, i) => {
        const blur = exponential
          ? Math.pow(strength, i + 1)
          : (strength / divCount) * (i + 1);

        return (
          <div
            key={i}
            style={{
              height: `${100 / divCount}%`,
              backdropFilter: `blur(${blur}px)`,
              WebkitBackdropFilter: `blur(${blur}px)`,
              opacity,
            }}
          />
        );
      })}
    </div>
  );
};

export default GradualBlur;
