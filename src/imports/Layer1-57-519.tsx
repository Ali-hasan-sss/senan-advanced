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

function Group2({
  hideGrayRect,
  hoveredId = null,
  setHoveredId,
  onTriangleClick,
  onTriangleHoverChange,
}: Group2Props) {
  const isHoverable = typeof setHoveredId === "function";
  const isClickable = typeof onTriangleClick === "function";
  const interactiveClass =
    isHoverable || isClickable
      ? "cursor-none transition-[filter,opacity] duration-300"
      : "";

  // تحويل points المضلع إلى path d (لحد الثعبان المتحرك)
  const pointsToPathD = (points: string) => {
    const pairs = points.trim().split(/\s+/);
    if (pairs.length < 6) return "";
    let d = `M ${pairs[0]} ${pairs[1]}`;
    for (let i = 2; i < pairs.length; i += 2) {
      if (pairs[i] !== undefined && pairs[i + 1] !== undefined)
        d += ` L ${pairs[i]} ${pairs[i + 1]}`;
    }
    return d + " Z";
  };

  // مضلعات Assxet.svg — مثلث واحد من كل لون (viewBox 0 0 7872 2368)
  // id:1 أزرق | id:2 بنفسجي | id:3 برتقالي | id:4 أسود
  const assxetPolygons: { id: number; color: string; points: string }[] = [
    {
      id: 1,
      color: "#009fe3",
      points:
        "2911.96 420.65 2727.7 227.05 1997.76 491.11 2001.28 499.48 2911.96 420.65",
    },
    {
      id: 2,
      color: "#312783",
      // مثلث بنفسجي آخر من Assxet.svg (منطقة وسط-يمين) — منطبق على الصورة الأصلية
      points: "4728.47 882.6 4501.24 1300.07 4284.58 1101.9 4728.47 882.6",
    },
    {
      id: 3,
      color: "#f39422",
      points:
        "5760.31 914.31 6580.65 614.42 6609.71 609.13 6609.71 1138.89 5760.31 914.31",
    },
    {
      id: 4,
      color: "#000002",
      points: "2001.28 499.48 3328.76 378.6 2944.99 898.45 2001.28 499.48",
    },
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
          const filter = isHovered
            ? poly.id === 4
              ? "drop-shadow(0 0 12px rgba(255,255,255,0.35)) drop-shadow(0 0 24px rgba(255,255,255,0.2))"
              : `drop-shadow(0 0 12px ${poly.color}) drop-shadow(0 0 24px ${poly.color})`
            : undefined;
          // لون حد الثعبان = لون الشادو مع شفافية خفيفة
          const snakeStrokeColor =
            poly.id === 4
              ? "rgba(255,255,255,0.55)"
              : poly.id === 1
                ? "rgba(0,159,227,0.6)"
                : poly.id === 2
                  ? "rgba(49,39,131,0.6)"
                  : "rgba(243,148,34,0.6)";
          return (
            <g
              key={i}
              onMouseEnter={
                isHoverable
                  ? (e) => {
                      setHoveredId!(poly.id);
                      onTriangleHoverChange?.(poly.id, e);
                    }
                  : undefined
              }
              onMouseLeave={
                isHoverable
                  ? (e) => {
                      setHoveredId!(null);
                      onTriangleHoverChange?.(null);
                    }
                  : undefined
              }
              onClick={
                isClickable ? () => onTriangleClick!(poly.id) : undefined
              }
            >
              <polygon
                points={poly.points}
                fill={poly.color}
                opacity={opacity}
                style={{ filter }}
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
              {/* حد ثعبان متحرك — أقل سمكاً، شفافية خفيفة، ظل خفيف */}
              <path
                d={pointsToPathD(poly.points)}
                fill="none"
                stroke={snakeStrokeColor}
                strokeWidth="22"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength="100"
                strokeDasharray="18 82"
                pointerEvents="none"
                style={{
                  filter:
                    poly.id === 4
                      ? "drop-shadow(0 0 3px rgba(255,255,255,0.35))"
                      : `drop-shadow(0 0 3px ${poly.color}40)`,
                }}
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="100"
                  dur="2.2s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
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

export default function Layer({
  hideGrayRect,
  trianglesOnly,
  onTriangleClick,
  onTriangleHoverChange,
}: LayerProps = {}) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div
      className="relative size-full min-w-full min-h-full"
      data-name="Layer_1"
    >
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
