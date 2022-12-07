import React from 'react'

const AddTaskPopup = () => {
  return (
    <div id="modalAddTask"
        className="z-50 modal fixed top-1/2 left-1/2 z-20 mt-2 h-5/6 w-11/12 -translate-x-1/2 -translate-y-1/2 overflow-x-hidden overflow-y-scroll rounded-md border-2 border-black/30 bg-indigo-50 p-4 shadow-md md:w-2/3  transition-all">
        <div className="modal-header flex flex-wrap justify-between border-b-2 border-b-black text-xl">
            <div className="">Add a task</div>
            <button data-close-button className="-translate-y-1 text-4xl">&times;</button>
        </div>

        <form className="">
            <ul className="modal-body mt-5 flex flex-col gap-4 text-lg">
                <li>
                    <label for="">Title:</label>
                    <input type="text"
                        className="h-9 w-full rounded-md border-2 border-indigo-600 border-opacity-50 bg-indigo-100 px-2 text-sm shadow-sm outline-0" />
                </li>
                <li>
                    <label className="" for="">Description:</label>
                    <textarea id="w3review" name="w3review"
                        className="h-60 w-full resize-none rounded-md border-2 border-indigo-600 border-opacity-50 bg-indigo-100 text-sm shadow-sm outline-0 md:h-40"></textarea>
                </li>
                <li>
                    <label for="duedate">Due Date:</label>
                    <input type="date" id="duedate"
                        className="block rounded-md border-2 border-indigo-600 border-opacity-50 bg-indigo-100 px-2 text-sm shadow-sm outline-0 md:h-12" />
                </li>
                <li>
                    <label for="priorty">Priorty:</label>
                    <select
                        className="block w-2/3 rounded-md border-2 border-indigo-300 bg-indigo-100 px-2 text-sm shadow-sm outline-0 md:h-12 md:text-lg"
                        id="taskPriority" required="">
                        <option value="low" selected="">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </li>
                <li>
                    <label for="">Project:</label>
                    <select
                        className="block w-2/3 rounded-md border-2 border-indigo-300 bg-indigo-100 px-2 text-base shadow-sm outline-0 md:h-12 md:text-lg"
                        id="taskPriority" required="">
                        <option value="low" selected="">Home</option>
                        <option value="high">Important</option>
                    </select>
                </li>
            </ul>

            <div className="flex flex-wrap gap-4 pt-6 pb-2 text-lg items-center">
                <button data-close-button type="button"
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