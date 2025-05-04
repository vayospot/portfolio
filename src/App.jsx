import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Articles from "./Pages/Articles";
import Projects from "./pages/Projects";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="articles" element={<Articles />} />
      <Route path="projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
