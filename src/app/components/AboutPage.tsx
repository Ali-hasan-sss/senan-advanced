import { motion } from "motion/react";
import { useState } from "react";
import aboutBg from "@/assets/5c01f538f36af719aa0c5025b4707e104f4b3c31.png";
import { useLanguage } from "@/app/i18n/LanguageContext";

interface TextSectionProps {
  title: string;
  children: React.ReactNode;
  delay: number;
}

function TextSection({ title, children, delay }: TextSectionProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative cursor-pointer p-4 md:p-6 rounded-lg transition-all duration-300 flex-1"
      style={{
        border: isHovered
          ? "2px solid rgba(156, 163, 175, 1)"
          : "2px solid transparent",
        backgroundColor: isHovered ? "rgba(156, 163, 175, 0.3)" : "transparent",
        backdropFilter: isHovered ? "blur(4px)" : "none",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Content */}
      <h2
        className="text-white mb-3 md:mb-4 text-sm md:text-base lg:text-lg"
        style={{ fontWeight: 700, fontFamily: "DIN Arabic, sans-serif" }}
      >
        {title}
      </h2>
      <div
        className="text-white/90 leading-relaxed text-xs md:text-sm lg:text-base"
        style={{ fontWeight: 400, fontFamily: "DIN Arabic, sans-serif" }}
      >
        {children}
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <div className="w-full min-h-screen relative">
      <div className="absolute inset-0 w-full min-h-screen" style={{ zIndex: 0 }}>
        <img src={aboutBg} alt="" className="w-full h-full min-h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gray-900/60" />
      </div>
      <div
        className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-20 py-8 md:py-12 lg:py-16"
        style={{ zIndex: 10 }}
      >
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 max-w-7xl w-full">
          <TextSection title={t.about.title} delay={0.2}>
            <p>{t.about.aboutText}</p>
          </TextSection>
          <TextSection title={t.about.vision} delay={0.4}>
            <p>{t.about.visionText}</p>
          </TextSection>
          <TextSection title={t.about.mission} delay={0.6}>
            <p>{t.about.missionText}</p>
          </TextSection>
        </div>
      </div>
    </div>
  );
}
