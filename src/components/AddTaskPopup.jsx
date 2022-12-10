import React from 'react'
import { useEffect, useRef, useState } from "react"

const AddTaskPopup = ({ closePopup, customProjects }) => {
    const modal = useRef(null)
    // bg-blue-300 hover:cursor-not-allowed for disabled button
    const titleInput = useRef(null)
    const descriptionInput = useRef(null)
    const dueDateInput = useRef(null)

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        dueDate: "",
        priorty: "",
        project: "",
        isCompleted: "",
        isImportant: "",
    })


    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData({ ...formData, [name]: value })
    }

    useEffect(() => {
        // const a = document.querySelector(".modal")
        setTimeout(() => {
            modal.current.classList.remove("scale-0")
        }, (0.00001));
    })

    // error checking 
    useEffect(() => {

    })

    const submitForm = (e) => {
        e.preventDefault()
    }


    return (
        <div id="modalAddTask"
            ref={modal}
            className="scale-0  modal fixed top-1/2 left-1/2 z-20 mt-2 h-5/6 w-11/12 -translate-x-1/2 -translate-y-1/2 overflow-x-hidden overflow-y-scroll rounded-md border-2 border-black/30 bg-indigo-50 p-4 shadow-md md:w-2/3  transition-all duration-200">
            <div className="modal-header flex flex-wrap justify-between border-b-2 border-b-black text-xl">
                <div className="">Add a task</div>
                <button onClick={closePopup} data-close-button className="-translate-y-1 text-4xl">&times;</button>
            </div>

            <form onChange={submitForm} className="">
                <ul className="modal-body mt-5 flex flex-col gap-4 text-lg">
                    <li>
                        <label htmlFor="">Title:</label>
                        <input onChange={handleChange} name="title" ref={titleInput} type="text" value={formData.title}
                            className="h-9 w-full rounded-md border-2 border-indigo-600 border-opacity-50 bg-indigo-100 px-2 text-lg shadow-sm outline-0" />
                    </li>
                    <li>
                        <label className="" htmlFor="">Description:</label>
                        <textarea onChange={handleChange} name="description" ref={descriptionInput} value={formData.description}
                            className="h-32 w-full resize-none rounded-md border-2 border-indigo-600 border-opacity-50 bg-indigo-100 text-lg shadow-sm outline-0 md:h-40"></textarea>
                    </li>
                    <li>
                        <label htmlFor="duedate">Due Date:</label>
                        <input onChange={handleChange} name="dueDate" ref={dueDateInput} type="date" id="duedate" value={formData.dueDate}
                            className="block rounded-md border-2 border-indigo-600 border-opacity-50 bg-indigo-100 px-2 text-md md:text-lg shadow-sm outline-0 h-8 md:h-12" />
                    </li>
                    <li>
                        <label htmlFor="priorty">Priorty:</label>
                        <select onChange={handleChange} value={formData.priorty} name="priorty"
                            className="block w-2/3 rounded-md border-2 border-indigo-300 bg-indigo-100 px-2 text-sm shadow-sm outline-0 h-8 md:h-12 md:text-lg"
                            id="taskPriority" required="">
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </li>
                    <li>
                        <label htmlFor="">Project:</label>
                        <select onChange={handleChange} name="project"
                            className="block w-2/3 rounded-md border-2 border-indigo-300 bg-indigo-100 px-2 text-base shadow-sm outline-0 h-8  md:h-12 md:text-lg"
                            id="taskPriority" defaultValue={formData.project}>
                            <option value="Home">Home</option>
                            {customProjects.map((p, i) => <option key={i} value={p}>{p}</option>)}
                        </select>
                    </li>
                </ul>

                <div className="flex flex-wrap gap-4 pt-6 pb-2 text-lg items-center">
                    <button onClick={closePopup} data-close-button type="button"
                        className="md:py-2 md:text-xl rounded-md border-2 border-slate-600/50 py-1 px-3 text-slate-800 transition-all hover:border-slate-300 hover:bg-slate-600/60 hover:text-white">Close</button>
                    <button type="submit"
                        className="md:py-2 md:text-xl  w-32 rounded-md bg-blue-500 px-3 py-1 text-white transition-all hover:bg-blue-600/90 hover:outline-2 hover:outline-blue-800/50">Add
                        task</button>
                </div>
            </form>
        </div>
    )
}

export default AddTaskPopup