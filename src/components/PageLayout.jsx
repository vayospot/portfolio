import Background from "./Background";

function PageLayout({ children, title, className }) {
  return (
    <Background className="items-start">
      <div
        className={`my-15 flex w-full max-w-[80%] flex-col gap-10 ${className}`}
      >
        <h1>{title}</h1>

        {children}
      </div>
    </Background>
  );
}

export default PageLayout;
