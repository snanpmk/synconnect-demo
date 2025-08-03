import React, { useEffect, useState } from "react";
import {
  User,
  Eye,
  UserPlus,
  MousePointerClick,
  Percent,
  Facebook,
  Linkedin,
  X,
  MessageCircle,
  Camera,
  Send,
  TrendingUp,
  TrendingDown,
  Smartphone,
  Monitor,
  Tablet,
  Share2,
  Download,
  Settings,
  Zap,
  QrCode,
  Award,
  MapPin,
  BarChart3,
  Users,
} from "lucide-react";

const platformIcons = {
  whatsapp: <MessageCircle size={20} className="text-gray-400" />,
  instagram: <Camera size={20} className="text-gray-400" />,
  telegram: <Send size={20} className="text-gray-400" />,
  x: <X size={20} className="text-gray-400" />,
  facebook: <Facebook size={20} className="text-gray-400" />,
  linkedin: <Linkedin size={20} className="text-gray-400" />,
};

const linkData = [
  {
    name: "whatsApp",
    value: 26,
    icon: "whatsapp",
    clickRate: 4.2,
    isActive: true,
    lastActive: "1h ago",
  },
  {
    name: "instagram",
    value: 23,
    icon: "instagram",
    clickRate: 3.8,
    isActive: true,
    lastActive: "30m ago",
  },
  {
    name: "telegram",
    value: 7,
    icon: "telegram",
    clickRate: 2.1,
    isActive: false,
    lastActive: "2d ago",
  },
  {
    name: "X",
    value: 8,
    icon: "x",
    clickRate: 1.9,
    isActive: true,
    lastActive: "4h ago",
  },
  {
    name: "faceBook",
    value: 13,
    icon: "facebook",
    clickRate: 3.2,
    isActive: false,
    lastActive: "1d ago",
  },
  {
    name: "linkedIn",
    value: 3,
    icon: "linkedin",
    clickRate: 8.7,
    isActive: true,
    lastActive: "15m ago",
  },
];

const trendingData = [
  { metric: "views", current: 20, previous: 15, trend: "up" },
  { metric: "clicks", current: 0, previous: 2, trend: "down" },
  { metric: "connections", current: 2, previous: 1, trend: "up" },
];

const locationData = [
  { city: "New York", country: "USA", visits: 12 },
  { city: "London", country: "UK", visits: 8 },
  { city: "Tokyo", country: "Japan", visits: 5 },
  { city: "Mumbai", country: "India", visits: 15 },
];

const recentActivity = [
  { type: "view", location: "New York", time: "5 min ago" },
  { type: "click", platform: "LinkedIn", time: "1h ago" },
  { type: "view", location: "London", time: "2h ago" },
  { type: "connection", platform: "WhatsApp", time: "3h ago" },
];

