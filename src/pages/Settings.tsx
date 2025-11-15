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
    <div className="min-h-screen bg-gradient-ambient">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">
            Manage your tracking preferences and privacy
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-gradient-card shadow-card backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Signal Tracking</CardTitle>
              <CardDescription>
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
        >
          <Card className="bg-gradient-card shadow-card backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Customize your dashboard experience</CardDescription>
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
        >
          <Card className="bg-gradient-card shadow-card backdrop-blur-sm border-destructive/20">
            <CardHeader>
              <CardTitle className="text-destructive">Data Management</CardTitle>
              <CardDescription>Export or delete your wellness data</CardDescription>
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
