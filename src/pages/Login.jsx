import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setLogged }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const API = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  async function handleLogin() {
    const res = await fetch(`${API}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    console.log("RESPONSE:", data);

    if (data.token) {
      localStorage.setItem("token", data.token);
      navigate("/home");
      setLogged(true);
    }
  }

  return (
    <div className="h-80 flex justify-center mt-20 ">
      <div className="bg-white p-8 rounded-xl shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-linear-to-r from-blue-800 to-blue-500 text-white py-2 rounded-md"
        >
          Login
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?
          <button
            className="text-blue-600 ml-1"
            onClick={() => navigate("/auth/signup")}
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}
