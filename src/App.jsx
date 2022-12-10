import Home from "./Home"
import { Route, Routes, Link, BrowserRouter } from "react-router-dom"
import NotFound from "./components/NotFound"


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:customProject" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default App