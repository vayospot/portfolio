import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Articles from "./Pages/Articles";
import Projects from "./pages/Projects";
import About from "./pages/About";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="articles" element={<Articles />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
