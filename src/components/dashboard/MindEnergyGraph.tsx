import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const MindEnergyGraph = () => {
  // Mock data - replace with real data from API
  const data = [
    { time: "09:00", energy: 75 },
    { time: "10:00", energy: 82 },
    { time: "11:00", energy: 68 },
    { time: "12:00", energy: 55 },
    { time: "13:00", energy: 62 },
    { time: "14:00", energy: 58 },
    { time: "15:00", energy: 72 },
    { time: "16:00", energy: 78 },
    { time: "17:00", energy: 65 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-glow blur-3xl opacity-20 rounded-3xl" />
      
      <Card className="relative bg-gradient-card shadow-card backdrop-blur-xl border-border/50 overflow-hidden group hover:shadow-glow transition-shadow duration-500">
        <div className="absolute inset-0 bg-shimmer-gradient bg-[length:200%_100%] group-hover:animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <CardHeader className="relative">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-2xl bg-gradient-primary shadow-glow">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-xl">Mind Energy Timeline</CardTitle>
              <CardDescription className="text-xs">Cognitive energy flow throughout your day</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative pt-2">
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4} />
                  <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="hsl(var(--border))" 
                opacity={0.2}
                vertical={false}
              />
              <XAxis
                dataKey="time"
                stroke="hsl(var(--muted-foreground))"
                fontSize={11}
                tickLine={false}
                axisLine={false}
                dy={10}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={11}
                tickLine={false}
                axisLine={false}
                domain={[0, 100]}
                dx={-10}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "16px",
                  boxShadow: "var(--shadow-glow)",
                  backdropFilter: "blur(12px)",
                }}
                labelStyle={{ 
                  color: "hsl(var(--foreground))",
                  fontWeight: 600,
                  marginBottom: "4px"
                }}
                itemStyle={{
                  color: "hsl(var(--primary))",
                  fontWeight: 500
                }}
              />
              <Area
                type="monotone"
                dataKey="energy"
                stroke="hsl(var(--primary))"
                strokeWidth={4}
                fill="url(#energyGradient)"
                animationDuration={1500}
                animationEasing="ease-out"
                filter="url(#glow)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MindEnergyGraph;
