import Header from "./components/Header";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import DisplayTasks from "./components/DisplayTasks";
import AddTaskPopup from "./components/AddTaskPopup"
import RemoveTaskPopup from "./components/RemoveTaskPopup";
import AddProject from "./components/AddProject"
import EditTask from "./components/EditTask";
import { useLocation } from "react-router-dom"
import NotFound from "./components/NotFound";
import TaskDone from "./components/TaskDone";

const initialData = [
    {
        title: `Accordion #1`,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consequatur repellendus.Sitipsa aperiam, repellat minima corporis facere nisi quaerat em ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consequatur repellendus.Sitipsa aperiam, repellat minima corporis facere nisi quaerat em ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consequatur repellendus.Sitipsa aperiam, repellat minima corporis facere nisi quaerat`,
        dueDate: `2022-12-09`,
        priorty: "High",
        project: "Home",
        id: 0,
        isCompleted: false
    },
    {
        title: `Accordion #2 asdfa`,
        description: `Lorem . quaerat`,
        dueDate: `2022-12-31`,
        priorty: "Medium",
        project: "Home",
        id: 1,
        isCompleted: false
    },
    {
        title: `Accordion #3`,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consequatur repellendus.Sitipsa aperiam, repellat minima corporis facere nisi quaerat`,
        dueDate: "2023-03-16",
        priorty: "Low",
        project: "Home",
        id: 2,
        isCompleted: false
    },
    {
        title: `Accordion #3`,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consequatur repellendus.Sitipsa aperiam, repellat minima corporis facere nisi quaerat`,
        dueDate: "2023-03-16",
        priorty: "Low",
        project: "Custom Project",
        id: 3,
        isCompleted: false
    },

];