// Navigation Component - Glass effect
const Navigation = ({ activeTab, onTabChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50); // Show compact mode after 50px scroll
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4">
      <div className="flex justify-center">
        <div
          className={`flex glass-gradient rounded-xl p-1 transition-all duration-300 ${
            isScrolled ? "backdrop-blur-xl bg-black/50" : ""
          }`}
        >
          <button
            onClick={() => onTabChange("insights")}
            className={`flex items-center rounded-lg transition-all duration-300 ${
              activeTab === "insights"
                ? "bg-[var(--color-primary)] text-black shadow-lg"
                : "text-gray-400 hover:text-white hover:bg-white/10"
            } ${isScrolled ? "px-3 py-2" : "px-4 py-2"}`}
          >
            <BarChart3
              size={16}
              className={`transition-all duration-300 ${
                isScrolled ? "mr-0" : "mr-2"
              }`}
            />
            <span
              className={`transition-all duration-300 overflow-hidden ${
                isScrolled
                  ? "opacity-0 max-w-0 ml-0"
                  : "opacity-100 max-w-[100px] ml-0"
              }`}
            >
              Analytics
            </span>
          </button>

          <button
            onClick={() => onTabChange("connections")}
            className={`flex items-center rounded-lg transition-all duration-300 ${
              activeTab === "connections"
                ? "bg-[var(--color-primary)] text-black shadow-lg"
                : "text-gray-400 hover:text-white hover:bg-white/10"
            } ${isScrolled ? "px-3 py-2" : "px-4 py-2"}`}
          >
            <Users
              size={16}
              className={`transition-all duration-300 ${
                isScrolled ? "mr-0" : "mr-2"
              }`}
            />
            <span
              className={`transition-all duration-300 overflow-hidden ${
                isScrolled
                  ? "opacity-0 max-w-0 ml-0"
                  : "opacity-100 max-w-[100px] ml-0"
              }`}
            >
              Connections
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Header Component
const Header = () => (
  <div className="w-full flex items-center mb-6">
    <div className="text-2xl font-semibold mr-3 text-white">
      Hello, <span className="text-[var(--color-primary)]">Sinan</span>
    </div>
    <div className="ml-auto">
      <div className="w-12 h-12 rounded-full border-2 border-[var(--color-primary)] bg-[var(--color-primary)] flex items-center justify-center shadow-lg shadow-[var(--color-primary)]/20">
        <User size={32} className="text-black" />
      </div>
    </div>
  </div>
);

// Time Range Selector Component - Solid background
const TimeRangeSelector = ({ selectedRange, onRangeChange }) => {
  const timeRanges = ["24h", "7d", "30d", "1y"];

  return (
    <div className="flex bg-solid-dark rounded-lg p-1 mb-4">
      {timeRanges.map((range) => (
        <button
          key={range}
          onClick={() => onRangeChange(range)}
          className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            selectedRange === range
              ? "bg-[var(--color-primary)] text-black shadow-sm"
              : "text-gray-400 hover:text-white hover:bg-gray-800"
          }`}
        >
          {range}
        </button>
      ))}
    </div>
  );
};

// Quick Stats with Trends Component
const QuickStats = () => (
  <div className="w-full flex justify-between mb-4">
    {trendingData.map(({ metric, current, previous, trend }) => {
      const percentage =
        previous > 0 ? Math.round(((current - previous) / previous) * 100) : 0;
      const TrendIcon = trend === "up" ? TrendingUp : TrendingDown;
      const trendColor =
        trend === "up" ? "text-[var(--color-primary)]" : "text-red-400";

      return (
        <div key={metric} className="flex flex-col items-center">
          <div className="flex items-center">
            {/* <span className="font-bold text-lg text-white">{current}</span> */}
            {percentage !== 0 && (
              <>
                <TrendIcon className={`ml-1 ${trendColor}`} size={16} />
                <span className={`text-sm ${trendColor} ml-1`}>
                  {Math.abs(percentage)}%
                </span>
              </>
            )}
          </div>
          <span className="text-xs text-gray-400 capitalize">{metric}</span>
        </div>
      );
    })}
  </div>
);

// Quick Actions Component - Solid background
const QuickActions = () => (
  <div className="flex gap-2 mb-4">
    <button className="flex-1 bg-solid-dark text-white py-2 px-3 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-all duration-200">
      <Share2 size={16} className="mr-1" />
      Share
    </button>
    <button className="flex-1 bg-solid-dark text-white py-2 px-3 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-all duration-200">
      <Download size={16} className="mr-1" />
      Export
    </button>
    <button className="flex-1 bg-solid-dark text-white py-2 px-3 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-all duration-200">
      <Settings size={16} className="mr-1" />
      Settings
    </button>
  </div>
);

// Goal Progress Component - Glass effect
const GoalProgress = () => {
  const currentViews = 26;
  const goalViews = 100;
  const progressPercentage = (currentViews / goalViews) * 100;

  return (
    <div className="glass rounded-xl p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-white">Monthly Goal</span>
        <span className="text-sm text-gray-400">
          {currentViews}/{goalViews} views
        </span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2">
        <div
          className="bg-[var(--color-primary)] h-2 rounded-full transition-all duration-300 shadow-sm shadow-[var(--color-primary)]/30"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <div className="text-xs text-gray-400 mt-1">
        {goalViews - currentViews} views to reach goal
      </div>
    </div>
  );
};

// Annual Stats Component - Glass gradient effect
const AnnualStats = () => (
  <div className="w-full grid grid-cols-2 gap-4 mb-4">
    <div className="glass-gradient text-white rounded-xl flex flex-col items-center py-4 glass-hover">
      <Eye className="mb-2 text-gray-300" />
      <div className="text-2xl font-bold">3,175</div>
      <div className="text-sm font-medium text-gray-400">Views</div>
    </div>
    <div className="glass-gradient text-white rounded-xl flex flex-col items-center py-4 glass-hover">
      <MousePointerClick className="mb-2 text-gray-300" />
      <div className="text-2xl font-bold">80</div>
      <div className="text-sm font-medium text-gray-400">Clicks</div>
    </div>
    <div className="glass-gradient text-white rounded-xl flex flex-col items-center py-4 glass-hover">
      <UserPlus className="mb-2 text-gray-300" />
      <div className="text-2xl font-bold">2</div>
      <div className="text-sm font-medium text-gray-400">Connections</div>
    </div>
    <div className="glass-gradient text-white rounded-xl flex flex-col items-center py-4 glass-hover">
      <Percent className="mb-2 text-gray-300" />
      <div className="text-2xl font-bold">3%</div>
      <div className="text-sm font-medium text-gray-400">Click Rate</div>
    </div>
  </div>
);

// Top Locations Component - Solid background
const TopLocations = () => (
  <div className="bg-solid-dark rounded-xl p-4 mb-4">
    <h3 className="font-semibold mb-3 text-white flex items-center">
      <MapPin size={16} className="mr-2 text-gray-300" />
      Top Locations
    </h3>
    {locationData.map((location) => (
      <div
        key={`${location.city}-${location.country}`}
        className="flex justify-between items-center mb-2 last:mb-0 hover:bg-gray-800 -mx-2 px-2 py-1 rounded transition-all duration-200"
      >
        <span className="text-white">
          {location.city}, {location.country}
        </span>
        <span className="font-bold text-white">{location.visits}</span>
      </div>
    ))}
  </div>
);

// Live Activity Feed Component - Glass effect
const LiveActivityFeed = () => (
  <div className="glass rounded-xl p-4 mb-4">
    <h3 className="font-semibold mb-3 text-white flex items-center">
      <Zap size={16} className="mr-2 text-yellow-400" />
      Recent Activity
    </h3>
    <div className="space-y-2">
      {recentActivity.map((activity, index) => (
        <div
          key={index}
          className="flex items-center text-sm hover:bg-white/5 -mx-2 px-2 py-1 rounded transition-all duration-200"
        >
          <div className="w-2 h-2 bg-white/30 rounded-full mr-2"></div>
          <span className="text-gray-400">
            {activity.type === "view" && `New view from ${activity.location}`}
            {activity.type === "click" &&
              `${activity.platform} profile clicked`}
            {activity.type === "connection" &&
              `New connection via ${activity.platform}`}
            <span className="ml-1">• {activity.time}</span>
          </span>
        </div>
      ))}
    </div>
  </div>
);

// Enhanced Platform Performance Component - Solid background
const PlatformPerformance = () => (
  <div className="bg-solid-dark rounded-xl p-4 mb-4">
    <h3 className="font-semibold mb-3 text-white">Platform Performance</h3>
    {linkData.map(({ name, value, icon, clickRate, isActive, lastActive }) => (
      <div
        key={name}
        className="flex items-center justify-between py-3 border-b border-gray-700 last:border-0 hover:bg-gray-800 -mx-2 px-2 rounded transition-all duration-200"
      >
        <div className="flex items-center">
          {platformIcons[icon]}
          <div className="ml-3">
            <div className="flex items-center">
              <span className="capitalize text-white font-medium">{name}</span>
              {isActive && (
                <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full ml-2 shadow-sm shadow-[var(--color-primary)]/50"></div>
              )}
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <span>{clickRate}% click rate</span>
              <span>•</span>
              <span>{lastActive}</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="font-bold text-white">{value}</div>
          <span className="text-xs text-gray-400">clicks</span>
        </div>
      </div>
    ))}
  </div>
);

// QR Code Share Component - Glass gradient effect
const QRCodeShare = () => (
  <div className="glass-gradient rounded-xl p-4 text-white mb-4 glass-hover">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-semibold">Share Your Card</h3>
        <p className="text-sm text-gray-400">
          Generate QR code for easy sharing
        </p>
      </div>
      <QrCode
        size={40}
        className="cursor-pointer hover:scale-105 transition-transform text-gray-300 hover:text-[var(--color-primary)]"
      />
    </div>
  </div>
);

// Achievement Badges Component - Solid background
const AchievementBadges = () => (
  <div className="grid grid-cols-3 gap-2 mb-4">
    <div className="bg-solid-dark rounded-lg p-2 text-center hover:bg-gray-800 transition-all duration-200">
      <Award className="mx-auto text-yellow-400 mb-1" size={20} />
      <div className="text-xs text-white">First 100 Views</div>
    </div>
    <div className="bg-solid-dark rounded-lg p-2 text-center hover:bg-gray-800 transition-all duration-200">
      <UserPlus className="mx-auto text-blue-400 mb-1" size={20} />
      <div className="text-xs text-white">Networker</div>
    </div>
    <div className="bg-solid-dark rounded-lg p-2 text-center hover:bg-gray-800 transition-all duration-200">
      <Eye className="mx-auto text-purple-400 mb-1" size={20} />
      <div className="text-xs text-white">Popular</div>
    </div>
  </div>
);

// Main Dashboard Component
const Dashboard = () => {
  const [selectedRange, setSelectedRange] = useState("24h");
  const [activeTab, setActiveTab] = useState("insights");

  return (
    <div className="app-container">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[var(--color-primary)]/30 via-transparent to-transparent blur-3xl z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-0 right-0 w-[200px] h-[200px] rounded-full bg-gradient-to-tr from-[#67D861]/40 via-transparent to-transparent blur-2xl z-0"
      />
      <Header />

      {activeTab === "insights" ? (
        <>
          <TimeRangeSelector
            selectedRange={selectedRange}
            onRangeChange={setSelectedRange}
          />
          <QuickActions />
          <QuickStats />
          <GoalProgress />
          <AnnualStats />
          <TopLocations />
          <LiveActivityFeed />
          <PlatformPerformance />
          <QRCodeShare />
          <AchievementBadges />
        </>
      ) : (
        <div className="text-center py-8 text-gray-400">
          <UserPlus size={48} className="mx-auto mb-4 opacity-50" />
          <p>Connections feature coming soon!</p>
        </div>
      )}

      <button className="btn w-full">See Profile</button>
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Dashboard;
