import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Keyboard, Smartphone, Bell, Mic, Camera, Moon, Trash2 } from "lucide-react";
import { useState } from "react";

const Settings = () => {
  const [settings, setSettings] = useState({
    typing: true,
    appSwitching: true,
    notifications: true,
    microphone: false,
    camera: false,
    darkMode: false,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-gradient-ambient relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>
      
      <div className="relative max-w-4xl mx-auto p-8 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-5xl font-bold text-foreground mb-3 tracking-tight">Settings</h1>
          <p className="text-muted-foreground text-lg">
            Customize your cognitive wellness experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-glow blur-3xl opacity-20 rounded-3xl" />
          
          <Card className="relative bg-gradient-card shadow-card backdrop-blur-xl border-border/50 hover:shadow-glow transition-shadow duration-500">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-2xl bg-gradient-primary shadow-glow">
                  <Keyboard className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-2xl">Signal Tracking</CardTitle>
              </div>
              <CardDescription className="text-base">
                Choose which signals to monitor for cognitive insights
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Keyboard className="w-5 h-5 text-primary" />
                  <div>
                    <Label htmlFor="typing" className="text-base">Typing Rhythm</Label>
                    <p className="text-sm text-muted-foreground">
                      Track keystroke patterns and timing
                    </p>
                  </div>
                </div>
                <Switch
                  id="typing"
                  checked={settings.typing}
                  onCheckedChange={() => toggleSetting("typing")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-primary" />
                  <div>
                    <Label htmlFor="appSwitching" className="text-base">App Switching</Label>
                    <p className="text-sm text-muted-foreground">
                      Monitor focus and attention patterns
                    </p>
                  </div>
                </div>
                <Switch
                  id="appSwitching"
                  checked={settings.appSwitching}
                  onCheckedChange={() => toggleSetting("appSwitching")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-primary" />
                  <div>
                    <Label htmlFor="notifications" className="text-base">Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Track interruption frequency
                    </p>
                  </div>
                </div>
                <Switch
                  id="notifications"
                  checked={settings.notifications}
                  onCheckedChange={() => toggleSetting("notifications")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mic className="w-5 h-5 text-secondary" />
                  <div>
                    <Label htmlFor="microphone" className="text-base">Voice Tone</Label>
                    <p className="text-sm text-muted-foreground">
                      Analyze speech patterns and emotions
                    </p>
                  </div>
                </div>
                <Switch
                  id="microphone"
                  checked={settings.microphone}
                  onCheckedChange={() => toggleSetting("microphone")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Camera className="w-5 h-5 text-accent" />
                  <div>
                    <Label htmlFor="camera" className="text-base">Facial Cues</Label>
                    <p className="text-sm text-muted-foreground">
                      Detect facial expressions and fatigue
                    </p>
                  </div>
                </div>
                <Switch
                  id="camera"
                  checked={settings.camera}
                  onCheckedChange={() => toggleSetting("camera")}
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-glow blur-3xl opacity-20 rounded-3xl" />
          
          <Card className="relative bg-gradient-card shadow-card backdrop-blur-xl border-border/50 hover:shadow-glow transition-shadow duration-500">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-2xl bg-gradient-secondary shadow-glow">
                  <Moon className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-2xl">Appearance</CardTitle>
              </div>
              <CardDescription className="text-base">Customize your dashboard experience</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Moon className="w-5 h-5 text-primary" />
                  <div>
                    <Label htmlFor="darkMode" className="text-base">Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Switch to dark theme
                    </p>
                  </div>
                </div>
                <Switch
                  id="darkMode"
                  checked={settings.darkMode}
                  onCheckedChange={() => toggleSetting("darkMode")}
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-destructive/10 blur-3xl opacity-30 rounded-3xl" />
          
          <Card className="relative bg-gradient-card shadow-card backdrop-blur-xl border-destructive/30 hover:shadow-glow transition-shadow duration-500">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-2xl bg-gradient-stress shadow-glow">
                  <Trash2 className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-destructive text-2xl">Data Management</CardTitle>
              </div>
              <CardDescription className="text-base">Export or delete your wellness data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full">
                Export Data
              </Button>
              <Button variant="destructive" className="w-full">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete All Data
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Settings;
