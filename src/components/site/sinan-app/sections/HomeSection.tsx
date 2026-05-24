"use client";

import { type RefObject } from "react";
import { motion } from "motion/react";
import LayerHome, { TRIANGLE_TO_SECTION } from "@/legacy-imports/Layer1-57-519";
import {
  dynamicsMarineLogoTile,
  heroDiamondLogoInner,
  sinanDynamicsLogoPng,
  sinanMarineLogoPng,
  triangleCenters,
  SINAN_SITE_PX,
} from "../constants";
import type { AssignSectionRef, SectionRefs } from "../types";

export function HomeSection({
  assignSectionRef,
  heroSvgRef,
  heroHoveredTriangleId,
  setHeroHoveredTriangleId,
  sectionRefs,
  sectionInViewHome,
  locale,
}: {
  assignSectionRef: AssignSectionRef;
  heroSvgRef: RefObject<HTMLDivElement | null>;
  heroHoveredTriangleId: number | null;
  setHeroHoveredTriangleId: (id: number | null) => void;
  sectionRefs: SectionRefs;
  sectionInViewHome: boolean;
  locale: "en" | "ar";
}) {
  return (
    <section
      ref={assignSectionRef("home")}
      id="home"
      className="h-[calc(100vh-50px)] snap-start snap-always flex-shrink-0 overflow-hidden relative isolate bg-gray-950"
    >
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden
        style={{
          backgroundColor: "#08080A",
          backgroundImage: `url(${"/"}hero-bg.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: "scaleY(-1)",
        }}
      />
      <div
        ref={heroSvgRef}
        className="absolute inset-y-0 left-1/2 w-[180vw] sm:w-[140vw] md:w-[110vw] max-w-none -translate-x-1/2 pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <div
          className="absolute inset-0 w-full h-full min-w-full min-h-full pointer-events-auto"
          onMouseLeave={() => {
            setHeroHoveredTriangleId(null);
          }}
        >
          {typeof LayerHome === "function" ? (
            <LayerHome
              hideGrayRect
              trianglesOnly
              onTriangleHoverChange={(id) => {
                setHeroHoveredTriangleId(id);
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

      {heroHoveredTriangleId !== null && (() => {
        const svgEl = heroSvgRef.current;
        if (!svgEl) return null;
        const rect = svgEl.getBoundingClientRect();
        const viewBoxWidth = 7872;
        const viewBoxHeight = 2368;
        const scaleX = rect.width / viewBoxWidth;
        const scaleY = rect.height / viewBoxHeight;
        const scale = Math.max(scaleX, scaleY);
        const center = triangleCenters[heroHoveredTriangleId];
        const offsetX = (rect.width - viewBoxWidth * scale) / 2;
        const offsetY = (rect.height - viewBoxHeight * scale) / 2;
        const screenX = rect.left + offsetX + center.x * scale;
        const screenY =
          rect.top + rect.height - offsetY - center.y * scale;
        return (
          <div
            className="fixed flex flex-col items-center justify-center pointer-events-none z-[20]"
            style={{
              left: screenX,
              top: screenY,
              transform: "translate(-50%, -50%)",
            }}
          >
            {heroHoveredTriangleId === 1 && (
              <div className={dynamicsMarineLogoTile}>
                <img
                  src={sinanDynamicsLogoPng}
                  alt="Sinan Dynamics"
                  className="drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)]"
                />
              </div>
            )}
            {heroHoveredTriangleId === 2 && (
              <div className={dynamicsMarineLogoTile}>
                <img
                  src={sinanMarineLogoPng}
                  alt="Sinan Marine"
                  className="drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)]"
                />
              </div>
            )}
            {heroHoveredTriangleId === 3 && (
              <img
                src={`${"/"}simnfor.png`}
                alt="SINAN FRONTIERS"
                className="h-16 md:h-20 w-auto object-contain drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
              />
            )}
            {heroHoveredTriangleId === 4 && (
              <div className="flex flex-col items-center ">
                <img
                  src={`${"/"}logo-assislian.png`}
                  alt="Sinan Aselsan"
                  className="h-14 sm:h-16 md:h-20 w-auto max-w-[min(28vw,260px)] object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                />
                <img
                  src={`${"/"}title-assislian.png`}
                  alt="Sinan Aselsan Title"
                  className="h-4 sm:h-5 md:h-6 w-auto max-w-[min(26vw,260px)] object-contain drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                />
              </div>
            )}
          </div>
        );
      })()}

      <div
        className={`absolute inset-0 flex flex-col items-center justify-center ${SINAN_SITE_PX} min-h-0 pointer-events-none`}
        style={{ zIndex: 10 }}
      >
        <motion.div
          initial={false}
          className="pointer-events-auto flex flex-col items-center justify-center"
          animate={
            sectionInViewHome
              ? {
                  opacity: 1,
                  scale: [0.92, 1, 1.07, 1, 1.04, 1],
                }
              : { opacity: 0, scale: 0.92 }
          }
          transition={{
            opacity: { duration: 0.5 },
            scale: sectionInViewHome
              ? {
                  duration: 1.4,
                  times: [0, 0.35, 0.5, 0.65, 0.82, 1],
                  ease: "easeOut",
                }
              : { duration: 0.3 },
          }}
        >
          <div
            className="flex flex-col items-center justify-center"
            aria-hidden
          >
            <div className="flex flex-col items-center justify-center">
              <img
                src={`${"/"}logo/logo_${locale === "ar" ? "arabice" : "english"}_ondark.png`}
                alt="Sinan Advanced Industries"
                className="h-40 sm:h-52 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] 3xl:h-[34rem] 4xl:h-[36rem] w-auto max-h-[85dvh] select-none object-contain"
                draggable={false}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div
        className="absolute inset-x-0 flex items-center justify-center gap-3 md:hidden"
        style={{
          zIndex: 12,
          bottom: "calc(env(safe-area-inset-bottom, 0px) + 4rem)",
        }}
      >
        <button
          type="button"
          onClick={() => {
            const el =
              sectionRefs.current["sectors"] ??
              document.getElementById("sectors");
            el?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="relative w-14 h-14 flex items-center justify-center"
          aria-label="Go to Sinan Dynamics"
        >
          <div
            className="absolute inset-0 rotate-45 bg-[#009fe3] shadow-[0_0_18px_rgba(0,159,227,0.7)] animate-pulse"
            style={{ animationDuration: "2.6s" }}
          />
          <div className={heroDiamondLogoInner}>
            <img src={sinanDynamicsLogoPng} alt="" />
          </div>
        </button>

        <button
          type="button"
          onClick={() => {
            const el =
              sectionRefs.current["marine"] ??
              document.getElementById("marine");
            el?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="relative w-14 h-14 flex items-center justify-center"
          aria-label="Go to Sinan Marine"
        >
          <div
            className="absolute inset-0 rotate-45 bg-[#312783] shadow-[0_0_18px_rgba(49,39,131,0.7)] animate-pulse"
            style={{ animationDuration: "2.9s" }}
          />
          <div className={heroDiamondLogoInner}>
            <img src={sinanMarineLogoPng} alt="" />
          </div>
        </button>

        <button
          type="button"
          onClick={() => {
            const el =
              sectionRefs.current["frontiers"] ??
              document.getElementById("frontiers");
            el?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="relative w-14 h-14 flex items-center justify-center"
          aria-label="Go to Sinan Frontiers"
        >
          <div
            className="absolute inset-0 rotate-45 bg-[#f39422] shadow-[0_0_18px_rgba(243,148,34,0.8)] animate-pulse"
            style={{ animationDuration: "3.2s" }}
          />
          <div className="relative z-10 flex items-center justify-center">
            <img
              src={`${"/"}simnfor.png`}
              alt="Sinan Frontiers"
              className="h-6 w-auto object-contain"
            />
          </div>
        </button>

        <button
          type="button"
          onClick={() => {
            const el =
              sectionRefs.current["aselsan"] ??
              document.getElementById("aselsan");
            el?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="relative w-14 h-14 flex items-center justify-center"
          aria-label="Go to Sinan Aselsan"
        >
          <div
            className="absolute inset-0 rotate-45 bg-[#000002] shadow-[0_0_18px_rgba(0,0,0,0.9)] animate-pulse"
            style={{ animationDuration: "3.5s" }}
          />
          <div className="relative z-10 flex items-center justify-center">
            <img
              src="/title-assislian.png"
              alt="Sinan Aselsan"
              className="h-6 w-auto object-contain"
            />
          </div>
        </button>
      </div>
    </section>
  );
}
