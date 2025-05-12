function Button({ children, className, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className={`group active:bg-accent text-2-x px-3.5-x py-1.5-x relative border-b border-white hover:overflow-hidden hover:rounded ${className}`}
    >
      <span className="ease absolute top-0 left-0 h-0 w-0 border-t border-white transition-[width] duration-200 group-hover:w-full"></span>
      <span className="ease absolute top-0 right-0 h-0 w-0 border-r border-white transition-[height] duration-200 group-hover:h-full"></span>
      <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l border-white transition-[height] duration-200 group-hover:h-full"></span>
      {/* <span class="ease absolute right-0 bottom-0 h-0 w-0 border-b-2 border-white transition-[width] duration-200 group-hover:w-full"></span> */}
      {children}
    </a>
  );
}

export default Button;
