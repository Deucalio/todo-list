const Nav = ({ setOverlay, openCustomProjectPopup }) => {
  const handleChange = (e) => {
    const element = e.target;
    const svgClasses = element.children[1].children[1].classList;
    const customProjDiv = element.nextElementSibling;


    svgClasses.value.includes("-rotate-180")
      ? svgClasses.remove("-rotate-180")
      : svgClasses.add("-rotate-180");

    customProjDiv.classList.value.includes("opacity-0")
      ? customProjDiv.classList.remove("opacity-0", "-mt-5", "pointer-events-none")
      : customProjDiv.classList.add("opacity-0", "-mt-5", "pointer-events-none");
  };

  return (
    <nav onClick={setOverlay} className="grad absolute overflow-y-scroll z-20 w-60 bg-[#E0E0E0] shadow-xl md:static md:col-span-1 md:h-auto md:w-auto active">
      <div className="flex flex-col items-center justify-evenly pb-7 md:flex-row">
        <p className="px-2 py-2 text-left text-4xl tracking-normal text-slate-600">
          To-Do
        </p>
        <svg
          className="w-9 text-black/50 md:ml-0 lg:-ml-12"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3,7V5H5V4C5,2.89 5.9,2 7,2H13V9L15.5,7.5L18,9V2H19C20.05,2 21,2.95 21,4V20C21,21.05 20.05,22 19,22H7C5.95,22 5,21.05 5,20V19H3V17H5V13H3V11H5V7H3M7,11H5V13H7V11M7,7V5H5V7H7M7,19V17H5V19H7Z"
          />
        </svg>
      </div>

      <div className="my-5 flex cursor-pointer flex-wrap items-center pl-1 hover:font-semibold sm:gap-1  lg:w-48 lg:mx-auto lg:gap-4">
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

      <div className="flex cursor-pointer flex-wrap items-center pl-1 hover:font-semibold  lg:w-48 lg:mx-auto lg:gap-4">
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

      <div className="my-5  flex cursor-pointer flex-wrap items-center pl-1  hover:font-semibold  lg:w-48 lg:mx-auto lg:gap-4">
        <svg
          className="w-8 text-slate-800/75 "
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

      <div
        onClick={handleChange}
        className="relative my-5  flex cursor-pointer flex-wrap items-center pl-1  hover:font-semibold  lg:w-48 lg:mx-auto lg:gap-4"
      >
        <svg
          className="pointer-events-none w-8 text-slate-800/75"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
          />
        </svg>

        <div className="flex pointer-events-none">
          <p className="text-lg text-slate-700">Projects</p>
          <svg
            className="pointer-events-none absolute right-0 w-8 text-slate-800/75 transition-all"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </div>
      </div>

      <div className={`customProj transition-all -mt-5 opacity-0 pointer-events-none pb-12`}>
        <div className="relative mb-3 pl-7 flex gap-2 mx-auto  flex-wrap items-center  w-48 lg:w-48 lg:mx-auto lg:gap-4">
          <div className="w-3 h-3 rounded-full bg-slate-400 lg:translate-x-2"></div>
          <p className="text-md cursor-pointer text-slate-900 hover:font-semibold">Custom Project</p>
          {/* max length should be 15 characters  */}
          <svg onClick={(e) => console.log(e.target)}
            xmlns="http://www.w3.org/2000/svg"
            className="absolute lg:right-0 lg:left-auto w-5 left-0 -sm:w-8 rounded-md cursor-pointer hover:bg-indigo-200"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path className="pointer-events-none"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>

        </div>









        <div onClick={openCustomProjectPopup} className=" mb-3 pl-11 flex gap-2 mx-auto cursor-pointer flex-wrap items-center hover:font-semibold w-52 lg:w-48 lg:mx-auto lg:gap-4">
          <svg
            data-modal-target="#modalAddTask"
            className="h-5 w-5 cursor-pointer text-zinc-900 lg:translate-x-2"
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
          <p className="text-md text-slate-900">New Project</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
