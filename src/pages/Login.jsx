import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const res = await fetch(
      "https://691aa27e2d8d7855756f8c58.mockapi.io/products2"
    );
    const data = await res.json();

    const user = data.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      const exists = data.find((u) => u.email === email);
      return exists ? setError("Parol noto'g'ri!") : navigate("/register");
    }

    localStorage.setItem("user", JSON.stringify(user));
    navigate("/youtube");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-md w-96 flex flex-col gap-6"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800">Kirish</h1>

        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Parol"
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition">
          Kirish
        </button>

        <p className="text-center text-gray-600 text-sm">
          Ro'yhatdan o'tmaganmisiz?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Ro'yhatdan o'tish
          </Link>
        </p>
      </form>
    </div>
  );
}