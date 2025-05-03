function Button({ children, className }) {
  return (
    <button
      class={`group active:bg-accent relative border-b border-white p-1.5 px-3.5 text-xl transition-all duration-200 hover:overflow-hidden hover:rounded focus:overflow-hidden focus:rounded focus:outline-none ${className}`}
    >
      <span class="ease absolute top-0 left-0 h-0 w-0 border-t border-white transition-all duration-200 group-hover:w-full group-focus:w-full"></span>
      <span class="ease absolute top-0 right-0 h-0 w-0 border-r border-white transition-all duration-200 group-hover:h-full group-focus:h-full"></span>
      <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l border-white transition-all duration-200 group-hover:h-full group-focus:h-full"></span>
      {/* <span class="ease absolute right-0 bottom-0 h-0 w-0 border-b-2 border-white transition-all duration-200 group-hover:w-full"></span> */}
      {children}
    </button>
  );
}

export default Button;
