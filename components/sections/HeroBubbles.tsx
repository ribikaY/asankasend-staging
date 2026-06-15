"use client";

import Image from "next/image";
import { ChevronDown, Info } from "lucide-react";
import { motion } from "motion/react";

const getBubbleVariants = (index: number) => {
  const directions = [
    { x: -60, y: -40, rotate: -15 },
    { x: 60, y: -20, rotate: 12 },
    { x: -40, y: 40, rotate: -8 },
  ];

  return {
    hidden: {
      opacity: 0,
      x: directions[index].x,
      y: directions[index].y,
      scale: 0.3,
      rotate: directions[index].rotate,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.9,
        delay: 0.8 + index * 0.15,
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
        scale: {
          type: "spring" as const,
          stiffness: 250,
          damping: 12,
        },
        rotate: {
          type: "spring" as const,
          stiffness: 180,
          damping: 20,
        },
      },
    },
  };
};

function HeroBubbles() {
  return (
    <>
      <motion.div
        className="w-[165px] sm:w-[190px] md:w-[305px] 
        bg-asanka-secondary dark:bg-asanka-muted/70 dark:backdrop-blur-xl
        px-2 py-2 sm:px-3 sm:py-3 md:p-4 
        rounded-[18px] md:rounded-[27px] 
        absolute top-[11%] right-[2%] 
        sm:top-[12%] sm:right-[5%] 
        md:top-[13%] md:right-[14%]
        lg:right-[23%]
        xl:right-[24%]
        2xl:right-[32%]
        hidden
        md:block
        dark:md:right-[6%]
        dark:xl:right-[14%]
        dark:2xl:right-[21.5%]
        shadow-2xl border border-white/5 z-30"
        initial="hidden"
        variants={getBubbleVariants(0)}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -8, 0],
          scale: 1,
          rotate: 0,
        }}
        style={{ willChange: "transform" }}
        suppressHydrationWarning
        transition={{
          opacity: { duration: 0.7, delay: 0.8 },
          x: { duration: 0.7, delay: 0.8, type: "spring", stiffness: 150, damping: 18 },
          scale: { duration: 0.7, delay: 0.8, type: "spring", stiffness: 150, damping: 18 },
          rotate: { duration: 0.9, delay: 0.8, type: "spring", stiffness: 180, damping: 20 },
          y: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
        }}
      >
        <div
          className="flex items-center justify-between bg-background/20 
        px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-3 md:py-2.5 
        rounded-xl md:rounded-2xl mb-3 md:mb-5 border border-white/5"
        >
          <span className="text-white text-[6px] sm:text-[8px] md:text-xs font-medium tracking-wide">
            Send Money To
          </span>

          <div className="flex items-center gap-1 bg-transparent">
            <span className="text-[10px] md:text-base leading-none">🇿🇦</span>
            <span className="text-white text-[7px] sm:text-[8px] md:text-xs font-medium">
              South Africa
            </span>
            <svg
              className="w-2 h-2 md:w-2.5 md:h-2.5 text-white/80 ml-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div className="space-y-0.5 sm:space-y-1">
            <span className="text-white text-[7px] sm:text-[8px] md:text-xs font-bold block tracking-wide">
              You send
            </span>
            <div className="flex items-center gap-1">
              <span className="text-[10px] md:text-base leading-none">🇬🇧</span>
              <span className="text-white text-[8px] sm:text-[10px] md:text-xs font-light tracking-wider">
                GBP
              </span>
            </div>
          </div>
          <div className="text-white font-bold text-base sm:text-lg md:text-4xl tracking-tight font-sans leading-none">
            £2,238
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-[150px] sm:w-[230px] md:w-[286px] 
        bg-white dark:bg-background/60 dark:backdrop-blur-xl 
        px-2.5 py-3 sm:px-3 sm:py-4 md:px-3 md:py-4 
        rounded-[18px] md:rounded-[27px] 
        absolute top-[29%] -left-3 
        sm:top-[31%] sm:left-[2%] 
        md:top-[28%]
        xl:-left-[2%]
        2xl:left-[12%]
        hidden
        md:block
        dark:md:left-[10%]
        dark:2xl:left-[20%]
        shadow-2xl border border-black/5 dark:border-white/5 z-20"
        initial="hidden"
        variants={getBubbleVariants(1)}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -10, 0],
          scale: 1,
          rotate: 0,
        }}
        style={{ willChange: "transform" }}
        suppressHydrationWarning
        transition={{
          opacity: { duration: 0.7, delay: 0.95 },
          x: { duration: 0.7, delay: 0.95, type: "spring", stiffness: 150, damping: 18 },
          scale: { duration: 0.7, delay: 0.95, type: "spring", stiffness: 150, damping: 18 },
          rotate: { duration: 0.9, delay: 0.95, type: "spring", stiffness: 180, damping: 20 },
          y: { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.7 },
        }}
      >
        <div
          className="space-y-0.5 mb-2 sm:mb-3 bg-gray-100 dark:bg-white/10 
        px-2.5 py-2.5 sm:px-3 sm:py-3.5 
        rounded-xl text-asanka-secondary dark:text-asanka-accent/90"
        >
          <span className="text-[8px] sm:text-[9px] md:text-xs font-normal tracking-wide block">
            Recipient receives
          </span>
          <div className="font-bold text-base sm:text-xl md:text-2xl tracking-tight">
            ₦185,050.00
          </div>
          <div className="flex justify-between items-center mt-1">
            <span className="text-[7px] sm:text-[8px] md:text-[10px] block">
              Rate: 1 GBP = 1850.50 NGN
            </span>
            <Info size={9} />
          </div>
        </div>

        <div className="border-t border-dashed border-gray-100 dark:border-white/10 my-2" />

        <div className="space-y-1 text-asanka-secondary dark:text-asanka-accent/90">
          <span className="text-[8px] sm:text-[9px] md:text-xs tracking-wide block">Send to</span>
          <div
            className="flex items-center justify-between bg-gray-100 dark:bg-white/10 
          px-2.5 py-2.5 sm:px-3 sm:py-3.5 rounded-xl"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-medium text-[10px] sm:text-xs">
                FG
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] sm:text-xs md:text-[15px]">Femi Gabriel</span>
                <span className="text-foreground/40 dark:text-white/40 text-[8px] sm:text-[9px] md:text-xs">
                  GTBank • 0123456789
                </span>
              </div>
            </div>
            <ChevronDown size={14} />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="bg-white dark:bg-background/70 dark:backdrop-blur-lg 
        px-3 py-3 sm:px-4 sm:py-4 md:px-4 md:py-5 
        rounded-[18px] md:rounded-[27px] 
        absolute -bottom-4 right-1 
        sm:bottom-[10%] sm:right-[16%]
        md:bottom-[30%] md:right-[10%]
        lg:bottom-[35%] lg:right-[14%]
        xl:right-[20%] xl:bottom-[30%]
        2xl:right-[24%] 2xl:bottom-[35%]
        hidden
        md:flex
        dark:md:bottom-[26%] dark:md:right-[5%] 
        dark:lg:bottom-[31%] dark:lg:right-[9%] 
        dark:2xl:bottom-[33.5%] dark:2xl:right-[13%] 
        shadow-2xl border border-black/5 dark:border-white/5 
        items-center gap-2 sm:gap-3 z-30"
        initial="hidden"
        variants={getBubbleVariants(2)}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -7, 0],
          scale: 1,
          rotate: 0,
        }}
        style={{ willChange: "transform" }}
        suppressHydrationWarning
        transition={{
          opacity: { duration: 0.7, delay: 1.1 },
          x: { duration: 0.7, delay: 1.1, type: "spring", stiffness: 150, damping: 18 },
          scale: { duration: 0.7, delay: 1.1, type: "spring", stiffness: 150, damping: 18 },
          rotate: { duration: 0.9, delay: 1.1, type: "spring", stiffness: 180, damping: 20 },
          y: { duration: 2.3, repeat: Infinity, ease: "easeInOut", delay: 1.9 },
        }}
      >
        <Image
          src="/images/illustrations/successful-illustration.svg"
          alt="success.png"
          width={55}
          height={35}
          className="w-[45px] sm:w-[65px] md:w-[71px]"
        />
        <div className="flex flex-col">
          <span
            className="text-asanka-secondary dark:text-asanka-accent
          text-[9px] sm:text-xs md:text-base font-medium"
          >
            Transaction Successful!
          </span>
          <span
            className="text-foreground/40 dark:text-white/60 
          text-[8px] sm:text-[9px] md:text-[11px] 
          font-medium leading-tight mt-0.5 max-w-[100px] sm:max-w-[180px] md:max-w-none"
          >
            Your transaction has been processed successfully
          </span>
        </div>
      </motion.div>
    </>
  );
}

export default HeroBubbles;
