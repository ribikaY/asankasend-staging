"use client";

import Image from "next/image";
import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { ArrowDown, ChevronDown, Download, Info } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { handleDownloadClick } from "@/lib/utils";

const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const textItemVariants = {
    hidden: { opacity: 0, x: -50, y: 20 },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 0.8,
            type: "spring" as const,
            stiffness: 100,
            damping: 20,
        },
    },
};

const buttonVariants = {
    hidden: { opacity: 0, x: -50, y: 20, scale: 0.9 },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.7,
            delay: 0.5,
            type: "spring" as const,
            stiffness: 120,
            damping: 18,
        },
    },
};

const phoneVariants = {
    hidden: { opacity: 0, x: 80, y: 40, rotate: -5 },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        transition: {
            duration: 1,
            delay: 0.3,
            type: "spring" as const,
            stiffness: 70,
            damping: 25,
        },
    },
};

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
                delay: 0.8 + (index * 0.15),
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

const learnMoreVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: 1.2,
            type: "spring" as const,
            stiffness: 100,
            damping: 20,
        },
    },
};

function Hero() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsMounted(true);
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative bg-gradient-hero flex flex-col md:min-h-screen overflow-hidden">
            <Header />
            <div className="container px-5 lg:px-6 flex flex-col xl:flex-row justify-between items-center xl:items-end z-10 gap-8 sm:gap-10 md:gap-0 pb-24 md:pb-0 pt-6 md:pt-0">
                {/* Left section */}
                <motion.div
                    className="self-center space-y-6 md:space-y-4 flex-1 sm:max-w-xl lg:max-w-2xl xl:min-w-[550px] 2xl:min-w-2xl sm:text-center lg:text-left md:pt-16 xl:pt-0"
                    initial="hidden"
                    animate={isMounted ? "visible" : "hidden"}
                    variants={textContainerVariants}
                    suppressHydrationWarning
                >
                    <motion.h1
                        className="font-light text-[40px] md:text-5xl lg:text-6xl leading-11 sm:leading-13 md:leading-15"
                        variants={textItemVariants}
                    >
                        Send Money Back Home and Manage it from{" "}
                        <span className="font-heading font-extrabold text-[#1B814B] dark:text-[#52A055] md:leading-17 2xl:block">
                            One App
                        </span>
                    </motion.h1>
                    <motion.p
                        className="font-light text-foreground/80 leading-relaxed 2xl:max-w-xl mb-5 lg:mb-0 text-[15px] sm:text-base"
                        variants={textItemVariants}
                    >
                        Asanka Send is a secure financial app built with a mother&apos;s heart and care for people who want full control over what their money does for their family and community back home.
                    </motion.p>
                    <motion.div variants={buttonVariants}>
                        <Button
                            asChild
                            className="rounded-full bg-asanka-secondary hover:bg-asanka-secondary/90 font-light py-6 md:py-7 z-10 md:mb-16 md:mt-5"
                        >
                            <Link href="#how-it-works" onClick={handleDownloadClick}>
                                <span className="ml-6"> Download the app</span>
                                <Download size={16} className="mr-6" />
                            </Link>
                        </Button>
                    </motion.div>
                    <motion.p
                        className="hidden xl:inline text-lg font-light text-foreground/80 relative top-32"
                        initial="hidden"
                        animate={isMounted ? "visible" : "hidden"}
                        variants={learnMoreVariants}
                    >
                        <Link href="#about" className="inline-flex gap-4 items-center ">
                            Learn more about asanka
                            <ArrowDown size={16} className="animate-bounce" />
                        </Link>
                    </motion.p>
                </motion.div>

                {/* Right section */}
                <motion.div
                    className="relative w-full max-w-[450px] md:max-w-200 2xl:max-w-252 dark:2xl:max-w-245 aspect-square shrink-0"
                    initial="hidden"
                    animate={isMounted ? "visible" : "hidden"}
                    variants={phoneVariants}
                    suppressHydrationWarning
                >
                    <div className="relative left-2 sm:top-0 sm:left-0 md:top-2 md:left-14 dark:xl:left-0 w-full h-full">
                        {/* Main Phone Image */}
                        <Image
                            src="/images/mock-ups/hero-mockup-new.webp"
                            alt="Hero Illustration"
                            width={700}
                            height={841}
                            className="hidden md:block md:w-full md:h-full md:object-contain"
                            priority={true}
                            blurDataURL="/images/mock-ups/hero-mockup-new.webp"
                        />

                        {/* mobile dark mode */}
                        <Image
                            src="/images/mock-ups/hero-dark1.webp"
                            alt="Hero Illustration"
                            width={700}
                            height={841}
                            className="md:w-full md:h-full md:object-contain hidden dark:md:block"
                            priority={true}
                            blurDataURL="/images/mock-ups/hero-dark1.webp"
                        />

                        {/* mobile image dark mode - small devices */}
                        <Image
                            src="/images/mock-ups/hero-dark-mobile.webp"
                            alt="Hero Illustration"
                            width={700}
                            height={841}
                            className="md:w-full md:h-full md:object-contain block md:hidden"
                            priority={true}
                            blurDataURL="/images/mock-ups/hero-dark-mobile.webp"
                        />

                        {/* 1. TOP RIGHT: Send Money Card */}
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
                            animate={isMounted ? {
                                opacity: 1,
                                x: 0,
                                y: [0, -8, 0],
                                scale: 1,
                                rotate: 0,
                            } : "hidden"}
                            style={{ willChange: 'transform' }}
                            suppressHydrationWarning
                            transition={{
                                opacity: { duration: 0.7, delay: 0.8 },
                                x: { duration: 0.7, delay: 0.8, type: "spring", stiffness: 150, damping: 18 },
                                scale: { duration: 0.7, delay: 0.8, type: "spring", stiffness: 150, damping: 18 },
                                rotate: { duration: 0.9, delay: 0.8, type: "spring", stiffness: 180, damping: 20 },
                                y: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
                            }}
                        >
                            {/* Selector Pill */}
                            <div className="flex items-center justify-between bg-background/20 
                            px-2 py-1.5 sm:px-2.5 sm:py-2 md:px-3 md:py-2.5 
                            rounded-xl md:rounded-2xl mb-3 md:mb-5 border border-white/5">
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
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Bottom Transaction Details */}
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

                        {/* 2. MIDDLE LEFT: Recipient Receives Card */}
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
                            animate={isMounted ? {
                                opacity: 1,
                                x: 0,
                                y: [0, -10, 0],
                                scale: 1,
                                rotate: 0,
                            } : "hidden"}
                            style={{ willChange: 'transform' }}
                            suppressHydrationWarning
                            transition={{
                                opacity: { duration: 0.7, delay: 0.95 },
                                x: { duration: 0.7, delay: 0.95, type: "spring", stiffness: 150, damping: 18 },
                                scale: { duration: 0.7, delay: 0.95, type: "spring", stiffness: 150, damping: 18 },
                                rotate: { duration: 0.9, delay: 0.95, type: "spring", stiffness: 180, damping: 20 },
                                y: { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.7 },
                            }}
                        >
                            <div className="space-y-0.5 mb-2 sm:mb-3 bg-gray-100 dark:bg-white/10 
                            px-2.5 py-2.5 sm:px-3 sm:py-3.5 
                            rounded-xl text-asanka-secondary dark:text-asanka-accent/90">
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
                                <span className="text-[8px] sm:text-[9px] md:text-xs tracking-wide block">
                                    Send to
                                </span>

                                <div className="flex items-center justify-between bg-gray-100 dark:bg-white/10 
                                px-2.5 py-2.5 sm:px-3 sm:py-3.5 rounded-xl">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-medium text-[10px] sm:text-xs">
                                            FG
                                        </div>

                                        <div className="flex flex-col">
                                            <span className="text-[10px] sm:text-xs md:text-[15px]">
                                                Femi Gabriel
                                            </span>

                                            <span className="text-foreground/40 dark:text-white/40 text-[8px] sm:text-[9px] md:text-xs">
                                                GTBank • 0123456789
                                            </span>
                                        </div>
                                    </div>

                                    <ChevronDown size={14} />
                                </div>
                            </div>
                        </motion.div>

                        {/* 3. BOTTOM RIGHT: Transaction Success Toast */}
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
                            animate={isMounted ? {
                                opacity: 1,
                                x: 0,
                                y: [0, -7, 0],
                                scale: 1,
                                rotate: 0,
                            } : "hidden"}
                            style={{ willChange: 'transform' }}
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
                                <span className="text-asanka-secondary dark:text-asanka-accent
                                text-[9px] sm:text-xs md:text-base font-medium">
                                    Transaction Successful!
                                </span>

                                <span className="text-foreground/40 dark:text-white/60 
                                text-[8px] sm:text-[9px] md:text-[11px] 
                                font-medium leading-tight mt-0.5 max-w-[100px] sm:max-w-[180px] md:max-w-none">
                                    Your transaction has been processed successfully
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero;
