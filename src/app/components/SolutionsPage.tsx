import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/app/i18n/LanguageContext";
import solutionsBg from "@/assets/3004dc5a5d12ee327e0bb3709f487de52a320930.png";
import circleGraphic from "@/assets/0f0bd3a35904deda296fc4032458194e027533ef.png";
import connectingLines from "@/assets/f4a4b0ebdb8ac529a76b1ee55f33b820ca3ff3ba.png";
import cyberLogo from "@/assets/6dcb2184ab0b8f46c9fb262f728e15f319f393da.png";
import maritimeLogo from "@/assets/c1ac93a6c938a74dea95a6ec8d8ef43174627311.png";
import landLogo from "@/assets/e148e8f3ba9387c1003e8bf5da1696c2cf8435d8.png";
import airLogo from "@/assets/cd1779045309571142b8f0a31bf6fab645307577.png";
import spaceLogo from "@/assets/9dd7749060815e64b5bacb0298a6f6e916d93f98.png";
import CommunicationIcon from "@/imports/IsolationMode-203-171";
import TrainingIcon from "@/imports/IsolationMode-203-189";
import DefenseIcon from "@/imports/IsolationMode-203-207";
import centerLogo from "@/assets/64074ce9782b043bd0cc2630c3456e4497e318bc.png";

const CANVAS_W = 1300;
const CANVAS_H = 900;

