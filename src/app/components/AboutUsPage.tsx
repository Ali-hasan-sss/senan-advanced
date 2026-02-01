import { motion } from "motion/react";
import { useLanguage } from "@/app/i18n/LanguageContext";

export default function AboutUsPage() {
  const { t } = useLanguage();

  return (
    <div className="w-full h-full min-h-0 flex items-center justify-center relative overflow-hidden">
      {/* خلفية: صورة about.jpeg */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/about.jpeg)" }}
        aria-hidden
      />
      {/* طبقة شفافة لتحسين قراءة النص */}
      <div className="absolute inset-0 bg-black/45" aria-hidden />
      <motion.div
        className="relative z-10 max-w-3xl text-center px-6 sm:px-8 md:px-12 lg:px-20 py-8 md:py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h1
          className="text-white font-bold text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8 drop-shadow-sm"
          style={{ fontFamily: "DIN Arabic, sans-serif" }}
        >
          {t.about.title}
        </h1>
        <p
          className="text-white/95 text-base md:text-lg leading-relaxed drop-shadow-sm"
          style={{ fontFamily: "DIN Arabic, sans-serif" }}
        >
          {t.about.aboutText}
        </p>
      </motion.div>
    </div>
  );
}
