import React from "react";
import { useNavigate } from "react-router-dom";

export default function Youtube() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white gap-4">
      <h1 className="text-3xl font-bold">YouTube Sahifa</h1>

      {user && (
        <div className="text-center">
          <p>Ism: <span className="font-semibold">{user.name}</span></p>
          <p>Familiya: <span className="font-semibold">{user.surname}</span></p>
          <p>Username: <span className="font-semibold">{user.username}</span></p>
          <p>Email: <span className="font-semibold">{user.email}</span></p>
        </div>
      )}

      <button
        onClick={logout}
        className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
      >
        Logout
      </button>
    </div>
  );
}