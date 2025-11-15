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
      <motion.div 
        className="relative w-32 h-32"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Ambient glow behind the ring */}
        <div 
          className="absolute inset-0 rounded-full blur-xl opacity-40"
          style={{ 
            background: `radial-gradient(circle, ${strokeMap[color]}40 0%, transparent 70%)` 
          }}
        />
        
        <svg className="w-full h-full transform -rotate-90 relative">
          {/* Background circle with subtle inner glow */}
          <circle
            cx="64"
            cy="64"
            r={radius}
            stroke="currentColor"
            strokeWidth="10"
            fill="none"
            className="text-muted/10"
          />
          {/* Progress circle with gradient and glow */}
          <motion.circle
            cx="64"
            cy="64"
            r={radius}
            stroke={strokeMap[color]}
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: [0.34, 1.56, 0.64, 1] }}
            style={{
              filter: `drop-shadow(0 0 8px ${strokeMap[color]}80)`,
            }}
          />
        </svg>
        
        {/* Center value with breathing effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className={`text-3xl font-bold ${colorMap[color]}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            {value}%
          </motion.span>
        </div>
      </motion.div>
      <span className="text-sm font-semibold text-foreground tracking-wide">{label}</span>
    </div>
  );
};

export default RadialProgress;
