import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/common/Button";
import Icon from "@/components/common/Icon";

const OnboardingScreen = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Your Health Companion",
      description:
        "Access personalized health insights and recommendations tailored just for you.",
      icon: "❤️",
    },
    {
      id: 2,
      title: "Find Medical Care",
      description:
        "Locate hospitals, clinics, and book appointments with trusted doctors.",
      icon: "🏥",
    },
    {
      id: 3,
      title: "Emergency Support",
      description:
        "Get instant first aid guidance and emergency contact information.",
      icon: "🚨",
    },
    {
      id: 4,
      title: "Track Your Progress",
      description:
        "Monitor your health metrics and receive actionable insights.",
      icon: "📊",
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleGetStarted = () => {
    navigate("/welcome");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center p-5 bg-background text-center">
      <div className="max-w-[400px] w-full flex flex-col items-center bg-white p-8 rounded-xl shadow-lg">
        <div className="flex-1 flex flex-col justify-center items-center w-full">
          <div className="mb-8">
            <div className="text-6xl mb-4">{slides[currentSlide].icon}</div>
            <h1 className="text-2xl font-bold mb-2 text-primary">
              {slides[currentSlide].title}
            </h1>
            <p className="text-gray-600 mb-8">
              {slides[currentSlide].description}
            </p>
          </div>

          <div className="flex gap-2 justify-center mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-primary w-4" : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-between w-full mt-4">
          {currentSlide > 0 ? (
            <Button
              variant="secondary"
              onClick={prevSlide}
              className="flex items-center gap-2 mr-auto"
            >
              <Icon name="arrowBack" /> Previous
            </Button>
          ) : (
            <div />
          )}

          {currentSlide < slides.length - 1 ? (
            <Button
              variant="primary"
              onClick={nextSlide}
              className="flex items-center gap-2 ml-auto"
            >
              Next <Icon name="arrowForward" />
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={handleGetStarted}
              className="flex items-center gap-2 ml-auto"
            >
              Get Started
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen;
