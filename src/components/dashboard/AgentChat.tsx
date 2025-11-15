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
    >
      <Card className="bg-gradient-card shadow-card backdrop-blur-sm border-border/50">
        <CardHeader>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-primary" />
            <CardTitle>Agent Messages</CardTitle>
          </div>
          <CardDescription>AI-powered insights and recommendations</CardDescription>
        </CardHeader>
        <CardContent>
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
                    className={`p-4 rounded-2xl border backdrop-blur-sm ${
                      agentColors[message.type as keyof typeof agentColors]
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="font-medium">
                            {message.agent}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
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
