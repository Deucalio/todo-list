import Header from "./components/Header";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import DisplayTasks from "./components/DisplayTasks";
import AddTaskPopup from "./components/AddTaskPopup"
import RemoveTaskPopup from "./components/RemoveTaskPopup";
import AddProject from "./components/AddProject"
import EditTask from "./components/EditTask";


const initialData = [
  {
    title: `Accordion #1`,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consequatur repellendus.Sitipsa aperiam, repellat minima corporis facere nisi quaerat em ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consequatur repellendus.Sitipsa aperiam, repellat minima corporis facere nisi quaerat em ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consequatur repellendus.Sitipsa aperiam, repellat minima corporis facere nisi quaerat`,
    dueDate: `2022-12-09`,
    priorty: "High",
    project: "Home",
    isCompleted: false,
    isImportant: false,
    id: 0,
  },
  {
    title: `Accordion #2 asdfa`,
    description: `Lorem . quaerat`,
    dueDate: `2022-12-31`,
    priorty: "Medium",
    project: "Home",
    isCompleted: false,
    isImportant: false,
    id: 1,
  },
  {
    title: `Accordion #3`,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consequatur repellendus.Sitipsa aperiam, repellat minima corporis facere nisi quaerat`,
    dueDate: "2023-03-16",
    priorty: "Low",
    project: "Home",
    isCompleted: false,
    isImportant: false,
    id: 2,
  },

];

const App = () => {
  const [tasks, setTasks] = useState(initialData);
  const [customProjects, setCustomProjects] = useState(["Custom Project", "Another Project"])

  const [overlayActive, setOverlayActive] = useState(false)
  const [overlayForRemove, setOverlayForRemove] = useState(false)

  const [displayCustomProject, setDisplayCustomProject] = useState(false)


  const [overlayEditTask, setOverlayEditTask] = useState(false)
  const [editedTaskId, setEditedTaskId] = useState(null)

  const changePriorty = (newPriorty, id, setModalActive) => {

    const priortyTooltip = newPriorty.parentElement


    const newList = tasks.map(t => {
      if (t.id === id) {
        return { ...t, priorty: newPriorty.textContent }
      } else {
        return t
      }
    })
    setTasks(newList)

    priortyTooltip.style.opacity = "0"
    priortyTooltip.classList.add("hidden")
    setModalActive(false)
  }

  const removeTask = (e, id) => {
    setOverlayForRemove(true)

  }

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

  return (
    <div className="App">
      <Header setOverlay={setOverlay} />
      <section className="grid grid-cols-5 grad">
        <Nav setCustomProjects={setCustomProjects} customProjects={customProjects} openCustomProjectPopup={openCustomProjectPopup} setOverlay={() => setOverlayActive(false)} />
        <main className="acrd-list mx-auto pt-5 flex flex-col gap-2 p-2 col-span-5 md:col-span-4 px-1 w-full h-auto">
          <p className="container-item  w-full md:w-11/12 text-3xl text-slate-600 font-semibold tracking-normal text-left">
            Task List
          </p>
          <DisplayTasks openEditTaskPopup={openEditTaskPopup} removeTask={removeTask} changePriorty={changePriorty} tasks={tasks} />
        </main>
        {overlayActive && <AddTaskPopup customProjects={customProjects} closePopup={() => setOverlayActive(false)} />}
        {overlayActive && <div onClick={setOverlay} className="fixed top-0 bottom-0 left-0 right-0 z-10 bg-black/25" id="overlay"></div>}
      </section>
      {overlayForRemove && <RemoveTaskPopup setOverlayForRemove={setOverlayForRemove} />}

      {displayCustomProject && <AddProject customProjects={customProjects} setCustomProjects={setCustomProjects} setDisplayCustomProject={setDisplayCustomProject} />}
      {overlayEditTask && <EditTask customProjects={customProjects} tasks={tasks} setTasks={setTasks} editedTaskId={editedTaskId} setOverlayEditTask={setOverlayEditTask} />}
    </div>
  );
};

export default App;
