import React, { useEffect, useRef, useState } from 'react'

const AddProject = ({ setDisplayCustomProject, customProjects, setCustomProjects }) => {
    const Popup = useRef(null)
    const inputElement = useRef(null)
    const errorDiv = useRef(null)

    const [projectName, setProjectName] = useState("")
    const checkIfStringHasSpecialChar = (_string) => {
        let spChar = "/[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+/";
        for (var i = 0; i < _string.length; i++) {
            if (spChar.indexOf(_string.charAt(i)) != -1) {
                return true;
            }
        }
        return false;
    }

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
            setProjectName("")
        }, 500)
    }

    useEffect(() => {
        showPopup()
    })

    const addCustomProjects = () => {
        // if string has no special character 
        if (!checkIfStringHasSpecialChar(projectName)) {
            hidePopup()

            setTimeout(() => {
                setCustomProjects([...customProjects, projectName])

            }, 500)
        } else {
            inputElement.current.classList.add("border-2", "border-[red]", "border-opacity-100")
            errorDiv.current.classList.remove("hidden")
        }

    }

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
                    <input ref={inputElement} onChange={e => setProjectName(e.target.value)} value={projectName} maxLength="15" className="h-8 rounded-md w-full px-2 bg-indigo-50 border-2 border-gray-600 border-opacity-60" />
                </div>
                <div className="pt-4 w-full flex flex-wrap gap-2 justify-end">
                    <button onClick={hidePopup} className=" md:text-xl  rounded-md border-2 border-slate-600/50 py-1 px-3 text-slate-800 transition-all hover:border-slate-300 hover:bg-slate-600/60 hover:text-white">Close</button>
                    <button onClick={addCustomProjects} className=" md:text-xl  w-20 rounded-md bg-blue-500 py-2 text-white transition-all hover:bg-blue-600/90 hover:outline-2 hover:outline-blue-800/50">Ok</button>
                </div>
                <div ref={errorDiv} className="relative hidden">
                    <span className="text-lg text-[red] block -top-8 absolute w-fit">No special characters please</span>
                    <svg className="absolute w-6 h-6 text-[red] right-0 -top-8 m-1 left-56" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                </div>

            </div>
            <div onClick={hidePopup} className="absolute top-0 bottom-0 left-0 right-0 bg-black/50 z-40"></div>

        </>
    )
}

export default AddProject