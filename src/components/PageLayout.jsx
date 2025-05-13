import Glassmorphism from "./Glassmorphism";

function PageLayout({ children, title, className, useGlassmorphism = true }) {
  return (
    <div className={`py-14-x px-5-x w-full max-w-[90%] ${className}`}>
      {useGlassmorphism ? (
        <Glassmorphism className="gap-10-x flex flex-col" enableHover={false}>
          <h1>{title}</h1>

          {children}
        </Glassmorphism>
      ) : (
        <div>
          <h1>{title}</h1>

          {children}
        </div>
      )}
    </div>
  );
}

export default PageLayout;
