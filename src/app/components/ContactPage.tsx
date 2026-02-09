import { motion } from "motion/react";
import { Linkedin, Youtube } from "lucide-react";
import backgroundImage from "@/assets/0dd5df8bad17aa19cb9c79db49e5281a79c6e23a.png";
import { useLanguage } from "@/app/i18n/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="w-full h-full min-h-full relative overflow-hidden flex flex-col">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      {/* المحتوى الرئيسي: عنوان + العنوان + أيقونات + إيميلات — مناسب للشاشة بدون QR */}
      <div className="relative z-10 flex-1 min-h-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-4 sm:py-6 md:py-8 overflow-hidden">
        <motion.div
          className="w-full max-w-lg mx-auto flex flex-col items-center text-center justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-white mb-3 sm:mb-4 md:mb-6 text-lg sm:text-xl md:text-2xl lg:text-3xl"
            style={{
              fontFamily: "DIN Arabic, sans-serif",
              fontWeight: 500,
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.contact.title}
          </motion.h1>
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p
                className="text-white/90 whitespace-pre-line text-[10px] sm:text-xs md:text-sm leading-tight"
                style={{
                  fontFamily: "DIN Arabic, sans-serif",
                  lineHeight: "1.45",
                }}
              >
                {t.contact.address}
              </p>
            </motion.div>
            <motion.div
              className="flex items-center justify-center gap-3 sm:gap-4 py-2 sm:py-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a
                href="https://linkedin.com/company/sinan-advanced-industries"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/10 flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.youtube.com/@SinanAdvancedIndustries"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/10 flex items-center justify-center"
                aria-label="YouTube"
              >
                <Youtube size={20} strokeWidth={1.5} />
              </a>
            </motion.div>
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p
                className="text-white/90 text-[10px] sm:text-xs md:text-sm leading-tight"
                style={{
                  fontFamily: "DIN Arabic, sans-serif",
                  lineHeight: "1.45",
                }}
              >
                info@sinan.om
                <br />
                sales@sinan.om
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      {/* الفوتر ثابت أسفل الصفحة دائماً */}
      <footer className="relative z-10 flex-shrink-0 mt-auto flex flex-col items-center px-4 md:px-8 lg:px-16 pb-2 md:pb-3 pt-2">
        <nav className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-2 md:mb-3">
          <a
            href="#home"
            className="text-white/70 text-xs sm:text-sm hover:text-white transition-colors"
            style={{ fontWeight: 300 }}
          >
            {t.nav.home}
          </a>
          <a
            href="#about"
            className="text-white/70 text-xs sm:text-sm hover:text-white transition-colors"
            style={{ fontWeight: 300 }}
          >
            {t.nav.about}
          </a>
          <a
            href="#vision-mission"
            className="text-white/70 text-xs sm:text-sm hover:text-white transition-colors"
            style={{ fontWeight: 300 }}
          >
            {t.nav.visionMission}
          </a>
          <a
            href="#values"
            className="text-white/70 text-xs sm:text-sm hover:text-white transition-colors"
            style={{ fontWeight: 300 }}
          >
            {t.nav.values}
          </a>
          <a
            href="#contact"
            className="text-white/70 text-xs sm:text-sm hover:text-white transition-colors"
            style={{ fontWeight: 300 }}
          >
            {t.nav.contact}
          </a>
        </nav>
        <p
          className="text-white/60 text-xs text-center pt-2 md:pt-3 border-t border-white/20 w-full"
          style={{ fontWeight: 300 }}
        >
          {t.footer.copyright}
        </p>
      </footer>
    </div>
  );
}
