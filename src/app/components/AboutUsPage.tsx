import { motion } from "motion/react";
import { useLanguage } from "@/app/i18n/LanguageContext";

type AboutUsPageProps = { isInView?: boolean };

export default function AboutUsPage({ isInView = false }: AboutUsPageProps) {
  const { t } = useLanguage();

  return (
    <div className="w-full h-full min-h-0 flex items-center justify-end relative overflow-hidden">
      {/* خلفية: صورة about.jpeg */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/about.jpeg)" }}
        aria-hidden
      />
      {/* طبقة شفافة لتحسين قراءة النص */}
      <div className="absolute inset-0 bg-black/30" aria-hidden />
      {/* حاوية النصوص على اليمين — أنيميشن دخول عند كل ظهور */}
      <motion.div
        className="relative z-10 flex items-center justify-end w-full max-w-2xl md:max-w-xl lg:max-w-2xl"
        initial={false}
        animate={
          isInView
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: 48 }
        }
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <div
          className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 my-8 md:my-10 px-6 sm:px-8 md:px-10 py-6 md:py-8 rounded-xl md:rounded-2xl text-right max-w-xl transition-all duration-300 hover:bg-white/[0.08] hover:backdrop-blur-[12px] hover:shadow-[0_4px_24px_rgba(0,0,0,0.15)]"
        >
          <h1
            className="text-white font-bold text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6"
            style={{ fontFamily: "DIN Arabic, sans-serif" }}
          >
            {t.about.title}
          </h1>
          <p
            className="text-white/95 text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "DIN Arabic, sans-serif" }}
          >
            {t.about.aboutText}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
