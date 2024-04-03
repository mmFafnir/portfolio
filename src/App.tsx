import { Routes, Route } from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";
import Main from "./pages/Main";
import Works from "./pages/Works";

import "./App.scss";
import Admin from "./pages/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/works" element={<Works />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
}

export default App;
