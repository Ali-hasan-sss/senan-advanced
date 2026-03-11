import { useEffect, useState } from "react";
import { motion } from "motion/react";
import cursorLogo from "@/assets/e868c967defa2ff1adabdce43f94676450e69b02.png";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isOnWhiteBackground, setIsOnWhiteBackground] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check the background color at cursor position
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        const bgColor = window.getComputedStyle(element).backgroundColor;
        const parentBgColor = element.parentElement
          ? window.getComputedStyle(element.parentElement).backgroundColor
          : "";

        // Check if background is white or light (checking element and parent)
        const isWhite =
          bgColor.includes("255, 255, 255") ||
          bgColor.includes("rgb(255, 255, 255)") ||
          bgColor.includes("249, 250, 251") || // gray-50
          bgColor.includes("243, 244, 246") || // gray-100
          parentBgColor.includes("255, 255, 255") ||
          parentBgColor.includes("249, 250, 251") ||
          parentBgColor.includes("243, 244, 246");

        setIsOnWhiteBackground(isWhite);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      {/* Logo cursor - perfectly follows mouse */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: mousePosition.x - 14,
          top: mousePosition.y - 16,
          transform: "translate(0, 0)",
        }}
      >
        <img
          src={cursorLogo}
          alt=""
          className="w-3 h-8"
          style={{
            opacity: 0.9,
            filter: isOnWhiteBackground ? "brightness(0)" : "none",
            boxShadow: "none",
            imageRendering: "crisp-edges",
          }}
        />
      </div>
    </>
  );
}
