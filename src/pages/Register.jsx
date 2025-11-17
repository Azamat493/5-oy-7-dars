import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    await fetch(
      "https://691aa27e2d8d7855756f8c58.mockapi.io/products2",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, surname, username, email, password }),
      }
    );

    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-lg shadow-md w-96 flex flex-col gap-4"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Ro'yhatdan o'tish
        </h1>

        <input
          type="text"
          placeholder="Ism"
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Familiya"
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Username"
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Parol"
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="bg-green-600 text-white p-3 rounded hover:bg-green-700 transition">
          Ro'yhatdan o'tish
        </button>
      </form>
    </div>
  );
}