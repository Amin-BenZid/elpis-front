import { useState } from "react";
import logo from "../img/white - Copy.png";
import { GiShoppingBag } from "react-icons/gi";

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className=" fixed bg-white mx-auto mb-1 px-8 w-full z-10">
      <div className="flex items-center justify-between py-5">
        <a href="/">
          <img src={logo} alt="logo" className="w-20 " />
        </a>
        <nav>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/">Home</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/about">About</a>
                </li>
                {/* <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/contact">Contact</a>
                </li> */}
                <li
                  className={localStorage.getItem("toBuy") ? " my-8 uppercase" : "hidden"}
                >
                  <a href="/cart">
                    <GiShoppingBag size={30} />
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex lg:justify-center lg:items-center">
            <li>
              <a href="/">Home</a>
            </li>
            {/* <li>
              <a href="/contact">Contact</a>
            </li> */}
            <li>
              <a href="/About">About</a>
            </li>
            <li className="h-8 w-8 ">
              <a
                className={
                  localStorage.getItem("toBuy")
                    ? "relative "
                    : "relative pointer-events-none "
                }
                href="/cart"
              >
                <GiShoppingBag size={30} />
                <p className="absolute top-4 right-0 bg-red-600 text-white flex items-center justify-center h-5 w-5 rounded-full pt-1">
                  {localStorage.getItem("toBuy") ? "1" : "0"}
                </p>
              </a>
            </li>
          </ul>
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div>
    </div>
  );
}
