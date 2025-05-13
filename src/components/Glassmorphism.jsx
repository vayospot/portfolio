function Glassmorphism({ className, children, enableHover = true, ...props }) {
  return (
    <div
      className={`rounded-5-x p-5-x relative border border-white/15 bg-white/5 shadow-lg backdrop-blur-sm ${enableHover ? "hover:border-accent active:border-accent" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Glassmorphism;
