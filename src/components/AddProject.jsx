import React, { useEffect, useRef } from 'react'

const AddProject = ({ setDisplayCustomProject }) => {
    const Popup = useRef(null)

    const showPopup = () => {
        setTimeout(() => {
            Popup.current.style.margin = "-2.5rem 0"

        }, 0.00001)

        setTimeout(() => {
            Popup.current.classList.remove("opacity-0")

        }, 10)
    }

    const hidePopup = () => {
        setTimeout(() => {
            Popup.current.style.margin = ""

        }, 0.00001)

        setTimeout(() => {
            Popup.current.classList.add("opacity-0")

        }, 10)

        setTimeout(() => {
            setDisplayCustomProject(false)
        }, 500)
    }

    useEffect(() => {
        showPopup()
    })

    return (
        <>
            <div id="addProject" ref={Popup}
                className="opacity-0 modal z-50 fixed top-1/2 left-1/2 mt-2 h-fit w-11/12 lg:w-[35rem] -translate-x-1/2 -translate-y-1/2 overflow-x-hidden overflow-y-hidden rounded-md border-2 border-black/30 bg-indigo-50 p-4 shadow-md md:w-2/4  transition-all duration-500">
                <div className="flex flex-wrap gap-4 items-center border-b-2 border-b-gray-400 justify-between px-3 py-2">
                    <p className="font-semibold text-xl">Add a Project</p>
                    <p onClick={hidePopup} className="text-3xl cursor-pointer hover:text-black text-black/70">&times;</p>
                </div>
                <div className="flex flex-col gap-2 mt-2 px-3">
                    <label className="text-xl" htmlFor="ProjectName">Name: </label>
                    <input maxLength="15" className="h-8 rounded-md w-full px-2 bg-indigo-50 border-2 border-gray-600 border-opacity-60" />
                </div>
                <div className="pt-4 w-full flex flex-wrap gap-2 justify-end">
                    <button onClick={hidePopup} className=" md:text-xl  rounded-md border-2 border-slate-600/50 py-1 px-3 text-slate-800 transition-all hover:border-slate-300 hover:bg-slate-600/60 hover:text-white">Close</button>
                    <button className=" md:text-xl  w-20 rounded-md bg-blue-500 py-2 text-white transition-all hover:bg-blue-600/90 hover:outline-2 hover:outline-blue-800/50">Ok</button>
                </div>
            </div>
            <div onClick={hidePopup} className="absolute top-0 bottom-0 left-0 right-0 bg-black/50 z-40"></div>

        </>
    )
}

export default AddProject