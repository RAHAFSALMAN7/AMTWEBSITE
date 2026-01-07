import React, { CSSProperties, PropsWithChildren } from "react";

interface ElectricBorderProps {
  color?: string;      // لون التوهج
  speed?: number;      // سرعة الحركة
  chaos?: number;      // عشوائية الحركة
  thickness?: number;  // سماكة الخط
  style?: CSSProperties; // ستايل إضافي
}

const ElectricBorder: React.FC<PropsWithChildren<ElectricBorderProps>> = ({
  children,
  color = "#7df9ff",
  speed = 1,
  chaos = 0.5,
  thickness = 2,
  style,
}) => {
  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        padding: 16,
        borderRadius: style?.borderRadius ?? 12,
        ...style,
      }}
    >
      {/* العنصر الأساسي */}
      <div>{children}</div>

      {/* الحدود المتحركة */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: style?.borderRadius ?? 12,
          padding: thickness,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            border: `${thickness}px solid ${color}`,
            borderRadius: style?.borderRadius ?? 12,
            boxShadow: `0 0 20px ${color}, 0 0 40px ${color}`,
            animation: `electric-border ${5 / speed}s infinite alternate`,
          }}
        />
      </div>

      {/* keyframes */}
      <style>{`
        @keyframes electric-border {
          0% {
            box-shadow: 0 0 10px ${color}, 0 0 20px ${color};
            transform: scale(1);
          }
          100% {
            box-shadow: 0 0 ${20 + chaos * 20}px ${color},
                        0 0 ${40 + chaos * 40}px ${color};
            transform: scale(1.01);
          }
        }
      `}</style>
    </div>
  );
};

export default ElectricBorder;
