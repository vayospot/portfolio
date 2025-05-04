function Background({ children, className }) {
  return (
    <div
      className={`bg-dark text-light flex min-h-screen w-full items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
}

export default Background;
