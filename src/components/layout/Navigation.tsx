import { NavLink } from "@/components/NavLink";
import { LayoutDashboard, Settings, Shield } from "lucide-react";
import { motion } from "framer-motion";

const Navigation = () => {
  const links = [
    { to: "/", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/settings", icon: Settings, label: "Settings" },
    { to: "/permissions", icon: Shield, label: "Permissions" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative bg-card/90 backdrop-blur-xl border-b border-border/50 sticky top-0 z-50"
    >
      {/* Ambient glow at top */}
      <div className="absolute inset-x-0 -top-20 h-20 bg-gradient-glow blur-3xl opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-primary shadow-glow flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary blur-md opacity-50 animate-breathe" />
            </div>
            <div>
              <span className="text-2xl font-bold text-foreground tracking-tight">NeuroMate</span>
              <p className="text-[10px] text-muted-foreground font-medium tracking-wider">COGNITIVE WELLNESS</p>
            </div>
          </motion.div>

          <div className="flex items-center gap-2">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end
                  className="px-5 py-2.5 rounded-2xl text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300 flex items-center gap-2.5 font-medium"
                  activeClassName="bg-gradient-primary text-white shadow-glow"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{link.label}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