export default function SolutionsPage() {
  const { t } = useLanguage();
  const [defenseHovered, setDefenseHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [fitScale, setFitScale] = useState(1);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const h = window.innerHeight - 50;
      const s = Math.min(1, w / CANVAS_W, h / CANVAS_H);
      setFitScale(Math.max(0.3, s));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return (
    <div
      className="w-full h-full min-h-0 relative overflow-hidden flex flex-col"
      style={{
        cursor:
          'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2732%27 height=%2732%27 viewBox=%270 0 32 32%27%3E%3Ccircle cx=%2716%27 cy=%2716%27 r=%278%27 fill=%27black%27/%3E%3C/svg%3E") 16 16, auto',
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <img src={solutionsBg} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Desktop: لوحة ثابتة بأبعاد دقيقة — نفس التموضع على جميع الشاشات الكبيرة */}
      <div
        ref={sectionRef}
        className="hidden md:flex absolute inset-0 items-center justify-center overflow-hidden"
        style={{ zIndex: 5 }}
      >
        <div
          className="relative flex-shrink-0 overflow-hidden"
          style={{
            width: CANVAS_W,
            height: CANVAS_H,
            transform: `scale(${fitScale})`,
            transformOrigin: "center center",
          }}
        >
          {/* خلفية اللوحة */}
          <div className="absolute inset-0">
            <img src={solutionsBg} alt="" className="w-full h-full object-cover" />
          </div>
          {/* Rotating Circle 1 - Clockwise — موضع ثابت بالبكسل */}
          <motion.div
            className="absolute"
            style={{
              left: 640,
              top: 225,
              width: 400,
              height: 400,
              zIndex: 5,
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <img
              src={circleGraphic}
              alt=""
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Rotating Circle 2 - Counter Clockwise - Same Position */}
          <motion.div
            className="absolute"
            style={{
              right: "20%",
              top: "25%",
              width: "400px",
              height: "400px",
              zIndex: 5,
            }}
            animate={{ rotate: -360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <img
              src={circleGraphic}
              alt=""
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Static Logo in Center */}
          <div
            className="absolute"
            style={{
              left: 640,
              top: 225,
              width: 400,
              height: 400,
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={centerLogo}
              alt="Center Logo"
              style={{ width: "220px", height: "220px", objectFit: "contain" }}
            />
          </div>

          {/* Orbiting Circles Container */}
          <div
            className="absolute"
            style={{
              right: "20%",
              top: "25%",
              width: "400px",
              height: "400px",
              zIndex: 15,
            }}
          >
            {/* Space Defense Systems - Top Center */}
            <div
              className="absolute"
              style={{
                left: "50%",
                top: "-180px",
                marginLeft: "-70px",
                width: "140px",
                height: "140px",
              }}
            >
              {/* Rotating Dashed Circle Frame */}
              <motion.svg
                width="140"
                height="140"
                style={{ position: "absolute" }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <circle
                  cx="70"
                  cy="70"
                  r="65"
                  fill="transparent"
                  stroke="#9CA3AF"
                  strokeWidth="3"
                  strokeDasharray="4 4"
                />
              </motion.svg>
              {/* Logo in Center of Space Defense Circle */}
              <div
                style={{
                  position: "absolute",
                  width: "140px",
                  height: "140px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 20,
                }}
              >
                <img
                  src={spaceLogo}
                  alt="Space Defense Logo"
                  style={{
                    width: "280px",
                    height: "280px",
                    objectFit: "contain",
                  }}
                />
              </div>
              {/* Curved Text */}
              <svg
                width="220"
                height="220"
                style={{ position: "absolute", left: "-40px", top: "-40px" }}
              >
                <defs>
                  <path
                    id="circlePath1"
                    d="M 110,110 m -90,0 a 90,90 0 0,1 180,0"
                  />
                </defs>
                <text
                  fill="#000000"
                  fontSize="12"
                  fontFamily="DIN Arabic, sans-serif"
                  fontWeight="bold"
                >
                  <textPath href="#circlePath1" startOffset="18%">
                    Space Defense Systems
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Air Defense Systems - Right */}
            <div
              className="absolute"
              style={{
                left: "calc(50% + 320px)",
                top: "50%",
                marginLeft: "-70px",
                marginTop: "-70px",
                width: "140px",
                height: "140px",
              }}
            >
              {/* Rotating Dashed Circle Frame */}
              <motion.svg
                width="140"
                height="140"
                style={{ position: "absolute" }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 14,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <circle
                  cx="70"
                  cy="70"
                  r="65"
                  fill="transparent"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  strokeDasharray="4 4"
                />
              </motion.svg>
              {/* Logo in Center of Air Defense Circle */}
              <div
                style={{
                  position: "absolute",
                  width: "140px",
                  height: "140px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 20,
                }}
              >
                <img
                  src={airLogo}
                  alt="Air Defense Logo"
                  style={{
                    width: "280px",
                    height: "280px",
                    objectFit: "contain",
                  }}
                />
              </div>
              {/* Curved Text */}
              <svg
                width="220"
                height="220"
                style={{ position: "absolute", left: "-40px", top: "-40px" }}
              >
                <defs>
                  <path
                    id="circlePath2"
                    d="M 110,110 m -90,0 a 90,90 0 0,1 180,0"
                  />
                </defs>
                <text
                  fill="#000000"
                  fontSize="12"
                  fontFamily="DIN Arabic, sans-serif"
                  fontWeight="bold"
                >
                  <textPath href="#circlePath2" startOffset="58%">
                    Air Defense Systems
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Land Defense Systems - Bottom Right */}
            <div
              className="absolute"
              style={{
                left: "calc(50% + 250px)",
                top: "calc(50% + 250px)",
                marginLeft: "-70px",
                marginTop: "-70px",
                width: "140px",
                height: "140px",
              }}
            >
              {/* Rotating Dashed Circle Frame */}
              <motion.svg
                width="140"
                height="140"
                style={{ position: "absolute" }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <circle
                  cx="70"
                  cy="70"
                  r="65"
                  fill="transparent"
                  stroke="#9CA3AF"
                  strokeWidth="3"
                  strokeDasharray="4 4"
                />
              </motion.svg>
              {/* Logo in Center of Land Defense Circle */}
              <div
                style={{
                  position: "absolute",
                  width: "140px",
                  height: "140px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 20,
                }}
              >
                <img
                  src={landLogo}
                  alt="Land Defense Logo"
                  style={{
                    width: "280px",
                    height: "280px",
                    objectFit: "contain",
                  }}
                />
              </div>
              {/* Curved Text */}
              <svg
                width="220"
                height="220"
                style={{ position: "absolute", left: "-40px", top: "-40px" }}
              >
                <defs>
                  <path
                    id="circlePath3"
                    d="M 110,110 m -90,0 a 90,90 0 0,1 180,0"
                  />
                </defs>
                <text
                  fill="#000000"
                  fontSize="12"
                  fontFamily="DIN Arabic, sans-serif"
                  fontWeight="bold"
                >
                  <textPath href="#circlePath3" startOffset="55%">
                    Land Defense Systems
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Maritime Defense Systems - Bottom Left */}
            <div
              className="absolute"
              style={{
                left: "calc(50% - 250px)",
                top: "calc(50% + 250px)",
                marginLeft: "-70px",
                marginTop: "-70px",
                width: "140px",
                height: "140px",
              }}
            >
              {/* Rotating Dashed Circle Frame */}
              <motion.svg
                width="140"
                height="140"
                style={{ position: "absolute" }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <circle
                  cx="70"
                  cy="70"
                  r="65"
                  fill="transparent"
                  stroke="#9333EA"
                  strokeWidth="3"
                  strokeDasharray="4 4"
                />
              </motion.svg>
              {/* Logo in Center of Maritime Defense Circle */}
              <div
                style={{
                  position: "absolute",
                  width: "140px",
                  height: "140px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 20,
                }}
              >
                <img
                  src={maritimeLogo}
                  alt="Maritime Defense Logo"
                  style={{
                    width: "280px",
                    height: "280px",
                    objectFit: "contain",
                  }}
                />
              </div>
              {/* Curved Text */}
              <svg
                width="220"
                height="220"
                style={{ position: "absolute", left: "-40px", top: "-40px" }}
              >
                <defs>
                  <path
                    id="circlePath4"
                    d="M 110,110 m -90,0 a 90,90 0 0,1 180,0"
                  />
                </defs>
                <text
                  fill="#000000"
                  fontSize="12"
                  fontFamily="DIN Arabic, sans-serif"
                  fontWeight="bold"
                >
                  <textPath href="#circlePath4" startOffset="2%">
                    Maritime Defense Systems
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Cyber Defense Systems - Left */}
            <div
              className="absolute"
              style={{
                left: "calc(50% - 320px)",
                top: "50%",
                marginLeft: "-70px",
                marginTop: "-70px",
                width: "140px",
                height: "140px",
              }}
            >
              {/* Rotating Dashed Circle Frame */}
              <motion.svg
                width="140"
                height="140"
                style={{ position: "absolute" }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <circle
                  cx="70"
                  cy="70"
                  r="65"
                  fill="transparent"
                  stroke="#10B981"
                  strokeWidth="3"
                  strokeDasharray="4 4"
                />
              </motion.svg>
              {/* Logo in Center of Cyber Defense Circle */}
              <div
                style={{
                  position: "absolute",
                  width: "140px",
                  height: "140px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 20,
                }}
              >
                <img
                  src={cyberLogo}
                  alt="Cyber Defense Logo"
                  style={{
                    width: "280px",
                    height: "280px",
                    objectFit: "contain",
                  }}
                />
              </div>
              {/* Curved Text */}
              <svg
                width="220"
                height="220"
                style={{ position: "absolute", left: "-40px", top: "-40px" }}
              >
                <defs>
                  <path
                    id="circlePath5"
                    d="M 110,110 m -90,0 a 90,90 0 0,1 180,0"
                  />
                </defs>
                <text
                  fill="#000000"
                  fontSize="12"
                  fontFamily="DIN Arabic, sans-serif"
                  fontWeight="bold"
                >
                  <textPath href="#circlePath5" startOffset="5%">
                    Cyber Defense Systems
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          {/* Connecting Lines — محاذاة طولية: بجانب كلمة Defense — أبعاد ثابتة */}
          <img
            src={connectingLines}
            alt=""
            className="absolute z-[7] transition-opacity duration-300 object-left"
            style={{
              left: 104,
              top: 368,
              width: 536,
              height: "auto",
              opacity: defenseHovered ? 1 : 0,
            }}
          />

          {/* النصوص يسار — أبعاد ومواضع ثابتة بالبكسل */}
          <div
            className="absolute z-20 text-left"
            style={{
              left: 40,
              top: 180,
              width: 260,
              fontFamily: "DIN Arabic, sans-serif",
            }}
          >
            <h2
              className="text-gray-900 font-bold mb-4"
              style={{
                fontSize: 22,
                letterSpacing: "0.5px",
              }}
            >
              {t.solutions.ourSolutions}
            </h2>
            <div
              className="flex flex-col gap-3"
              style={{ fontFamily: "DIN Arabic, sans-serif" }}
            >
              <div className="flex items-center gap-4 py-2">
                <div className="w-12 h-12 xl:w-14 xl:h-14 flex-shrink-0 flex items-center justify-center text-gray-700">
                  <CommunicationIcon />
                </div>
                <div className="text-gray-800 leading-tight">
                  <div className="font-bold text-gray-900" style={{ fontSize: 16 }}>
                    {t.solutions.communication}
                  </div>
                  <div className="text-gray-600 mt-0.5" style={{ fontSize: 14 }}>
                    {t.solutions.communicationSystems}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 py-2">
                <div className="w-12 h-12 xl:w-14 xl:h-14 flex-shrink-0 flex items-center justify-center text-gray-700">
                  <TrainingIcon />
                </div>
                <div className="text-gray-800 leading-tight">
                  <div className="font-bold text-gray-900" style={{ fontSize: 16 }}>
                    {t.solutions.training}
                  </div>
                  <div className="text-gray-600 mt-0.5" style={{ fontSize: 14 }}>
                    {t.solutions.trainingAndServices}
                  </div>
                </div>
              </div>
              <div
                className="flex items-center gap-4 py-2 cursor-default rounded-md transition-all duration-200 hover:bg-gray-100/50 hover:scale-105 origin-left"
                onMouseEnter={() => setDefenseHovered(true)}
              >
                <div className="w-12 h-12 xl:w-14 xl:h-14 flex-shrink-0 flex items-center justify-center text-gray-700">
                  <DefenseIcon />
                </div>
                <div className="text-gray-800 leading-tight">
                  <div className="font-bold text-gray-900" style={{ fontSize: 16 }}>
                    {t.solutions.defense}
                  </div>
                  <div className="text-gray-600 mt-0.5" style={{ fontSize: 14 }}>
                    {t.solutions.defenseSystems}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: الحلول الثلاثة الرئيسية أولاً ثم باقي الحلول */}
      <div className="md:hidden relative z-20 w-full">
        {/* Overlay for readability */}
        <div
          className="absolute inset-0 min-h-full bg-gray-900/70 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="relative flex flex-col items-center w-full px-4 sm:px-6 py-8 sm:py-12"
          style={{ fontFamily: "DIN Arabic, sans-serif" }}
        >
          <h2 className="text-white text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-center">
            {t.solutions.ourSolutions}
          </h2>
          <p className="text-white/80 text-sm sm:text-base mb-6 sm:mb-8 text-center max-w-md">
            Communication · Training · Defense
          </p>
          {/* الحلول الثلاثة الرئيسية — أكبر وأوضح */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 w-full max-w-4xl mx-auto mb-8 sm:mb-10">
            {/* Communication */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.45 }}
              className="flex flex-col items-center text-center gap-3 p-5 sm:p-6 rounded-2xl bg-white/15 backdrop-blur-md border-2 border-white/25 text-white shadow-xl"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 flex items-center justify-center rounded-xl bg-white/20">
                <CommunicationIcon />
              </div>
              <div>
                <div className="font-bold text-base sm:text-lg leading-tight">
                  {t.solutions.communication}
                </div>
                <div className="text-white/90 text-sm leading-snug mt-1">
                  {t.solutions.communicationSystems}
                </div>
              </div>
            </motion.div>
            {/* Training */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="flex flex-col items-center text-center gap-3 p-5 sm:p-6 rounded-2xl bg-white/15 backdrop-blur-md border-2 border-white/25 text-white shadow-xl"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 flex items-center justify-center rounded-xl bg-white/20">
                <TrainingIcon />
              </div>
              <div>
                <div className="font-bold text-base sm:text-lg leading-tight">
                  {t.solutions.training}
                </div>
                <div className="text-white/90 text-sm leading-snug mt-1">
                  {t.solutions.trainingAndServices}
                </div>
              </div>
            </motion.div>
            {/* Defense */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="flex flex-col items-center text-center gap-3 p-5 sm:p-6 rounded-2xl bg-white/15 backdrop-blur-md border-2 border-white/25 text-white shadow-xl"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 flex items-center justify-center rounded-xl bg-white/20">
                <DefenseIcon />
              </div>
              <div>
                <div className="font-bold text-base sm:text-lg leading-tight">
                  {t.solutions.defense}
                </div>
                <div className="text-white/90 text-sm leading-snug mt-1">
                  {t.solutions.defenseSystems}
                </div>
              </div>
            </motion.div>
          </div>
          {/* باقي الحلول (Defense Systems) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 w-full max-w-2xl mx-auto">
            {/* Space Defense */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white shadow-lg"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center rounded-xl bg-white/15 overflow-hidden">
                <img
                  src={spaceLogo}
                  alt=""
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              <div className="flex-1 min-w-0 pt-0.5">
                <div className="font-bold text-sm sm:text-base leading-tight">
                  {t.solutions.spaceDefense}
                </div>
              </div>
            </motion.div>
            {/* Air Defense */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white shadow-lg"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center rounded-xl bg-white/15 overflow-hidden">
                <img
                  src={airLogo}
                  alt=""
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              <div className="flex-1 min-w-0 pt-0.5">
                <div className="font-bold text-sm sm:text-base leading-tight">
                  {t.solutions.airDefense}
                </div>
              </div>
            </motion.div>
            {/* Land Defense */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white shadow-lg"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center rounded-xl bg-white/15 overflow-hidden">
                <img
                  src={landLogo}
                  alt=""
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              <div className="flex-1 min-w-0 pt-0.5">
                <div className="font-bold text-sm sm:text-base leading-tight">
                  {t.solutions.landDefense}
                </div>
              </div>
            </motion.div>
            {/* Maritime Defense */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white shadow-lg"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center rounded-xl bg-white/15 overflow-hidden">
                <img
                  src={maritimeLogo}
                  alt=""
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              <div className="flex-1 min-w-0 pt-0.5">
                <div className="font-bold text-sm sm:text-base leading-tight">
                  {t.solutions.maritimeDefense}
                </div>
              </div>
            </motion.div>
            {/* Cyber Defense */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white shadow-lg sm:col-span-2"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center rounded-xl bg-white/15 overflow-hidden">
                <img
                  src={cyberLogo}
                  alt=""
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              <div className="flex-1 min-w-0 pt-0.5">
                <div className="font-bold text-sm sm:text-base leading-tight">
                  {t.solutions.cyberDefense}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
