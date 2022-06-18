import { Route, Routes } from "react-router-dom";
import Detail from "./Pages/Detail";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":name" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
