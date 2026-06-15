"use client";

import dynamic from "next/dynamic";
import Header from "@/components/shared/Header";
import HeroIllustration from "@/components/sections/HeroIllustration";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { handleDownloadClick } from "@/lib/utils";

const HeroBubbles = dynamic(() => import("@/components/sections/HeroBubbles"), {
  ssr: false,
});

function Hero() {
  const [showBubbles, setShowBubbles] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const enableBubbles = () => {
      if (media.matches) {
        setShowBubbles(true);
      }
    };

    enableBubbles();
    media.addEventListener("change", enableBubbles);
    return () => media.removeEventListener("change", enableBubbles);
  }, []);

  return (
    <div className="relative bg-gradient-hero flex flex-col md:min-h-screen overflow-hidden pb-10 md:pb-0">
      <Header />
      <div className="container px-5 lg:px-6 flex flex-col xl:flex-row justify-between items-center xl:items-end z-10 gap-8 sm:gap-10 md:gap-0 pb-10 sm:pb-24 md:pb-0 pt-6 md:pt-0">
        <div className="hero-text-container self-center space-y-6 md:space-y-4 flex-1 sm:max-w-xl lg:max-w-2xl xl:min-w-[550px] 2xl:min-w-2xl sm:text-center lg:text-left md:pt-16 xl:pt-0">
          <h1 className="hero-text-item font-light text-[40px] md:text-5xl lg:text-6xl leading-11 sm:leading-13 md:leading-15">
            Send Money Back Home and Manage it from{" "}
            <span className="font-heading font-extrabold text-[#1B814B] dark:text-[#52A055] md:leading-17 2xl:block">
              One App
            </span>
          </h1>
          <p className="hero-text-item font-light text-foreground/80 leading-relaxed 2xl:max-w-xl mb-5 lg:mb-0 text-[15px] sm:text-base">
            Asanka Send is a secure financial app built with a mother&apos;s heart and care for people who want full control over what their money does for their family and community back home.
          </p>
          <div className="hero-text-item">
            <Button
              asChild
              className="rounded-full bg-asanka-secondary hover:bg-asanka-secondary/90 font-light py-6 md:py-7 z-10 md:mb-16 md:mt-5"
            >
              <Link href="#how-it-works" onClick={handleDownloadClick}>
                <span className="ml-6"> Download the app</span>
                <Download size={16} className="mr-6" />
              </Link>
            </Button>
          </div>
          <p className="hero-text-item hero-learn-more hidden xl:inline text-lg font-light text-foreground/80 relative top-32">
            <Link href="#about" className="inline-flex gap-4 items-center ">
              Learn more about asanka
              <ArrowDown size={16} className="animate-bounce" />
            </Link>
          </p>
        </div>

        <div className="relative w-full max-w-[450px] md:max-w-200 2xl:max-w-252 dark:2xl:max-w-245 aspect-square shrink-0">
          <div className="relative left-2 sm:top-0 sm:left-0 md:top-2 md:left-14 dark:xl:left-0 w-full h-full">
            <HeroIllustration />
            {showBubbles && <HeroBubbles />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
