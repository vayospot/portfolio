import Hero from "../components/Hero";
import Connect from "../components/Connect";
import About from "../components/About";
import Projects from "../components/Projects";
import Status from "../components/Status";
import Articles from "../components/Articles";
import Game from "../components/Game";
import ShowerThoughts from "../components/ShowerThoughts";
import CheatSheet from "../components/CheatSheet";
import Glassmorphism from "../components/Glassmorphism";

// TODO: Make the grid resizable with drag just to show skills
function Home() {
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
    },
    {
      component: <Projects />,
      className: "row-span-2",
    },
    {
      component: <Status />,
    },
    {
      component: <Articles />,
    },
    {
      component: <Game />,
      className: "row-span-2",
    },
    {
      component: <ShowerThoughts />,
    },
    {
      component: <CheatSheet />,
    },
  ];

  return (
    <div className="place-contet-start grid h-10/12 w-full max-w-[1000px] grid-cols-[repeat(3,_minmax(200px,_1fr))] gap-3 self-center">
      {gridItems.map((item, index) => (
        <Glassmorphism key={index} className={item.className ?? ""}>
          {item.component}
        </Glassmorphism>
      ))}
    </div>
  );
}

export default Home;
