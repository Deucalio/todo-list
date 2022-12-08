import Header from "./components/Header";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import DisplayTasks from "./components/DisplayTasks";
import AddTaskPopup from "./components/AddTaskPopup"


const initialData = [
  {
    title: `Accordion #1`,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consequatur repellendus.Sitipsa aperiam, repellat minima corporis facere nisi quaerat em ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consequatur repellendus.Sitipsa aperiam, repellat minima corporis facere nisi quaerat em ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consequatur repellendus.Sitipsa aperiam, repellat minima corporis facere nisi quaerat`,
    dueDate: `13/10/2022`,
    priorty: "High",
    project: "Home",
    isCompleted: false,
    isImportant: false,
    id: 0,
  },
  {
    title: `Accordion #2 asdfa`,
    description: `Lorem . quaerat`,
    dueDate: `13/10/2022`,
    priorty: "Medium",
    project: "Home",
    isCompleted: false,
    isImportant: false,
    id: 1,
  },
  {
    title: `Accordion #3`,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consequatur repellendus.Sitipsa aperiam, repellat minima corporis facere nisi quaerat`,
    dueDate: `13/10/2022`,
    priorty: "Low",
    project: "Home",
    isCompleted: false,
    isImportant: false,
    id: 2,
  },
  {
    title: `Accordion #3`,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consequatur repellendus.Sitipsa aperiam, repellat minima corporis facere nisi quaerat`,
    dueDate: `13/10/2022`,
    priorty: "Low",
    project: "Home",
    isCompleted: false,
    isImportant: false,
    id: 2,
  }, {
    title: `Accordion #3`,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consequatur repellendus.Sitipsa aperiam, repellat minima corporis facere nisi quaerat`,
    dueDate: `13/10/2022`,
    priorty: "Low",
    project: "Home",
    isCompleted: false,
    isImportant: false,
    id: 2,
  }, {
    title: `Accordion #3`,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consequatur repellendus.Sitipsa aperiam, repellat minima corporis facere nisi quaerat`,
    dueDate: `13/10/2022`,
    priorty: "Low",
    project: "Home",
    isCompleted: false,
    isImportant: false,
    id: 2,
  }, {
    title: `Accordion #3`,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consequatur repellendus.Sitipsa aperiam, repellat minima corporis facere nisi quaerat`,
    dueDate: `13/10/2022`,
    priorty: "Low",
    project: "Home",
    isCompleted: false,
    isImportant: false,
    id: 2,
  }, {
    title: `Accordion #3`,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consequatur repellendus.Sitipsa aperiam, repellat minima corporis facere nisi quaerat`,
    dueDate: `13/10/2022`,
    priorty: "Low",
    project: "Home",
    isCompleted: false,
    isImportant: false,
    id: 2,
  }, {
    title: `Accordion #3`,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consequatur repellendus.Sitipsa aperiam, repellat minima corporis facere nisi quaerat`,
    dueDate: `13/10/2022`,
    priorty: "Low",
    project: "Home",
    isCompleted: false,
    isImportant: false,
    id: 2,
  }, {
    title: `Accordion #3`,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consequatur repellendus.Sitipsa aperiam, repellat minima corporis facere nisi quaerat`,
    dueDate: `13/10/2022`,
    priorty: "Low",
    project: "Home",
    isCompleted: false,
    isImportant: false,
    id: 2,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(initialData);

  const [overlayActive, setOverlayActive] = useState(false)
  const [overlayForRemove, setOverlayForRemove] = useState(false)


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
    console.log(e, id)

  }

  const setOverlay = () => {
    setOverlayActive(!overlayActive)
  }

  return (
    <div className="App">
      <Header setOverlay={setOverlay} />
      <section className="grid grid-cols-5 grad">
        <Nav setOverlay={() => setOverlayActive(false)} />
        <main className="acrd-list mx-auto pt-5 flex flex-col gap-2 p-2 col-span-5 md:col-span-4 px-1 w-full h-auto">
          <p className="container-item  w-full md:w-11/12 text-3xl text-slate-600 font-semibold tracking-normal text-left">
            Task List
          </p>
          <DisplayTasks removeTask={removeTask} changePriorty={changePriorty} tasks={tasks} />
        </main>
        {overlayActive && <AddTaskPopup closePopup={() => setOverlayActive(false)} />}
        {overlayActive && <div onClick={setOverlay} className="fixed top-0 bottom-0 left-0 right-0 z-10 bg-black/25" id="overlay"></div>}
      </section>
    </div>
  );
};

export default App;
