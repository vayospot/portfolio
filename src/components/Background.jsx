import DoodleIcons from "./DoodleIcons";

function Background({ children, className = "" }) {
  return (
    <div
      className={`bg-dark text-light relative flex min-h-screen w-full items-center justify-center ${className}`}
    >
      <DoodleIcons />
      {children}
    </div>
  );
}

export default Background;
