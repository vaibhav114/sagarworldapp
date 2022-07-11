import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import Detail from "./Pages/Detail";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":name/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
