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
};

function Group2({ hideGrayRect, hoveredId = null, setHoveredId, onTriangleClick }: Group2Props) {
  const isHoverable = typeof setHoveredId === "function";
  const isClickable = typeof onTriangleClick === "function";
  const interactiveClass =
    isHoverable || isClickable ? "cursor-pointer transition-[filter,opacity] duration-300" : "";
  const triangleProps = (id: number) => ({
    ...(isHoverable
      ? {
          onMouseEnter: () => setHoveredId!(id),
          onMouseLeave: () => setHoveredId!(null),
        }
      : {}),
    ...(isClickable ? { onClick: () => onTriangleClick!(id) } : {}),
  });

  // أربعة مثلثات أسفل الشاشة — أضلاع بزاوية 45° لمطابقة شبكة low-poly في الخلفية
  // الشكل: قاعدة أفقية أسفل، ضلعان قطريان 45° (0,100→50,50 و 50,50→100,100)
  const lowPolyPoints = "0,100 50,50 100,100";
  const bottomTriangles = [
    {
      id: 1,
      color: "#00ADEE",
      inset: "inset-[58%_72%_0%_4%]",
      viewBox: "0 0 100 100",
      points: lowPolyPoints,
    },
    {
      id: 2,
      color: "#9333ea",
      inset: "inset-[58%_48%_0%_28%]",
      viewBox: "0 0 100 100",
      points: lowPolyPoints,
    },
    {
      id: 3,
      color: "#f97316",
      inset: "inset-[58%_24%_0%_52%]",
      viewBox: "0 0 100 100",
      points: lowPolyPoints,
    },
    {
      id: 4,
      color: "#0a0a0a",
      inset: "inset-[58%_0%_0%_76%]",
      viewBox: "0 0 100 100",
      points: lowPolyPoints,
    },
  ] as const;

  return (
    <div
      className="absolute contents inset-[47.07%_0_0_0]"
      data-name="Group"
    >
      {!hideGrayRect && <ClipPathGroup />}
      {bottomTriangles.map(({ id, color, inset, viewBox, points }) => {
        const isBlueTriangle = id === 1;
        const content = (
          <div
            className={`absolute ${inset} ${interactiveClass}`.trim()}
            data-name="Vector"
            {...triangleProps(id)}
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox={viewBox}
            >
              <polygon
                points={points}
                fill={color}
                opacity={hoveredId === id ? 1 : id === 4 ? 0.7 : 0.5}
                style={
                  hoveredId === id
                    ? {
                        filter:
                          id === 4
                            ? "drop-shadow(0 0 12px rgba(255,255,255,0.35)) drop-shadow(0 0 24px rgba(255,255,255,0.2))"
                            : `drop-shadow(0 0 12px ${color}) drop-shadow(0 0 24px ${color})`,
                      }
                    : undefined
                }
              >
                {hoveredId !== id && (
                  <animate
                    attributeName="opacity"
                    values={id === 4 ? "0.7;0.95;0.7" : "0.5;0.85;0.5"}
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                )}
              </polygon>
            </svg>
          </div>
        );
        if (isBlueTriangle) {
          return <React.Fragment key={id}>{content}</React.Fragment>;
        }
        return <React.Fragment key={id}>{content}</React.Fragment>;
      })}
    </div>
  );
}

type LayerProps = {
  hideGrayRect?: boolean;
  trianglesOnly?: boolean;
  onTriangleClick?: (id: number) => void;
  onTriangleHoverChange?: (id: number | null) => void;
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

  React.useEffect(() => {
    onTriangleHoverChange?.(hoveredId);
  }, [hoveredId, onTriangleHoverChange]);

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
      />
    </div>
  );
}
