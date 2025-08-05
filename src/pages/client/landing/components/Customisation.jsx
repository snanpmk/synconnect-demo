import React from "react";
import { Palette } from "lucide-react";
import customiseAbstractBg from "../../../../assets/customisation-card-abstract.png";

const Customisation = () => {
  // Function to get background size based on screen width
  const getBackgroundSize = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width < 480) return "250%"; // Very zoomed for mobile
      if (width < 768) return "220%"; // More zoomed for small tablets
      if (width < 1024) return "190%"; // Medium zoom for tablets
      if (width < 1440) return "0%"; // Less zoom for desktop
      return "150%"; // Least zoom for large screens
    }
    return "190%"; // Default fallback
  };

  return (
    <section
      className="relative min-h-screen w-full flex flex-col items-center justify-start bg-black overflow-hidden  px-4"
      id="product"
      style={{
        backgroundImage: `url(${customiseAbstractBg})`,
        backgroundSize: getBackgroundSize(),
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="pointer-events-none absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-transparent z-1" />
      {/* Content Container */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center lg:items-start"></div>
      </div>
      <CardIntro />
      <div
        className="pointer-events-none absolute left-1/2 top-[65%] -translate-x-1/2 -translate-y-1/2 z-[1] w-80 h-[50px] sm:w-[600px] sm:h-[300px] md:w-[900px] md:h-[400px] lg:w-[1200px] lg:h-[500px] whiteGlow"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.37) 60%, transparent 100%)",
          opacity: 0.72,
        }}
        aria-hidden="true"
      />
    </section>
  );
};

export default Customisation;

const HeadingSection = () => (
  <div className="flex-1 text-center lg:text-left mb-3 md:mb-0 ">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight">
      Specially forged for you
    </h1>
  </div>
);

const ContentSection = () => (
  <div className="flex-1 flex flex-col gap-6 sm:gap-8 md:gap-10 items-center lg:items-start text-center lg:text-left">
    <span className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-md">
      Make an impression with customized card,
      <br className="hidden sm:block" />
      <span className="sm:hidden"> </span>
      designed for your business
    </span>
    <CustomiseButton />
  </div>
);

const CustomiseButton = () => (
  <button className="btn-primary mt-4 sm:mt-6 md:mt-8 lg:mt-10 px-4 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg rounded-full shadow-md font-medium flex items-center gap-2 hover:scale-105 transition-transform duration-200 w-fit">
    <Palette className="w-4 h-4 sm:w-5 sm:h-5" />
    <span className="whitespace-nowrap">Customise your card</span>
  </button>
);

const CardIntro = () => (
  <div className="flex flex-col lg:flex-row z-20">
    <HeadingSection />
    <ContentSection />
  </div>
);
