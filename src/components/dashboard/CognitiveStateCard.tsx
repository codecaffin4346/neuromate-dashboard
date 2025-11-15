import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain } from "lucide-react";
import RadialProgress from "./RadialProgress";

const CognitiveStateCard = () => {
  // Mock data - replace with real data from API
  const cognitiveState = {
    stress: 35,
    fatigue: 52,
    focus: 78,
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 }}
      className="relative"
    >
      {/* Ambient glow effect */}
      <div className="absolute inset-0 bg-gradient-glow blur-3xl opacity-30 rounded-3xl" />
      
      <Card className="relative bg-gradient-card shadow-card backdrop-blur-xl border-border/50 h-full overflow-hidden group hover:shadow-glow transition-shadow duration-500">
        {/* Subtle shimmer effect on hover */}
        <div className="absolute inset-0 bg-shimmer-gradient bg-[length:200%_100%] group-hover:animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <CardHeader className="relative">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-2xl bg-gradient-primary shadow-glow">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-xl">Mind Energy Ring</CardTitle>
              <CardDescription className="text-xs">Real-time cognitive wellness</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative">
          <div className="grid grid-cols-3 gap-8 py-4">
            <RadialProgress
              value={cognitiveState.stress}
              label="Stress"
              color="stress"
            />
            <RadialProgress
              value={cognitiveState.fatigue}
              label="Fatigue"
              color="accent"
            />
            <RadialProgress
              value={cognitiveState.focus}
              label="Focus"
              color="secondary"
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CognitiveStateCard;
