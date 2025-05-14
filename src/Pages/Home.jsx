import Hero from "../components/Hero";
import Connect from "../components/Connect";
import About from "../components/About";
import Projects from "../components/Projects";
import Status from "../components/Status";
import Articles from "../components/Articles";
import Lifespan from "../components/Lifespan";
import ShowerThoughts from "../components/ShowerThoughts";
import CheatSheet from "../components/CheatSheet";
import Glassmorphism from "../components/Glassmorphism";

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
      component: <Lifespan />,
      className: "order-last min-[580px]:row-span-2 min-[580px]:order-none",
    },
    {
      component: <CheatSheet />,
    },
    {
      component: <ShowerThoughts />,
    },
  ];

  return (
    <div className="p-4-x gap-4-x grid w-full max-w-[1000px] grid-flow-dense grid-cols-1 self-center min-[580px]:grid-cols-[repeat(auto-fill,_minmax(235px,_1fr))]">
      {gridItems.map((item, index) => (
        <Glassmorphism
          key={index}
          className={item.className ?? ""}
          style={{ padding: 0 }} // padding is handled by each grid item
        >
          {item.component}
        </Glassmorphism>
      ))}
    </div>
  );
}

export default Home;
