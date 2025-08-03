import React from "react";
import featuresBg from "../../../../assets/features-bg.png";
import NFCCardImg from "../../../../assets/features-card-preview.png";
import { Users, Package, Share2, BarChart3, Settings } from "lucide-react";

const Features = () => {
  const features = [
    {
      name: "Instant Connect",
      icon: "Users",
      description: "Exchange contacts seamlessly",
      position: { top: "10%", left: "10%" },
      zIndex: 5, // Behind NFC card
    },
    {
      name: "Product Showcase",
      icon: "Package",
      description: "Display your catalog",
      position: { top: "15%", right: "15%" },
      zIndex: 15, // In front of NFC card
    },
    {
      name: "One-Tap Share",
      icon: "Share2",
      description: "Share everything instantly",
      position: { top: "60%", left: "5%" },
      zIndex: 15, // In front of NFC card
    },
    {
      name: "Smart Analytics",
      icon: "BarChart3",
      description: "Track engagement insights",
      position: { top: "65%", right: "10%" },
      zIndex: 5, // Behind NFC card
    },
    {
      name: "Easy Customize",
      icon: "Settings",
      description: "Personalize your profile",
      position: { top: "30%", left: "20%" },
      zIndex: 15, // In front of NFC card
    },
  ];

  // Icon component mapping
  const getIcon = (iconName) => {
    const icons = {
      Users,
      Package,
      Share2,
      BarChart3,
      Settings,
    };
    const IconComponent = icons[iconName];
    return <IconComponent size={40} />;
  };

  // Feature block component
  const FeatureBlock = ({ feature }) => (
    <div
      className="absolute   bg-gradient-to-tr from-neutral-400 via-neutral-800 to-neutral-400 p-1 rounded-2xl"
      style={{
        top: feature.position.top,
        left: feature.position.left,
        right: feature.position.right,
        zIndex: feature.zIndex,
      }}
    >
      <div className="aspect-square bg-gradient-to-tr from-black to-neutral-800 backdrop-opacity-95 rounded-2xl pt-4 px-4 pb-3 min-w-[120px]">
        <div className="flex flex-col items-start pt-7 space-y-2">
          {getIcon(feature.icon)}
          <h3 className="font-medium text-xl break-all whitespace-normal leading-tight">
            {feature.description}
          </h3>
        </div>
      </div>
    </div>
  );

  return (
    <section
      className="min-h-screen relative w-full flex flex-col items-center bg-black overflow-hidden py-10 justify-start"
      style={{
        backgroundImage: `url(${featuresBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Radial overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.80) 70%,rgba(0,0,0,0.95) 85%, rgba(0,0,0,1) 100%)",
        }}
      />

      <div className="h-full text-white w-full flex items-center justify-center">
        {/* NFC Card Image - z-index 10 */}
        <img
          src={NFCCardImg}
          alt="NFC Business Card"
          className="w-[350px] top-20 right-1/2 translate-x-1/2 absolute z-10"
        />

        {/* Map through features and render feature blocks */}
        {features.map((feature, index) => (
          <FeatureBlock key={index} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
