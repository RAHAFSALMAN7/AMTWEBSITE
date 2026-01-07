import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom" | "left" | "right";
  className?: string;
  onAnimationComplete?: () => void;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 100,
  animateBy = "letters",
  direction = "top",
  className = "",
  onAnimationComplete,
}) => {
  const [splitText, setSplitText] = useState<string[]>([]);

  useEffect(() => {
    if (animateBy === "words") {
      setSplitText(text.split(" "));
    } else {
      setSplitText(text.split(""));
    }
  }, [text, animateBy]);

  const getOffset = () => {
    switch (direction) {
      case "top":
        return { y: -20, x: 0 };
      case "bottom":
        return { y: 20, x: 0 };
      case "left":
        return { y: 0, x: -20 };
      case "right":
        return { y: 0, x: 20 };
      default:
        return { y: 0, x: 0 };
    }
  };

  return (
    <div className={`inline-block ${className}`}>
      {splitText.map((item, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, filter: "blur(10px)", ...getOffset() }}
          animate={{ opacity: 1, filter: "blur(0px)", x: 0, y: 0 }}
          transition={{
            delay: idx * (delay / 1000),
            duration: 0.6,
            ease: "easeOut",
          }}
          onAnimationComplete={
            idx === splitText.length - 1 ? onAnimationComplete : undefined
          }
          className="inline-block"
        >
          {item}
          {animateBy === "words" ? " " : ""}
        </motion.span>
      ))}
    </div>
  );
};

export default BlurText;
