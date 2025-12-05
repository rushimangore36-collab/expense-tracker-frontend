import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen px-6 py-10 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow">
        <h1 className="text-4xl font-bold mb-6">About Budget Tracker</h1>

        <p className="text-lg leading-relaxed mb-6">
          Budget Tracker is a simple and efficient app designed to help you
          record withdrawals, keep track of spending, and maintain your
          available balance with zero clutter. The goal is to make money
          management easy enough that even your half-sleep brain can use it.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="p-4 bg-gray-100 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Lightweight</h2>
            <p className="text-sm">
              No bloated features. Just clean and smooth tracking.
            </p>
          </div>

          <div className="p-4 bg-gray-100 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Fast</h2>
            <p className="text-sm">
              Loads instantly so you don’t rage while waiting.
            </p>
          </div>

          <div className="p-4 bg-gray-100 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Reliable</h2>
            <p className="text-sm">
              Your data sticks around. Refreshing won’t nuke anything.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
