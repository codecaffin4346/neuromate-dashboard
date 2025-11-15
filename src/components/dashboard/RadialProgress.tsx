import { motion } from "framer-motion";

interface RadialProgressProps {
  value: number;
  label: string;
  color: "stress" | "accent" | "secondary" | "primary";
}

const RadialProgress = ({ value, label, color }: RadialProgressProps) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  const colorMap = {
    stress: "text-stress",
    accent: "text-accent",
    secondary: "text-secondary",
    primary: "text-primary",
  };

  const strokeMap = {
    stress: "#EF7B5C",
    accent: "#A780FF",
    secondary: "#18B8A9",
    primary: "#4D6FFF",
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-28 h-28">
        <svg className="w-full h-full transform -rotate-90">
          {/* Background circle */}
          <circle
            cx="56"
            cy="56"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-muted/20"
          />
          {/* Progress circle */}
          <motion.circle
            cx="56"
            cy="56"
            r={radius}
            stroke={strokeMap[color]}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className={`text-2xl font-bold ${colorMap[color]}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {value}%
          </motion.span>
        </div>
      </div>
      <span className="text-sm font-medium text-foreground">{label}</span>
    </div>
  );
};

export default RadialProgress;
