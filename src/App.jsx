// TODO: Make the grid resizable with drag just to show skills
import Hero from "./Pages/Hero";
import Connect from "./Pages/Connect";
import About from "./Pages/About";
import Projects from "./Pages/Projects.jsx";
import Status from "./Pages/Status";
import Articles from "./Pages/Articles";
import Backdoor from "./Pages/Backdoor";
import ShowerThoughts from "./Pages/ShowerThoughts";
import CheatSheet from "./Pages/CheatSheet";

function App() {
  const gridItems = [
    {
      component: <Hero />,
      className: "col-span-2",
    },
    {
      component: <Connect />,
    },
    {
      component: <About />,
      className: "row-span-2",
    },
    {
      component: <Projects />,
    },
    {
      component: <Status />,
    },
    {
      component: <Articles />,
    },
    {
      component: <Backdoor />,
    },
    {
      component: <ShowerThoughts />,
    },
    {
      component: <CheatSheet />,
    },
  ];

  return (
    <div className="bg-dark text-light flex h-screen w-screen items-center justify-center">
      <div className="place-contet-start grid h-10/12 w-full max-w-[1000px] grid-cols-[repeat(3,_minmax(200px,_1fr))] gap-3">
        {gridItems.map((item) => (
          <div
            key={item.name}
            // Fix the glassmorphism effect
            className={`relative rounded-xl border border-white/15 bg-white/5 p-3 shadow-lg backdrop-blur-lg ${item.className ?? ""}`}
          >
            {item.component}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;