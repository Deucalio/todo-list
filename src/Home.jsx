import Header from "./components/Header";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import DisplayTasks from "./components/DisplayTasks";
import AddTaskPopup from "./components/AddTaskPopup"
import RemoveTaskPopup from "./components/RemoveTaskPopup";
import AddProject from "./components/AddProject"
import EditTask from "./components/EditTask";
import { Route, Routes, Link, useLocation, useParams } from "react-router-dom"
import NotFound from "./components/NotFound";

const initialData = [
    {
        title: `Accordion #1`,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consequatur repellendus.Sitipsa aperiam, repellat minima corporis facere nisi quaerat em ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consequatur repellendus.Sitipsa aperiam, repellat minima corporis facere nisi quaerat em ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consequatur repellendus.Sitipsa aperiam, repellat minima corporis facere nisi quaerat`,
        dueDate: `2022-12-09`,
        priorty: "High",
        project: "Home",
        isCompleted: false,
        id: 0,
    },
    {
        title: `Accordion #2 asdfa`,
        description: `Lorem . quaerat`,
        dueDate: `2022-12-31`,
        priorty: "Medium",
        project: "Home",
        isCompleted: false,
        id: 1,
    },
    {
        title: `Accordion #3`,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consequatur repellendus.Sitipsa aperiam, repellat minima corporis facere nisi quaerat`,
        dueDate: "2023-03-16",
        priorty: "Low",
        project: "Home",
        isCompleted: false,
        id: 2,
    },
    {
        title: `Accordion #3`,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consequatur repellendus.Sitipsa aperiam, repellat minima corporis facere nisi quaerat`,
        dueDate: "2023-03-16",
        priorty: "Low",
        project: "Custom Project",
        isCompleted: false,
        id: 3,
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
        const filteredTasks = TASKS.filter(task => task.project === locationName.split("-").join(" "))
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
        // const newTask = tasks.map(t => {
        //   if (t['id'] === id) {
        //     return { ...t, title: "JOHN CENA!" }
        //   }
        //   else {
        //     return t
        //   }
        // })
        // setTasks(newTask)
        // console.log(newTask)
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


                    {(locationName === "Home") ? <DisplayTasks openEditTaskPopup={openEditTaskPopup} removeTask={removeTask} changePriorty={changePriorty} tasks={tasks} /> :
                        <DisplayTasks locationName={locationName.split("-").join(" ")} openEditTaskPopup={openEditTaskPopup} removeTask={removeTask} changePriorty={changePriorty} tasks={tasks} />}
                </main>

            </section>
            {overlayActive && <AddTaskPopup addTask={addTask} customProjects={customProjects} closePopup={() => setOverlayActive(false)} />}
            {overlayActive && <div onClick={setOverlay} className="fixed top-0 bottom-0 left-0 right-0 z-10 bg-black/25" id="overlay"></div>}

            {overlayForRemove && <RemoveTaskPopup TASKS={TASKS} setTASKS={setTASKS} tasks={tasks} setTasks={setTasks} idForTaskBeingRemoved={idForTaskBeingRemoved} setOverlayForRemove={setOverlayForRemove} />}

            {displayCustomProject && <AddProject customProjects={customProjects} setCustomProjects={setCustomProjects} setDisplayCustomProject={setDisplayCustomProject} />}
            {overlayEditTask && <EditTask customProjects={customProjects} tasks={tasks} setTasks={setTasks} editTask={editTask} editedTaskId={editedTaskId} setOverlayEditTask={setOverlayEditTask} />}
        </>
    )
};

export default Home;




// if (locationName === "Home") {
//     return (
//         <>
//             <Header setOverlay={setOverlay} />
//             <section className="grid grid-cols-5 grad">
//                 <Nav setCustomProjects={setCustomProjects} customProjects={customProjects} openCustomProjectPopup={openCustomProjectPopup} setOverlay={() => setOverlayActive(false)} />
//                 <main className="acrd-list mx-auto pt-5 flex flex-col gap-2 p-2 col-span-5 md:col-span-4 px-1 w-full h-auto">
//                     <p className="container-item  w-full md:w-11/12 text-3xl text-slate-600 font-semibold tracking-normal text-left">
//                         Task List
//                     </p>
//                     <DisplayTasks openEditTaskPopup={openEditTaskPopup} removeTask={removeTask} changePriorty={changePriorty} tasks={tasks} />
//                 </main>

//             </section>
//             {overlayActive && <AddTaskPopup customProjects={customProjects} closePopup={() => setOverlayActive(false)} />}
//             {overlayActive && <div onClick={setOverlay} className="fixed top-0 bottom-0 left-0 right-0 z-10 bg-black/25" id="overlay"></div>}

//             {overlayForRemove && <RemoveTaskPopup setOverlayForRemove={setOverlayForRemove} />}

//             {displayCustomProject && <AddProject customProjects={customProjects} setCustomProjects={setCustomProjects} setDisplayCustomProject={setDisplayCustomProject} />}
//             {overlayEditTask && <EditTask customProjects={customProjects} tasks={tasks} setTasks={setTasks} editedTaskId={editedTaskId} setOverlayEditTask={setOverlayEditTask} />}
//         </>
//     );
// } else if (customProjects.includes(locationName.split("-").join(" "))) {
//     return (
//         <DisplayTasks locationName={locationName.split("-").join(" ")} openEditTaskPopup={openEditTaskPopup} removeTask={removeTask} changePriorty={changePriorty} tasks={tasks} />
//     )
// }
// else {
//     return (
//         < NotFound />
//     )
// }