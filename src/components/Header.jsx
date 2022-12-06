const Header = () => {
  const handleNav = (e) => {
    const svg = e.target;
    const nav = svg.parentElement.nextElementSibling.children[0];
    let x = window.matchMedia("(min-width: 768px)");

    if (x.matches) {
      console.log("match", nav);
      nav.classList.value.includes("md:-translate-x-0")
        ? nav.classList.remove("md:-translate-x-0")
        : nav.classList.add("md:-translate-x-0");
    } else {
      nav.classList.value.includes("-translate-x-96")
        ? nav.classList.remove("-translate-x-96")
        : nav.classList.add("-translate-x-96");
    }
  };

  return (
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
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      <svg
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
  );
};
export default Header;
