import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmailAuthScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // In a real app, we would authenticate here
    // For prototype, we'll just navigate to profile setup
    navigate("/profile-setup");
  };

  return (
    <div className="p-5 max-w-[500px] mx-auto flex flex-col justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-center mb-8 text-2xl font-bold">
          Login with Email
        </h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-5"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-5"
        />
        <button
          className="bg-primary text-white w-full py-3 text-lg"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default EmailAuthScreen;
