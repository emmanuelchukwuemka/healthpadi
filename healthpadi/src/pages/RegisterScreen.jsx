import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../design-system/Input';
import Button from '../design-system/Button';
import Icon from '../design-system/Icon';
import '../App.css';

const RegisterScreen = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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
        navigate('/profile-setup');
      }, 1500);
    }
  };

  const handleGoogleRegister = () => {
    // Simulate Google registration
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/profile-setup');
    }, 1500);
  };

  const handleFacebookRegister = () => {
    // Simulate Facebook registration
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/profile-setup');
    }, 1500);
  };

  return (
    <div className="auth-screen">
      <div className="auth-container">
        <div className="auth-header">
          <h1>Create Account</h1>
          <p>Join HealthPadi to start your health journey</p>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-row">
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
          
          <div className="terms-agreement">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>
          
          <Button 
            type="submit" 
            variant="primary" 
            fullWidth 
            disabled={isLoading}
            className="auth-button"
          >
            {isLoading ? (
              <>
                <Icon name="spinner" className="spin" /> Creating Account...
              </>
            ) : (
              'Create Account'
            )}
          </Button>
        </form>
        
        <div className="social-login">
          <p className="divider">or continue with</p>
          <div className="social-buttons">
            <Button 
              variant="secondary" 
              onClick={handleGoogleRegister}
              disabled={isLoading}
              className="social-button"
            >
              <Icon name="google" /> Google
            </Button>
            <Button 
              variant="secondary" 
              onClick={handleFacebookRegister}
              disabled={isLoading}
              className="social-button"
            >
              <Icon name="facebook" /> Facebook
            </Button>
          </div>
        </div>
        
        <div className="auth-footer">
          <p>
            Already have an account?{' '}
            <button 
              className="link-button"
              onClick={() => navigate('/login')}
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