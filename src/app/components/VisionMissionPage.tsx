import { motion } from "motion/react";
import { useLanguage } from "@/app/i18n/LanguageContext";

export default function VisionMissionPage() {
  const { t } = useLanguage();
  const lines =
    (t.about as { empoweringLines?: string }).empoweringLines?.split("\n") ??
    [];

  return (
    <div
      dir="ltr"
      className="w-full h-full min-h-0 max-h-full bg-[#f8f8f8] flex flex-col lg:flex-row items-stretch overflow-hidden"
    >
      {/* موبايل: إخفاء صورة الرمح — النصوص فقط */}
      <motion.div
        className="relative z-10 flex flex-col justify-end min-h-0 flex-1 px-4 pb-6 pt-12 sm:px-6 sm:pb-8 sm:pt-14 lg:hidden"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
      >
        <div className="max-w-xl space-y-6 sm:space-y-7">
          <div className="space-y-2 sm:space-y-2.5">
            <h3 className="text-gray-900 font-bold text-lg sm:text-xl tracking-tight" style={{ fontFamily: "DIN Arabic, sans-serif" }}>{t.about.vision}</h3>
            <p className="text-gray-700 text-[15px] sm:text-base leading-[1.65] max-w-lg" style={{ fontFamily: "DIN Arabic, sans-serif", fontWeight: 500 }}>{t.about.visionText}</p>
          </div>
          <div className="space-y-2 sm:space-y-2.5">
            <h3 className="text-gray-900 font-bold text-lg sm:text-xl tracking-tight" style={{ fontFamily: "DIN Arabic, sans-serif" }}>{t.about.mission}</h3>
            <p className="text-gray-700 text-[15px] sm:text-base leading-[1.65] max-w-lg" style={{ fontFamily: "DIN Arabic, sans-serif", fontWeight: 500 }}>{t.about.missionText}</p>
          </div>
        </div>
      </motion.div>

      {/* لابتوب: ثلاثة أعمدة — يسار: النص الكبير | وسط: الرمح | يمين: الرؤية والمهمة */}
      <motion.div
        className="hidden lg:flex flex-1 min-h-0 items-center justify-start pl-12 xl:pl-20 py-12 overflow-hidden"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="space-y-0.5 xl:space-y-1">
          {lines.map((line, i) => (
            <div
              key={i}
              className="text-gray-400/40 text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight shrink-0"
              style={{ fontFamily: "DIN Arabic, sans-serif" }}
            >
              {line}
            </div>
          ))}
        </div>
      </motion.div>

      {/* لابتوب: الرمح يبدأ من أسفل الصفحة */}
      <div className="hidden lg:flex flex-shrink-0 items-end justify-center px-4 xl:px-8 min-h-0 self-stretch">
        <motion.img
          src="/rmh.png"
          alt=""
          className="h-[55vh] xl:h-[60vh] 2xl:h-[65vh] w-auto object-contain object-bottom rotate-[-18deg]"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
        />
      </div>

      <motion.div
        className="hidden lg:flex flex-1 min-h-0 flex-col justify-center items-start pr-12 xl:pr-20 py-12 overflow-hidden"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <div className="max-w-lg space-y-8 xl:space-y-10 w-full">
          <div>
            <h3
              className="text-gray-800 font-bold text-2xl xl:text-3xl mb-2 xl:mb-3 tracking-tight"
              style={{ fontFamily: "DIN Arabic, sans-serif" }}
            >
              {t.about.vision}
            </h3>
            <p
              className="text-gray-600 text-lg xl:text-xl leading-relaxed"
              style={{ fontFamily: "DIN Arabic, sans-serif", fontWeight: 500 }}
            >
              {t.about.visionText}
            </p>
          </div>
          <div>
            <h3
              className="text-gray-800 font-bold text-2xl xl:text-3xl mb-2 xl:mb-3 tracking-tight"
              style={{ fontFamily: "DIN Arabic, sans-serif" }}
            >
              {t.about.mission}
            </h3>
            <p
              className="text-gray-600 text-lg xl:text-xl leading-relaxed"
              style={{ fontFamily: "DIN Arabic, sans-serif", fontWeight: 500 }}
            >
              {t.about.missionText}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
