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

export default function SolutionsPage() {
  const { t } = useLanguage();
  return (
    <div
      className="w-full min-h-screen h-full relative overflow-hidden flex flex-col"
      style={{
        cursor:
          'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2732%27 height=%2732%27 viewBox=%270 0 32 32%27%3E%3Ccircle cx=%2716%27 cy=%2716%27 r=%278%27 fill=%27black%27/%3E%3C/svg%3E") 16 16, auto',
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <img src={solutionsBg} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Desktop: infographic + left block (hidden on mobile, animations unchanged) */}
      <div className="hidden md:block absolute inset-0" style={{ zIndex: 5 }}>
        {/* Rotating Circle 1 - Clockwise */}
        <motion.div
          className="absolute"
          style={{
            right: "20%",
            top: "25%",
            width: "400px",
            height: "400px",
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
            right: "20%",
            top: "25%",
            width: "400px",
            height: "400px",
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

        <div
          className="absolute left-12 z-20 text-left"
          style={{ top: "195px" }}
        >
          <h2
            className="text-[24px] mb-8"
            style={{
              color: "#A0AEC0",
              fontFamily: "DIN Arabic, sans-serif",
              letterSpacing: "0.5px",
              fontWeight: "bold",
            }}
          >
            {t.solutions.ourSolutions}
          </h2>
          <div
            className="flex flex-col gap-4"
            style={{ fontFamily: "DIN Arabic, sans-serif" }}
          >
            <div className="flex items-center gap-3">
              <div style={{ width: "24px", height: "24px" }}>
                <CommunicationIcon />
              </div>
              <div
                className="text-[12px] leading-tight"
                style={{ color: "#A0AEC0", fontWeight: "bold" }}
              >
                <div>{t.solutions.communication}</div>
                <div>{t.solutions.communicationSystems}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div style={{ width: "24px", height: "24px" }}>
                <TrainingIcon />
              </div>
              <div
                className="text-[12px] leading-tight"
                style={{ color: "#A0AEC0", fontWeight: "bold" }}
              >
                <div>{t.solutions.training}</div>
                <div>{t.solutions.trainingAndServices}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div style={{ width: "24px", height: "24px" }}>
                <DefenseIcon />
              </div>
              <div
                className="text-[12px] leading-tight"
                style={{ color: "#A0AEC0", fontWeight: "bold" }}
              >
                <div>{t.solutions.defense}</div>
                <div>{t.solutions.defenseSystems}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Connecting Lines from Defense Systems to Cyber Defense Circle */}
        <img
          src={connectingLines}
          alt=""
          className="absolute z-10"
          style={{
            left: "70px",
            top: "300px",
            width: "680px",
            height: "auto",
          }}
        />
      </div>

      {/* Mobile: simple list (flex flow, not absolute; desktop layout & animations unchanged) */}
      <div className="md:hidden relative z-20 flex flex-1 flex-col w-full min-h-screen">
        {/* Overlay for readability on mobile */}
        <div className="absolute inset-0 bg-gray-900/60 pointer-events-none" aria-hidden="true" />
        <div
          className="relative flex flex-col items-center justify-center flex-1 w-full px-6 py-10 sm:py-14 overflow-y-auto"
          style={{ fontFamily: "DIN Arabic, sans-serif" }}
        >
          <h2 className="text-white text-xl sm:text-2xl font-bold mb-8 sm:mb-10 text-center">
            {t.solutions.ourSolutions}
          </h2>
          <div className="flex flex-col gap-4 sm:gap-5 w-full max-w-md">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 text-white">
              <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-lg bg-white/10">
                <CommunicationIcon />
              </div>
              <div className="flex-1 min-w-0 pt-0.5">
                <div className="font-bold text-[15px] leading-snug mb-0.5">
                  {t.solutions.communication}
                </div>
                <div className="text-white/80 text-sm leading-snug">
                  {t.solutions.communicationSystems}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 text-white">
              <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-lg bg-white/10">
                <TrainingIcon />
              </div>
              <div className="flex-1 min-w-0 pt-0.5">
                <div className="font-bold text-[15px] leading-snug mb-0.5">
                  {t.solutions.training}
                </div>
                <div className="text-white/80 text-sm leading-snug">
                  {t.solutions.trainingAndServices}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 text-white">
              <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-lg bg-white/10">
                <DefenseIcon />
              </div>
              <div className="flex-1 min-w-0 pt-0.5">
                <div className="font-bold text-[15px] leading-snug mb-0.5">
                  {t.solutions.defense}
                </div>
                <div className="text-white/80 text-sm leading-snug">
                  {t.solutions.defenseSystems}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
