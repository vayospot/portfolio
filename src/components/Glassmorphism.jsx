// Fix the glassmorphism effect - it could be better
function Glassmorphism({ className, children, ...props }) {
  return (
    <div
      className={`rounded-5-x p-3-x hover:border-accent relative border border-white/15 bg-white/5 shadow-lg backdrop-blur-lg ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Glassmorphism;
