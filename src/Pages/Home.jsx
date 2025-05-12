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
      className: "-order-2 min-[580px]:col-span-2 min-[580px]:order-none",
    },
    {
      component: <Connect />,
    },
    {
      component: <Projects />,
      className: "-order-1 min-[580px]:row-span-2 min-[580px]:order-none",
    },
    {
      component: <Status />,
    },
    {
      component: <About />,
    },
    {
      component: <Articles />,
    },
    {
      component: <Game />,
      className: "min-[580px]:row-span-2",
    },
    {
      component: <ShowerThoughts />,
    },
    {
      component: <CheatSheet />,
    },
  ];

  return (
    <div className="place-contet-start p-4-x gap-3-x grid w-full max-w-[1000px] grid-flow-dense grid-cols-1 self-center min-[580px]:grid-cols-[repeat(auto-fill,_minmax(235px,_1fr))]">
      {gridItems.map((item, index) => (
        <Glassmorphism key={index} className={item.className ?? ""}>
          {item.component}
        </Glassmorphism>
      ))}
    </div>
  );
}

export default Home;
