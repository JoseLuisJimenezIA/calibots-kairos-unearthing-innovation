import { motion } from "framer-motion";
import legoExplorer from "@/assets/lego-explorer.png";

const LegoModel3D = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Glow behind model */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[60%] w-[60%] rounded-full bg-primary/20 blur-[80px] animate-glow-pulse" />
      </div>
      <motion.div
        className="relative"
        style={{ perspective: "1000px" }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.img
          src={legoExplorer}
          alt="LEGO Explorer - CaliBots Kairos"
          className="h-[280px] md:h-[360px] lg:h-[440px] w-auto object-contain drop-shadow-[0_20px_60px_hsl(40_76%_50%/0.4)]"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          whileHover={{ scale: 1.05, rotateY: 10 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>
    </div>
  );
};

export default LegoModel3D;
