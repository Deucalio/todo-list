import { useEffect, useState, useRef } from "react"

const EditTask = ({ customProjects, setOverlayEditTask, editedTaskId, tasks, editTask }) => {
    const modal = useRef(null)
    const OpenButton = useRef(null)
    const taskBeingEdited = tasks.find(t => t.id === editedTaskId)


    const titleInput = useRef(null)
    const descriptionInput = useRef(null)
    const dueDateInput = useRef(null)

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        dueDate: "",
        priorty: "",
        project: "",
        id: null,
        isCompleted: false
    })


    const [req, setReq] = useState(false)

    useEffect(() => {
        if (tasks.length !== 0) {
            setFormData({
                title: taskBeingEdited.title,
                description: taskBeingEdited.description,
                dueDate: taskBeingEdited.dueDate,
                priorty: taskBeingEdited.priorty,
                project: taskBeingEdited.project,
                id: null,
                isCompleted: false
            })
        }
    }, [req])

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData({ ...formData, [name]: value })
    }

    const errorCheck = () => {
        const isError = [null, null, null]
        const trimmedValues = ["", ""]
        // returns true if there is no error
        if (formData.title.length === 0 || formData.title.trim() === "") {
            titleInput.current.classList.add("border-2", "border-[red]", "border-opacity-100")
            const error = titleInput.current.nextElementSibling
            error.classList.remove("hidden")
        } else {
            titleInput.current.classList.remove("border-2", "border-[red]", "border-opacity-100")
            const error = titleInput.current.nextElementSibling
            error.classList.add("hidden")

            trimmedValues[0] = formData.title.trim()
            isError[0] = true

        }
        if (formData.description.length === 0 || formData.description.trim() === "") {
            descriptionInput.current.classList.add("border-2", "border-[red]", "border-opacity-100")
            const error = descriptionInput.current.nextElementSibling
            error.classList.remove("hidden")
        } else {
            descriptionInput.current.classList.remove("border-2", "border-[red]", "border-opacity-100")
            const error = descriptionInput.current.nextElementSibling
            error.classList.add("hidden")

            trimmedValues[1] = formData.description.trim()
            isError[1] = true

        }


        if (formData.dueDate.length === 0) {
            dueDateInput.current.classList.add("border-2", "border-[red]", "border-opacity-100")
            const error = dueDateInput.current.nextElementSibling
            error.classList.remove("hidden")
        } else {
            dueDateInput.current.classList.remove("border-2", "border-[red]", "border-opacity-100")
            const error = dueDateInput.current.nextElementSibling
            error.classList.add("hidden")

            isError[2] = true
        }
        if (isError.every(b => b == true)) {
            const newData = { ...formData, title: trimmedValues[0], description: trimmedValues[1] }
            setFormData({ ...newData })
            return true
        }
    }






    const hideEditPopup = () => {
        modal.current.classList.add("scale-0")

        setTimeout(() => {
            setOverlayEditTask(false)
        }, 250)
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        if ((errorCheck())) {
            // no errors returned
            modal.current.classList.add("top-[26rem]")
            modal.current.classList.add("opacity-0")
            setReq(true)
            setTimeout(() => {
                hideEditPopup()
            }, (500));
        }
    }

    useEffect(() => {
        if (req === true) {
            formData.id = editedTaskId
            editTask(editedTaskId, formData)
        }
    }, [req])

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
                    <div className="">Edit a task</div>
                    <button onClick={hideEditPopup} data-close-button className="-translate-y-1 text-4xl">&times;</button>
                </div>

                <form className="">
                    <ul className="modal-body mt-5 flex flex-col gap-4 text-lg">
                        <li>
                            <label htmlFor="">Title:</label>
                            <input maxLength="15" ref={titleInput} name="title" type="text" onChange={handleChange} value={formData.title}
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
                            <textarea ref={descriptionInput} name="description" onChange={handleChange} value={formData.description}
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
                            <input ref={dueDateInput} name="dueDate" onChange={handleChange} value={formData.dueDate} type="date" id="duedate"
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
                                id="taskPriority" name="priorty" value={formData.priorty} required>
                                <option value="Low" >Low</option>
                                <option value="Medium" >Medium</option>
                                <option value="High">High</option>
                            </select>

                        </li>
                        <li>
                            <label htmlFor="">Project:</label>
                            <select onChange={handleChange} name="project"
                                className="block w-2/3 rounded-md border-2 border-indigo-300 bg-indigo-100 px-2 text-base shadow-sm outline-indigo-400 h-8  md:h-12 md:text-lg"
                                id="taskPriority" value={formData.project}>
                                <option value="Home">Home</option>
                                {customProjects.map((p, i) => <option key={i} value={p}>{p}</option>)}
                            </select>

                        </li>
                    </ul>

                    <div className="flex flex-wrap gap-4 pt-6 pb-2 text-lg items-center">
                        <button onClick={hideEditPopup} data-close-button type="button"
                            className="md:py-2 md:text-xl rounded-md border-2 border-slate-600/50 py-1 px-3 text-slate-800 transition-all hover:border-slate-300 hover:bg-slate-600/60 hover:text-white">Close</button>
                        <button onClick={handleSubmit} ref={OpenButton} type="submit"
                            className="md:py-2 md:text-xl  w-32 rounded-md bg-blue-500 px-3 py-1 text-white transition-all hover:bg-blue-600/90 hover:outline-2 hover:outline-blue-800/50">Edit task</button>
                    </div>
                </form>
            </div>
            <div onClick={hideEditPopup} className="absolute top-0 bottom-0 left-0 right-0 bg-black/50 z-40"></div>
        </>
    )
}

export default EditTask