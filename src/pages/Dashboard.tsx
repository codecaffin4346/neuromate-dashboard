import { motion } from "framer-motion";
import CognitiveStateCard from "@/components/dashboard/CognitiveStateCard";
import EmotionCard from "@/components/dashboard/EmotionCard";
import MultimodalPanel from "@/components/dashboard/MultimodalPanel";
import MindEnergyGraph from "@/components/dashboard/MindEnergyGraph";
import AgentChat from "@/components/dashboard/AgentChat";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-ambient">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-foreground mb-2">
            NeuroMate Dashboard
          </h1>
          <p className="text-muted-foreground">
            Your real-time cognitive wellness companion
          </p>
        </motion.div>

        {/* Top Row - Cognitive State & Emotions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
