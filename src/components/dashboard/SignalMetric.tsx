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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 + index * 0.05 }}
      className="p-4 rounded-2xl bg-background/40 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300"
    >
      <div className="flex items-center gap-2 mb-4">
        <Icon className={`w-5 h-5 ${signal.color}`} />
        <h3 className="font-semibold text-sm text-foreground">{signal.title}</h3>
      </div>
      <div className="space-y-2">
        {signal.metrics.map((metric) => (
          <div
            key={metric.label}
            className="flex items-center justify-between text-xs"
          >
            <span className="text-muted-foreground">{metric.label}</span>
            <Badge variant="outline" className={statusColors[metric.status]}>
              {metric.value}
            </Badge>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SignalMetric;
