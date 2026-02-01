import { motion } from "motion/react";
import { useState } from "react";
import { Settings, TrendingUp, Brain } from "lucide-react";
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
      className="relative p-4 md:p-6 lg:p-8 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col items-end text-end"
      style={{
        border: isHovered
          ? "1px solid rgba(200, 200, 200, 0.8)"
          : "1px solid transparent",
        backgroundColor: isHovered ? "rgba(60, 60, 70, 0.5)" : "transparent",
        backdropFilter: isHovered ? "blur(12px)" : "none",
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="text-white">
        <div className="mb-4 md:mb-6 flex justify-end rtl:flex-row-reverse">
          <Icon className="w-12 h-12 md:w-14 md:h-14 stroke-[1.5] text-white" />
        </div>
        <h3
          className="font-bold text-base md:text-lg mb-2"
          style={{ fontFamily: "DIN Arabic, sans-serif" }}
        >
          {title}
        </h3>
        <p
          className="text-sm md:text-base leading-relaxed text-white/90"
          style={{ fontFamily: "DIN Arabic, sans-serif" }}
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
    <div className="w-full h-full min-h-[calc(100vh-50px)] flex flex-col overflow-hidden relative">
      {/* Background - keep current */}
      <img
        src="/ourvalue.jpeg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ zIndex: 0 }}
      />
      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 px-4 md:px-8 lg:px-16 py-8 md:py-12">
        {/* Centered title and subtitle */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className="text-white font-bold text-xl md:text-2xl lg:text-3xl mb-2"
            style={{ fontFamily: "DIN Arabic, sans-serif" }}
          >
            {t.values.title}
          </h1>
        </motion.div>
        {/* Three columns */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 items-stretch">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              delay={0.15 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
