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
    >
      <Card className="bg-gradient-card shadow-card backdrop-blur-sm border-border/50 h-full">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-primary" />
            <CardTitle>Cognitive State</CardTitle>
          </div>
          <CardDescription>Real-time mental wellness metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-6">
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
