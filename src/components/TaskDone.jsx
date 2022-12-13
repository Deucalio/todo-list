import { useEffect, useRef, useState } from "react"

const TaskDone = ({ undoFunc, taskCompletedPopup, setTaskCompletedPopup, removedTASK, setTASKS }) => {
    const popup = useRef(null)

    useEffect(() => {
        if (taskCompletedPopup) {
            popup.current.classList.remove("opacity-0")
            var settask = setTimeout(() => {
            }, 150)
            var disablePopup =
                setTimeout(() => {
                    setTaskCompletedPopup(false)
                    setTASKS(removedTASK[0])
                }, 5000)
        }
        return () => {
            popup.current.classList.add("opacity-0")
            clearTimeout(disablePopup)
            clearTimeout(settask)
        }
    },)


    return (
        <div ref={popup} className="bg-sky-200 shadow-md transition-all duration-500 opacity-0  rounded-md flex gap-6 absolute inset-0 h-10 px-4 items-center w-64 top-auto bottom-14 mx-auto z-[99]">
            <p className="text-lg text-gray-800">1 task completed</p>
            <button onClick={e => undoFunc(e.target)} className="text-lg hover:bg-orange-200 hover:bg-opacity-50 px-1 font-bold text-orange-600 rounded-lg">Undo</button>
        </div>
    )
}

export default TaskDone