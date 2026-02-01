import { motion } from "motion/react";
import { useState } from "react";
import { Settings, TrendingUp, Brain } from "lucide-react";
import { useLanguage } from "@/app/i18n/LanguageContext";

interface ValueCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
  isInView: boolean;
}

function ValueCard({ icon: Icon, title, description, delay, isInView }: ValueCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative p-5 md:p-6 lg:p-8 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col items-end text-end h-full min-h-[200px] md:min-h-[220px]"
      style={{
        border: isHovered
          ? "1px solid rgba(200, 200, 200, 0.8)"
          : "1px solid transparent",
        backgroundColor: isHovered ? "rgba(60, 60, 70, 0.5)" : "transparent",
        backdropFilter: isHovered ? "blur(12px)" : "none",
      }}
      initial={false}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
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

type ValuesPageProps = { isInView?: boolean };

export default function ValuesPage({ isInView = false }: ValuesPageProps) {
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
    <div className="w-full h-full min-h-[calc(100vh-50px)] flex overflow-hidden relative">
      {/* Background - keep current */}
      <img
        src="/ourvalue.jpeg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ zIndex: 0 }}
      />
      {/* المحتوى في منتصف الصفحة طولياً — حاوية على قياس المحتوى أكبر بقليل، بطاقات موحدة الطول */}
      <div className="relative z-10 flex flex-1 min-h-0 items-center justify-center px-4 md:px-8 lg:px-12 py-8">
        <div className="w-full max-w-5xl flex flex-col items-center gap-6 md:gap-8 shrink-0">
          {/* العنوان */}
          <motion.div
            className="text-center"
            initial={false}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1
              className="text-white font-bold text-xl md:text-2xl lg:text-3xl"
              style={{ fontFamily: "DIN Arabic, sans-serif" }}
            >
              {t.values.title}
            </h1>
          </motion.div>
          {/* ثلاث حاويات موحدة الطول */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 items-stretch">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                delay={0.15 + index * 0.1}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
