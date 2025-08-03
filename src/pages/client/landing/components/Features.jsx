import React from "react";
import featuresBg from "../../../../assets/features-bg.png";

const Features = () => {
  return (
    <div
      id="features"
      className="min-h-screen relative w-full flex flex-col items-center bg-black overflow-hidden py-10 justify-start"
      style={{
        backgroundImage: `url(${featuresBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Radial overlay: darkest at edges, softer in the middle */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at center 80%, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,0.95) 85%, rgba(0,0,0,1) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-white">Features</div>
    </div>
  );
};

export default Features;
