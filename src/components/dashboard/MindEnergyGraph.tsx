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
    >
      <Card className="bg-gradient-card shadow-card backdrop-blur-sm border-border/50">
        <CardHeader>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-primary" />
            <CardTitle>Mind Energy Timeline</CardTitle>
          </div>
          <CardDescription>Your cognitive energy levels throughout the day</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis
                dataKey="time"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                domain={[0, 100]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "12px",
                  boxShadow: "var(--shadow-card)",
                }}
                labelStyle={{ color: "hsl(var(--foreground))" }}
              />
              <Area
                type="monotone"
                dataKey="energy"
                stroke="hsl(var(--primary))"
                strokeWidth={3}
                fill="url(#energyGradient)"
                animationDuration={1000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MindEnergyGraph;
