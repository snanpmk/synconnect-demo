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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-4">
      {/* Background Animation */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-900/20 rounded-full opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-800/20 rounded-full opacity-30"></div>
      </div>

      <div className="max-w-md w-full">
        {/* Main Card */}
        <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl p-8 text-center transform transition-all duration-500 hover:scale-105">
          {/* Header Icon */}
          <div className="relative mb-6">
            <div className="bg-green-600 rounded-full p-4 inline-block">
              <CurrentIcon className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-white mb-4">
            System Maintenance
          </h1>

          {/* Message */}
          <p className="text-gray-300 mb-6 leading-relaxed">
            We're currently performing scheduled maintenance to improve your
            experience. Thank you for your patience!
          </p>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="bg-gray-700 rounded-full h-3 overflow-hidden mb-2">
              <div
                className="bg-gradient-to-r from-green-500 to-green-400 h-full rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="text-sm text-gray-400">{progress}% Complete</div>
          </div>

          {/* Current Step */}
          <div className="flex items-center justify-center space-x-3 p-3 bg-gray-800 border border-gray-600 rounded-lg mb-6">
            <CurrentIcon className="w-5 h-5 text-green-400" />
            <span className="text-sm font-medium text-gray-200">
              {maintenanceSteps[currentStep]?.label}
            </span>
          </div>

          {/* Estimated Time */}
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 mb-6">
            <Clock className="w-4 h-4" />
            <span>Estimated time: 2 hours</span>
          </div>

          {/* Status Alert */}
          <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
              <div className="text-sm text-yellow-200">
                <p className="font-medium">Service Temporarily Unavailable</p>
                <p>We'll be back online shortly!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400 mb-2">
            For urgent matters, contact our support team
          </p>
          <button className="text-green-400 hover:text-green-300 transition-colors duration-200 font-medium hover:underline">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
