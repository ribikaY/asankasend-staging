"use client";

import Image from "next/image";
import { motion } from "motion/react";

const getCardVariants = (position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right') => {
  const directions = {
    'top-left': { x: -40, y: -40 },
    'top-right': { x: 40, y: -40 },
    'bottom-left': { x: -40, y: 40 },
    'bottom-right': { x: 40, y: 40 },
  };

  const delays = {
    'top-left': 0,
    'top-right': 0.15,
    'bottom-left': 0.3,
    'bottom-right': 0.45,
  };

  return {
    hidden: {
      opacity: 0,
      x: directions[position].x,
      y: directions[position].y,
      rotate: -5,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        delay: delays[position],
        duration: 0.7,
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };
};

const textVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function WhyUs() {
  return (
    <div id="about" className="mt-14 md:mt-0 py-14 md:py-20 lg:py-24 relative">
      <div className="container flex flex-col gap-8 sm:gap-14 md:gap-8 z-20">
        <motion.div
          className="space-y-4 md:space-y-4 lg:min-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textVariants}
        >
          <motion.h1
            className="text-3xl md:text-5xl lg:text-[65px] font-heading font-extrabold text-asanka-foreground leading-[1.1] lg:leading-[1.05] text"
            variants={textItemVariants}
          >
            What Makes Asanka <br />Send Different
          </motion.h1>
          <motion.p
            className="font-light text-muted-foreground leading-relaxed text-[15px] md:text-base"
            variants={textItemVariants}
          >
            While most remittance apps stop at sending cash, <br />Asanka Send helps you decide how your money will be used.
          </motion.p>
          <motion.p
            className="font-light text-muted-foreground text-[15px] md:text-base"
            variants={textItemVariants}
          >
            All from one simple mobile app made with a mother&apos;s heart and care
          </motion.p>
        </motion.div>

        <div className="flex flex-col sm:flex-row w-full justify-between sm:gap-4 md:gap-6 z-20 md:mt-10">
          {/* Left Side Feature Block */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={getCardVariants('top-left')}
            className="space-y-6 dark:space-y-8 flex-1 w-full"
          >
            <div className="relative w-full overflow-hidden">
              <Image
                src="/images/illustrations/send-money1.webp"
                alt="Money illustration"
                width={672}
                height={600}
                priority
                blurDataURL="/images/illustrations/send-money1.webp"
                className="w-full h-auto object-cover dark:hidden"
              />

              <Image
                src="/images/illustrations/send-money-dark.webp"
                alt="Money illustration"
                width={672}
                height={600}
                priority
                blurDataURL="/images/illustrations/send-money-dark.webp"
                className="w-full object-cover h-[300px] md:h-[400px] lg:h-[500px] xl:h-auto xl:max-h-[653px] rounded-4xl xl:rounded-[50px] hidden dark:block"
              />
              <p className="text-sm font-heading font-bold text-white leading-4 absolute bottom-5 left-5 sm:hidden">
                Send money instantly
              </p>
            </div>
            <p className="hidden sm:block text-lg lg:text-xl 2xl:text-2xl font-heading font-light text-foreground/80 dark:text-muted-foreground leading-tight lg:leading-6 pl-1">
              Send money instantly
            </p>
          </motion.div>

          {/* Right Side Feature Block */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={getCardVariants('top-right')}
            className="space-y-6 dark:space-y-8 flex-1 w-full"
          >
            <div className="relative w-full overflow-hidden">
              <Image
                src="/images/illustrations/airtime1.webp"
                alt="Airtime illustration"
                width={672}
                height={600}
                priority
                blurDataURL="/images/illustrations/airtime1.webp"
                className="w-full h-auto object-cover dark:hidden"
              />
              <Image
                src="/images/illustrations/airtime1-dark.webp"
                alt="Airtime illustration"
                width={672}
                height={600}
                priority
                blurDataURL="/images/illustrations/airtime1-dark.webp"
                className="w-full object-cover h-[300px] md:h-[400px] lg:h-[500px] xl:h-auto xl:max-h-[653px] rounded-4xl xl:rounded-[50px] border border-border/50 hidden dark:block"
              />
              <p className="text-sm font-heading font-bold text-white leading-4 absolute bottom-5 left-5 sm:hidden">
                Save toward future goals back home
              </p>
            </div>
            <p className="hidden sm:block text-lg lg:text-xl 2xl:text-2xl font-heading font-light text-foreground/80 dark:text-muted-foreground leading-tight lg:leading-6 pl-1">
              Pay school fees, utilities, and airtime directly
            </p>
          </motion.div>
        </div>
      </div>

      {/* logo illustration */}
      <Image
        src="/images/logo/logo-icon-illustration1.svg"
        alt="Asanka Illustration"
        width={570}
        height={633}
        className="absolute -top-3 sm:top-0 md:top-32 -right-10 sm:right-0 opacity-80 dark:opacity-60 select-none pointer-events-none z-10 w-[300px] h-[422px] md:w-[450px] md:h-[633px]"
      />

    </div>
  )
}
export default WhyUs;