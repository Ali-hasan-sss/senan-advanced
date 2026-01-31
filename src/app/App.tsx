import React, { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useLanguage } from "@/app/i18n/LanguageContext";

// Import components directly
import LayerHome from "@/imports/Layer1-57-519";
import LayerDynamics from "@/imports/Layer1-146-688";
import LayerMarine from "@/imports/Layer1-146-793";
import LayerBackground from "@/imports/Layer1";
import AboutPage from "@/app/components/AboutPage";
import ValuesPage from "@/app/components/ValuesPage";
import ExperiencePage from "@/app/components/ExperiencePage";
import SolutionsPage from "@/app/components/SolutionsPage";
import AchievementsPage from "@/app/components/AchievementsPage";
import SectorsPage from "@/app/components/SectorsPage";
import ContactPage from "@/app/components/ContactPage";

// Import images (from assets – figma:asset protocol not supported by Vite)
import dynamicsBg from "@/assets/761aac940efc1953c99faa8752e1e0ca719253db.png";
import submarineImage from "@/assets/61540e66d260f2cde22cc640d995339875efba5b.png";
import targetIconImage from "@/assets/10ece0636bfeb213b95a9827ed51f9647c03da9c.png";
import aselsanBg from "@/assets/910d9064a27b83a840b1d9cdf3c5030c1f2a0077.png";
import aselsanLogoImage from "@/assets/dc8f1005d190b58e6f8f96897819fea19bca9829.png";
import footerBg from "@/assets/81747934bf98e8003972a07405afdd63cbeb3630.png";
import logoImage from "@/assets/dba262c104d43832d133ef6ded872493e7354dff.png";
import frontiersLogoImage from "@/assets/ded94a3583f28236c45323579cf0780af7fcb517.png";
import cursorLogo from "@/assets/e868c967defa2ff1adabdce43f94676450e69b02.png";
import droneImage from "@/assets/cd1779045309571142b8f0a31bf6fab645307577.png";

// CustomCursor component - inline
function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isOnWhiteBackground, setIsOnWhiteBackground] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        const bgColor = window.getComputedStyle(element).backgroundColor;
        const parentBgColor = element.parentElement
          ? window.getComputedStyle(element.parentElement).backgroundColor
          : "";

        const isWhite =
          bgColor.includes("255, 255, 255") ||
          bgColor.includes("rgb(255, 255, 255)") ||
          bgColor.includes("249, 250, 251") ||
          bgColor.includes("243, 244, 246") ||
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
        className="w-7 h-8"
        style={{
          opacity: 0.9,
          filter: isOnWhiteBackground ? "brightness(0)" : "none",
          boxShadow: "none",
          imageRendering: "crisp-edges",
        }}
      />
    </div>
  );
}

type NavItem = { href: string; label: string };

function MobileMenu({
  menuItems,
  locale,
  setLocale,
}: {
  menuItems: NavItem[];
  locale: "en" | "ar";
  setLocale: (l: "en" | "ar") => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setLocale(locale === "ar" ? "en" : "ar")}
          className="text-white/80 hover:text-white text-sm font-medium px-2 py-1 rounded transition-colors"
          aria-label="Toggle language"
        >
          {locale === "ar" ? "EN" : "ar"}
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-white hover:text-gray-300 transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed inset-0 bg-gray-900/95 backdrop-blur-md z-50 pt-20"
        >
          {/* Close button when menu is open */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="fixed top-4 right-4 p-2 text-white hover:text-gray-300 hover:bg-white/10 rounded-lg transition-colors z-50"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          <nav className="flex flex-col items-center justify-center h-full space-y-6">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl text-white hover:text-gray-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </>
  );
}

