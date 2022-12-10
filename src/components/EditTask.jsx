import { useEffect, useState, useRef } from "react"

const EditTask = ({ customProjects, setOverlayEditTask, editedTaskId, tasks, setTasks }) => {
    const modal = useRef(null)
    const OpenButton = useRef(null)
    const taskBeingEdited = tasks.find(t => t.id === editedTaskId)

    const titleElement = useRef(null)
    const descriptionElement = useRef(null)
    const dueDateElement = useRef(null)

    const [formData, setFormData] = useState({
        title: taskBeingEdited.title,
        description: taskBeingEdited.description,
        dueDate: taskBeingEdited.dueDate,
        priorty: taskBeingEdited.priorty,
        project: taskBeingEdited.project,
        isCompleted: taskBeingEdited.isCompleted,
        isImportant: taskBeingEdited.isImportant,
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData({ ...formData, [name]: value })
    }
    useEffect(() => {
        // use this for form error checking 
        // border-2 border-[red] border-opacity-100 class for errors
        const description = descriptionElement.current
        const error = description.nextElementSibling
        console.log(description, error)


    })



    const hideEditPopup = () => {
        modal.current.classList.add("scale-0")

        setTimeout(() => {
            setOverlayEditTask(false)
        }, 250)
    }

    useEffect(() => {
        setTimeout(() => {
            modal.current.classList.remove("scale-0")
        }, 0.0001)
    })

    return (
        <>
            <div id="modalAddTask"
                ref={modal}
                className="scale-0 modal fixed top-1/2 left-1/2 z-50 mt-2 h-5/6 w-11/12 -translate-x-1/2 -translate-y-1/2 overflow-x-hidden overflow-y-scroll rounded-md border-2 border-black/30 bg-indigo-50 p-4 shadow-md md:w-2/3  transition-all duration-200">
                <div className="modal-header flex flex-wrap justify-between border-b-2 border-b-black text-xl">
                    <div className="">Add a task</div>
                    <button onClick={hideEditPopup} data-close-button className="-translate-y-1 text-4xl">&times;</button>
                </div>

                <form className="">
                    <ul className="modal-body mt-5 flex flex-col gap-4 text-lg">
                        <li>
                            <label htmlFor="">Title:</label>
                            <input ref={titleElement} name="title" type="text" onChange={handleChange} value={formData.title}
                                className="h-9 w-full rounded-md border-2 border-indigo-600 border-opacity-50 bg-indigo-100 px-2 text-lg shadow-sm outline-indigo-400 " />
                            <div className="relative hidden ">
                                <span className="text-lg text-[red] block">Title is required</span>
                                <svg className="absolute w-6 h-6 text-[red] right-0 -top-8 m-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                </svg>
                            </div>

                        </li>
                        <li>
                            <label className="" htmlFor="">Description:</label>
                            <textarea ref={descriptionElement} name="description" onChange={handleChange} value={formData.description}
                                className="h-32 w-full   border-2 border-indigo-600 border-opacity-50 bg-indigo-100 text-lg  outline-2 outline-indigo-400 md:h-40"></textarea>
                            <div className="relative hidden ">
                                <span className="text-lg text-[red] block">Description is required</span>
                                <svg className="absolute w-6 h-6 text-[red] right-0 -top-0 m-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                </svg>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="duedate">Due Date:</label>
                            <input ref={dueDateElement} name="dueDate" onChange={handleChange} value={formData.dueDate} type="date" id="duedate"
                                className="block rounded-md border-2 border-indigo-600 border-opacity-50 bg-indigo-100 px-2 text-md md:text-lg shadow-sm outline-indigo-400 h-8 md:h-12" />

                            <div className="relative hidden ">
                                <span className="text-lg text-[red] block">Description is required</span>
                                <svg className="absolute w-6 h-6 text-[red] right-0 -top-0 m-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                </svg>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="priorty">Priorty:</label>
                            <select onChange={handleChange}
                                className="block w-2/3 rounded-md border-2 border-indigo-300 bg-indigo-100 px-2 text-sm shadow-sm outline-indigo-400 h-8 md:h-12 md:text-lg"
                                id="taskPriority" name="priorty" defaultValue={formData.priorty} required>
                                <option value="Low" >Low</option>
                                <option value="Medium" >Medium</option>
                                <option value="High">High</option>
                            </select>

                        </li>
                        <li>
                            <label htmlFor="">Project:</label>
                            <select onChange={handleChange} name="project"
                                className="block w-2/3 rounded-md border-2 border-indigo-300 bg-indigo-100 px-2 text-base shadow-sm outline-indigo-400 h-8  md:h-12 md:text-lg"
                                id="taskPriority" defaultValue={formData.project}>
                                <option value="Home">Home</option>
                                {customProjects.map((p,i) => <option key={i} value={p}>{p}</option>)}
                            </select>

                        </li>
                    </ul>

                    <div className="flex flex-wrap gap-4 pt-6 pb-2 text-lg items-center">
                        <button onClick={hideEditPopup} data-close-button type="button"
                            className="md:py-2 md:text-xl rounded-md border-2 border-slate-600/50 py-1 px-3 text-slate-800 transition-all hover:border-slate-300 hover:bg-slate-600/60 hover:text-white">Close</button>
                        <button ref={OpenButton} type="submit"
                            className="md:py-2 md:text-xl  w-32 rounded-md bg-blue-500 px-3 py-1 text-white transition-all hover:bg-blue-600/90 hover:outline-2 hover:outline-blue-800/50">Edit task</button>
                    </div>
                </form>
            </div>
            <div onClick={hideEditPopup} className="absolute top-0 bottom-0 left-0 right-0 bg-black/50 z-40"></div>
        </>
    )
}

export default EditTask