import { useState, useRef, useEffect } from "react"

const RemoveTaskPopup = ({ setTASKS, TASKS, setOverlayForRemove, idForTaskBeingRemoved }) => {

    const [isActive, setIsActive] = useState(false)

    const popup = useRef(null)

    const hidePopup = () => {
        popup.current.classList.add("scale-0", "pointer-events-none")
        setTimeout(() => {
            setOverlayForRemove(false)

        }, 250)
    }

    useEffect(() => {
        setTimeout(() => {
            popup.current.classList.remove("scale-0", "pointer-events-none")

        }, 0.0001)
    })

    const deleteTask = () => {
        hidePopup()
        setTimeout(() => {
            const newTask = TASKS.filter(t => t.id !== idForTaskBeingRemoved)
            setTASKS(newTask)
        }, 200)

    }

    return (
        <>
            <div id="deleteTask"
                ref={popup} className={` scale-0 pointer-events-none z-50 modal fixed top-1/2 left-1/2 mt-2 h-1/2 w-11/12 lg:w-[35rem] -translate-x-1/2 -translate-y-1/2 overflow-x-hidden overflow-y-hidden rounded-md border-2 border-black/30 bg-indigo-50 p-4 shadow-md md:w-2/4  transition-all`}>
                <div className="flex flex-col gap-4 items-center lg:py-14 lg:px-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-32 h-32 text-amber-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <p className="text-gray-500 text-xl">Are you sure that you want to delete this task?</p>

                    <div className="btn self-end mt-5 sm:mt-8 flex flex-wrap gap-4 ">
                        <button onClick={hidePopup} className=" md:text-xl  rounded-md border-2 border-slate-600/50 py-2 px-3 text-slate-800 transition-all hover:border-slate-300 hover:bg-slate-600/60 hover:text-white">Close</button>
                        <button onClick={deleteTask} className=" md:text-xl   w-24 rounded-md bg-blue-500 py-1 text-white transition-all hover:bg-blue-600/90 hover:outline-2 hover:outline-blue-800/50">Ok</button>

                    </div>
                </div>
            </div>
            <div onClick={hidePopup} className="absolute top-0 bottom-0 left-0 right-0 bg-black/50 z-40"></div>
        </>
    )
}

export default RemoveTaskPopup