function Header({
  menuItems,
  locale,
  setLocale,
}: {
  menuItems: NavItem[];
  locale: "en" | "ar";
  setLocale: (l: "en" | "ar") => void;
}) {
  return (
    <header className="bg-gray-900 text-white py-3 md:py-4 lg:py-6 px-4 md:px-6 lg:px-8 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1920px] mx-auto w-full flex items-center justify-between">
        {/* Desktop nav */}
        <div className="hidden lg:flex flex-1 justify-around items-center px-4 xl:px-20">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs xl:text-sm text-white hover:text-gray-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile: logo (left) */}
        <a
          href="#home"
          className="lg:hidden flex-shrink-0 h-10 w-auto"
          aria-label="senan advanced – Home"
        >
          <img
            src={logoImage}
            alt="senan advanced"
            className="h-full w-auto object-contain"
          />
        </a>

        <div className="flex items-center gap-4 lg:gap-6">
          <button
            type="button"
            onClick={() => setLocale(locale === "ar" ? "en" : "ar")}
            className="hidden lg:inline-flex text-white/80 hover:text-white text-sm font-medium px-3 py-1.5 rounded border border-white/30 hover:border-white/60 transition-colors"
            aria-label="Toggle language"
          >
            {locale === "ar" ? "EN" : "ar"}
          </button>
          <div className="lg:hidden ml-auto">
            <MobileMenu
              menuItems={menuItems}
              locale={locale}
              setLocale={setLocale}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

// InteractivePolyBackground component - inline
function InteractivePolyBackground() {
  const LayerComponent = LayerBackground || (() => null);
  return (
    <div
      className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
    >
      {typeof LayerComponent === "function" ? <LayerComponent /> : null}
    </div>
  );
}

// DroneOverlay component - inline (responsive sizing, animations unchanged)
function DroneOverlay() {
  return (
    <motion.div
      className="absolute top-[15%] left-[10%] md:left-[20%] pointer-events-none hidden sm:block"
      style={{ zIndex: 5 }}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 0.15, x: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <img
        src={droneImage}
        alt="Drone"
        className="w-auto h-auto max-w-[180px] max-h-[140px] md:max-w-[400px] md:max-h-[350px] object-contain"
        style={{ mixBlendMode: "multiply" }}
      />
    </motion.div>
  );
}

const NAV_IDS = [
  "home",
  "about",
  "values",
  "experience",
  "contact",
  "marine",
  "frontiers",
  "aselsan",
  "solutions",
  "achievements",
] as const;

export default function App() {
  const { t, locale, setLocale } = useLanguage();
  const menuItems: NavItem[] = NAV_IDS.map((id) => ({
    href: `#${id}`,
    label: t.nav[id],
  }));

  return (
    <>
      <div className="hidden md:block">
        <CustomCursor />
      </div>
      <Header menuItems={menuItems} locale={locale} setLocale={setLocale} />
      <InteractivePolyBackground />

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen relative overflow-hidden pt-16 md:pt-20"
      >
        <div className="absolute inset-0" style={{ zIndex: 1 }}>
          {typeof LayerHome === "function" ? <LayerHome /> : null}
        </div>

        <div className="relative" style={{ zIndex: 10 }}>
          <div className="min-h-screen flex items-center justify-center px-4 md:px-8">
            <div className="max-w-7xl w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20"
              >
                {/* Logo - Top on mobile, Left on desktop */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.1 }}
                  className="flex-shrink-0 cursor-pointer"
                  style={{ perspective: "1000px" }}
                  whileHover={{
                    rotateY: 360,
                    transition: { duration: 1.2, ease: "easeInOut" },
                  }}
                >
                  <img
                    src={logoImage}
                    alt="SINAN Logo"
                    className="h-48 sm:h-64 md:h-80 lg:h-96 w-auto"
                    style={{
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "visible",
                    }}
                  />
                </motion.div>

                {/* Text Content - Bottom on mobile, Right on desktop; RTL: right-aligned in Arabic */}
                <div className="flex-1 text-center md:text-start">
                  <motion.div
                    className="mb-4 md:mb-6 inline-block w-full md:w-auto"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    <div
                      className="text-white mb-2 px-2 md:px-4 py-1 md:py-2 text-base sm:text-xl md:text-2xl lg:text-[32pt]"
                      style={{
                        fontFamily: "DIN Arabic, sans-serif",
                        lineHeight: 1.2,
                        display: "inline-block",
                        textShadow:
                          "2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)",
                      }}
                    >
                      {t.hero.line1}
                    </div>
                    <br />
                    <div
                      className="text-white mb-2 px-2 md:px-4 py-1 md:py-2 text-base sm:text-xl md:text-2xl lg:text-[32pt]"
                      style={{
                        fontFamily: "DIN Arabic, sans-serif",
                        lineHeight: 1.2,
                        display: "inline-block",
                        textShadow:
                          "2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)",
                      }}
                    >
                      {t.hero.line2}
                    </div>
                    <br />
                    <div
                      className="text-white px-2 md:px-4 py-1 md:py-2 text-base sm:text-xl md:text-2xl lg:text-[32pt]"
                      style={{
                        fontFamily: "DIN Arabic, sans-serif",
                        lineHeight: 1.2,
                        display: "inline-block",
                        textShadow:
                          "2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)",
                      }}
                    >
                      {t.hero.line3}
                    </div>
                  </motion.div>

                  <motion.p
                    className="text-sm sm:text-base md:text-lg text-white/80 mb-8 md:mb-12 max-w-3xl mx-auto md:ms-0 md:me-auto"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                  >
                    {t.hero.tagline.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {i > 0 && <br />}
                        {line}
                      </React.Fragment>
                    ))}
                  </motion.p>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center md:justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <button
                      onClick={() =>
                        document
                          .getElementById("sectors")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="group px-6 md:px-8 py-3 md:py-4 rounded-lg bg-transparent border-2 border-gray-400 hover:bg-gray-400 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-3"
                    >
                      <span className="text-sm md:text-lg text-white group-hover:text-white transition-colors">
                        {t.hero.exploreBtn}
                      </span>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:translate-x-1 transition-transform rtl:rotate-180" />
                    </button>

                    <button className="group px-6 md:px-8 py-3 md:py-4 rounded-lg bg-transparent border-2 border-gray-400 hover:bg-gray-400 transition-all duration-300 backdrop-blur-sm">
                      <span className="text-sm md:text-lg text-white group-hover:text-white transition-colors">
                        {t.hero.getInTouchBtn}
                      </span>
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen bg-gray-900 relative overflow-x-hidden"
      >
        <AboutPage />
      </section>

      {/* Our Values Section */}
      <section
        id="values"
        className="min-h-screen relative overflow-x-hidden"
      >
        <ValuesPage />
      </section>

      {/* Our Experience Section */}
      <section
        id="experience"
        className="min-h-screen relative overflow-x-hidden"
      >
        <ExperiencePage />
      </section>

      {/* Sectors Section - SINAN DYNAMICS (Blue) */}
      <section id="sectors" className="min-h-screen relative overflow-x-hidden">
        {/* Drone Image - Centered between the two sides like the submarine */}
        <motion.div
          className="hidden md:block absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ zIndex: 15 }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.4, scale: 3.5 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src={droneImage}
            alt="Drone"
            className="w-auto h-auto object-contain"
            style={{
              mixBlendMode: "multiply",
            }}
          />
        </motion.div>

        <div
          className="min-h-screen flex flex-col md:flex-row relative"
          style={{ zIndex: 10 }}
        >
          {/* Left Side - Cyan Blue */}
          <motion.div
            className="w-full md:w-1/2 relative p-6 md:p-12 lg:p-16 flex flex-col justify-center items-center overflow-hidden min-h-[50vh] md:min-h-screen"
            style={{
              backgroundColor: "#00aeef",
            }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background Text - Large and Transparent */}
            <div
              className="hidden lg:block absolute inset-0 flex items-center justify-start pointer-events-none"
              style={{ zIndex: 1 }}
            >
              <p
                className="text-white text-left leading-tight px-8"
                style={{
                  fontSize: "80pt",
                  fontWeight: 700,
                  fontFamily: "DIN Arabic, sans-serif",
                  opacity: 0.15,
                  maxWidth: "100%",
                }}
              >
                {t.bgWatermark.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <br />}
                    {line}
                  </React.Fragment>
                ))}
              </p>
            </div>

            <div className="max-w-xl text-center relative z-10">
              <div className="mb-8 md:mb-12 w-full flex justify-center">
                <div className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 relative">
                  <LayerDynamics />
                </div>
              </div>
              <p
                className="text-white leading-relaxed text-base md:text-lg lg:text-xl xl:text-2xl"
                style={{
                  fontWeight: 400,
                  fontFamily: "DIN Arabic, sans-serif",
                }}
              >
                {t.sectors.dynamicsDesc}
              </p>
            </div>
          </motion.div>

          {/* Right Side - White/Light Gray */}
          <motion.div
            className="w-full md:w-1/2 bg-gray-50 p-6 md:p-12 lg:p-16 flex flex-col justify-start pt-8 md:pt-20 lg:pt-32 relative min-h-[50vh] md:min-h-screen"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background Drone - Faded */}
            <div className="hidden lg:block absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
              <svg
                width="500"
                height="400"
                viewBox="0 0 500 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="220"
                  y="180"
                  width="60"
                  height="30"
                  fill="#00C3FF"
                  rx="6"
                />
                <ellipse cx="190" cy="195" rx="40" ry="12" fill="#00C3FF" />
                <ellipse cx="310" cy="195" rx="40" ry="12" fill="#00C3FF" />
                <path
                  d="M250 180 L250 120 L265 100"
                  stroke="#00C3FF"
                  strokeWidth="3"
                />
              </svg>
            </div>

            <div className="max-w-xl relative z-10">
              <p
                className="text-cyan-500 leading-relaxed mb-8 md:mb-12 lg:mb-16 text-xs md:text-sm lg:text-base"
                style={{
                  fontWeight: 700,
                  fontFamily: "DIN Arabic, sans-serif",
                }}
              >
                {t.sectors.dynamicsIntro}
              </p>
              <h3
                className="text-gray-400 uppercase tracking-wider mb-4 md:mb-6 lg:mb-8 mt-8 md:mt-24 lg:mt-48 text-xs md:text-sm"
                style={{
                  fontWeight: 400,
                  fontFamily: "DIN Arabic, sans-serif",
                }}
              >
                {t.sectors.keyObjectives}
              </h3>
              <ul
                className="space-y-3 md:space-y-4 lg:space-y-5 text-gray-700 text-xs md:text-sm lg:text-base"
                style={{
                  fontWeight: 400,
                  fontFamily: "DIN Arabic, sans-serif",
                }}
              >
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-cyan-500 flex-shrink-0">•</span>
                  <span>{t.sectors.dynamicsObj1}</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-cyan-500 flex-shrink-0">•</span>
                  <span>{t.sectors.dynamicsObj2}</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-cyan-500 flex-shrink-0">•</span>
                  <span>{t.sectors.dynamicsObj3}</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-cyan-500 flex-shrink-0">•</span>
                  <span>{t.sectors.dynamicsObj4}</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-cyan-500 flex-shrink-0">•</span>
                  <span>{t.sectors.dynamicsObj5}</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sinan Marine Section (Purple) */}
      <section
        id="marine"
        className="min-h-screen bg-white relative overflow-x-hidden"
      >
        {/* Submarine Image - Centered between the two sides (hidden on mobile, animations unchanged) */}
        <motion.div
          className="hidden md:block absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ zIndex: 15 }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src={submarineImage}
            alt="Submarine"
            className="w-auto h-auto max-w-[450px] max-h-[400px] object-contain"
            style={{ mixBlendMode: "multiply" }}
          />
        </motion.div>

        <div
          className="min-h-screen flex flex-col md:flex-row relative"
          style={{ zIndex: 10 }}
        >
          {/* Left Side - Purple Page */}
          <motion.div
            className="w-full md:w-1/2 relative p-6 md:p-12 lg:p-16 flex flex-col justify-center items-center overflow-hidden min-h-[50vh] md:min-h-0"
            style={{
              backgroundColor: "#2e3192",
            }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background Text - Large and Transparent (hidden on mobile) */}
            <div
              className="hidden md:flex absolute inset-0 items-center justify-start pointer-events-none"
              style={{ zIndex: 1 }}
            >
              <p
                className="text-white text-left leading-tight px-8"
                style={{
                  fontSize: "80pt",
                  fontWeight: 700,
                  fontFamily: "DIN Arabic, sans-serif",
                  opacity: 0.15,
                  maxWidth: "100%",
                }}
              >
                {t.bgWatermark.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <br />}
                    {line}
                  </React.Fragment>
                ))}
              </p>
            </div>

            <div className="text-center relative z-10">
              <div className="mb-6 md:mb-8 flex justify-center">
                <div className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 relative">
                  <LayerMarine />
                </div>
              </div>
              <p
                className="text-white/95 text-center leading-relaxed whitespace-pre-line text-base md:text-lg lg:text-[21pt]"
                style={{
                  fontWeight: 500,
                  fontFamily: "DIN Arabic, sans-serif",
                }}
              >
                {t.marine.tagline}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 bg-white p-6 md:p-12 lg:p-16 flex flex-col justify-center py-8 md:py-16"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-xl mx-auto">
              <p
                className="text-blue-900 leading-relaxed mb-8 md:mb-16 lg:mb-40 text-sm md:text-base"
                style={{
                  fontWeight: 700,
                  fontFamily: "DIN Arabic, sans-serif",
                }}
              >
                {t.marine.intro}
              </p>
              <div>
                <h4
                  className="text-gray-900 mb-4 md:mb-6 text-sm md:text-base"
                  style={{
                    fontWeight: 400,
                    fontFamily: "DIN Arabic, sans-serif",
                  }}
                >
                  {t.marine.keyObjectives}
                </h4>
                <ul
                  className="space-y-2 md:space-y-4 text-gray-700 text-sm md:text-base"
                  style={{
                    fontWeight: 400,
                    fontFamily: "DIN Arabic, sans-serif",
                  }}
                >
                  <li className="flex items-start gap-2 md:gap-4">
                    <span className="text-blue-900 text-base md:text-xl flex-shrink-0">
                      ▪
                    </span>
                    <span>{t.marine.obj1}</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-4">
                    <span className="text-blue-900 text-base md:text-xl flex-shrink-0">
                      ▪
                    </span>
                    <span>{t.marine.obj2}</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-4">
                    <span className="text-blue-900 text-base md:text-xl flex-shrink-0">
                      ▪
                    </span>
                    <span>{t.marine.obj3}</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-4">
                    <span className="text-blue-900 text-base md:text-xl flex-shrink-0">
                      ▪
                    </span>
                    <span>{t.marine.obj4}</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sinan Frontiers Section (Orange) */}
      <section
        id="frontiers"
        className="min-h-screen bg-white relative overflow-x-hidden"
      >
        {/* Target Icon Image - Centered between the two sides (hidden on mobile, animations unchanged) */}
        <motion.div
          className="hidden md:block absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ zIndex: 15 }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src={targetIconImage}
            alt="Target Icon"
            className="w-auto h-auto max-w-[550px] max-h-[500px] object-contain"
            style={{ mixBlendMode: "multiply" }}
          />
        </motion.div>

        <div
          className="min-h-screen flex flex-col md:flex-row relative"
          style={{ zIndex: 10 }}
        >
          {/* Left Side - Orange Page */}
          <motion.div
            className="w-full md:w-1/2 relative p-6 md:p-12 lg:p-16 flex flex-col justify-center overflow-hidden min-h-[50vh] md:min-h-0"
            style={{
              backgroundColor: "#f7941d",
            }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background Text - Large and Transparent (hidden on mobile) */}
            <div
              className="hidden md:flex absolute inset-0 items-center justify-start pointer-events-none"
              style={{ zIndex: 1 }}
            >
              <p
                className="text-white text-left leading-tight px-8"
                style={{
                  fontSize: "80pt",
                  fontWeight: 700,
                  fontFamily: "DIN Arabic, sans-serif",
                  opacity: 0.15,
                  maxWidth: "100%",
                }}
              >
                {t.bgWatermark.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <br />}
                    {line}
                  </React.Fragment>
                ))}
              </p>
            </div>

            <div className="max-w-xl mx-auto relative z-10">
              <div className="mb-6 md:mb-8 flex justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 relative">
                  <img
                    src={frontiersLogoImage}
                    alt="SINAN FRONTIERS"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <p
                className="text-white/95 text-center leading-relaxed whitespace-pre-line text-base md:text-lg lg:text-[21pt]"
                style={{
                  fontWeight: 500,
                  fontFamily: "DIN Arabic, sans-serif",
                }}
              >
                {t.frontiers.tagline}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 bg-white p-6 md:p-12 lg:p-16 flex flex-col justify-center py-8 md:py-16"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-xl mx-auto">
              <p
                className="text-orange-600 leading-relaxed mb-8 md:mb-16 lg:mb-40 text-sm md:text-base"
                style={{
                  fontWeight: 700,
                  fontFamily: "DIN Arabic, sans-serif",
                }}
              >
                {t.frontiers.intro}
              </p>
              <div>
                <h4
                  className="text-gray-900 mb-4 md:mb-6 text-sm md:text-base"
                  style={{
                    fontWeight: 400,
                    fontFamily: "DIN Arabic, sans-serif",
                  }}
                >
                  {t.frontiers.keyObjectives}
                </h4>
                <ul
                  className="space-y-2 md:space-y-4 text-gray-700 text-sm md:text-base"
                  style={{
                    fontWeight: 400,
                    fontFamily: "DIN Arabic, sans-serif",
                  }}
                >
                  <li className="flex items-start gap-2 md:gap-4">
                    <span className="text-orange-600 text-base md:text-xl flex-shrink-0">
                      ▪
                    </span>
                    <span>{t.frontiers.obj1}</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-4">
                    <span className="text-orange-600 text-base md:text-xl flex-shrink-0">
                      ▪
                    </span>
                    <span>{t.frontiers.obj2}</span>
                  </li>
                  <li className="flex items-start gap-2 md:gap-4">
                    <span className="text-orange-600 text-base md:text-xl flex-shrink-0">
                      ▪
                    </span>
                    <span>{t.frontiers.obj3}</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SINAN ASELSAN Section (Gray) */}
      <section
        id="aselsan"
        className="min-h-screen bg-gray-900 relative overflow-x-hidden py-16 md:py-20"
      >
        {/* 3D Geometric Background - CSS infinite scroll (3×100vw, 0→-100% seamless loop) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ direction: "ltr" }}>
          <div
            className="flex h-full animate-strip-scroll-60"
            style={{ width: "300vw", direction: "ltr" }}
          >
            <img
              src={aselsanBg}
              alt=""
              className="h-full flex-shrink-0 object-cover object-left"
              style={{ width: "100vw", minWidth: "100vw", display: "block" }}
            />
            <img
              src={aselsanBg}
              alt=""
              className="h-full flex-shrink-0 object-cover object-left"
              style={{ width: "100vw", minWidth: "100vw", display: "block" }}
            />
            <img
              src={aselsanBg}
              alt=""
              className="h-full flex-shrink-0 object-cover object-left"
              style={{ width: "100vw", minWidth: "100vw", display: "block" }}
            />
          </div>
        </div>

        <div
          className="relative min-h-screen flex flex-wrap lg:flex-nowrap items-stretch"
          style={{ zIndex: 20 }}
        >
          {/* Left Page - Logo and Introduction */}
          <motion.div
            className="w-full lg:w-1/2 p-8 md:p-12 lg:p-20 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-xl mx-auto relative z-10">
              <div className="mb-8 md:mb-12 flex justify-center">
                <img
                  src={aselsanLogoImage}
                  alt="SINAN ASELSAN"
                  className="w-40 h-40 md:w-56 md:h-56 object-contain"
                />
              </div>
              <p
                className="text-white/95 text-center leading-relaxed whitespace-pre-line text-base md:text-lg lg:text-[21pt]"
                style={{
                  fontWeight: 700,
                  fontFamily: "DIN Arabic, sans-serif",
                }}
              >
                {t.aselsan.tagline}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 p-8 md:p-12 lg:p-20 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-xl mx-auto">
              <p
                className="text-white leading-relaxed mb-8 md:mb-12 text-base md:text-lg lg:text-[21pt]"
                style={{
                  fontWeight: 700,
                  fontFamily: "DIN Arabic, sans-serif",
                }}
              >
                {t.aselsan.intro}
              </p>
              <div>
                <h4
                  className="text-white mb-4 md:mb-6 text-sm md:text-base lg:text-[14pt]"
                  style={{
                    fontWeight: 400,
                    fontFamily: "DIN Arabic, sans-serif",
                  }}
                >
                  {t.aselsan.areasOfCollaboration}
                </h4>
                <ul
                  className="space-y-1.5 md:space-y-2 text-white leading-relaxed text-xs md:text-sm lg:text-[14pt]"
                  style={{
                    fontWeight: 400,
                    fontFamily: "DIN Arabic, sans-serif",
                  }}
                >
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1">•</span>
                    <span>{t.aselsan.area1}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1">•</span>
                    <span>{t.aselsan.area2}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1">•</span>
                    <span>{t.aselsan.area3}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1">•</span>
                    <span>{t.aselsan.area4}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1">•</span>
                    <span>{t.aselsan.area5}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1">•</span>
                    <span>{t.aselsan.area6}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1">•</span>
                    <span>{t.aselsan.area7}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1">•</span>
                    <span>{t.aselsan.area8}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1">•</span>
                    <span>{t.aselsan.area9}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-1">•</span>
                    <span>{t.aselsan.area10}</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Solutions Infographic Section */}
      <section
        id="solutions"
        className="min-h-screen bg-white relative overflow-x-hidden"
      >
        <SolutionsPage />
      </section>

      {/* Our Achievements Section */}
      <section
        id="achievements"
        className="min-h-screen bg-white relative overflow-x-hidden"
      >
        <AchievementsPage />
      </section>

      {/* Contact Section - Before Footer */}
      <section
        id="contact"
        className="min-h-screen relative overflow-x-hidden"
      >
        <ContactPage />
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={footerBg}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* Footer Content */}
        <div className="relative z-10 px-4 md:px-8 lg:px-20 py-10 md:py-14 lg:py-16">
          <div className="max-w-7xl mx-auto">
            {/* Footer Links Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-10 lg:gap-12 mb-10 md:mb-16">
              <div>
                <h3
                  className="text-white text-sm mb-6"
                  style={{ fontWeight: 600 }}
                >
                  {t.footer.aboutUs}
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#home"
                      className="text-white/70 text-xs hover:text-white transition-colors"
                      style={{ fontWeight: 300 }}
                    >
                      {t.footer.vision}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-white/70 text-xs hover:text-white transition-colors"
                      style={{ fontWeight: 300 }}
                    >
                      {t.footer.mission}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#values"
                      className="text-white/70 text-xs hover:text-white transition-colors"
                      style={{ fontWeight: 300 }}
                    >
                      {t.footer.ourValues}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#sectors"
                      className="text-white/70 text-xs hover:text-white transition-colors"
                      style={{ fontWeight: 300 }}
                    >
                      {t.footer.allProducts}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3
                  className="text-white text-sm mb-6"
                  style={{ fontWeight: 600 }}
                >
                  {t.footer.products}
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#marine"
                      className="text-white/70 text-xs hover:text-white transition-colors"
                      style={{ fontWeight: 300 }}
                    >
                      {t.footer.sinanMarine}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#sectors"
                      className="text-white/70 text-xs hover:text-white transition-colors"
                      style={{ fontWeight: 300 }}
                    >
                      {t.footer.sinanDynamics}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#aselsan"
                      className="text-white/70 text-xs hover:text-white transition-colors"
                      style={{ fontWeight: 300 }}
                    >
                      {t.footer.sinanTera}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3
                  className="text-white text-sm mb-6"
                  style={{ fontWeight: 600 }}
                >
                  {t.footer.solutions}
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#solutions"
                      className="text-white/70 text-xs hover:text-white transition-colors"
                      style={{ fontWeight: 300 }}
                    >
                      {t.footer.commercial}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#solutions"
                      className="text-white/70 text-xs hover:text-white transition-colors"
                      style={{ fontWeight: 300 }}
                    >
                      {t.footer.defense}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#solutions"
                      className="text-white/70 text-xs hover:text-white transition-colors"
                      style={{ fontWeight: 300 }}
                    >
                      {t.footer.government}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#solutions"
                      className="text-white/70 text-xs hover:text-white transition-colors"
                      style={{ fontWeight: 300 }}
                    >
                      {t.footer.research}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3
                  className="text-white text-sm mb-6"
                  style={{ fontWeight: 600 }}
                >
                  {t.footer.company}
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#about"
                      className="text-white/70 text-xs hover:text-white transition-colors"
                      style={{ fontWeight: 300 }}
                    >
                      {t.footer.aboutUs}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-white/70 text-xs hover:text-white transition-colors"
                      style={{ fontWeight: 300 }}
                    >
                      {t.footer.leadership}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white/70 text-xs hover:text-white transition-colors"
                      style={{ fontWeight: 300 }}
                    >
                      {t.footer.careers}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white/70 text-xs hover:text-white transition-colors"
                      style={{ fontWeight: 300 }}
                    >
                      {t.footer.investors}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3
                  className="text-white text-sm mb-6"
                  style={{ fontWeight: 600 }}
                >
                  {t.footer.mediaCenter}
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#achievements"
                      className="text-white/70 text-xs hover:text-white transition-colors"
                      style={{ fontWeight: 300 }}
                    >
                      {t.footer.news}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#achievements"
                      className="text-white/70 text-xs hover:text-white transition-colors"
                      style={{ fontWeight: 300 }}
                    >
                      {t.footer.pressReleases}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#achievements"
                      className="text-white/70 text-xs hover:text-white transition-colors"
                      style={{ fontWeight: 300 }}
                    >
                      {t.footer.gallery}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3
                  className="text-white text-sm mb-6"
                  style={{ fontWeight: 600 }}
                >
                  {t.footer.connect}
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 text-xs hover:text-white transition-colors"
                      style={{ fontWeight: 300 }}
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 text-xs hover:text-white transition-colors"
                      style={{ fontWeight: 300 }}
                    >
                      YouTube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-6 md:pt-8 border-t border-white/10">
              <p
                className="text-white/60 text-xs text-center"
                style={{ fontWeight: 300 }}
              >
                {t.footer.copyright} |
                <a href="#" className="hover:text-white transition-colors">
                  {" "}
                  {t.footer.privacyPolicy}
                </a>{" "}
                |
                <a href="#" className="hover:text-white transition-colors">
                  {" "}
                  {t.footer.termsOfUse}
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
