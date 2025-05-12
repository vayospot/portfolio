function PageLayout({ children, title, className }) {
  return (
    <div
      className={`gap-10-x py-14-x px-5-x flex w-full max-w-[90%] flex-col ${className}`}
    >
      <h1>{title}</h1>

      {children}
    </div>
  );
}

export default PageLayout;
