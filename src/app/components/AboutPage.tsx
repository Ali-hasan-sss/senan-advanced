import { motion } from "motion/react";
import { useLanguage } from "@/app/i18n/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  const lines = (t.about as { empoweringLines?: string }).empoweringLines?.split("\n") ?? [];

  return (
    <div dir="ltr" className="w-full h-full min-h-0 max-h-full bg-[#f5f5f5] flex flex-col md:flex-row items-stretch overflow-hidden">
      {/* Left: Large faded stacked text - enters from left */}
      <motion.div
        className="hidden md:flex flex-1 min-h-0 items-center justify-start ps-12 lg:ps-20 py-16 order-1 overflow-hidden"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="space-y-0.5 sm:space-y-1 md:space-y-2">
          {lines.map((line, i) => (
            <div
              key={i}
              className="text-gray-400/70 text-xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight shrink-0"
              style={{ fontFamily: "DIN Arabic, sans-serif" }}
            >
              {line}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Center: Spear image - enters from bottom */}
      <div className="flex-shrink-0 flex items-center justify-center px-2 md:px-4 order-1 md:order-2 w-full md:w-auto py-2 md:py-0">
        <motion.img
          src="/rmh.png"
          alt=""
          className="h-[28vh] sm:h-[32vh] md:h-[55vh] lg:h-[60vh] w-auto object-contain object-center rotate-[-18deg] max-h-full"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
        />
      </div>

      {/* Right: Our Vision & Our Mission - enters from right */}
      <motion.div
        className="flex-1 min-h-0 flex flex-col justify-center items-start pe-4 sm:pe-6 md:pe-12 lg:pe-20 py-4 sm:py-6 md:py-16 order-2 md:order-3 overflow-hidden"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <div className="max-w-lg space-y-2 sm:space-y-4 md:space-y-10 w-full min-h-0 flex flex-col justify-center overflow-hidden">
          <div>
            <h3
              className="text-gray-900 font-extrabold text-base sm:text-lg md:text-xl lg:text-2xl mb-1 sm:mb-2 md:mb-3"
              style={{ fontFamily: "DIN Arabic, sans-serif" }}
            >
              {t.about.vision}
            </h3>
            <p
              className="text-gray-700 font-medium text-sm sm:text-base md:text-lg leading-snug sm:leading-relaxed"
              style={{ fontFamily: "DIN Arabic, sans-serif" }}
            >
              {t.about.visionText}
            </p>
          </div>
          <div>
            <h3
              className="text-gray-900 font-extrabold text-base sm:text-lg md:text-xl lg:text-2xl mb-1 sm:mb-2 md:mb-3"
              style={{ fontFamily: "DIN Arabic, sans-serif" }}
            >
              {t.about.mission}
            </h3>
            <p
              className="text-gray-700 font-medium text-sm sm:text-base md:text-lg leading-snug sm:leading-relaxed"
              style={{ fontFamily: "DIN Arabic, sans-serif" }}
            >
              {t.about.missionText}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
