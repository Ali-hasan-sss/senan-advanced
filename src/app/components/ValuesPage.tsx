import { motion } from "motion/react";
import { useState } from "react";
import { Settings, TrendingUp, Brain } from "lucide-react";
import valuesBg from "@/assets/86b61a2326c35d2bc165e4ad7fa50b9fd7637a7d.png";
import { useLanguage } from "@/app/i18n/LanguageContext";

interface ValueCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

function ValueCard({ icon: Icon, title, description, delay }: ValueCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative p-4 md:p-6 lg:p-8 rounded-2xl cursor-pointer transition-all duration-300"
      style={{
        border: isHovered
          ? "2px solid rgba(156, 163, 175, 1)"
          : "2px solid transparent",
        backgroundColor: isHovered ? "rgba(156, 163, 175, 0.3)" : "transparent",
        backdropFilter: isHovered ? "blur(4px)" : "none",
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Content */}
      <div className="flex flex-col items-center text-center">
        {/* Icon */}
        <div className="mb-4 md:mb-6">
          <Icon className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-white stroke-[1.5]" />
        </div>

        <h3
          className="text-white mb-3 md:mb-4 text-sm md:text-base lg:text-[16pt]"
          style={{
            fontWeight: 700,
            fontFamily: "DIN Arabic, sans-serif",
          }}
        >
          {title}
        </h3>
        <p
          className="text-white/90 leading-relaxed text-xs md:text-sm lg:text-[14pt]"
          style={{
            fontWeight: 700,
            fontFamily: "DIN Arabic, sans-serif",
          }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ValuesPage() {
  const { t } = useLanguage();
  const values = [
    {
      icon: Settings,
      title: t.values.sustainability,
      description: t.values.sustainabilityDesc,
    },
    {
      icon: TrendingUp,
      title: t.values.economic,
      description: t.values.economicDesc,
    },
    {
      icon: Brain,
      title: t.values.knowledge,
      description: t.values.knowledgeDesc,
    },
  ];

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        <img src={valuesBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gray-900/60" />
      </div>
      <div className="relative h-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-20 z-10 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 md:mb-12 lg:mb-16 text-center"
        >
          <h1
            className="text-white mb-3 md:mb-4 text-lg md:text-xl lg:text-[21pt]"
            style={{
              fontWeight: 700,
              fontFamily: "DIN Arabic, sans-serif",
            }}
          >
            {t.values.title}
          </h1>
          <p
            className="text-white/80 text-sm md:text-base lg:text-[16pt]"
            style={{
              fontWeight: 700,
              fontFamily: "DIN Arabic, sans-serif",
            }}
          >
            {t.values.subtitle}
          </p>
        </motion.div>
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
