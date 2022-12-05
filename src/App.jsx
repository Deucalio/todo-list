import Header from "./components/Header";
import Nav from "./components/Nav";

const initialData = [
  {
    title: `Accordion #1`,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consequatur repellendus.Sitipsa aperiam, repellat minima corporis facere nisi quaerat`,
    dueDate: ``,
    priorty: "High",
    project: "Home",
    isCompleted: false,
    isImportant: false,
  },
  {
    title: `Accordion #2`,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consequatur repellendus.Sitipsa aperiam, repellat minima corporis facere nisi quaerat`,
    dueDate: ``,
    priorty: "Medium",
    project: "Home",
    isCompleted: false,
    isImportant: false,
  },
  {
    title: `Accordion #3`,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consequatur repellendus.Sitipsa aperiam, repellat minima corporis facere nisi quaerat`,
    dueDate: ``,
    priorty: "Low",
    project: "Home",
    isCompleted: false,
    isImportant: false,
  },
];

const App = () => {
  return (
    <div className="App">
      <Header />
      <section className="grid grid-cols-5 grad">
        <Nav />
        <main className="acrd-list overflow-y-scroll mx-auto pt-5 flex flex-col gap-2 p-2 col-span-5 md:col-span-4 px-3 w-full h-auto">
          <p className="container-item  w-full md:w-11/12 text-3xl text-slate-600 font-semibold tracking-normal text-left">
            Task List
          </p>
        </main>
      </section>
    </div>
  );
};

export default App;
