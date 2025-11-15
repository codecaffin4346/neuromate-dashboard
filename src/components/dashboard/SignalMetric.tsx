import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Metric {
  label: string;
  value: string;
  status: "normal" | "warning" | "error";
}

interface SignalMetricProps {
  signal: {
    icon: LucideIcon;
    title: string;
    metrics: Metric[];
    color: string;
  };
  index: number;
}

const SignalMetric = ({ signal, index }: SignalMetricProps) => {
  const Icon = signal.icon;

  const statusColors = {
    normal: "bg-success/10 text-success border-success/20",
    warning: "bg-warning/10 text-warning border-warning/20",
    error: "bg-stress/10 text-stress border-stress/20",
  };

  const hasWarning = signal.metrics.some(m => m.status === 'warning' || m.status === 'error');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 + index * 0.05 }}
      className="relative group"
    >
      {/* Glow effect for warning/error states */}
      {hasWarning && (
        <div className="absolute inset-0 bg-warning/20 blur-xl rounded-3xl animate-glow-pulse" />
      )}
      
      <div className="relative p-5 rounded-3xl bg-gradient-card backdrop-blur-xl border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-glow group-hover:scale-[1.02]">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-muted/30 group-hover:bg-gradient-primary group-hover:shadow-glow transition-all duration-300">
            <Icon className={`w-5 h-5 ${signal.color} group-hover:text-white transition-colors duration-300`} />
          </div>
          <h3 className="font-bold text-sm text-foreground">{signal.title}</h3>
        </div>
        
        <div className="space-y-3">
          {signal.metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.05 + idx * 0.05 }}
              className="flex items-center justify-between text-xs"
            >
              <span className="text-muted-foreground font-medium">{metric.label}</span>
              <Badge 
                variant="outline" 
                className={`${statusColors[metric.status]} font-mono transition-all duration-300`}
              >
                {metric.value}
              </Badge>
            </motion.div>
          ))}
        </div>
        
        {/* Sparkline indicator (decorative) */}
        <div className="mt-4 h-8 flex items-end gap-1 opacity-30">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`flex-1 rounded-t-sm ${hasWarning ? 'bg-warning' : 'bg-primary'}`}
              initial={{ height: 0 }}
              animate={{ height: `${20 + Math.random() * 80}%` }}
              transition={{ 
                duration: 0.5, 
                delay: 0.6 + index * 0.05 + i * 0.05,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SignalMetric;
