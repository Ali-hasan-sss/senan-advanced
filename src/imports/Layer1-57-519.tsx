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

function Group2({ hideGrayRect }: { hideGrayRect?: boolean }) {
  return (
    <div
      className="absolute contents inset-[47.07%_0_11.93%_0.01%]"
      data-name="Group"
    >
      {!hideGrayRect && <ClipPathGroup />}
      <div
        className="absolute inset-[70.51%_6.45%_12.06%_80.85%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 244 213.76"
        >
          <path d={svgPaths.p2a848180} fill="#2E3191" opacity="0.4">
            <animate
              attributeName="opacity"
              values="0.4;0.8;0.4"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
      <div
        className="absolute inset-[77.21%_73.31%_12.17%_15.97%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 206 130.22"
        >
          <path d={svgPaths.p2b208600} fill="#808B42" opacity="0.4">
            <animate
              attributeName="opacity"
              values="0.4;0.9;0.4"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
      <div
        className="absolute inset-[62.1%_38.4%_29.41%_58.48%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 60 104.16"
        >
          <path d={svgPaths.pca4b00} fill="#00ADEE" opacity="0.4">
            <animate
              attributeName="opacity"
              values="0.4;0.85;0.4"
              dur="2.8s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
      {/* Additional pulsing triangles */}
      <div className="absolute inset-[65%_60%_20%_30%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 100 90"
        >
          <polygon points="50,8 95,82 5,82" fill="#3b82f6" opacity="0.3">
            <animate
              attributeName="opacity"
              values="0.3;0.8;0.3"
              dur="3.5s"
              repeatCount="indefinite"
            />
          </polygon>
        </svg>
      </div>
      <div className="absolute inset-[68%_10%_22%_70%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 150 120"
        >
          <polygon points="75,10 140,110 10,110" fill="#9333ea" opacity="0.3">
            <animate
              attributeName="opacity"
              values="0.2;0.7;0.2"
              dur="3.2s"
              repeatCount="indefinite"
            />
          </polygon>
        </svg>
      </div>
      <div className="absolute inset-[74%_15%_12%_75%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 120 140"
        >
          <polygon points="60,5 115,135 5,135" fill="#f97316" opacity="0.3">
            <animate
              attributeName="opacity"
              values="0.25;0.75;0.25"
              dur="2.7s"
              repeatCount="indefinite"
            />
          </polygon>
        </svg>
      </div>
      <div className="absolute inset-[75%_55%_12%_35%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 80 100"
        >
          <polygon points="40,5 75,95 5,95" fill="#a855f7" opacity="0.25">
            <animate
              attributeName="opacity"
              values="0.2;0.65;0.2"
              dur="2.9s"
              repeatCount="indefinite"
            />
          </polygon>
        </svg>
      </div>
    </div>
  );
}

type LayerProps = { hideGrayRect?: boolean };

export default function Layer({ hideGrayRect }: LayerProps = {}) {
  return (
    <div className="relative size-full min-w-full min-h-full" data-name="Layer_1">
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
      {/* Group (Explore our Solutions button) removed per request — logo only in hero */}
      <Group2 hideGrayRect={hideGrayRect} />
    </div>
  );
}
