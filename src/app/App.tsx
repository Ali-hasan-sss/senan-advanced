import React, { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/app/i18n/LanguageContext";

// Import components directly
import LayerHome from "@/imports/Layer1-57-519";
import LayerDynamics from "@/imports/Layer1-146-688";
import LayerMarine from "@/imports/Layer1-146-793";
import LayerBackground from "@/imports/Layer1";
import AboutUsPage from "@/app/components/AboutUsPage";
import VisionMissionPage from "@/app/components/VisionMissionPage";
import ValuesPage from "@/app/components/ValuesPage";
// import ExperiencePage from "@/app/components/ExperiencePage";
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
          className="fixed inset-0 bg-gray-900/95 backdrop-blur-md z-50 pt-[50px]"
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
    <header className="h-[50px] flex-shrink-0 bg-black text-white px-4 md:px-6 lg:px-8 flex items-center">
      <div className="max-w-[1920px] mx-auto w-full flex items-center justify-between h-full">
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
          className="lg:hidden flex-shrink-0 h-8 w-auto"
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
  "vision-mission",
  "values",
  // "experience",
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
    label: t.nav[id === "vision-mission" ? "visionMission" : id],
  }));

  return (
    <>
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      {/* Layout: header (50px) + scroll area (rest). Header is NOT fixed — space reserved at top. */}
      <div className="h-screen flex flex-col overflow-hidden">
        <Header menuItems={menuItems} locale={locale} setLocale={setLocale} />
        {/* Single scroll container: fills rest of viewport below header */}
        <div
          className="app-scroll-container flex-1 min-h-0 overflow-y-scroll snap-y snap-mandatory scroll-smooth"
          style={{ scrollSnapType: "y mandatory" }}
        >
        {/* Home Section (Hero): dark base + LayerHome (triangles) + LayerBackground (polygonal); logo only, no button */}
        <section
          id="home"
          className="h-[calc(100vh-50px)] snap-start snap-always flex-shrink-0 overflow-hidden relative isolate bg-gray-950"
        >
          {/* Hero background: dark base + glowing triangles (LayerHome) + polygonal (LayerBackground) */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: 0 }}
          >
            <div className="absolute inset-0 w-full h-full bg-gray-950" aria-hidden />
          </div>
          <div
            className="absolute inset-y-0 left-1/2 w-[110vw] max-w-none -translate-x-1/2"
            style={{ zIndex: 1 }}
          >
            {typeof LayerHome === "function" ? (
              <div className="absolute inset-0 w-full h-full min-w-full min-h-full">
                <LayerHome hideGrayRect />
              </div>
            ) : null}
            {typeof LayerBackground === "function" ? (
              <div className="absolute inset-0 w-full h-full min-w-full min-h-full pointer-events-none">
                <LayerBackground />
              </div>
            ) : null}
          </div>

          {/* Logo centered in hero — no button underneath */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-8 min-h-0"
            style={{ zIndex: 10 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center justify-center"
            >
              <img
                src={logoImage}
                alt="SINAN Logo"
                className="h-48 sm:h-64 md:h-80 lg:h-96 w-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* About Us Section */}
        <section
          id="about"
          className="h-[calc(100vh-50px)] snap-start snap-always flex-shrink-0 overflow-hidden"
        >
        <AboutUsPage />
        </section>

        {/* Vision & Mission Section */}
        <section
          id="vision-mission"
          className="h-[calc(100vh-50px)] snap-start snap-always flex-shrink-0 overflow-hidden"
        >
        <VisionMissionPage />
        </section>

        {/* Our Values Section */}
        <section
          id="values"
          className="h-[calc(100vh-50px)] snap-start snap-always flex-shrink-0 overflow-hidden flex"
        >
        <ValuesPage />
        </section>

        {/* Our Experience Section - commented out */}
      {/* <section
        id="experience"
        className="min-h-[calc(100vh-50px)] relative overflow-x-hidden snap-start snap-always"
      >
        <ExperiencePage />
      </section> */}

        {/* Sectors Section - SINAN DYNAMICS: animated bg, content from image, drone top-right, teal overlay */}
        <section
          id="sectors"
          className="h-[calc(100vh-50px)] snap-start snap-always flex-shrink-0 overflow-hidden relative isolate"
        >
          {/* Animated strip background (same as Aselsan / Frontiers / Marine) */}
          <div
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ zIndex: 0, direction: "ltr" }}
          >
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

          {/* Geometric overlay */}
          <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {typeof LayerBackground === "function" ? (
              <div className="absolute inset-0 w-full h-full opacity-90">
                <LayerBackground />
              </div>
            ) : null}
          </div>

          {/* Faint background text (left side) */}
          <div
            className="hidden md:flex absolute inset-0 items-center justify-start pointer-events-none px-6 lg:px-12"
            style={{ zIndex: 2 }}
          >
            <p
              className="text-white/10 text-left leading-tight max-w-md"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
                fontFamily: "DIN Arabic, sans-serif",
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

          {/* Transparent teal/cyan layer — full section, under text */}
          <div
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 3, backgroundColor: "rgba(0, 174, 239, 0.35)" }}
          />

          {/* Drone — top right, entrance animation, translucent (same placement as image) */}
          <motion.div
            className="hidden sm:block absolute top-[8%] right-[4%] md:top-[6%] md:right-[3%] pointer-events-none w-[min(45vw,420px)] max-h-[35vh] flex items-start justify-end"
            style={{ zIndex: 5 }}
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            whileInView={{ opacity: 0.5, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src="/droun.png"
              alt=""
              className="w-auto h-auto max-w-full max-h-full object-contain object-top-right"
              style={{ mixBlendMode: "lighten", opacity: 0.9 }}
            />
          </motion.div>

          {/* Centered content: logo SINAN DYNAMICS + heading + paragraph */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 overflow-y-auto"
            style={{ zIndex: 10 }}
          >
            <div
              className="max-w-2xl w-full px-6 py-8 md:px-8 md:py-10"
              style={{ fontFamily: "DIN Arabic, sans-serif" }}
            >
              {/* Logo: icon + SINAN + DYNAMICS (with line between) */}
              <motion.div
                className="flex flex-col items-center text-center mb-6 md:mb-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 relative mb-3 md:mb-4 [&_svg]:w-full [&_svg]:h-full [&_svg]:text-white">
                  {typeof LayerDynamics === "function" ? <LayerDynamics /> : null}
                </div>
                <p className="text-white font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight uppercase">
                  SINAN
                </p>
                <div className="w-16 md:w-20 h-px bg-white/80 my-1 md:my-1.5" />
                <p className="text-white font-medium text-lg md:text-xl lg:text-2xl uppercase tracking-wide">
                  DYNAMICS
                </p>
              </motion.div>

              {/* Heading (dynamicsDesc) */}
              <p
                className="text-white text-base md:text-lg lg:text-xl text-center mb-4 md:mb-6 leading-relaxed"
                style={{ fontFamily: "DIN Arabic, sans-serif", fontWeight: 500 }}
              >
                {t.sectors.dynamicsDesc}
              </p>

              {/* Paragraph (dynamicsIntro) */}
              <p
                className="text-white/95 text-sm md:text-base lg:text-lg leading-relaxed text-center max-w-xl mx-auto"
                style={{ fontFamily: "DIN Arabic, sans-serif" }}
              >
                {t.sectors.dynamicsIntro}
              </p>
            </div>
          </div>
        </section>

        {/* Sinan Marine Section — animated bg, content from image, submarine top-right, purple overlay under text/logo */}
        <section
          id="marine"
          className="h-[calc(100vh-50px)] snap-start snap-always flex-shrink-0 overflow-hidden relative isolate"
        >
          {/* Animated strip background (same as Aselsan / Frontiers) */}
          <div
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ zIndex: 0, direction: "ltr" }}
          >
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

          {/* Geometric overlay */}
          <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {typeof LayerBackground === "function" ? (
              <div className="absolute inset-0 w-full h-full opacity-90">
                <LayerBackground />
              </div>
            ) : null}
          </div>

          {/* Faint background text (left side) */}
          <div
            className="hidden md:flex absolute inset-0 items-center justify-start pointer-events-none px-6 lg:px-12"
            style={{ zIndex: 2 }}
          >
            <p
              className="text-white/10 text-left leading-tight max-w-md"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
                fontFamily: "DIN Arabic, sans-serif",
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

          {/* Transparent purple layer — full section */}
          <div
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 3, backgroundColor: "rgba(46, 49, 146, 0.35)" }}
          />

          {/* Submarine — top right, entrance animation, translucent */}
          <motion.div
            className="hidden sm:block absolute top-[8%] right-[4%] md:top-[6%] md:right-[3%] pointer-events-none w-[min(45vw,420px)] max-h-[35vh] flex items-start justify-end"
            style={{ zIndex: 5 }}
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            whileInView={{ opacity: 0.5, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src={submarineImage}
              alt=""
              className="w-auto h-auto max-w-full max-h-full object-contain object-top-right"
              style={{ mixBlendMode: "lighten", opacity: 0.9 }}
            />
          </motion.div>

          {/* Centered content: logo + intro (purple overlay is full section above) */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 overflow-y-auto"
            style={{ zIndex: 10 }}
          >
            <div
              className="max-w-2xl w-full px-6 py-8 md:px-8 md:py-10"
              style={{ fontFamily: "DIN Arabic, sans-serif" }}
            >
              {/* Logo: icon + SINAN + MARINE */}
              <motion.div
                className="flex flex-col items-center text-center mb-6 md:mb-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 relative mb-3 md:mb-4 [&_svg]:w-full [&_svg]:h-full [&_svg]:text-white">
                  {typeof LayerMarine === "function" ? <LayerMarine /> : null}
                </div>
                <p className="text-white font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight uppercase">
                  SINAN
                </p>
                <p className="text-white font-medium text-lg md:text-xl lg:text-2xl uppercase tracking-widest mt-0.5">
                  MARINE
                </p>
              </motion.div>

              {/* Intro paragraph (same as image) */}
              <p
                className="text-white/95 text-sm md:text-base lg:text-lg leading-relaxed text-center max-w-xl mx-auto"
                style={{ fontFamily: "DIN Arabic, sans-serif" }}
              >
                {t.marine.intro}
              </p>
            </div>
          </div>
        </section>

        {/* Sinan Frontiers Section — same animated bg as Aselsan, content from reference image */}
        <section
          id="frontiers"
          className="h-[calc(100vh-50px)] snap-start snap-always flex-shrink-0 overflow-hidden relative isolate"
        >
          {/* Animated strip background (same as Aselsan) */}
          <div
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ zIndex: 0, direction: "ltr" }}
          >
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

          {/* Geometric overlay (plexus) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {typeof LayerBackground === "function" ? (
              <div className="absolute inset-0 w-full h-full opacity-90">
                <LayerBackground />
              </div>
            ) : null}
          </div>

          {/* Faint background text: "Empowering National Capabilities..." (left side) */}
          <div
            className="hidden md:flex absolute inset-0 items-center justify-start pointer-events-none px-6 lg:px-12"
            style={{ zIndex: 2 }}
          >
            <p
              className="text-white/10 text-left leading-tight max-w-md"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
                fontFamily: "DIN Arabic, sans-serif",
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

          {/* Transparent orange layer — full section, under text */}
          <div
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 3, backgroundColor: "rgba(247, 148, 29, 0.35)" }}
          />

          {/* Centered content: logo, tagline, two paragraphs */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-8 md:px-12 overflow-y-auto"
            style={{ zIndex: 10 }}
          >
            <div className="flex flex-col items-center max-w-2xl mx-auto py-6 md:py-8">
              {/* SINAN FRONTIERS logo */}
              <motion.div
                className="flex flex-col items-center mb-5 md:mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img
                  src={frontiersLogoImage}
                  alt="SINAN FRONTIERS"
                  className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain"
                />
              </motion.div>

              {/* Tagline */}
              <p
                className="text-white text-base md:text-lg lg:text-xl mb-4 md:mb-6 leading-relaxed"
                style={{ fontFamily: "DIN Arabic, sans-serif", fontWeight: 500 }}
              >
                {t.frontiers.tagline}
              </p>

              {/* First paragraph */}
              <p
                className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-5"
                style={{ fontFamily: "DIN Arabic, sans-serif" }}
              >
                {t.frontiers.intro}
              </p>

              {/* Second paragraph */}
              <p
                className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed"
                style={{ fontFamily: "DIN Arabic, sans-serif" }}
              >
                {t.frontiers.paragraph2}
              </p>
            </div>
          </div>
        </section>

        {/* SINAN ASELSAN Section — joint venture announcement (layout from reference image) */}
        <section
          id="aselsan"
          className="h-[calc(100vh-50px)] snap-start snap-always flex-shrink-0 overflow-hidden relative isolate"
        >
          {/* Animated strip background (3×100vw seamless loop) */}
          <div
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ zIndex: 0, direction: "ltr" }}
          >
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

          {/* Plexus-style overlay: geometric polygons + dots */}
          <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {typeof LayerBackground === "function" ? (
              <div className="absolute inset-0 w-full h-full opacity-90">
                <LayerBackground />
              </div>
            ) : null}
          </div>

          {/* Content: strictly centered in the middle of the screen */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-8 md:px-12"
            style={{ zIndex: 10 }}
          >
            <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
              {/* Logo (symbol + SINAN + ADVANCED INDUSTRIES) */}
              <motion.div
                className="flex flex-col items-center mb-5 md:mb-7"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img
                  src={logoImage}
                  alt="SINAN ADVANCED INDUSTRIES"
                  className="h-24 sm:h-28 md:h-36 lg:h-44 xl:h-52 w-auto object-contain"
                />
              </motion.div>

              {/* "has formed a strategic joint venture with" */}
              <p
                className="text-gray-400 text-sm md:text-base lg:text-lg mb-3 md:mb-5"
                style={{ fontFamily: "DIN Arabic, sans-serif" }}
              >
                {t.aselsan.jointVentureLine}
              </p>

              {/* "aselsan" — most prominent, extra bold */}
              <motion.p
                className="text-white font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl lowercase tracking-tight mb-5 md:mb-7"
                style={{ fontFamily: "DIN Arabic, sans-serif", fontWeight: 900 }}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {t.aselsan.aselsanName}
              </motion.p>

              {/* "to establish a leading defense and advanced technology company in the Sultanate of Oman." */}
              <p
                className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed"
                style={{ fontFamily: "DIN Arabic, sans-serif" }}
              >
                {t.aselsan.establishLine}
              </p>
            </div>
          </div>
        </section>

        {/* Our Solutions Infographic Section */}
        <section
          id="solutions"
          className="h-[calc(100vh-50px)] snap-start snap-always flex-shrink-0 overflow-hidden bg-white relative"
        >
          <SolutionsPage />
        </section>

        {/* Our Achievements Section */}
        <section
          id="achievements"
          className="h-[calc(100vh-50px)] snap-start snap-always flex-shrink-0 overflow-hidden bg-[#F5F3EE] relative"
        >
          <AchievementsPage />
        </section>

        {/* Contact Section - Before Footer */}
        <section
          id="contact"
          className="h-[calc(100vh-50px)] snap-start snap-always flex-shrink-0 overflow-hidden relative"
        >
          <ContactPage />
        </section>

        {/* Footer */}
        <footer className="h-[calc(100vh-50px)] snap-start snap-always flex-shrink-0 overflow-hidden relative bg-gray-900">
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
        </div>
      </div>
    </>
  );
}
