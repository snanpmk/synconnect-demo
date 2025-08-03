import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  ArrowDownToLine,
  UserPlus,
  FileText,
  Repeat2,
  MessageCircle,
  Camera,
  Linkedin,
  X,
} from "lucide-react";

// Social Icon Map for Lucide
const socialIcons = {
  whatsapp: <MessageCircle size={20} />,
  instagram: <Camera size={20} />,
  linkedin: <Linkedin size={20} />,
  x: <X size={20} />,
};

const socials = [
  { name: "whatsapp", href: "#" },
  { name: "whatsapp", href: "#" },
  { name: "instagram", href: "#" },
  { name: "linkedin", href: "#" },
  { name: "x", href: "#" },
];

const actions = [
  {
    label: "Call",
    icon: <Phone size={18} />,
    style: "primary",
  },
  {
    label: "Email",
    icon: <Mail size={18} />,
    style: "glass",
  },
  {
    label: "Location",
    icon: <MapPin size={18} />,
    style: "glass",
  },
  {
    label: "Website",
    icon: <Globe size={18} />,
    style: "glass",
  },
  {
    label: "Brochure",
    icon: <FileText size={18} />,
    style: "glass",
  },
  {
    label: "Pay Me",
    icon: <ArrowDownToLine size={18} />,
    style: "primary",
  },
];

const ClientProfile = ({
  name = "Sinan Pmk",
  role = "Developer | Software Engineer",
  company = "Finnest Technologies",
  description = "Full-stack engineer skilled in React.js, MongoDB, Express.js, Node.js, HTML, CSS, JavaScript, Tailwind, and Bootstrap. Created SyncConnect for digital business cards. React.js Developer at Finnest Technologies.",
  profilePicUrl = "https://firebasestorage.googleapis.com/v0/b/synconnect-1526.appspot.com/o/2024-06-27_01%3A43%3A15_image.jpg?alt=media&token=db5710d4-0d5e-4463-ad0a-447be8ce3a6d",
  coverPicUrl = "https://firebasestorage.googleapis.com/v0/b/synconnect-1526.appspot.com/o/2024-07-28_22%3A59%3A42_image.jpg?alt=media&token=f3f568cd-59dc-46a3-b398-354159768d2f",
}) => (
  <div className="app-container relative flex flex-col items-center min-h-screen px-0">
    {/* Cover Photo with visible top */}
    <div
      className="w-full h-48 md:h-56 rounded-2xl overflow-hidden relative mb-0 z-0 bg-black/70"
      style={{
        background: `url('${coverPicUrl}') center center / cover no-repeat`,
        minHeight: "12rem",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />
    </div>

    {/* Profile Card */}
    <div className="glass-gradient shadow-xl rounded-2xl w-full max-w-lg mx-auto -mt-20 z-20 flex flex-col items-center p-6 border border-white/10 relative">
      {/* Profile image overlaps glass card */}
      <div className="w-28 h-28 rounded-full border-4 border-white/10 overflow-hidden shadow-lg shadow-[var(--color-primary)]/15 -mt-16 bg-black relative z-10">
        <img
          src={profilePicUrl}
          alt={name}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Name, company, role */}
      <h1 className="text-2xl font-semibold text-white mt-3 text-center">
        {name}
      </h1>
      <div className="text-[var(--color-primary)] font-medium text-center">
        {company}
      </div>
      <div className="text-gray-300 text-base mb-2 text-center">{role}</div>

      <div className="flex justify-center space-x-4 mt-2 mb-2">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.href}
            className="rounded-full p-2 bg-white/10 hover:bg-[var(--color-primary)] hover:text-black text-white transition border border-white/15"
            title={s.name}
          >
            {socialIcons[s.name]}
          </a>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3 w-full mt-5">
        {actions.map(({ label, icon, style }) => (
          <button
            key={label}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium border
              ${
                style === "primary"
                  ? "bg-[var(--color-primary)] text-black border-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]"
                  : "bg-transparent text-white border-white/15 hover:bg-white/10"
              }
              transition`}
            type="button"
          >
            {icon} <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Exchange/Contact Card buttons */}
      <div className="flex w-full justify-between mt-5 gap-3">
        <button className="flex-1 bg-white/10 border border-white/20 text-white hover:bg-[var(--color-primary)] hover:text-black transition rounded-md px-4 py-2 font-medium flex items-center justify-center gap-2">
          <UserPlus size={18} /> Contact
        </button>
        <button className="flex-1 border border-[var(--color-primary)] text-[var(--color-primary)] bg-transparent hover:bg-[var(--color-primary)] hover:text-black rounded-md px-4 py-2 font-medium flex items-center justify-center gap-2 transition">
          <Repeat2 size={18} /> Exchange
        </button>
      </div>

      <p className="text-gray-400 text-sm text-center mt-5">{description}</p>
    </div>
  </div>
);

export default ClientProfile;
