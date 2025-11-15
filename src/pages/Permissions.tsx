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
    <div className="min-h-screen bg-gradient-ambient">
      <div className="max-w-3xl mx-auto p-6 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Privacy & Permissions
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            NeuroMate needs access to certain sensors to provide personalized cognitive wellness insights. Your data is processed locally and never shared.
          </p>
        </motion.div>

        <div className="space-y-4">
          {permissions.map((permission, index) => {
            const Icon = permission.icon;
            const isGranted = granted[permission.id];

            return (
              <motion.div
                key={permission.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <Card className="bg-gradient-card shadow-card backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center ${permission.color}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg mb-1">
                            {permission.title}
                          </CardTitle>
                          <CardDescription>
                            {permission.description}
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {isGranted ? (
                      <div className="flex items-center gap-2 text-success">
                        <Check className="w-5 h-5" />
                        <span className="font-medium">Permission Granted</span>
                      </div>
                    ) : (
                      <Button
                        onClick={() => requestPermission(permission.id)}
                        className="w-full"
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
        >
          <Card className="bg-muted/30 border-border/50">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground text-center">
                🔒 All data is encrypted and processed locally on your device. You can revoke these permissions at any time in Settings.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Permissions;
