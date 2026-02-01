import React, { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { Menu, X, Linkedin, Youtube } from "lucide-react";
import { useLanguage } from "@/app/i18n/LanguageContext";

// Import components directly
import LayerHome, { TRIANGLE_TO_SECTION } from "@/imports/Layer1-57-519";
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
import cursorLogo from "@/assets/e868c967defa2ff1adabdce43f94676450e69b02.png";
import droneImage from "@/assets/cd1779045309571142b8f0a31bf6fab645307577.png";

// المؤشر المخصص: أبيض على الخلفيات الداكنة، أسود على الخلفيات الفاتحة (مثل قسم الرؤية والمهمة) — فوق كل العناصر
function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isOnLightBackground, setIsOnLightBackground] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        let el: Element | null = element;
        let isLight = false;
        for (let i = 0; i < 8 && el; i++) {
          const bg = window.getComputedStyle(el).backgroundColor;
          const isWhiteOrLight =
            bg.includes("255, 255, 255") ||
            bg.includes("rgb(255, 255, 255)") ||
            bg.includes("249, 250, 251") ||
            bg.includes("243, 244, 246") ||
            bg.includes("248, 248, 248") ||
            bg.includes("245, 245, 245") ||
            bg.includes("240, 240, 240") ||
            bg.includes("250, 250, 250");
          if (isWhiteOrLight) {
            isLight = true;
            break;
          }
          el = el.parentElement;
        }
        setIsOnLightBackground(isLight);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div
      className="fixed pointer-events-none"
      style={{
        left: mousePosition.x - 14,
        top: mousePosition.y - 16,
        transform: "translate(0, 0)",
        zIndex: 2147483647,
      }}
    >
      <img
        src={cursorLogo}
        alt=""
        className="w-7 h-8"
        style={{
          opacity: 0.95,
          filter: isOnLightBackground ? "brightness(0)" : "none",
          boxShadow: isOnLightBackground ? "0 0 0 1px rgba(0,0,0,0.1)" : "none",
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
  contactLabel,
  locale,
  setLocale,
  scrollDown,
}: {
  menuItems: NavItem[];
  contactLabel: string;
  locale: "en" | "ar";
  setLocale: (l: "en" | "ar") => void;
  scrollDown?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const opaque = isHovered || !scrollDown;
  const textClass = opaque
    ? "text-white hover:text-gray-400"
    : "text-white/50 hover:text-white/70";
  const btnClass = opaque
    ? "text-white/80 hover:text-white border-white/30 hover:border-white/60"
    : "text-white/40 hover:text-white/60 border-white/20 hover:border-white/40";
  return (
    <header
      className="h-[50px] flex-shrink-0 px-4 md:px-6 lg:px-8 flex items-center transition-all duration-300"
      style={{
        backgroundColor: opaque ? "rgb(0,0,0)" : "rgba(0,0,0,0.5)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-[1920px] mx-auto w-full flex items-center justify-between h-full">
        {/* Desktop nav */}
        <div className="hidden lg:flex flex-1 items-center justify-evenly px-4 xl:px-20">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-xs xl:text-sm transition-colors whitespace-nowrap ${textClass}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`text-xs xl:text-sm transition-colors whitespace-nowrap ${textClass}`}
          >
            {contactLabel}
          </a>
        </div>

        {/* سويتش اللغة — أقصى اليمين */}
        <div className="hidden lg:flex items-center flex-shrink-0 pl-4">
          <button
            type="button"
            onClick={() => setLocale(locale === "ar" ? "en" : "ar")}
            className={`text-sm font-medium px-3 py-1.5 rounded border transition-colors ${btnClass}`}
            aria-label="Toggle language"
          >
            {locale === "ar" ? "EN" : "ar"}
          </button>
        </div>

        {/* Mobile: logo (left) */}
        <a
          href="#home"
          className={`lg:hidden flex-shrink-0 h-8 w-auto transition-opacity duration-300 ${opaque ? "opacity-100" : "opacity-60"}`}
          aria-label="senan advanced – Home"
        >
          <img
            src={logoImage}
            alt="senan advanced"
            className="h-full w-auto object-contain"
          />
        </a>

        <div className="lg:hidden ml-auto flex items-center gap-4">
          <MobileMenu
            menuItems={[
              ...menuItems,
              { href: "#contact", label: contactLabel },
            ]}
            locale={locale}
            setLocale={setLocale}
          />
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

/* ترتيب روابط النافبار = home, about, vision-mission, values فقط في النافبار؛ Contact بجانب سويتش اللغة */
const NAV_IDS = [
  "home",
  "about",
  "vision-mission",
  "values",
  "sectors",
  "marine",
  "frontiers",
  "aselsan",
  "solutions",
  "achievements",
  "contact",
] as const;

/** عناوين تظهر في الهيدر (بدون Dynamics, Marine, Frontiers, Aselsan, Solutions, Achievements) */
const HEADER_NAV_IDS = ["home", "about", "vision-mission", "values"] as const;

export default function App() {
  const { t, locale, setLocale } = useLanguage();
  const menuItems: NavItem[] = NAV_IDS.map((id) => ({
    href: `#${id}`,
    label: t.nav[id === "vision-mission" ? "visionMission" : id],
  }));
  /** عناصر النافبار في الهيدر فقط: home, about, vision-mission, values */
  const headerMenuItems: NavItem[] = HEADER_NAV_IDS.map((id) => ({
    href: `#${id}`,
    label: t.nav[id === "vision-mission" ? "visionMission" : id],
  }));

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Partial<Record<string, HTMLElement>>>({});
  const [sectionInView, setSectionInView] = useState<Record<string, boolean>>(
    {}
  );
  const [heroHoveredTriangleId, setHeroHoveredTriangleId] = useState<
    number | null
  >(null);
  const [heroMousePosition, setHeroMousePosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [scrollDown, setScrollDown] = useState(false);
  const lastScrollTop = useRef(0);

  const sectionIdByEl = useRef<WeakMap<Element, string>>(new WeakMap());

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const onScroll = () => {
      const st = el.scrollTop;
      setScrollDown(st > lastScrollTop.current && st > 10);
      lastScrollTop.current = st;
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const scrollEl = scrollContainerRef.current;
    if (!scrollEl) return;
    const refs = sectionRefs.current;
    const idByEl = sectionIdByEl.current;
    const elements: { el: HTMLElement; id: string }[] = [];
    for (const id of NAV_IDS) {
      const el = refs[id];
      if (el) {
        idByEl.set(el, id);
        elements.push({ el, id });
      }
    }
    if (elements.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        setSectionInView((prev) => {
          const next = { ...prev };
          for (const entry of entries) {
            const id = idByEl.get(entry.target);
            if (id != null) next[id] = entry.isIntersecting;
          }
          return next;
        });
      },
      { root: scrollEl, rootMargin: "0px", threshold: 0.15 }
    );
    elements.forEach(({ el }) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      {/* Layout: header (مكان محجوز) + scroll area — الهيدر بدون fixed/sticky */}
      <div className="h-screen flex flex-col overflow-hidden">
        <Header
          menuItems={headerMenuItems}
          contactLabel={t.nav.contact}
          locale={locale}
          setLocale={setLocale}
          scrollDown={scrollDown}
        />
        <div
          ref={scrollContainerRef}
          className="app-scroll-container flex-1 min-h-0 overflow-y-scroll snap-y snap-mandatory scroll-smooth"
          style={{ scrollSnapType: "y mandatory" }}
        >
          {/* Home Section (Hero): خلفية Assxet.svg (مثلثات ملونة)؛ logo فقط */}
          <section
            ref={(el) => {
              if (el) sectionRefs.current["home"] = el;
            }}
            id="home"
            className="h-[calc(100vh-50px)] snap-start snap-always flex-shrink-0 overflow-hidden relative isolate bg-gray-950"
          >
            {/* خلفية الهيرو: SVG المثلثات الملونة (Assxet.svg) — تغطي القسم بالكامل */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{ zIndex: 0 }}
              aria-hidden
            >
              <div className="absolute inset-0 w-full h-full bg-gray-950" />
              {/* خلفية مقلوبة رأسياً: المجسمات من الأسفل دون التأثير على اللوغو */}
              <img
                src={`${import.meta.env.BASE_URL || "/"}hero-bg.png`}
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  transform: "scaleY(-1)",
                }}
              />
            </div>
            {/* طبقة المثلثات الملونة: هوفر + نقر للانتقال إلى قسم محدد */}
            <div
              className="absolute inset-y-0 left-1/2 w-[110vw] max-w-none -translate-x-1/2 pointer-events-none"
              style={{ zIndex: 1 }}
            >
              <div
                className="absolute inset-0 w-full h-full min-w-full min-h-full pointer-events-auto"
                onMouseMove={(e) => {
                  if (heroHoveredTriangleId !== null) {
                    setHeroMousePosition({ x: e.clientX, y: e.clientY });
                  }
                }}
                onMouseLeave={() => {
                  setHeroHoveredTriangleId(null);
                  setHeroMousePosition(null);
                }}
              >
                {typeof LayerHome === "function" ? (
                  <LayerHome
                    hideGrayRect
                    trianglesOnly
                    onTriangleHoverChange={(id, e) => {
                      setHeroHoveredTriangleId(id);
                      if (e)
                        setHeroMousePosition({ x: e.clientX, y: e.clientY });
                      if (id === null) setHeroMousePosition(null);
                    }}
                    onTriangleClick={(triangleId) => {
                      const sectionId = TRIANGLE_TO_SECTION[triangleId];
                      const el =
                        sectionRefs.current[sectionId] ??
                        document.getElementById(sectionId);
                      el?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                  />
                ) : null}
              </div>
            </div>

            {/* لوغو عائم فوق مؤشر الماوس عند الهوفر — بلا خلفية */}
            {heroHoveredTriangleId !== null && heroMousePosition && (
              <div
                className="fixed flex flex-col items-center justify-center pointer-events-none z-[20]"
                style={{
                  left: heroMousePosition.x,
                  top: heroMousePosition.y - 90,
                  transform: "translate(-50%, 0)",
                  width: "min(22vw, 220px)",
                }}
              >
                {heroHoveredTriangleId === 1 && (
                  <>
                    <div className="w-14 h-14 md:w-16 md:h-16 relative [&_svg]:w-full [&_svg]:h-full [&_svg]:text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                      {typeof LayerDynamics === "function" ? (
                        <LayerDynamics />
                      ) : null}
                    </div>
                    <span className="text-white text-xs font-semibold tracking-wider mt-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                      SINAN DYNAMICS
                    </span>
                  </>
                )}
                {heroHoveredTriangleId === 2 && (
                  <>
                    <div className="w-14 h-14 md:w-16 md:h-16 relative [&_svg]:w-full [&_svg]:h-full [&_svg]:text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                      {typeof LayerMarine === "function" ? (
                        <LayerMarine />
                      ) : null}
                    </div>
                    <span className="text-white text-xs font-semibold tracking-wider mt-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                      SINAN MARINE
                    </span>
                  </>
                )}
                {heroHoveredTriangleId === 3 && (
                  <>
                    <img
                      src={`${import.meta.env.BASE_URL || "/"}simnfor.png`}
                      alt="SINAN FRONTIERS"
                      className="h-12 md:h-14 w-auto object-contain drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                    />
                    <span className="text-white text-xs font-semibold tracking-wider mt-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                      SINAN FRONTIERS
                    </span>
                  </>
                )}
                {heroHoveredTriangleId === 4 && (
                  <div className="flex items-center gap-2">
                    <img
                      src={`${
                        import.meta.env.BASE_URL || "/"
                      }logo-assislian.png`}
                      alt="GV Partner"
                      className="h-12 md:h-14 w-auto object-contain drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                    />
                    <span className="text-white text-xs font-semibold tracking-wider drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                      GV Partner
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Logo centered in hero — pointer-events-none حتى لا تغطي المثلثات؛ اللوغو فقط يلتقط الأحداث */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-8 min-h-0 pointer-events-none"
              style={{ zIndex: 10 }}
            >
              {/* دخول الصفحة: ظهور ثم نبضة قلب واحدة — يعاد عند كل دخول للقسم */}
              <motion.div
                initial={false}
                className="pointer-events-auto flex flex-col items-center justify-center"
                animate={
                  sectionInView["home"]
                    ? {
                        opacity: 1,
                        scale: [0.92, 1, 1.07, 1, 1.04, 1],
                      }
                    : { opacity: 0, scale: 0.92 }
                }
                transition={{
                  opacity: { duration: 0.5 },
                  scale: sectionInView["home"]
                    ? {
                        duration: 1.4,
                        times: [0, 0.35, 0.5, 0.65, 0.82, 1],
                        ease: "easeOut",
                      }
                    : { duration: 0.3 },
                }}
              >
                {/* عند مرور الماوس: نبض القلب يتكرر — عند النقر ينتقل إلى صفحة About */}
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    const el =
                      sectionRefs.current["about"] ??
                      document.getElementById("about");
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="flex flex-col items-center justify-center cursor-none"
                  aria-label="Go to About Us"
                >
                  <motion.div
                    className="flex flex-col items-center justify-center"
                    whileHover={{
                      scale: [1, 1.07, 1, 1.04, 1],
                    }}
                    transition={{
                      scale: {
                        duration: 0.75,
                        repeat: Infinity,
                        repeatDelay: 0.2,
                        ease: "easeOut",
                      },
                    }}
                  >
                    <img
                      src={logoImage}
                      alt="SINAN Logo"
                      className="h-48 sm:h-64 md:h-80 lg:h-96 w-auto select-none"
                      draggable={false}
                    />
                  </motion.div>
                </a>
              </motion.div>
            </div>
          </section>

          {/* About Us Section */}
          <section
            ref={(el) => {
              if (el) sectionRefs.current["about"] = el;
            }}
            id="about"
            className="h-[calc(100vh-50px)] snap-start snap-always flex-shrink-0 overflow-hidden"
          >
            <AboutUsPage isInView={!!sectionInView["about"]} />
          </section>

          {/* Vision & Mission Section */}
          <section
            ref={(el) => {
              if (el) sectionRefs.current["vision-mission"] = el;
            }}
            id="vision-mission"
            className="h-[calc(100vh-50px)] snap-start snap-always flex-shrink-0 overflow-hidden"
          >
            <VisionMissionPage isInView={!!sectionInView["vision-mission"]} />
          </section>

          {/* Our Values Section */}
          <section
            ref={(el) => {
              if (el) sectionRefs.current["values"] = el;
            }}
            id="values"
            className="h-[calc(100vh-50px)] snap-start snap-always flex-shrink-0 overflow-hidden flex"
          >
            <ValuesPage isInView={!!sectionInView["values"]} />
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
            ref={(el) => {
              if (el) sectionRefs.current["sectors"] = el;
            }}
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
                  style={{
                    width: "100vw",
                    minWidth: "100vw",
                    display: "block",
                  }}
                />
                <img
                  src={aselsanBg}
                  alt=""
                  className="h-full flex-shrink-0 object-cover object-left"
                  style={{
                    width: "100vw",
                    minWidth: "100vw",
                    display: "block",
                  }}
                />
                <img
                  src={aselsanBg}
                  alt=""
                  className="h-full flex-shrink-0 object-cover object-left"
                  style={{
                    width: "100vw",
                    minWidth: "100vw",
                    display: "block",
                  }}
                />
              </div>
            </div>

            {/* Geometric overlay */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 1 }}
            >
              {typeof LayerBackground === "function" ? (
                <div className="absolute inset-0 w-full h-full opacity-90">
                  <LayerBackground />
                </div>
              ) : null}
            </div>

            {/* نص الخلفية — نفس ستايل Marine تماماً */}
            <div
              className="hidden md:flex absolute inset-0 items-center justify-start pointer-events-none px-6 lg:px-12"
              style={{ zIndex: 2 }}
            >
              <p
                className="text-white/10 text-left font-bold leading-tight max-w-md"
                style={{
                  fontSize: "clamp(3rem, 5vw, 5rem)",
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

            {/* Drone — top right, يهبط من أعلى الشاشة عند كل دخول للقسم */}
            <motion.div
              className="hidden sm:block absolute top-[8%] right-[4%] md:top-[6%] md:right-[3%] pointer-events-none w-[min(45vw,420px)] max-h-[35vh] flex items-start justify-end"
              style={{ zIndex: 5 }}
              initial={false}
              animate={
                sectionInView["sectors"]
                  ? { opacity: 0.5, scale: 1, y: 0 }
                  : { opacity: 0, scale: 0.9, y: -120 }
              }
              transition={{
                duration: 1,
                delay: sectionInView["sectors"] ? 0.25 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img
                src="/droun.png"
                alt=""
                className="w-auto h-auto max-w-full max-h-full object-contain object-top-right"
                style={{ mixBlendMode: "lighten", opacity: 0.9 }}
              />
            </motion.div>

            {/* Centered content: logo SINAN DYNAMICS + paragraphs — أنيميشن دخول عند كل دخول للقسم */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 overflow-y-auto"
              style={{ zIndex: 10 }}
            >
              <div
                className="max-w-2xl w-full px-6 py-8 md:px-8 md:py-10"
                style={{ fontFamily: "DIN Arabic, sans-serif" }}
              >
                {/* Logo: icon + SINAN + DYNAMICS — أنيميشن عند كل دخول */}
                <motion.div
                  className="flex flex-col items-center text-center mb-6 md:mb-8"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{
                    once: false,
                    root: scrollContainerRef,
                    amount: 0.2,
                  }}
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 relative mb-3 md:mb-4 [&_svg]:w-full [&_svg]:h-full [&_svg]:text-white">
                    {typeof LayerDynamics === "function" ? (
                      <LayerDynamics />
                    ) : null}
                  </div>
                </motion.div>

                {/* First paragraph (dynamicsDesc) — عرض حاوية يكفي لظهور النص في 3 أسطر */}
                <motion.p
                  className="text-white text-center mb-4 md:mb-6 leading-relaxed mx-auto max-w-[52%] text-base md:text-lg lg:text-xl"
                  style={{
                    fontFamily: "DIN Arabic, sans-serif",
                    fontWeight: 700,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{
                    once: false,
                    root: scrollContainerRef,
                    amount: 0.2,
                  }}
                >
                  {t.sectors.dynamicsDesc}
                </motion.p>

                {/* Second paragraph (dynamicsIntro) — حاوية أوسع من الأولى */}
                <motion.p
                  className="text-white text-center leading-relaxed mx-auto max-w-[85%] text-base md:text-lg lg:text-xl"
                  style={{
                    fontFamily: "DIN Arabic, sans-serif",
                    fontWeight: 700,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.28,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{
                    once: false,
                    root: scrollContainerRef,
                    amount: 0.2,
                  }}
                >
                  {t.sectors.dynamicsIntro}
                </motion.p>
              </div>
            </div>
          </section>

          {/* Sinan Marine Section — animated bg, content from image, submarine top-right, purple overlay under text/logo */}
          <section
            ref={(el) => {
              if (el) sectionRefs.current["marine"] = el;
            }}
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
                  style={{
                    width: "100vw",
                    minWidth: "100vw",
                    display: "block",
                  }}
                />
                <img
                  src={aselsanBg}
                  alt=""
                  className="h-full flex-shrink-0 object-cover object-left"
                  style={{
                    width: "100vw",
                    minWidth: "100vw",
                    display: "block",
                  }}
                />
                <img
                  src={aselsanBg}
                  alt=""
                  className="h-full flex-shrink-0 object-cover object-left"
                  style={{
                    width: "100vw",
                    minWidth: "100vw",
                    display: "block",
                  }}
                />
              </div>
            </div>

            {/* Geometric overlay */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 1 }}
            >
              {typeof LayerBackground === "function" ? (
                <div className="absolute inset-0 w-full h-full opacity-90">
                  <LayerBackground />
                </div>
              ) : null}
            </div>

            {/* نص الخلفية — نفس التموضع والستايل كـ Frontiers تماماً */}
            <div
              className="hidden md:flex absolute inset-0 items-center justify-start pointer-events-none px-6 lg:px-12"
              style={{ zIndex: 2 }}
            >
              <p
                className="text-white/10 text-left font-bold leading-tight max-w-md"
                style={{
                  fontSize: "clamp(3rem, 5vw, 5rem)",
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

            {/* Transparent overlay — full section (#312783) */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 3, backgroundColor: "rgba(49, 39, 131, 0.35)" }}
            />

            {/* Submarine — top right, entrance animation at every section entry */}
            <motion.div
              className="hidden sm:block absolute top-[8%] right-[4%] md:top-[6%] md:right-[3%] pointer-events-none w-[min(45vw,420px)] max-h-[35vh] flex items-start justify-end"
              style={{ zIndex: 5 }}
              initial={false}
              animate={
                sectionInView["marine"]
                  ? { opacity: 0.5, scale: 1, x: 0, y: 0 }
                  : { opacity: 0, scale: 0.88, x: 80, y: 30 }
              }
              transition={{
                duration: 1,
                delay: sectionInView["marine"] ? 0.25 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img
                src={submarineImage}
                alt=""
                className="w-auto h-auto max-w-full max-h-full object-contain object-top-right"
                style={{ mixBlendMode: "lighten", opacity: 0.9 }}
              />
            </motion.div>

            {/* Centered content — هيكل طائرة: لوجو مثلث + SINAN MARINE + فقرتان بتباعد عمودي واضح */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-8 md:px-12 overflow-y-auto"
              style={{ zIndex: 10 }}
            >
              <div className="flex flex-col items-center max-w-2xl mx-auto py-6 md:py-8">
                {/* Logo: أيقونة مثلثة (أنف الطائرة) + SINAN (عريض) + MARINE (أرفع مع تباعد حروف) */}
                <motion.div
                  className="flex flex-col items-center text-center mb-8 md:mb-12"
                  initial={false}
                  animate={
                    sectionInView["marine"]
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 24 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: sectionInView["marine"] ? 0 : 0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ fontFamily: "DIN Arabic, sans-serif" }}
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 relative mb-3 md:mb-4 [&_svg]:w-full [&_svg]:h-full [&_svg]:text-white">
                    {typeof LayerMarine === "function" ? <LayerMarine /> : null}
                  </div>
                </motion.div>

                {/* الفقرة الأولى — سطران (الأول أقصر من الثاني)، وزن عادي، محاذاة وسط مثل الصورة الثانية */}
                <motion.p
                  className="text-white text-base md:text-lg lg:text-xl mb-4 leading-relaxed max-w-xl mx-auto whitespace-pre-line text-center"
                  style={{
                    fontFamily: "DIN Arabic, sans-serif",
                    fontWeight: 700,
                  }}
                  initial={false}
                  animate={
                    sectionInView["marine"]
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{
                    duration: 0.55,
                    delay: sectionInView["marine"] ? 0.15 : 0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {t.marine.intro.split("\n\n")[0]}
                </motion.p>

                {/* سطر فارغ بين الفقرتين */}
                <div className="h-6 md:h-8 shrink-0" aria-hidden="true" />

                {/* الفقرة الثانية — 4 أسطر، نفس حجم الفقرة الأولى، وزن عادي، محاذاة وسط مثل الصورة الثانية */}
                <motion.p
                  className="text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto whitespace-pre-line text-center"
                  style={{
                    fontFamily: "DIN Arabic, sans-serif",
                    fontWeight: 700,
                  }}
                  initial={false}
                  animate={
                    sectionInView["marine"]
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{
                    duration: 0.55,
                    delay: sectionInView["marine"] ? 0.28 : 0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {t.marine.intro.split("\n\n")[1] ?? ""}
                </motion.p>
              </div>
            </div>
          </section>

          {/* Sinan Frontiers Section — same animated bg as Aselsan, content from reference image */}
          <section
            ref={(el) => {
              if (el) sectionRefs.current["frontiers"] = el;
            }}
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
                  style={{
                    width: "100vw",
                    minWidth: "100vw",
                    display: "block",
                  }}
                />
                <img
                  src={aselsanBg}
                  alt=""
                  className="h-full flex-shrink-0 object-cover object-left"
                  style={{
                    width: "100vw",
                    minWidth: "100vw",
                    display: "block",
                  }}
                />
                <img
                  src={aselsanBg}
                  alt=""
                  className="h-full flex-shrink-0 object-cover object-left"
                  style={{
                    width: "100vw",
                    minWidth: "100vw",
                    display: "block",
                  }}
                />
              </div>
            </div>

            {/* Geometric overlay (plexus) */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 1 }}
            >
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
                className="text-white/10 text-left font-bold leading-tight max-w-md"
                style={{
                  fontSize: "clamp(3rem, 5vw, 5rem)",
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

            {/* Transparent orange layer — full section, under text (#f39422) */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 3, backgroundColor: "rgba(243, 148, 34, 0.35)" }}
            />

            {/* الكرة الأرضية — بدون انميشن */}
            <div
              className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{ zIndex: 4 }}
            >
              <img
                src="/earth.png"
                alt=""
                className="absolute w-auto object-contain object-top-right opacity-95"
                style={{
                  height: "110vh",
                  top: "-12%",
                  right: "-9%",
                  maxWidth: "none",
                }}
              />
            </div>

            {/* Centered content: logo, tagline, two paragraphs */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-8 md:px-12 overflow-y-auto"
              style={{ zIndex: 10 }}
            >
              <div className="flex flex-col items-center max-w-2xl mx-auto py-6 md:py-8">
                {/* SINAN FRONTIERS logo — انميشن عند كل دخول للقسم */}
                <motion.div
                  className="flex flex-col items-center mb-5 md:mb-6"
                  initial={false}
                  animate={
                    sectionInView["frontiers"]
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 10 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: sectionInView["frontiers"] ? 0 : 0,
                  }}
                >
                  <img
                    src="/simnfor.png"
                    alt="SINAN FRONTIERS"
                    className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain"
                  />
                </motion.div>

                {/* الفقرة الأولى — انميشن عند كل دخول للقسم */}
                <motion.p
                  className="text-white text-base md:text-lg lg:text-xl mb-4 md:mb-6 leading-relaxed font-weight-900"
                  style={{ fontFamily: "DIN Arabic, sans-serif" }}
                  initial={false}
                  animate={
                    sectionInView["frontiers"]
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 24 }
                  }
                  transition={{
                    duration: 0.55,
                    delay: sectionInView["frontiers"] ? 0.25 : 0,
                  }}
                >
                  {t.frontiers.tagline}
                </motion.p>

                {/* الفقرة الثانية — انميشن عند كل دخول للقسم */}
                <motion.p
                  className="text-white text-sm md:text-base lg:text-lg leading-relaxed font-weight-900"
                  style={{ fontFamily: "DIN Arabic, sans-serif" }}
                  initial={false}
                  animate={
                    sectionInView["frontiers"]
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 24 }
                  }
                  transition={{
                    duration: 0.55,
                    delay: sectionInView["frontiers"] ? 0.4 : 0,
                  }}
                >
                  {t.frontiers.intro} {t.frontiers.paragraph2}
                </motion.p>
              </div>
            </div>
          </section>

          {/* SINAN ASELSAN Section — joint venture announcement (layout from reference image) */}
          <section
            ref={(el) => {
              if (el) sectionRefs.current["aselsan"] = el;
            }}
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
                  style={{
                    width: "100vw",
                    minWidth: "100vw",
                    display: "block",
                  }}
                />
                <img
                  src={aselsanBg}
                  alt=""
                  className="h-full flex-shrink-0 object-cover object-left"
                  style={{
                    width: "100vw",
                    minWidth: "100vw",
                    display: "block",
                  }}
                />
                <img
                  src={aselsanBg}
                  alt=""
                  className="h-full flex-shrink-0 object-cover object-left"
                  style={{
                    width: "100vw",
                    minWidth: "100vw",
                    display: "block",
                  }}
                />
              </div>
            </div>

            {/* Plexus-style overlay: geometric polygons + dots */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 1 }}
            >
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
                {/* Logo أسيلسان — animation on every section entry */}
                <motion.div
                  className="flex flex-col items-center mb-5 md:mb-7"
                  initial={false}
                  animate={
                    sectionInView["aselsan"]
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 10 }
                  }
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="/logo-assislian.png"
                    alt="Sinan Aselsan"
                    className="h-24 sm:h-28 md:h-36 lg:h-44 xl:h-52 w-auto object-contain"
                  />
                </motion.div>

                {/* "has formed a strategic joint venture with" — نفس اللون والستايل كباقي الأقسام */}
                <p
                  className="text-white text-base md:text-lg lg:text-xl mb-3 md:mb-5 leading-relaxed"
                  style={{
                    fontFamily: "DIN Arabic, sans-serif",
                    fontWeight: 500,
                  }}
                >
                  {t.aselsan.jointVentureLine}
                </p>

                {/* عنوان أسيلسان — صورة، animation on every section entry */}
                <motion.div
                  className="mb-5 md:mb-7"
                  initial={false}
                  animate={
                    sectionInView["aselsan"]
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.98 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: sectionInView["aselsan"] ? 0.1 : 0,
                  }}
                >
                  <img
                    src="/title-assislian.png"
                    alt="Sinan Aselsan"
                    className="h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 w-auto object-contain"
                  />
                </motion.div>

                {/* "to establish a leading defense and advanced technology company in the Sultanate of Oman" — نفس اللون والستايل كباقي الأقسام */}
                <p
                  className="text-white text-base md:text-lg lg:text-xl leading-relaxed"
                  style={{
                    fontFamily: "DIN Arabic, sans-serif",
                    fontWeight: 500,
                  }}
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

          {/* Our Achievements Section — معطّل مؤقتاً */}
          {false && (
            <section
              id="achievements"
              className="h-[calc(100vh-50px)] snap-start snap-always flex-shrink-0 overflow-hidden bg-[#F5F3EE] relative"
            >
              <AchievementsPage />
            </section>
          )}

          {/* Contact Section - Before Footer */}
          <section
            id="contact"
            className="h-[calc(100vh-50px)] snap-start snap-always flex-shrink-0 overflow-hidden relative"
          >
            <ContactPage />
          </section>

          {/* Footer */}
          <footer className="h-[calc(100vh-50px)] snap-start snap-always flex-shrink-0 overflow-hidden relative bg-gray-900 flex flex-col justify-end">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={footerBg}
                alt=""
                className="w-full h-full object-cover opacity-30"
              />
            </div>

            {/* Footer Content — كتلة واحدة أسفل القسم: روابط ثم كوبي رايت */}
            <div className="relative z-10 flex flex-col justify-end px-4 md:px-8 lg:px-20 pb-2">
              <div className="max-w-7xl mx-auto w-full">
                {/* Footer Links Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10 lg:gap-12 mb-6 md:mb-8">
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
                          href="#vision-mission"
                          className="text-white/70 text-xs hover:text-white transition-colors"
                          style={{ fontWeight: 300 }}
                        >
                          {t.nav.visionMission}
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
                    </ul>
                  </div>
                  <div>
                    <h3
                      className="text-white text-sm mb-6"
                      style={{ fontWeight: 600 }}
                    >
                      {t.contact.emailUs}
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="mailto:info@sinan.om"
                          className="text-white/70 text-xs hover:text-white transition-colors"
                          style={{ fontWeight: 300 }}
                        >
                          info@sinan.om
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:sales@sinan.om"
                          className="text-white/70 text-xs hover:text-white transition-colors"
                          style={{ fontWeight: 300 }}
                        >
                          sales@sinan.om
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Social Icons — LinkedIn first, then YouTube */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <a
                  href="https://linkedin.com/company/sinan-advanced-industries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} strokeWidth={1.5} />
                </a>
                <a
                  href="https://www.youtube.com/@SinanAdvancedIndustries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                  aria-label="YouTube"
                >
                  <Youtube size={24} strokeWidth={1.5} />
                </a>
              </div>
              <div className="pt-6 md:pt-8 border-t border-white/10 pb-3 md:pb-4">
                <p
                  className="text-white/60 text-xs text-center"
                  style={{ fontWeight: 300 }}
                >
                  {t.footer.copyright}
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
