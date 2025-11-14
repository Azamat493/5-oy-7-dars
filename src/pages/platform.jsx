import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import icon from "../assets/images/icon.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import icon4 from "../assets/images/icon4.png";
import icon5 from "../assets/images/icon5.png";
import icon6 from "../assets/images/icon6.png";
import icon7 from "../assets/images/icon7.png";
import icon8 from "../assets/images/icon8.png";
import icon9 from "../assets/images/icon9.png";
import icon10 from "../assets/images/icon10.png";
import icon11 from "../assets/images/icon11.png";
import icon12 from "../assets/images/icon12.png";
import icon13 from "../assets/images/icon13.png";
import Logo from "../assets/images/Logo.png";
import UserAvatar from "../assets/images/UserAvatar.png";

export default function Platform() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [platform, setPlatform] = useState(null);
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    fetch("https://68fae18894ec96066023c657.mockapi.io/api/v2/products2")
      .then((res) => res.json())
      .then((data) => {
        const currentPlatform = data.find((p) => p.id.toString() === id);
        setPlatform(currentPlatform || null);
      })
      .catch(console.error);
  }, [id]);

  if (!platform)
    return <div className="text-center mt-20 text-white">Loading...</div>;
  return (
    <div className="flex h-screen bg-[black] text-white">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 bg-[var(--background-color)]">
        <div className="flex items-center gap-4">
          <a href="#" className="">
            <img src={icon} alt="" />
          </a>

          <a href="/home" className="flex items-center gap-2">
            <img src={Logo} alt="" />
          </a>
        </div>

        <div className="flex items-center justify-center mx-4 h-[40px]">
          <input
            type="text"
            placeholder="Search"
            className="w-[362px] h-[40px] justify-center bg-[var(--background-color-2)] text-[color:var(--gray-color)] font-normal px-4 py-2 rounded-[2px_0_0_2px] focus:outline-none"
          />
          <button className="border flex items-center justify-center bg-[var(--border-color)] border-[color:var(--border-color)] w-16 h-10 px-[7px] py-0.5 rounded-[0_2px_2px_0] border-solid">
            <svg
              className="w-6 h-6 hover:scale-110 transition-transform duration-200 cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.87 20.17L15.28 14.58C16.35 13.35 17 11.75 17 10C17 6.13 13.87 3 10 3C6.13 3 3 6.13 3 10C3 13.87 6.13 17 10 17C11.75 17 13.35 16.35 14.58 15.29L20.17 20.88L20.87 20.17ZM10 16C6.69 16 4 13.31 4 10C4 6.69 6.69 4 10 4C13.31 4 16 6.69 16 10C16 13.31 13.31 16 10 16Z"
                fill="white"
              />
            </svg>
          </button>
          <button className="p-2 ml-2 cursor-pointer rounded-[40px] flex items-center justify-center bg-[var(--black)] w-10 h-10 hover:bg-gray-800 transition-colors duration-200">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3C10.34 3 9 4.37 9 6.07V11.93C9 13.63 10.34 15 12 15C13.66 15 15 13.63 15 11.93V6.07C15 4.37 13.66 3 12 3ZM18.5 12H17.5C17.5 15.03 15.03 17.5 12 17.5C8.97 17.5 6.5 15.03 6.5 12H5.5C5.5 15.24 7.89 17.93 11 18.41V21H13V18.41C16.11 17.93 18.5 15.24 18.5 12Z"
                fill="white"
              />
            </svg>
          </button>
        </div>

        <div className="flex items-center max-w-[204px] gap-3">
          <button className="w-10 cursor-pointer h-10 p-2 hover:scale-110 transition-transform duration-200">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 13H11V16H9V13H6V11H9V8H11V11H14V13ZM17 6H3V18H17V11.61L21 13.44V8.56L17 10.39V6ZM18 5V8.83L22 7V15L18 13.17V19H2V5H18Z"
                fill="white"
              />
            </svg>
          </button>

          <button className="w-10 cursor-pointer h-10 p-2 hover:scale-110 transition-transform duration-200">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 4V8H20V4H16ZM19 7H17V5H19V7ZM16 10V14H20V10H16ZM19 13H17V11H19V13ZM10 4V8H14V4H10ZM13 7H11V5H13V7ZM10 10V14H14V10H10ZM13 13H11V11H13V13ZM16 16V20H20V16H16ZM19 19H17V17H19V19ZM10 16V20H14V16H10ZM13 19H11V17H13V19ZM4 4V8H8V4H4ZM7 7H5V5H7V7ZM4 10V14H8V10H4ZM7 13H5V11H7V13ZM4 16V20H8V16H4ZM7 19H5V17H7V19Z"
                fill="white"
              />
            </svg>
          </button>

          <button className="w-10 cursor-pointer h-10 p-2 hover:scale-110 transition-transform duration-200">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20H14C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20ZM20 17.35V19H4V17.35L6 15.47V10.32C6 7.40001 7.56 5.10001 10 4.34001V3.96001C10 2.54001 11.49 1.46001 12.99 2.20001C13.64 2.52001 14 3.23001 14 3.96001V4.35001C16.44 5.10001 18 7.41001 18 10.33V15.48L20 17.35ZM19 17.77L17 15.89V10.42C17 7.95001 15.81 6.06001 13.87 5.32001C12.61 4.79001 11.23 4.82001 10.03 5.35001C8.15 6.11001 7 7.99001 7 10.42V15.89L5 17.77V18H19V17.77Z"
                fill="white"
              />
            </svg>
          </button>

          <button className="w-[60px] cursor-pointer h-10 px-3.5 py-1 hover:scale-105 transition-transform duration-200">
            <img src={UserAvatar} alt="" className="rounded-full" />
          </button>
        </div>
      </header>

      <aside className="w-64 bg-[var(--background-color)] overflow-y-auto mt-5 p-4 flex flex-col pt-16 h-screen">
        <nav className="space-y-4">
          <a
            href="/home"
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-var(--background-color) hover:bg-gray-800"
          >
            <img src={icon2} alt="" />
            Home
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-var(--background-color) hover:bg-gray-800"
          >
            <img src={icon3} alt="" />
            Explore
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-var(--background-color) hover:bg-gray-800"
          >
            <img src={icon4} alt="" />
            Subscriptions
          </a>
        </nav>
        <nav className="space-y-4 mt-8 border-t border-[var(--border-color)]">
          <a
            href="/home"
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-var(--background-color) hover:bg-gray-800"
          >
            <img src={icon5} alt="" />
            Lİbrary
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-var(--background-color) hover:bg-gray-800"
          >
            <img src={icon6} alt="" />
            History
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-var(--background-color) hover:bg-gray-800"
          >
            <img src={icon7} alt="" />
            Your Videos
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-var(--background-color) hover:bg-gray-800"
          >
            <img src={icon8} alt="" />
            Watch Later
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-var(--background-color) hover:bg-gray-800"
          >
            <img src={icon9} alt="" />
            Liked Videos
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-var(--background-color) hover:bg-gray-800"
          >
            <img src={icon10} alt="" />
            Show More
          </a>
        </nav>
        <div className="mt-8 border-t flex flex-col items-start border-[var(--border-color)] pt-4 flex-grow">
          <h3 className="font-bold ml-3 text-sm text-[color:var(--gray-color)] font-family mb-3">
            SUBSCRIPTIONS
          </h3>
          {subscriptions.slice(0, 7).map((sub, i) => (
            <a
              key={i}
              href="#"
              className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded-lg"
            >
              <img
                src={sub.profile || "https://via.placeholder.com/32"}
                alt={sub.creator}
                className="w-8 h-8 rounded-full"
              />
              <span className="font-normal text-sm text-[color:var(--white-color)] font-family">
                {sub.creator}
              </span>
            </a>
          ))}
          <button className="flex items-center gap-3 px-3 py-2 mt-2 font-normal text-sm text-[color:var(--white-color)] font-family hover:text-white">
            <img src={icon10} alt="" />
            Show 13 more
          </button>
        </div>
        <div className="mt-8 border-t border-[var(--border-color)] pt-4">
          <h3 className="font-bold ml-3 text-sm text-[color:var(--gray-color)] font-family mb-3">
            MORE FROM YOUTUBE
          </h3>
          <a
            href="#"
            className="flex font-normal text-sm text-[color:var(--white-color)] font-family items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded-lg"
          >
            <img src={icon11} alt="" />
            YouTube Premium
          </a>
          <a
            href="#"
            className="flex font-normal text-sm text-[color:var(--white-color)] font-family items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded-lg"
          >
            <img src={icon12} alt="" />
            Gaming
          </a>
          <a
            href="#"
            className="flex font-normal text-sm text-[color:var(--white-color)] font-family items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded-lg"
          >
            <img src={icon13} alt="" />
            Live
          </a>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto mt-2 p-4 pt-16">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 px-4 py-2 cursor-pointer bg-blue-600 text-white rounded
             hover:bg-blue-700 hover:scale-105 transition-all duration-200"
        >
          Back to Home
        </button>

        <div className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-xl transition-shadow max-w-4xl mx-auto flex gap-4 p-4">
          <div className="flex-shrink-0 w-64 relative">
            <img
              src={platform.image}
              alt={platform.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <div className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1 rounded">
              {platform.duration}
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <h2 className="font-semibold text-lg">{platform.title}</h2>
            <p className="text-sm text-gray-300">{platform.description}</p>

            <div className="flex items-center gap-3 mt-2">
              <img
                src={platform.profile}
                alt={platform.creator}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-col">
                <span className="font-bold text-white text-sm">
                  {platform.creator}
                </span>
                <span className="text-gray-400 text-xs">
                  {platform.views} Views • {platform.createdAt}
                </span>
                <span className="text-gray-400 text-xs">{platform.users}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
