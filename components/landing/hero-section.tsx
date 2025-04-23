"use client"; // Required for framer-motion

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger animation for children
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function HeroSection() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      // Added background gradient, increased padding, adjusted alignment
      className="relative overflow-hidden container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 py-16 md:py-24 lg:py-32 text-center"
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--secondary)_0%,var(--background)_70%)] dark:bg-[radial-gradient(ellipse_at_center,var(--secondary)_0%,var(--background)_70%)] opacity-50 dark:opacity-30"></div>
      </motion.div>

      {/* Placeholder for a unique visual element (e.g., illustration, abstract shapes) */}
      {/* <motion.div className="absolute top-10 left-10 text-muted-foreground/10 -z-10"> Visual Element </motion.div> */}

      <motion.h1
        variants={itemVariants}
        // Gradient text using primary color
        className="text-4xl font-extrabold leading-tight tracking-tighter 
                   sm:text-5xl md:text-6xl lg:text-7xl 
                   bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
      >
        Take Back Control of Your Betting
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="max-w-[750px] text-lg text-muted-foreground sm:text-xl md:text-2xl"
      >
        A simple, secure way to self-exclude from betting providers. Empower
        yourself to stop and focus on what truly matters.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4 mt-6"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Button size="lg" asChild>
            <Link href="/blacklist">Get Started Now</Link>
          </Button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Button size="lg" variant="outline" asChild>
            <Link href="/#how-it-works">Learn How</Link> {/* Updated link */}
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
