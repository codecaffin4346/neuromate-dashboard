import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smile } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const EmotionCard = () => {
  // Mock data - replace with real data from API
  const emotions = [
    { name: "Focused", confidence: 78, emoji: "🎯", color: "bg-secondary" },
    { name: "Calm", confidence: 65, emoji: "😌", color: "bg-success" },
    { name: "Curious", confidence: 52, emoji: "🤔", color: "bg-primary" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
    >
      <Card className="bg-gradient-card shadow-card backdrop-blur-sm border-border/50 h-full">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Smile className="w-6 h-6 text-primary" />
            <CardTitle>Emotion Recognition</CardTitle>
          </div>
          <CardDescription>Top detected emotional states</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          {emotions.map((emotion, index) => (
            <motion.div
              key={emotion.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{emotion.emoji}</span>
                  <span className="font-medium text-foreground">{emotion.name}</span>
                </div>
                <Badge variant="secondary" className="font-mono">
                  {emotion.confidence}%
                </Badge>
              </div>
              <Progress value={emotion.confidence} className="h-2" />
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EmotionCard;
