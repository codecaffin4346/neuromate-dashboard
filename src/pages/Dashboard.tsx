import { motion } from "framer-motion";
import CognitiveStateCard from "@/components/dashboard/CognitiveStateCard";
import EmotionCard from "@/components/dashboard/EmotionCard";
import MultimodalPanel from "@/components/dashboard/MultimodalPanel";
import MindEnergyGraph from "@/components/dashboard/MindEnergyGraph";
import AgentChat from "@/components/dashboard/AgentChat";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-ambient relative overflow-hidden">
      {/* Ambient background particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto p-8 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-5xl font-bold text-foreground mb-3 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-muted-foreground text-lg">
            Your cognitive wellness companion is monitoring your mental state
          </p>
        </motion.div>

        {/* Top Row - Cognitive State & Emotions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CognitiveStateCard />
          <EmotionCard />
        </div>

        {/* Multimodal Signals */}
        <MultimodalPanel />

        {/* Mind Energy Graph */}
        <MindEnergyGraph />

        {/* Agent Chat */}
        <AgentChat />
      </div>
    </div>
  );
};

export default Dashboard;
