import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Search from "./Pages/Search";

function App() {
  return (
    <div>
      <h1>Book shelf</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
