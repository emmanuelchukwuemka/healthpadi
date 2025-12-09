import React from "react";

const AboutScreen = () => {
  return (
    <div className="p-5 max-w-[800px] mx-auto">
      <div className="mb-5">
        <h1 className="text-2xl font-bold m-0">About HealthPadi</h1>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg text-center">
        <div className="text-3xl font-bold text-primary mb-2">HealthPadi</div>

        <p className="text-gray-400 text-sm mb-6">Version 1.0.0</p>

        <div className="text-left mb-6">
          <p className="mb-4 text-gray-700 leading-relaxed">
            HealthPadi is your personal health companion designed to provide
            instant health guidance and connect you with healthcare
            professionals near you.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            Our mission is to make quality healthcare accessible to everyone by
            leveraging technology to bridge the gap between patients and
            healthcare providers.
          </p>

          <h3 className="text-lg font-bold mt-6 mb-3">Features</h3>
          <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
            <li>Symptom checker with AI-powered analysis</li>
            <li>Emergency first aid guides</li>
            <li>Hospital and clinic finder with map integration</li>
            <li>Doctor listing and appointment booking</li>
            <li>Personal health records management</li>
          </ul>

          <h3 className="text-lg font-bold mt-6 mb-3">Contact Us</h3>
          <p className="mb-1 text-gray-700">Email: support@healthpadi.com</p>
          <p className="text-gray-700">Phone: +234 123 456 7890</p>
        </div>

        <div className="text-gray-400 text-xs mt-8 pt-4 border-t border-gray-100">
          <p>© 2023 HealthPadi. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
