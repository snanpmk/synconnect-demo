import React from "react";
import { Quote } from "lucide-react";
import MovingDots from "../../../../common/components/MovingDots";

// Quote Icon Component
const QuoteIcon = ({ size = 24, strokeWidth = 1.5 }) => {
  return (
    <div className="bg-black p-3 absolute top-2 md:top-6 right-2 md:right-6 rounded-full">
      <Quote className="text-white-500" size={size} strokeWidth={strokeWidth} />
    </div>
  );
};

// Author Info Component
const AuthorInfo = ({ name, role }) => {
  return (
    <div>
      <h4 className="text-white font-semibold text-base mb-1">{name}</h4>
      <p className="text-gray-400 text-sm">{role}</p>
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="gradient-border shadow-lg hover:transform hover:scale-105 transition-all duration-300 backdrop-blur-lg rounded-3xl aspect-square p-10 md:p-8 relative glass-gradient">
      <QuoteIcon />

      {/* Testimonial Text */}
      <p className="text-gray-300 text-sm leading-relaxed mb-6">
        {testimonial.text}
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-gray-600/50 mb-6"></div>

      <AuthorInfo name={testimonial.name} role={testimonial.role} />
    </div>
  );
};

// Section Header Component
const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16 z-20">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      <p className="text-gray-400 text-lg">{subtitle}</p>
    </div>
  );
};

// Testimonial Grid Component
const TestimonialGrid = ({ testimonials }) => {
  return (
    <div className="grid z-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
};

// Main Testimonials Component
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      name: "Hadid Khan",
      role: "UI/UX Designer",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      name: "Hadid Khan",
      role: "UI/UX Designer",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      name: "Hadid Khan",
      role: "UI/UX Designer",
    },
  ];

  return (
    <section
      className="relative bg-black w-full min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 px-4"
      id="testimonials"
    >
      {/* Overlay that transitions to black at the bottom */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-80 bg-gradient-to-t from-transparent to-black"></div>
      </div> */}
      <MovingDots />
      <SectionHeader
        title="What Our Users Say"
        subtitle="Trusted by our users around the world."
      />

      <TestimonialGrid testimonials={testimonials} />

      {/* Overlay that transitions to black at the bottom */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-black to-transparent"></div>
      </div> */}
    </section>
  );
};

export default Testimonials;
