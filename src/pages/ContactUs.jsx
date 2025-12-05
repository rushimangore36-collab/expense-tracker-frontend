import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full min-h-screen px-6 py-10 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

        <p className="text-lg mb-6">
          If you have any questions or want to complain about something you
          broke yourself, reach out using the information below.
        </p>

        <div className="space-y-4 text-lg">
          <p>
            <span className="font-semibold">Email:</span>{" "}
            rushimangore36@gmail.com
          </p>
          <p>
            <span className="font-semibold">Phone:</span> +91 99757 44587
          </p>
          <p>
            <span className="font-semibold">Address:</span> Kolhapur,
            Maharashtra, India
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">Working Hours</h2>
          <p className="text-lg">Monday to Saturday: 10 AM to 6 PM</p>
          <p className="text-lg">Sunday: Closed (even code needs rest)</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
