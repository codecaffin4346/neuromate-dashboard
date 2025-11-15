import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity } from "lucide-react";
import SignalMetric from "./SignalMetric";
import { Keyboard, Smartphone, Bell, Mic, Camera } from "lucide-react";

const MultimodalPanel = () => {
  // Mock data - replace with real data from API
  const signals = [
    {
      icon: Keyboard,
      title: "Typing Rhythm",
      metrics: [
        { label: "Avg Interval", value: "245ms", status: "normal" as const },
        { label: "Std Dev", value: "38ms", status: "normal" as const },
        { label: "Backspace Rate", value: "12%", status: "warning" as const },
        { label: "Intensity", value: "Medium", status: "normal" as const },
      ],
      color: "text-primary",
    },
    {
      icon: Smartphone,
      title: "App Switching",
      metrics: [
        { label: "Switches/Min", value: "3.2", status: "warning" as const },
        { label: "Avg Focus", value: "18m", status: "normal" as const },
      ],
      color: "text-secondary",
    },
    {
      icon: Bell,
      title: "Notifications",
      metrics: [
        { label: "Last 5min", value: "8", status: "error" as const },
        { label: "Dismissed", value: "75%", status: "normal" as const },
      ],
      color: "text-warning",
    },
    {
      icon: Mic,
      title: "Voice Tone",
      metrics: [
        { label: "Pitch", value: "165Hz", status: "normal" as const },
        { label: "Speech Rate", value: "140wpm", status: "normal" as const },
      ],
      color: "text-accent",
    },
    {
      icon: Camera,
      title: "Facial Cues",
      metrics: [
        { label: "Eye Closure", value: "0.32", status: "warning" as const },
        { label: "Brow Furrow", value: "0.18", status: "normal" as const },
        { label: "Yawn Prob", value: "0.08", status: "normal" as const },
      ],
      color: "text-stress",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Card className="bg-gradient-card shadow-card backdrop-blur-sm border-border/50">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-primary" />
            <CardTitle>Multimodal Signals</CardTitle>
          </div>
          <CardDescription>Real-time behavioral and physiological metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {signals.map((signal, index) => (
              <SignalMetric key={signal.title} signal={signal} index={index} />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MultimodalPanel;
