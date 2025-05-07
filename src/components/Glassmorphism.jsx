// Fix the glassmorphism effect - it could be better
function Glassmorphism({ className, children, ...props }) {
  return (
    <div
      className={`relative rounded-xl border border-white/15 bg-white/5 p-3 shadow-lg backdrop-blur-lg hover:border-accent ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Glassmorphism;
