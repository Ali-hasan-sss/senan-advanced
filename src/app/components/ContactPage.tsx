import { motion } from "motion/react";
import { Linkedin, Youtube } from "lucide-react";
import backgroundImage from "@/assets/0dd5df8bad17aa19cb9c79db49e5281a79c6e23a.png";
import { useLanguage } from "@/app/i18n/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="w-full h-full min-h-0 relative overflow-hidden flex flex-col md:flex-row md:overflow-y-visible">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      {/* موبايل: عمود واحد | تابلت/ديسكتوب: عمودين — النص مقابل QR code */}
      <div className="relative w-full h-full min-h-0 flex flex-col md:flex-row md:items-center px-2 sm:px-4 md:px-8 lg:px-20 py-2 sm:py-6 md:py-8 lg:py-16 overflow-hidden gap-2 sm:gap-6 md:gap-8 lg:gap-12">
        <motion.div
          className="w-full md:w-1/2 min-h-0 flex flex-col items-center text-center md:items-start md:text-start justify-center pt-1 sm:pt-2 md:pt-0 flex-shrink"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-white mb-2 sm:mb-6 md:mb-6 lg:mb-16 xl:mb-24 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42pt]"
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
          <div className="space-y-2 sm:space-y-5 md:space-y-10 lg:space-y-12">
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p
                className="text-white/90 whitespace-pre-line text-[10px] sm:text-sm lg:text-[13pt] leading-tight sm:leading-snug"
                style={{
                  fontFamily: "DIN Arabic, sans-serif",
                  lineHeight: "1.5",
                }}
              >
                {t.contact.address}
              </p>
            </motion.div>
            {/* Social Icons — منتصف النصوص على الموبايل */}
            <motion.div
              className="flex items-center justify-center gap-3 sm:gap-4 py-2 sm:py-0 sm:mt-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a
                href="https://linkedin.com/company/sinan-advanced-industries"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.youtube.com/@SinanAdvancedIndustries"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 flex items-center justify-center"
                aria-label="YouTube"
              >
                <Youtube size={22} strokeWidth={1.5} />
              </a>
            </motion.div>
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p
                className="text-white/90 text-[10px] sm:text-sm lg:text-[13pt] leading-tight sm:leading-snug"
                style={{
                  fontFamily: "DIN Arabic, sans-serif",
                  lineHeight: "1.5",
                }}
              >
                info@sinan.om
                <br />
                sales@sinan.om
              </p>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 min-h-0 flex items-center justify-center md:justify-end pt-6 sm:pt-6 md:pt-0 pr-0 md:pr-4 lg:pr-8 flex-shrink-0 pb-0 md:pb-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-white/95 shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src="/qr.png"
              alt="QR Code"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain"
            />
            <p
              className="mt-3 text-gray-700 text-sm sm:text-base font-medium"
              style={{ fontFamily: "DIN Arabic, sans-serif" }}
            >
              Scan here
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
