import { motion } from "motion/react";
import { useLanguage } from "@/app/i18n/LanguageContext";

type VisionMissionPageProps = { isInView?: boolean };

export default function VisionMissionPage({
  isInView = false,
}: VisionMissionPageProps) {
  const { t } = useLanguage();
  const lines =
    (t.about as { empoweringLines?: string }).empoweringLines?.split("\n") ??
    [];

  const tBase = { duration: 0.6, ease: "easeOut" as const };

  return (
    <div
      dir="ltr"
      className="w-full h-full min-h-0 max-h-full bg-[#f8f8f8] flex flex-col xl:flex-row items-stretch overflow-hidden"
    >
      {/* موبايل وتابلت وحتى شاشات أقل من xl: الرمح كخلفية + النص فوقها — مركزان في منتصف الصفحة */}
      <div className="relative flex-1 min-h-0 xl:hidden overflow-hidden flex flex-col items-center justify-center">
        {/* خلفية الرمح — موبايل وتابلت فقط، متمركزة */}
        <div
          className="absolute inset-0 pointer-events-none flex items-end justify-center"
          aria-hidden
        >
          <img
            src="/rmh.png"
            alt=""
            className="w-auto h-[70%] max-h-[420px] sm:h-[75%] sm:max-h-[480px] md:h-[80%] md:max-h-[520px] object-contain object-center opacity-[0.12] sm:opacity-[0.14] md:opacity-[0.16]"
            style={{ transform: "rotate(-18deg) translateY(10%)" }}
          />
        </div>
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center min-h-full overflow-y-auto px-4 pb-6 pt-8 sm:px-6 sm:pb-8 sm:pt-10 md:px-8 md:pb-10 md:pt-12 w-full"
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ ...tBase, delay: 0.15 }}
        >
          <div className="max-w-xl mx-auto w-full space-y-6 sm:space-y-7 md:space-y-8 md:max-w-2xl text-center">
            <div className="space-y-2 sm:space-y-2.5">
              <h3
                className="text-gray-900 font-bold text-lg sm:text-xl md:text-2xl tracking-tight"
                style={{ fontFamily: "DIN Arabic, sans-serif" }}
              >
                {t.about.vision}
              </h3>
              <p
                className="text-gray-700 text-[15px] sm:text-base md:text-lg leading-[1.65] max-w-lg md:max-w-xl mx-auto"
                style={{
                  fontFamily: "DIN Arabic, sans-serif",
                  fontWeight: 500,
                }}
              >
                {t.about.visionText}
              </p>
            </div>
            <div className="space-y-2 sm:space-y-2.5">
              <h3
                className="text-gray-900 font-bold text-lg sm:text-xl md:text-2xl tracking-tight"
                style={{ fontFamily: "DIN Arabic, sans-serif" }}
              >
                {t.about.mission}
              </h3>
              <p
                className="text-gray-700 text-[15px] sm:text-base md:text-lg leading-[1.65] max-w-lg md:max-w-xl mx-auto"
                style={{
                  fontFamily: "DIN Arabic, sans-serif",
                  fontWeight: 500,
                }}
              >
                {t.about.missionText}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ديسكتوب (xl فما فوق): ثلاثة أعمدة — يسار: النص الكبير | وسط: الرمح | يمين: الرؤية والمهمة */}
      <motion.div
        className="hidden xl:flex flex-1 min-h-0 items-center justify-start pl-12 py-12 overflow-hidden"
        initial={false}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
        transition={tBase}
      >
        <div className="space-y-0.5 xl:space-y-1">
          {lines.map((line, i) => (
            <div
              key={i}
              className="text-gray-400/40 text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight shrink-0"
              style={{ fontFamily: "DIN Arabic, sans-serif" }}
            >
              {line}
            </div>
          ))}
        </div>
      </motion.div>

      {/* ديسكتوب (xl فما فوق): الرمح يبدأ من أسفل الصفحة */}
      <div className="hidden xl:flex flex-shrink-0 items-end justify-center px-4 min-h-0 self-stretch">
        <motion.img
          src="/rmh.png"
          alt=""
          className="h-[55vh] xl:h-[60vh] 2xl:h-[65vh] w-auto object-contain object-bottom rotate-[-18deg]"
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
        />
      </div>

      <motion.div
        className="hidden xl:flex flex-1 min-h-0 flex-col justify-center items-start pr-12 py-12 overflow-hidden"
        initial={false}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
        transition={{ ...tBase, delay: 0.2 }}
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
