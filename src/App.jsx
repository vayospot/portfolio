import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Articles from "./pages/Articles";
import Projects from "./pages/Projects";
import About from "./pages/About";
import ShowerThoughts from "./pages/ShowerThoughts.jsx";
import MainLayout from "./layout/MainLayout";
import MobileAppShowcase from "./pages/Showcase.jsx";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="articles" element={<Articles />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="showerthoughts" element={<ShowerThoughts />} />
        <Route path="showcase/:appId" element={<MobileAppShowcase />} />
      </Route>
    </Routes>
  );
}

export default App;
