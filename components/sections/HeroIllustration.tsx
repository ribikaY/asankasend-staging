import Image from "next/image";

function HeroIllustration() {
  return (
    <>
      {/* Desktop light mode — deferred on mobile to avoid competing with LCP */}
      <Image
        src="/images/mock-ups/hero-mockup-new.webp"
        alt=""
        width={700}
        height={841}
        className="hidden md:block md:w-full md:h-full md:object-contain dark:hidden"
        sizes="(min-width: 768px) 700px, 0px"
        loading="lazy"
        aria-hidden
      />

      {/* Desktop dark mode */}
      <Image
        src="/images/mock-ups/hero-dark1.webp"
        alt=""
        width={700}
        height={841}
        className="md:w-full md:h-full md:object-contain hidden dark:md:block"
        sizes="(min-width: 768px) 700px, 0px"
        loading="lazy"
        aria-hidden
      />

      {/* Mobile LCP image */}
      <Image
        src="/images/mock-ups/hero-dark-mobile.webp"
        alt="Hero Illustration"
        width={700}
        height={841}
        className="md:w-full md:h-full md:object-contain block md:hidden"
        sizes="(max-width: 767px) 90vw, 0px"
        quality={70}
        priority
        fetchPriority="high"
      />
    </>
  );
}

export default HeroIllustration;
