"use client";

import Image from "next/image";
import { motion } from "motion/react";

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, x: -30, y: 15 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

const flagStackVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
};

const flagItemVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
    },
  },
};

function WhereItWorks() {
  return (
    <div className="container pt-16 pb-10 sm:py-20 lg:py-32 flex flex-col md:flex-row justify-between items-center gap-8">
      <motion.div
        className="space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={textContainerVariants}
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-asanka-foreground"
          variants={textItemVariants}
        >
          Where It Works
        </motion.h1>

        <motion.div
          className="mt-4 flex md:py-6 md:py-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={flagStackVariants}
        >
          {/* flags */}
          <motion.div
            className="rounded-full w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 shadow-lg"
            variants={flagItemVariants}
          >
            <Image
              src="/images/flags/CA.svg"
              alt="CA"
              width={80}
              height={80}
              className="w-full h-full object-cover rounded-full border-2 lg:border-4 border-white dark:border-black"
            />
          </motion.div>
          <motion.div
            className="rounded-full w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 shadow-lg relative right-5 md:right-7"
            variants={flagItemVariants}
          >
            <Image
              src="/images/flags/GB.svg"
              alt="GB"
              width={80}
              height={80}
              className="w-full h-full object-cover rounded-full border-2 lg:border-4 border-white dark:border-black"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="text-muted-foreground/85 font-light space-y-2 md:max-w-lg text-[15px] md:text-base"
          variants={textItemVariants}
        >
          <p>Send money from the UK, Europe, the US, Canada and the UAE.</p>
          <p>Support your family back home and access extra services across multiple African countries. Adding more soon!</p>
        </motion.div>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-asanka-foreground mt-10"
          variants={textItemVariants}
        >
          Send to
        </motion.h1>
        <motion.div
          className="mt-4 flex md:py-6 md:py-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={flagStackVariants}
        >
          {/* flags */}
          <motion.div
            className="rounded-full w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 shadow-lg"
            variants={flagItemVariants}
          >
            <Image
              src="/images/flags/GH.svg"
              alt="GH"
              width={80}
              height={80}
              className="w-full h-full object-cover rounded-full border-2 lg:border-4 border-white dark:border-black"
            />
          </motion.div>
          <motion.div
            className="rounded-full w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 shadow-lg relative right-5 md:right-7"
            variants={flagItemVariants}
          >
            <Image
              src="/images/flags/NG.svg"
              alt="NG"
              width={80}
              height={80}
              className="w-full h-full object-cover rounded-full border-2 lg:border-4 border-white dark:border-black"
            />
          </motion.div>
        </motion.div>
      </motion.div>
      {/* <motion.div
        className="grid grid-cols-8 gap-4 md:gap-6 lg:gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={gridContainerVariants}
      >
        flags grid
        {flags.map((flag) => (
          <motion.div
            key={flag.code}
            className="rounded-full w-8 h-8 sm:w-12 sm:h-12 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-[60px] xl:h-[60px] shadow-md"
            variants={gridItemVariants}
          >
            <Image
              src={`/images/flags/${flag.icon}.svg`}
              alt={flag.code}
              width={56}
              height={56}
              className="w-full h-full object-cover"
              priority={true}
              blurDataURL={`/images/flags/${flag.icon}.svg`}
            />
          </motion.div>
        ))}
      </motion.div> */}
      <div className="space-y-2 flex flex-col items-center">
        <Image
          src="/images/flags/countries.webp"
          alt="flags"
          priority={true}
          width={824}
          height={383}
          blurDataURL="/images/flags/countries.webp"
          className="dark:hidden"
        />
        <Image
          src="/images/illustrations/countries-dark.webp"
          alt="flags"
          priority={true}
          width={824}
          height={383}
          blurDataURL="/images/illustrations/countries-dark.webp"
          className="hidden dark:block"
        />
        <p className="hidden md:block font-light text-asanka-foreground font-heading">Coming very soon you can send to your loved ones to al 5<span className="font-sans">4</span> african countries</p>
        <p className="md:hidden font-light text-asanka-foreground font-heading text-center text-sm">Coming soon to these countires</p>
      </div>
    </div>
  )
}
export default WhereItWorks;