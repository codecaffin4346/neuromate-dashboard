import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Sparkles, Calendar } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const AgentChat = () => {
  // Mock messages - replace with real data from API
  const messages = [
    {
      type: "empathy",
      agent: "Empathy Agent",
      content: "I notice your stress levels have been elevated for the past 30 minutes. Would you like to take a short mindfulness break?",
      time: "2 min ago",
      icon: MessageSquare,
    },
    {
      type: "planner",
      agent: "Planner Agent",
      content: "Based on your focus patterns, I suggest scheduling deep work sessions between 10-11 AM. This aligns with your peak cognitive performance.",
      time: "15 min ago",
      icon: Calendar,
    },
    {
      type: "system",
      agent: "System",
      content: "Your cognitive wellness score improved by 12% this week. Great progress! 🎉",
      time: "1 hour ago",
      icon: Sparkles,
    },
  ];

  const agentColors = {
    empathy: "bg-secondary/10 border-secondary/20",
    planner: "bg-accent/10 border-accent/20",
    system: "bg-primary/10 border-primary/20",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-glow blur-3xl opacity-20 rounded-3xl" />
      
      <Card className="relative bg-gradient-card shadow-card backdrop-blur-xl border-border/50 overflow-hidden group hover:shadow-glow transition-shadow duration-500">
        <div className="absolute inset-0 bg-shimmer-gradient bg-[length:200%_100%] group-hover:animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <CardHeader className="relative">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-2xl bg-gradient-primary shadow-glow animate-pulse-soft">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-xl">AI Agent Chat</CardTitle>
              <CardDescription className="text-xs">Personalized wellness insights</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative">
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-4">
              {messages.map((message, index) => {
                const Icon = message.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className={`relative p-5 rounded-3xl border backdrop-blur-xl ${
                      agentColors[message.type as keyof typeof agentColors]
                    } hover:scale-[1.02] transition-transform duration-300`}
                  >
                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-glow opacity-30" />
                    
                    <div className="relative flex items-start gap-4">
                      <motion.div 
                        className="flex-shrink-0"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      >
                        <div className="w-12 h-12 rounded-2xl bg-gradient-primary shadow-glow flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </motion.div>
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="font-semibold text-xs px-3 py-1">
                            {message.agent}
                          </Badge>
                          <span className="text-xs text-muted-foreground font-medium">
                            {message.time}
                          </span>
                        </div>
                        <p className="text-sm text-foreground leading-relaxed">
                          {message.content}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AgentChat;
