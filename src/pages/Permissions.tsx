import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Mic, Camera, Bell, Keyboard, Check } from "lucide-react";
import { useState } from "react";

const Permissions = () => {
  const [granted, setGranted] = useState({
    microphone: false,
    camera: false,
    notifications: false,
    keyboard: false,
  });

  const permissions = [
    {
      id: "keyboard" as const,
      icon: Keyboard,
      title: "Typing Telemetry",
      description: "Monitor keystroke patterns to detect stress and cognitive load",
      color: "text-primary",
    },
    {
      id: "notifications" as const,
      icon: Bell,
      title: "Notification Access",
      description: "Track interruption frequency to optimize your focus time",
      color: "text-warning",
    },
    {
      id: "microphone" as const,
      icon: Mic,
      title: "Microphone Access",
      description: "Analyze voice tone and speech patterns for emotional insights",
      color: "text-secondary",
    },
    {
      id: "camera" as const,
      icon: Camera,
      title: "Camera Access",
      description: "Detect facial expressions and signs of fatigue",
      color: "text-accent",
    },
  ];

  const requestPermission = (id: keyof typeof granted) => {
    // Simulate permission request
    setTimeout(() => {
      setGranted(prev => ({ ...prev, [id]: true }));
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-ambient relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>
      
      <div className="relative max-w-3xl mx-auto p-8 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="flex justify-center mb-6">
            <motion.div 
              className="relative w-20 h-20 rounded-3xl bg-gradient-primary shadow-glow flex items-center justify-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Shield className="w-10 h-10 text-white" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-primary blur-xl opacity-50 animate-breathe" />
            </motion.div>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-4 tracking-tight">
            Privacy & Permissions
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            NeuroMate needs access to certain sensors to provide personalized cognitive wellness insights. Your data is processed locally and never shared.
          </p>
        </motion.div>

        <div className="space-y-6">
          {permissions.map((permission, index) => {
            const Icon = permission.icon;
            const isGranted = granted[permission.id];

            return (
              <motion.div
                key={permission.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-glow blur-3xl opacity-20 rounded-3xl" />
                
                <Card className="relative bg-gradient-card shadow-card backdrop-blur-xl border-border/50 overflow-hidden hover:shadow-glow transition-all duration-500 group">
                  <div className="absolute inset-0 bg-shimmer-gradient bg-[length:200%_100%] group-hover:animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <CardHeader className="relative">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-5">
                        <motion.div 
                          className={`w-16 h-16 rounded-2xl bg-muted/20 backdrop-blur-sm flex items-center justify-center ${permission.color} border border-border/30`}
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Icon className="w-7 h-7" />
                        </motion.div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">
                            {permission.title}
                          </CardTitle>
                          <CardDescription className="text-sm leading-relaxed">
                            {permission.description}
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="relative">
                    {isGranted ? (
                      <motion.div 
                        className="flex items-center gap-3 text-success p-4 rounded-2xl bg-success/10 border border-success/20"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                      >
                        <div className="p-2 rounded-full bg-success/20">
                          <Check className="w-5 h-5" />
                        </div>
                        <span className="font-semibold">Access Granted</span>
                      </motion.div>
                    ) : (
                      <Button
                        onClick={() => requestPermission(permission.id)}
                        className="w-full h-12 text-base font-semibold rounded-2xl bg-gradient-primary hover:shadow-glow transition-all duration-300"
                      >
                        Grant Access
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-glow blur-3xl opacity-10 rounded-3xl" />
          
          <Card className="relative bg-gradient-card/50 backdrop-blur-xl border-border/30">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2 rounded-xl bg-primary/10">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  🔒 All data is encrypted and processed locally on your device. You can revoke these permissions at any time in Settings.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Permissions;
