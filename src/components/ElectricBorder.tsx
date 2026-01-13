import React, { CSSProperties, PropsWithChildren } from "react";

interface ElectricBorderProps {
  color?: string;        // لون التوهج
  speed?: number;        // سرعة الحركة
  chaos?: number;        // عشوائية الحركة
  thickness?: number;    // سماكة الخط
  style?: CSSProperties; // ستايل إضافي
}

const ElectricBorder: React.FC<PropsWithChildren<ElectricBorderProps>> = ({
  children,
  color = "#CFCFCF", // 🔹 سكني فاتح للتوهج
  speed = 1,
  chaos = 0.5,
  thickness = 2,
  style,
}) => {
  const radius = style?.borderRadius ?? 12;

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        padding: 16,
        borderRadius: radius,
        ...style,
      }}
    >
      {/* المحتوى */}
      <div>{children}</div>

      {/* الإطار المتوهج */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: radius,
          padding: thickness,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            border: `${thickness}px solid ${color}`,
            borderRadius: radius,
            boxShadow: `
              0 0 12px ${color},
              0 0 24px rgba(0,0,0,0.15)
            `,
            animation: `electric-border ${5 / speed}s infinite alternate`,
          }}
        />
      </div>

      {/* Animation */}
      <style>{`
        @keyframes electric-border {
          0% {
            box-shadow:
              0 0 8px ${color},
              0 0 16px rgba(0,0,0,0.15);
            transform: scale(1);
          }
          100% {
            box-shadow:
              0 0 ${14 + chaos * 14}px ${color},
              0 0 ${28 + chaos * 28}px rgba(0,0,0,0.2);
            transform: scale(1.01);
          }
        }
      `}</style>
    </div>
  );
};

export default ElectricBorder;
