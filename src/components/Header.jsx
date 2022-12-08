import { useEffect, useState } from "react"

const Header = ({ setOverlay }) => {



  const handleNav = (e) => {
    const svg = e.target;
    const nav = svg.parentElement.nextElementSibling.children[0];

    console.log(svg)

    if (nav.classList.value.includes("active")) {
      nav.classList.remove("active");
      nav.classList.add("un");
    } else {
      nav.classList.remove("un");
      nav.classList.add("active");
    }


  };



  return (
    <>
      <header className="h-14 flex flex-wrap items-center justify-between bg-[#3772FF]/90 py-2 px-3 md:px-24">
        <svg
          onClick={handleNav}
          className="h-9 w-9 cursor-pointer text-[#E9F1F7] hover:bg-slate-400/30 navBtn"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path className="pointer-events-none"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <svg
          onClick={setOverlay}
          data-modal-target="#modalAddTask"
          className="h-9 w-9 cursor-pointer text-[#E9F1F7] hover:bg-slate-400/30"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </header>
    </>
  );
};
export default Header;
