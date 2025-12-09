import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/common/Button";
import Icon from "@/components/common/Icon";
import "../App.css";

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
    <div className="onboarding-screen">
      <div className="onboarding-content">
        <div className="carousel-container">
          <div className="carousel-slide">
            <div className="slide-icon">{slides[currentSlide].icon}</div>
            <h1 className="slide-title">{slides[currentSlide].title}</h1>
            <p className="slide-description">
              {slides[currentSlide].description}
            </p>
          </div>

          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  index === currentSlide ? "active" : ""
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        <div className="carousel-navigation">
          {currentSlide > 0 && (
            <Button
              variant="secondary"
              onClick={prevSlide}
              className="nav-button prev-button"
            >
              <Icon name="arrowBack" /> Previous
            </Button>
          )}

          {currentSlide < slides.length - 1 ? (
            <Button
              variant="primary"
              onClick={nextSlide}
              className="nav-button next-button"
            >
              Next <Icon name="arrowForward" />
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={handleGetStarted}
              className="nav-button get-started-button"
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
