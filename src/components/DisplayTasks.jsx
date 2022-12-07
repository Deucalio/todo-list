import { useState, useEffect } from "react";

const DisplayTask = ({
  changePriorty,
  title,
  description,
  dueDate,
  priorty,
  project,
  isCompleted,
  isImportant,
  id,
}) => {
  const [modalActive, setModalActive] = useState(false)

  const openAccordion = (e) => {
    const clickedAccordion = e.target;

    const descriptionDiv =
      clickedAccordion.parentElement.parentElement.children[1];

    const svgArrow = clickedAccordion.children[1];

    const addStyles = () => {
      descriptionDiv.style.padding = "1rem 0.5rem";
      descriptionDiv.style.opacity = "1";
      descriptionDiv.style.height = `${8}rem`;
      descriptionDiv.classList.remove("overflow-hidden", "whitespace-nowrap");
      descriptionDiv.classList.add("overflow-y-scroll");

      descriptionDiv.classList.remove("closed");
      svgArrow.classList.add("-rotate-180");
    };
    const removeStyles = () => {
      descriptionDiv.style.padding = "";
      descriptionDiv.style.opacity = "";
      descriptionDiv.style.height = ``;
      descriptionDiv.classList.add("overflow-hidden", "whitespace-nowrap");
      descriptionDiv.classList.remove("overflow-y-scroll");

      descriptionDiv.classList.add("closed");
      svgArrow.classList.remove("-rotate-180");
    };

    descriptionDiv.classList.value.includes("closed")
      ? addStyles()
      : removeStyles();
  };

  const displayTooltip = (e) => {
    const icon = e.target.nextElementSibling
    icon.style.opacity = "1"
  }

  const hideTooltip = (e) => {
    const icon = e.target.nextElementSibling
    icon.style.opacity = "0"
  }

  const showPriortyTooltip = (e) => {
    const flagIcon = e.target
    const priortyTooltip = flagIcon.parentElement.children[2]
    priortyTooltip.style.opacity = "1"
    priortyTooltip.classList.remove("hidden")
    setModalActive(true)

  }

  const hidePriortyTooltip = (e) => {
    const overlay = e.target
    const priortyTooltip = overlay.previousElementSibling.children[0].children[4].children[2]
    
    setModalActive(false)
    priortyTooltip.style.opacity = "0"
    priortyTooltip.classList.add("hidden")
  }

  return (
    <>
      <div className="container-item max-h-full w-full rounded-md border-2 border-l-[10px] border-violet-500/50 border-l-violet-500 bg-indigo-100 py-2 px-3 text-indigo-700 transition-all duration-[600ms] md:w-11/12">
        <button className="flex w-full cursor-default flex-row items-center justify-between gap-1  px-3 py-1">
          <input
            className="inline border-2 border-black/25 focus:ring-0"
            type="checkbox"
            id=""
            name=""
            value=""
          />
          <div
            onClick={openAccordion}
            className=" accordion-btn mr-2 flex w-full cursor-pointer flex-wrap justify-between border-4"
          >
            <p className="pointer-events-none mt-[2px] max-h-full w-fit cursor-pointer text-left text-lg transition-all md:text-xl">
              {title}
            </p>

            <svg
              className="pointer-events-none arrow h-8 w-8 cursor-pointer transition-all duration-300 hover:bg-indigo-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          <div className="relative">
            <svg onPointerEnter={displayTooltip} onPointerLeave={hideTooltip}
              xmlns="http://www.w3.org/2000/svg"
              className="toolTipEnable mr-3 w-10 p-2 rounded-md cursor-pointer hover:bg-indigo-200"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>

            <span style={{opacity: "0"}}
              className="absolute top-0 -m-8 h-fit w-fit -translate-x-0 -translate-y-3 rounded-lg bg-violet-600 px-2 py-1 text-sm font-bold text-[#FFFFFF]  transition-all duration-150 ease-in-out after:absolute after:left-1/2 after:bottom-0 after:h-0 after:w-0 after:-translate-x-4 after:translate-y-6 after:border-[15px] after:border-transparent after:border-t-violet-600 after:content-['']"
            >
              Edit
            </span>
          </div>

          <div className="relative">
            <svg onPointerEnter={displayTooltip} onPointerLeave={hideTooltip}
              xmlns="http://www.w3.org/2000/svg"
              className="toolTipEnable mr-3 w-10 p-2 rounded-md cursor-pointer hover:bg-indigo-200"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>

            <span style={{opacity: "0"}}
              data-span-hover
              className="absolute top-0 -m-8 h-fit w-fit -translate-x-2 -translate-y-3 rounded-lg bg-violet-600 px-2 py-1 text-sm font-bold text-[#FFFFFF] opacity-0 transition-all duration-150 ease-in-out after:absolute after:left-1/2 after:bottom-0 after:h-0 after:w-0 after:-translate-x-4 after:translate-y-6 after:border-[15px] after:border-transparent after:border-t-violet-600 after:content-['']"
            >
              Remove
            </span>
            <span
              data-span-remove
              className="pointer-events-none absolute top-0 -mt-2 -ml-20 flex h-fit w-28 -translate-x-8 -translate-y-3 flex-col gap-1 rounded-lg bg-[#3772FF] py-1 px-2 text-left text-base font-medium tracking-normal text-[#FFFFFF] opacity-0 transition-all duration-150 ease-in-out after:absolute after:-right-11 after:bottom-2/3 after:h-0 after:w-0 after:-translate-x-5 after:translate-y-4 after:-rotate-90 after:border-[15px] after:border-transparent after:border-t-[#3772FF] after:content-['']"
            >
              <p className="cursor-pointer hover: hover:outline-2 hover:outline-rose-300">
                Are you sure?
              </p>
              <p className="cursor-pointer text-lg font-bold hover:outline hover:outline-2 hover:outline-rose-300">
                Yes
              </p>
              <p className="cursor-pointer text-lg font-bold hover:outline hover:outline-2 hover:outline-rose-300">
                No
              </p>
            </span>
          </div>

          <div className="relative">
            <svg onClick={showPriortyTooltip} onPointerEnter={displayTooltip} onPointerLeave={hideTooltip}
              xmlns="http://www.w3.org/2000/svg"
              className="toolTipEnable w-10 p-2 rounded-md cursor-pointer hover:bg-indigo-200"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
              />
            </svg>
            <span 
              data-span-hover style={{opacity: "0"}}
              className="absolute top-0 -m-8 h-fit w-32 -translate-x-8 -translate-y-3 rounded-lg bg-violet-600 px-2 py-1 text-sm font-bold text-[#FFFFFF] opacity-0 transition-all duration-150 ease-in-out after:absolute after:left-1/2 after:bottom-0 after:h-0 after:w-0 after:-translate-x-4 after:translate-y-6 after:border-[15px] after:border-transparent after:border-t-violet-600 after:content-['']"
            >
              Change priorty
            </span>

            <span
            style={{opacity: "0"}}
              data-span-priorty
              className="hidden z-40 absolute top-0 -mt-2 -ml-20 flex h-fit w-24 -translate-x-8 -translate-y-3 flex-col gap-1 rounded-lg bg-[#3772FF] py-1 px-2 text-left text-base font-medium tracking-normal text-[#FFFFFF]  transition-all duration-150 ease-in-out after:absolute after:-right-11 after:bottom-2/3 after:h-0 after:w-0 after:-translate-x-5 after:translate-y-4 after:-rotate-90 after:border-[15px] after:border-transparent after:border-t-[#3772FF] after:content-['']"
            >
              <p onClick={(e) => changePriorty(e.target.textContent,id)} className="cursor-pointer px-1 hover:outline hover:outline-2 hover:outline-rose-300">
                Low
              </p>
              <p onClick={(e) => changePriorty(e.target.textContent,id)} className="cursor-pointer px-1 hover:outline hover:outline-2 hover:outline-rose-300">
                Medium
              </p>
              <p onClick={(e) => changePriorty(e.target.textContent,id)} className="cursor-pointer px-1 hover:outline hover:outline-2 hover:outline-rose-300">
                High
              </p>
            </span>
          </div>
        </button>

        <div className="transition-all ease-in-out duration-300 overflow-hidden whitespace-nowrap rounded-md border-x-2 border-b-2 border-violet-500/40 bg-slate-50 px-4  text-base text-blue-600 shadow-xl  md:text-lg closed">
          <p>{description}</p>
          <p className="font-semibold tracking-tighter">Due Date: {dueDate}</p>
        </div>
      </div>
      {modalActive && <div onClick={hidePriortyTooltip} className="fixed top-0 bottom-0 left-0 right-0 z-30" id="overlay"></div>}

    </>
  );
};

const DisplayTasks = (props) => {
  const tasks = props.tasks;
  const changePriorty = props.changePriorty

  const [propsTasks, setPropsTasks] = useState(tasks);
  console.log(tasks);

  return (
    <>
      {tasks.map((t,i) => (
        <DisplayTask
        changePriorty={changePriorty}
          title={t.title}
          description={t.description}
          dueDate={t.dueDate}
          id={t.id}
        />
      ))}
    
    </>
  );
};

export default DisplayTasks;
