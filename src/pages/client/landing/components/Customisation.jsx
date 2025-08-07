import React, { useState } from "react";
import { Image, Palette, Upload } from "lucide-react";
import customiseAbstractBg from "../../../../assets/customisation-card-abstract.png";
import {
  Controller,
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";
import { QRCodeSVG } from "qrcode.react";
import { useRef } from "react";
import useLandingStore from "../../../../store/landingStore";

const Customisation = () => {
  const getBackgroundSize = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width < 480) return "250%";
      if (width < 768) return "220%";
      if (width < 1024) return "190%";
      if (width < 1440) return "0%";
      return "150%";
    }
    return "190%";
  };

  return (
    <section
      className="relative min-h-screen w-full flex flex-col items-center justify-start bg-black  px-4"
      id="product"
      style={{
        backgroundImage: `url(${customiseAbstractBg})`,
        backgroundSize: getBackgroundSize(),
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 sm:gap-10 overflow-hidden md:gap-12 lg:gap-16 xl:gap-20 items-center lg:items-start z-50">
          <CardIntro />
          <CustomisingTool />
        </div>
      </div>
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

const CardIntro = () => {
  const { isDesignToolOpen } = useLandingStore();

  return (
    <div
      className={`flex flex-col lg:flex-row z-20 ${
        isDesignToolOpen ? "hidden" : "block"
      }`}
    >
      <HeadingSection />
      <ContentSection />
    </div>
  );
};

const HeadingSection = () => (
  <div className="flex-1 text-center lg:text-left mb-3 md:mb-0">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight">
      Specially forged for you
    </h1>
  </div>
);

const ContentSection = () => (
  <div className="flex-1 flex flex-col gap-6 sm:gap-8 md:gap-10 items-center lg:items-start text-center lg:text-left">
    <span className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-md">
      Make an impression with customized card,{" "}
      <br className="hidden sm:block" />
      <span className="sm:hidden"> </span>
      designed for your business
    </span>
    <CustomiseButton />
  </div>
);

const CustomiseButton = () => {
  const { setIsDesignToolOpen } = useLandingStore();
  return (
    <button
      onClick={setIsDesignToolOpen}
      className="btn-primary mt-4 sm:mt-6 md:mt-8 lg:mt-10 px-4 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg rounded-full shadow-md font-medium flex items-center gap-2 hover:scale-105 transition-transform duration-200 w-fit"
    >
      <Palette className="w-4 h-4 sm:w-5 sm:h-5" />
      <span className="whitespace-nowrap">Customise your card</span>
    </button>
  );
};

const CustomisingTool = () => {
  const { isDesignToolOpen } = useLandingStore();
  return (
    <main
      className={`transform transition-transform duration-900 ease-in-out
      ${isDesignToolOpen ? "translate-x-0 block" : "opacity-0 translate-x-full"}
      text-center w-full h-full`}
    >
      <div className="mb-5">
        <h1 className="font-semibold text-6xl mb-5">
          Design Your Smart <br />
          <span className="text-primary">Business Card</span>
        </h1>
        <p>
          Create a stunning professional card that makes lasting impressions.
          <br />
          Customize every detail and watch your design come to life.
        </p>
      </div>
      <CardForm />
    </main>
  );
};

const CardForm = () => {
  const methods = useForm({
    defaultValues: {
      fullName: "",
      designation: "",
      companyName: "",
      logo: "",
    },
  });

  console.log(methods.getValues());

  return (
    <FormProvider {...methods}>
      <form className="flex md:flex-row flex-col gap-4 w-full h-[700px] md:h-[600px]">
        <div className="flex flex-col flex-1 gap-4 h-full">
          <PersonalDetails />
          <LogoUpload />
        </div>
        <div className="flex flex-col flex-1 gap-4 h-full">
          <ColorPresets />
          <LivePreview />
        </div>
        <div className="hidden md:block h-full">
          <VerticalProgressBar progress={76} />
        </div>
      </form>
    </FormProvider>
  );
};

const PersonalDetails = () => {
  return (
    <div className="glass-black gradient-border rounded-2xl p-5 w-full flex flex-col justify-center flex-1">
      <h1 className="text-xl font-semibold text-start">Personal Details</h1>
      <ControlledInput
        name="fullName"
        placeholder="Full Name"
        className="gradient-border glass-gradient rounded p-3 mt-5 w-full"
      />
      <ControlledInput
        name="designation"
        placeholder="Designation"
        className="gradient-border glass-gradient rounded p-3 mt-5 w-full"
      />
      <ControlledInput
        name="companyName"
        placeholder="Company Name"
        className="gradient-border glass-gradient rounded p-3 mt-5 w-full"
      />
    </div>
  );
};

const LogoUpload = () => {
  const fileRef = useRef();
  const handleUploadClick = () => {
    fileRef.current.click();
  };
  return (
    <div className="glass-black gradient-border rounded-2xl p-5 w-full flex flex-col justify-center flex-1">
      <h1 className="text-xl font-semibold text-start mb-3">Logo</h1>
      <div className="glass gradient-border rounded-2xl flex items-center justify-center py-10">
        <div className="bg-black rounded-full p-3" onClick={handleUploadClick}>
          <Upload />
        </div>
      </div>
      <ControlledFileInput
        name="logo"
        className="mt-3 hidden text-xs text-gray-400"
        accept="image/*"
        ref={fileRef}
      />
    </div>
  );
};

const ColorPresets = () => (
  <div className="glass-black gradient-border rounded-2xl p-5 w-full flex flex-col flex-1">
    <span className="font-semibold mb-2 text-start">Quick Presets</span>
    <div>
      <div className="flex gap-3 mt-2">
        <button className="w-8 h-8 rounded-full bg-green-500 border-2 border-white" />
        <button className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white" />
        <button className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white" />
        <button className="w-8 h-8 rounded-full bg-pink-500 border-2 border-white" />
        <button className="w-8 h-8 rounded-full bg-amber-500 border-2 border-white" />
        <button className="w-8 h-8 rounded-full bg-emerald-500 border-2 border-white" />
      </div>
    </div>
    <div className="mt-5 flex gap-4">
      <div className="flex flex-col items-center w-full">
        <label className="text-xs mb-1 text-gray-300">Background Colour</label>
        <input type="color" className="w-full h-15 p-3  outline-0" />
      </div>
      <div className="flex flex-col items-center w-full">
        <label className="text-xs mb-1 text-gray-300">Text Colour</label>
        <input type="color" className="w-full h-15 p-3  outline-0" />
      </div>
      <div className="flex flex-col items-center w-full">
        <label className="text-xs mb-1 text-gray-300">Accent Colour</label>
        <input type="color" className="w-full h-15 p-3  outline-0" />
      </div>
    </div>
  </div>
);

const LivePreview = () => (
  <div className="glass-black gradient-border rounded-2xl p-5 w-full h-full flex flex-col justify-center flex-1">
    <h1 className="text-xl font-semibold text-start mb-3">Live Preview</h1>
    <div className="glass gradient-border rounded-2xl py-10 px-15 flex flex-col flex-1">
      <div className="glass gradient-border rounded-2xl flex items-center justify-center p-5 flex-1">
        <div className="bg-black rounded-full p-3">
          <Image />
        </div>
      </div>
    </div>
    <div className="flex rounded-full bg-transparent border border-primary mt-4">
      <button className="p-2 text-center w-full text-primary border-r border-primary">
        Front
      </button>
      <button className="p-2 text-center w-full text-primary">Back</button>
    </div>
  </div>
);

const VerticalProgressBar = ({ progress }) => {
  const clampedProgress = Math.min(100, Math.max(0, progress));
  return (
    <div className="flex flex-col items-center justify-center h-full ">
      <div className="relative glass-black rounded-full overflow-hidden w-2 h-full min-h-[200px] max-h-full flex-1">
        <div
          className="absolute bottom-0 left-0 w-full transition-all duration-500"
          style={{
            height: `${clampedProgress}%`,
            background: "linear-gradient(to top, #032200, #67d861)",
          }}
        />
      </div>
      <span className="text-primary inline-block [writing-mode:vertical-rl] mt-4">
        {progress}%
      </span>
    </div>
  );
};

const ControlledInput = ({
  name,
  placeholder,
  type = "text",
  className = "",
  ...rest
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <input
          {...field}
          type={type}
          placeholder={placeholder}
          className={className}
          {...rest}
        />
      )}
    />
  );
};

const ControlledFileInput = ({ name, className = "", accept, ...rest }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <input
          type="file"
          className={className}
          accept={accept}
          onChange={(e) => field.onChange(e.target.files[0])}
          {...rest}
        />
      )}
    />
  );
};
