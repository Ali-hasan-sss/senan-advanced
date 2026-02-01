import React, { useState } from "react";
import svgPaths from "./svg-gb3clc6l4h";
import imgRectangle1 from "@/assets/6361bdb9bfba5f30f5c0c8a84044844a6e47b954.png";
import { imgRectangle } from "./svg-k0tkk";

function Group() {
  return (
    <div
      className="absolute contents inset-[70.02%_43.16%_23.14%_42.97%]"
      data-name="Group"
    >
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal inset-[72.81%_48.95%_25.96%_45.12%] leading-[normal] not-italic text-[12px] text-white">
        Explor our Solutions
      </p>
      <div
        className="absolute inset-[70.02%_43.16%_23.14%_42.97%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-1.19%_-0.38%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 268.66 85.85"
          >
            <path
              d={svgPaths.p2e229280}
              id="Vector"
              stroke="white"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div
      className="absolute contents inset-[53.65%_0.05%_0_1.65%]"
      data-name="Group"
    >
      <div className="absolute flex inset-[53.65%_0.05%_0_1.65%] items-center justify-center">
        <div className="flex-none h-[568.32px] min-h-[40vh] w-full max-w-[1889.28px] rotate-[180deg] shrink-0">
          <div
            className="relative size-full overflow-hidden"
            data-name="Rectangle"
          >
            <div className="absolute inset-0 pointer-events-none">
              <img
                alt=""
                className="absolute left-0 top-0 h-full w-auto min-w-full object-cover object-left"
                src={imgRectangle1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div
      className="absolute contents inset-[47.07%_0_11.93%_0.01%]"
      data-name="Clip path group"
    >
      <Group1 />
    </div>
  );
}

type Group2Props = {
  hideGrayRect?: boolean;
  hoveredId?: number | null;
  setHoveredId?: (id: number | null) => void;
  onTriangleClick?: (id: number) => void;
  onTriangleHoverChange?: (id: number | null, e?: React.MouseEvent) => void;
};

function Group2({ hideGrayRect, hoveredId = null, setHoveredId, onTriangleClick, onTriangleHoverChange }: Group2Props) {
  const isHoverable = typeof setHoveredId === "function";
  const isClickable = typeof onTriangleClick === "function";
  const interactiveClass =
    isHoverable || isClickable ? "cursor-none transition-[filter,opacity] duration-300" : "";

  // مضلعات Assxet.svg الأصلية — إحداثياتها كما في الملف (viewBox 0 0 7872 2368)
  // cls-4=أزرق(id:1) | cls-2=بنفسجي(id:2) | cls-3=برتقالي(id:3) | cls-1=أسود(id:4)
  const assxetPolygons: { id: number; color: string; points: string }[] = [
    { id: 1, color: "#009fe3", points: "2911.96 420.65 2727.7 227.05 1997.76 491.11 2001.28 499.48 2911.96 420.65" },
    { id: 1, color: "#009fe3", points: "2224.99 1438.78 2070.42 1672.62 1967.37 1601.28 2224.99 1438.78" },
    { id: 1, color: "#009fe3", points: "3378.31 1347.63 3136.54 1003.48 3219.77 1347.63 3378.31 1347.63" },
    { id: 1, color: "#009fe3", points: "5510.56 2064.98 5469.66 1811.33 5692.87 1981.75 5510.56 2064.98" },
    { id: 2, color: "#312783", points: "5813.15 1543.15 5300.56 1263.08 5126.18 1220.8 5511.94 1448.03 5813.15 1543.15" },
    { id: 2, color: "#312783", points: "4153.85 523.26 3419.32 676.51 3328.76 378.6 4168.98 518.31 4153.85 523.26" },
    { id: 2, color: "#312783", points: "4260.8 1514.08 4200.03 1631.66 4069.24 1564.29 4260.8 1514.08" },
    { id: 2, color: "#312783", points: "509.54 1143.52 280.99 866.75 364.88 1157.39 509.54 1143.52" },
    { id: 2, color: "#312783", points: "4728.47 882.6 4501.24 1300.07 4284.58 1101.9 4728.47 882.6" },
    { id: 3, color: "#f39422", points: "5760.31 914.31 6580.65 614.42 6609.71 609.13 6609.71 1138.89 5760.31 914.31" },
    { id: 3, color: "#f39422", points: "1506.37 1146.82 1453.53 1469.17 306.81 428.14 1506.37 1146.82" },
    { id: 3, color: "#f39422", points: "5435.26 0 5272.76 483.63 5633.42 297.35 5435.26 0" },
    { id: 3, color: "#f39422", points: "2355.78 1220.8 1967.37 911.66 2395.41 1381.97 2355.78 1220.8" },
    { id: 4, color: "#000002", points: "2001.28 499.48 3328.76 378.6 2944.99 898.45 2001.28 499.48" },
  ];

  return (
    <div
      className="absolute inset-0 w-full h-full"
      data-name="Group"
      style={{ transform: "scaleY(-1)" }}
    >
      {!hideGrayRect && <ClipPathGroup />}
      {/* SVG واحد بنفس viewBox ومواضع Assxet.svg — المثلثات الملونة في أماكنها الأصلية */}
      <svg
        className={`block w-full h-full ${interactiveClass}`.trim()}
        viewBox="0 0 7872 2368"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {assxetPolygons.map((poly, i) => {
          const isHovered = hoveredId === poly.id;
          const opacity = isHovered ? 1 : poly.id === 4 ? 0.7 : 0.5;
          const filter =
            isHovered
              ? poly.id === 4
                ? "drop-shadow(0 0 12px rgba(255,255,255,0.35)) drop-shadow(0 0 24px rgba(255,255,255,0.2))"
                : `drop-shadow(0 0 12px ${poly.color}) drop-shadow(0 0 24px ${poly.color})`
              : undefined;
          return (
            <polygon
              key={i}
              points={poly.points}
              fill={poly.color}
              opacity={opacity}
              style={{ filter }}
              onMouseEnter={isHoverable ? (e) => { setHoveredId!(poly.id); onTriangleHoverChange?.(poly.id, e); } : undefined}
              onMouseLeave={isHoverable ? (e) => { setHoveredId!(null); onTriangleHoverChange?.(null); } : undefined}
              onClick={isClickable ? () => onTriangleClick!(poly.id) : undefined}
            >
              {!isHovered && (
                <animate
                  attributeName="opacity"
                  values={poly.id === 4 ? "0.7;0.95;0.7" : "0.5;0.85;0.5"}
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              )}
            </polygon>
          );
        })}
      </svg>
    </div>
  );
}

type LayerProps = {
  hideGrayRect?: boolean;
  trianglesOnly?: boolean;
  onTriangleClick?: (id: number) => void;
  onTriangleHoverChange?: (id: number | null, e?: React.MouseEvent) => void;
};

/** ربط المثلثات الأربعة (1–4: أزرق→Dynamics، بنفسجي→Marine، برتقالي→Frontiers، أسود→Aselsan) بأقسام الصفحة للانتقال عند النقر */
export const TRIANGLE_TO_SECTION: Record<number, string> = {
  1: "sectors", // المثلث الأزرق → قسم داينمك (Sinan Dynamics)
  2: "marine", // المثلث البنفسجي → قسم مارين (Sinan Marine)
  3: "frontiers", // المثلث البرتقالي → قسم فرونتيرس (Sinan Frontiers)
  4: "aselsan", // المثلث الأسود → قسم أسيلسان (Sinan Aselsan)
};

export default function Layer({ hideGrayRect, trianglesOnly, onTriangleClick, onTriangleHoverChange }: LayerProps = {}) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="relative size-full min-w-full min-h-full" data-name="Layer_1">
      {!trianglesOnly && (
        <div className="absolute inset-0" data-name="Vector">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1919.75 644"
          >
            <path d="M1919.75 0H0V644H1919.75V0Z" fill="#08080A" id="Vector" />
          </svg>
        </div>
      )}
      <Group2
        hideGrayRect={hideGrayRect}
        hoveredId={hoveredId}
        setHoveredId={trianglesOnly ? setHoveredId : undefined}
        onTriangleClick={trianglesOnly ? onTriangleClick : undefined}
        onTriangleHoverChange={onTriangleHoverChange}
      />
    </div>
  );
}
