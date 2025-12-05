import React from "react";

const Developer = () => {
  return (
    <div className="w-full min-h-screen px-6 py-10 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow">
        <h1 className="text-4xl font-bold mb-6">Developer</h1>

        <p className="text-lg mb-6">
          This project is developed by Rushikesh Mangore, who apparently decided
          that a clean, fast, minimal expense tracker would reduce at least
          *one* headache in daily life.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            Languages And Technologies Used
          </h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>React JS</li>
            <li>TailwindCSS</li>
            <li>Node & Express (Backend)</li>
            <li>MongoDB (Database)</li>
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">Mission</h2>
          <p className="text-lg">
            Build useful, simple tools that actually help people instead of
            drowning them in features they never asked for.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Developer;
