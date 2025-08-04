import React, { useState, useEffect } from "react";
import {
  Wrench,
  Clock,
  AlertTriangle,
  Zap,
  CheckCircle,
  RefreshCw,
} from "lucide-react";

const MaintenancePage = () => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const maintenanceSteps = [
    { icon: Wrench, label: "Server Updates" },
    { icon: Zap, label: "Database Optimization" },
    { icon: RefreshCw, label: "System Restart" },
    { icon: CheckCircle, label: "Testing Services" },
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 100);

    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % maintenanceSteps.length);
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, []);

  const CurrentIcon = maintenanceSteps[currentStep]?.icon || Wrench;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      {/* Background Animation */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-100 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-md w-full">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center transform transition-all duration-500 hover:scale-105 animate-fade-in">
          {/* Animated Header Icon */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-blue-100 rounded-full animate-ping"></div>
            <div className="relative bg-blue-500 rounded-full p-4 inline-block">
              <CurrentIcon
                className="w-8 h-8 text-white animate-spin"
                style={{ animationDuration: "2s" }}
              />
            </div>

            {/* Orbiting dots */}
            <div
              className="absolute inset-0 animate-spin"
              style={{ animationDuration: "4s" }}
            >
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-2"></div>
              <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-indigo-400 rounded-full transform -translate-x-1/2 translate-y-2"></div>
              <div className="absolute left-0 top-1/2 w-2 h-2 bg-purple-400 rounded-full transform -translate-y-1/2 -translate-x-2"></div>
              <div className="absolute right-0 top-1/2 w-2 h-2 bg-pink-400 rounded-full transform -translate-y-1/2 translate-x-2"></div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4 animate-bounce">
            System Maintenance
          </h1>

          {/* Message */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            We're currently performing scheduled maintenance to improve your
            experience. Thank you for your patience!
          </p>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="bg-gray-200 rounded-full h-3 overflow-hidden mb-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full transition-all duration-300 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>
            <div className="text-sm text-gray-500">{progress}% Complete</div>
          </div>

          {/* Current Step */}
          <div className="flex items-center justify-center space-x-3 p-3 bg-gray-50 rounded-lg mb-6">
            <CurrentIcon className="w-5 h-5 text-blue-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-700">
              {maintenanceSteps[currentStep]?.label}
            </span>
          </div>

          {/* Loading Dots */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="flex space-x-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: "1s",
                  }}
                ></div>
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-3">In Progress...</span>
          </div>

          {/* Estimated Time */}
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-6">
            <Clock className="w-4 h-4 animate-pulse" />
            <span>Estimated time: 2 hours</span>
          </div>

          {/* Status Alert */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 animate-pulse" />
              <div className="text-sm text-yellow-800">
                <p className="font-medium">Service Temporarily Unavailable</p>
                <p>We'll be back online shortly!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div
          className="mt-6 text-center animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <p className="text-sm text-gray-500 mb-2">
            For urgent matters, contact our support team
          </p>
          <button className="text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium hover:underline">
            Contact Support
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default MaintenancePage;
