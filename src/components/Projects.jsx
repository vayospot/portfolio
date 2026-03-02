import GridItem from "./GridItem";

function Projects() {
  return (
    <div className="relative h-full w-full">
      {/* Ambient glowing orb */}
      <div className="bg-accent pointer-events-none absolute -right-10 -bottom-10 z-0 h-40 w-40 rounded-full opacity-20 blur-[50px]"></div>

      {/* Continuous Shimmer Sweep */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="animate-shimmer absolute top-0 left-0 h-full w-[30%] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="relative z-10 h-full w-full">
        <GridItem
          title="Projects"
          content="Cool stuffs I've built over the years"
          link={"/projects"}
        />
      </div>
    </div>
  );
}

export default Projects;
