import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Icon from "@/components/common/Icon";

const RegisterScreen = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);

      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        // In a real app, you would register the user here
        navigate("/profile-setup");
      }, 1500);
    }
  };

  const handleGoogleRegister = () => {
    // Simulate Google registration
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/profile-setup");
    }, 1500);
  };

  const handleFacebookRegister = () => {
    // Simulate Facebook registration
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/profile-setup");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 py-8">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Create Account</h1>
          <p className="text-gray-600">
            Join HealthPadi to start your health journey
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Input
              label="First Name"
              id="firstName"
              type="text"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
            />

            <Input
              label="Last Name"
              id="lastName"
              type="text"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
          </div>

          <Input
            label="Email Address"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />

          <Input
            label="Password"
            id="password"
            type="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
          />

          <Input
            label="Confirm Password"
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
          />

          <div className="text-sm">
            <label className="flex items-start gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <span className="text-gray-600 leading-tight">
                I agree to the Terms of Service and Privacy Policy
              </span>
            </label>
          </div>

          <Button
            type="submit"
            variant="primary"
            fullWidth
            disabled={isLoading}
            className="mt-2"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <Icon name="spinner" className="animate-spin" /> Creating
                Account...
              </span>
            ) : (
              "Create Account"
            )}
          </Button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm mb-4 relative flex items-center justify-center before:content-[''] before:flex-1 before:border-b before:border-gray-200 before:mr-4 after:content-[''] after:flex-1 after:border-b after:border-gray-200 after:ml-4">
            or continue with
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              variant="secondary"
              onClick={handleGoogleRegister}
              disabled={isLoading}
              className="flex items-center gap-2 flex-1"
            >
              <Icon name="google" /> Google
            </Button>
            <Button
              variant="secondary"
              onClick={handleFacebookRegister}
              disabled={isLoading}
              className="flex items-center gap-2 flex-1"
            >
              <Icon name="facebook" /> Facebook
            </Button>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            Already have an account?{" "}
            <button
              className="text-primary font-bold hover:underline bg-transparent border-none cursor-pointer p-0 ml-1"
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
