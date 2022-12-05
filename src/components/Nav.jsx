const Nav = () => {
  return (
    <nav className="grad absolute z-10 w-60 bg-[#E0E0E0] shadow-xl md:static md:col-span-1 md:h-auto md:w-auto">
      <div className="flex flex-col md:flex-row items-center justify-evenly pb-7">
        <p className="px-2 py-2 text-left text-4xl tracking-normal text-slate-600">
          To-Do
        </p>
        <svg
          className="lg:-ml-12 md:ml-0 w-9 text-black/50"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3,7V5H5V4C5,2.89 5.9,2 7,2H13V9L15.5,7.5L18,9V2H19C20.05,2 21,2.95 21,4V20C21,21.05 20.05,22 19,22H7C5.95,22 5,21.05 5,20V19H3V17H5V13H3V11H5V7H3M7,11H5V13H7V11M7,7V5H5V7H7M7,19V17H5V19H7Z"
          />
        </svg>
      </div>

      <div className="my-5 flex cursor-pointer flex-wrap items-center sm:gap-1 lg:gap-4 pl-1 hover:font-semibold lg:justify-center lg:-ml-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 text-slate-800/75"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        <p className="text-lg font-bold text-slate-700">Home</p>
      </div>

      <div className="flex cursor-pointer flex-wrap items-center lg:gap-4  pl-1 hover:font-semibold lg:justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 text-slate-800/75"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>

        <p className="text-lg text-slate-700">Completed tasks</p>
      </div>

      <div className="my-5 flex cursor-pointer flex-wrap items-center pl-1 hover:font-semibold lg:justify-center lg:gap-4">
        <svg
          className="w-8 text-slate-800/75"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-lg text-slate-700">Important tasks</p>
      </div>
    </nav>
  );
};

export default Nav;
