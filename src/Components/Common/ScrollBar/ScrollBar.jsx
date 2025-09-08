import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 30 });

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "5px",
        // backgroundColor: "#fff",
        zIndex: "20000",
      }}
    >
      <motion.div
        style={{
          scaleX,
          height: "100%",
          backgroundColor: "#f6ef3e",
          originX: 0,
        }}
      />
    </div>
  );
};

export default ScrollBar;