const Home = () => {
    // capitals letters imply immutability and immortality
    const [TASKS, setTASKS] = useState(initialData)

    const [tasks, setTasks] = useState(initialData);
    const [customProjects, setCustomProjects] = useState(["Custom Project", "Another Project"])

    const location = useLocation()
    let locationName = location.pathname === "/" ? "Home" : location.pathname.slice(1,)

    const [url, setUrl] = useState("home")
    useEffect(() => {
        setUrl(locationName)
    })


    useEffect(() => {
        const filteredTasks = TASKS.filter(task => (task.project === locationName.split("-").join(" ") &&
            task.isCompleted !== true))
        setTasks(filteredTasks)
    }, [url, TASKS])

    const [overlayActive, setOverlayActive] = useState(false)
    const [overlayForRemove, setOverlayForRemove] = useState(false)

    const [displayCustomProject, setDisplayCustomProject] = useState(false)


    const [overlayEditTask, setOverlayEditTask] = useState(false)
    const [editedTaskId, setEditedTaskId] = useState(null)





    const setOverlay = () => {
        setOverlayActive(!overlayActive)
    }


    const openCustomProjectPopup = () => {
        setDisplayCustomProject(true)
    }

    const openEditTaskPopup = (e, id) => {
        setOverlayEditTask(true)
        setEditedTaskId(id)
    }


    if ((!customProjects.includes(locationName.split("-").join(" ")) && locationName !== "Home")) {

        return (
            <NotFound />
        )
    }


    // CRUD functions
    // add a task, remove a task, edit a task

    // changing priorty
    const changePriorty = (newPriorty, id, setModalActive) => {

        const priortyTooltip = newPriorty.parentElement


        const newList = TASKS.map(t => {
            if (t.id === id) {
                return { ...t, priorty: newPriorty.textContent }
            } else {
                return t
            }
        })
        setTASKS(newList)

        priortyTooltip.style.opacity = "0"
        priortyTooltip.classList.add("hidden")
        setModalActive(false)
    }


    // removes all the tasks in a project
    const removeAllTasks = (customProjectName) => {
        const newTask = TASKS.filter(task => task.project !== customProjectName)
        setTASKS(newTask)
    }

    // remove the task given id (triggers when user clicks on remove icon)
    const [idForTaskBeingRemoved, setIdForTaskBeingRemoved] = useState(null)
    const removeTask = (e, id) => {
        setOverlayForRemove(true)
        setIdForTaskBeingRemoved(id)
    }

    // add a task
    const addTask = (t) => {
        const task = t
        t["id"] = TASKS.length
        setTASKS([...TASKS, task])
    }


    // edit a task
    const editTask = (id, t) => {
        const editedTask = t;
        const idOfEditedTask = id
        const newList = TASKS.map(task => {
            if (task["id"] === idOfEditedTask) {
                return editedTask
            } else {
                return task
            }
        })
        console.log(editedTask)
        setTASKS(newList)
    }

    // task completed 
    const [taskCompletedPopup, setTaskCompletedPopup] = useState(false)
    const [removedTASK, setRemovedTASK] = useState([])
    const taskCompleted = (element, id) => {
        const markedCompleted = TASKS.map(t => {
            if (t['id'] === id) {
                return { ...t, isCompleted: true }
            } else {
                return t
            }
        })

        const completedTaskId = id
        const completedTaskElement = element
        const removedTask = completedTaskElement.parentElement.parentElement
        setTaskCompletedPopup(true)
        setRemovedTASK([markedCompleted, completedTaskId, removedTask])

        removedTask.style.transition = "all 0.3s ease"

        setTimeout(() => {
            removedTask.style.padding = "0"
            removedTask.style.maxHeight = "1rem"
            removedTask.style.opacity = "0"
        }, 0.001)

        setTimeout(() => {
            removedTask.classList.add("hidden")
        }, 300)

        // hide popup after 6 seconds



    }

    // bring the task back if user clicks on undo button
    const undoFunc = (element) => {
        setTaskCompletedPopup(false)
        removedTASK[2].classList.remove("hidden")
        // const div = element.parentElement.previousElementSibling.children[1].children[removedTASK[1] + 1]
        console.log(removedTASK[2])

        element.parentElement.classList.add("opacity-0")
        const markedCompleted = TASKS.map(t => {
            if (t['id'] === removedTASK[1]) {
                return { ...t, isCompleted: false }
            } else {
                return t
            }
        })
        setTASKS(markedCompleted)

        removedTASK[2].style.transition = "all 0.3s ease"


        setTimeout(() => {
            removedTASK[2].style.opacity = "1"
            removedTASK[2].style.padding = ""
            removedTASK[2].style.maxHeight = ""
        }, 100)

        // uncheck the task
        removedTASK[2].children[0].children[0].checked = false


        setTimeout(() => {
        }, 2000)
    }



    return (
        <>
            <Header setOverlay={setOverlay} />
            <section className="grid grid-cols-5 grad">
                <Nav removeAllTasks={removeAllTasks} setCustomProjects={setCustomProjects} customProjects={customProjects} openCustomProjectPopup={openCustomProjectPopup} setOverlay={() => setOverlayActive(false)} />
                <main className="acrd-list mx-auto pt-5 flex flex-col gap-2 p-2 col-span-5 md:col-span-4 px-1 w-full h-auto">
                    <p className="container-item  w-full md:w-11/12 text-3xl text-slate-600 font-semibold tracking-normal text-left">
                        Task List
                    </p>

                    { }


                    {(locationName === "Home") ? <DisplayTasks taskCompletedPopup={taskCompletedPopup} taskCompleted={taskCompleted} openEditTaskPopup={openEditTaskPopup} removeTask={removeTask} changePriorty={changePriorty} tasks={tasks} /> :
                        <DisplayTasks taskCompletedPopup={taskCompletedPopup} taskCompleted={taskCompleted} locationName={locationName.split("-").join(" ")} openEditTaskPopup={openEditTaskPopup} removeTask={removeTask} changePriorty={changePriorty} tasks={tasks} />}
                </main>

            </section>
            {overlayActive && <AddTaskPopup addTask={addTask} customProjects={customProjects} closePopup={() => setOverlayActive(false)} />}
            {overlayActive && <div onClick={setOverlay} className="fixed top-0 bottom-0 left-0 right-0 z-10 bg-black/25" id="overlay"></div>}

            {overlayForRemove && <RemoveTaskPopup TASKS={TASKS} setTASKS={setTASKS} tasks={tasks} setTasks={setTasks} idForTaskBeingRemoved={idForTaskBeingRemoved} setOverlayForRemove={setOverlayForRemove} />}

            {displayCustomProject && <AddProject customProjects={customProjects} setCustomProjects={setCustomProjects} setDisplayCustomProject={setDisplayCustomProject} />}
            {overlayEditTask && <EditTask customProjects={customProjects} tasks={tasks} setTasks={setTasks} editTask={editTask} editedTaskId={editedTaskId} setOverlayEditTask={setOverlayEditTask} />}
            <TaskDone removedTASK={removedTASK} setTASKS={setTASKS} setTaskCompletedPopup={setTaskCompletedPopup} taskCompletedPopup={taskCompletedPopup} undoFunc={undoFunc} />
        </>
    )
};

export default Home;
