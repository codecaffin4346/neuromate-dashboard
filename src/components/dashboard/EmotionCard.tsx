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
      className="relative"
    >
      {/* Ambient glow effect */}
      <div className="absolute inset-0 bg-gradient-glow blur-3xl opacity-30 rounded-3xl" />
      
      <Card className="relative bg-gradient-card shadow-card backdrop-blur-xl border-border/50 h-full overflow-hidden group hover:shadow-glow transition-shadow duration-500">
        <div className="absolute inset-0 bg-shimmer-gradient bg-[length:200%_100%] group-hover:animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <CardHeader className="relative">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-2xl bg-gradient-secondary shadow-glow">
              <Smile className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-xl">Emotion Insights</CardTitle>
              <CardDescription className="text-xs">AI-detected emotional states</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 relative py-6">
          {emotions.map((emotion, index) => (
            <motion.div
              key={emotion.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="space-y-3 p-4 rounded-2xl bg-background/40 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.span 
                    className="text-3xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {emotion.emoji}
                  </motion.span>
                  <span className="font-semibold text-foreground text-base">{emotion.name}</span>
                </div>
                <Badge variant="secondary" className="font-mono text-sm px-3 py-1">
                  {emotion.confidence}%
                </Badge>
              </div>
              <div className="relative h-3 bg-muted/30 rounded-full overflow-hidden">
                <motion.div
                  className={`absolute inset-y-0 left-0 ${emotion.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${emotion.confidence}%` }}
                  transition={{ duration: 1, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                  style={{
                    boxShadow: `0 0 12px ${emotion.color === 'bg-secondary' ? 'hsl(var(--secondary))' : emotion.color === 'bg-success' ? 'hsl(var(--success))' : 'hsl(var(--primary))'}80`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EmotionCard;
