import Glassmorphism from "./Glassmorphism";
import { IoLogoApple, IoLogoGooglePlaystore } from "react-icons/io5";

export const FeatureCard = ({ title, subtitle }) => {
  return (
    <div className="relative">
      <div className="flex h-full flex-col justify-end">
        <h3 className="text-3-x mb-2-x font-semibold text-white">{title}</h3>
        <p className="text-1-x text-white/50">{subtitle}</p>
      </div>
    </div>
  );
};

export const StoreButton = ({ store, disabled = true }) => {
  const isApple = store === "apple";

  return (
    <button
      disabled={disabled}
      className="gap-3-x p-2-x rounded-4-x group flex cursor-not-allowed items-center justify-center border border-white/10 bg-white/5 opacity-80 backdrop-blur-sm transition-all duration-300"
      title="Coming Soon"
    >
      {isApple ? (
        <>
          <IoLogoApple className="text-3-x" />
          <div className="flex flex-col items-start">
            <span className="text-0.5-x leading-tight opacity-60">
              Download on
            </span>
            <span className="text-1-x leading-tight font-medium">
              App Store
            </span>
          </div>
        </>
      ) : (
        <>
          <IoLogoGooglePlaystore className="text-3-x" />
          <div className="flex flex-col items-start">
            <span className="text-0.5-x leading-tight opacity-60">
              Get it on
            </span>
            <span className="text-1-x leading-tight font-medium">
              Google Play
            </span>
          </div>
        </>
      )}
    </button>
  );
};

export const NavButton = ({ label, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="p-3-x group flex cursor-pointer font-medium text-white/70 transition-all duration-300 hover:text-white"
    >
      <span className="text-2-x">{label}</span>
    </a>
  );
};

export const ScreenshotGallery = ({ screenshots, isLoaded }) => {
  if (!isLoaded) {
    return (
      <div className="gap-12-x grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))]">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className={`relative ${index % 3 === 0 ? "mt-12-x" : ""}`}
          >
            <div className="rounded-4-x aspect-[9/19] w-full animate-pulse bg-white/5" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="gap-12-x grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))]">
      {screenshots.map((screenshot, index) => {
        const positionClass = index % 3 === 0 ? "mt-12-x" : "";

        return (
          <div
            key={index}
            className={`relative ${positionClass} group cursor-pointer transition-all duration-500 hover:scale-[1.03]`}
          >
            <img
              src={screenshot.imageUrl}
              alt={screenshot.altText}
              className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        );
      })}
    </div>
  );
};

export const AppShowcaseLayout = ({ appData, children, scrollable }) => {
  return (
    <div
      className={`bg-dark text-light w-full ${scrollable ? "min-h-screen overflow-y-auto" : ""}`}
      style={{
        "--accent-color": appData.accentColor,
      }}
    >
      <div
        className={`flex flex-col ${scrollable ? "lg:h-screen lg:flex-row lg:overflow-hidden" : "lg:flex-row"}`}
      >
        {/* LEFT SIDEBAR */}
        <Glassmorphism className={"rounded-none"} enableHover={false}>
          <div className="flex h-full flex-col justify-between">
            {/* Hero Content */}
            <div className="px-6-x py-10-x flex flex-col justify-center">
              <div className="gap-8-x flex max-w-xs flex-col">
                <div className="gap-3-x flex items-center">
                  {/* App Icon */}
                  <div className="w-8-x h-8-x">
                    <img src={appData.icon} alt={appData.title} />
                  </div>

                  {/* Title */}
                  <h1 className="text-4-x leading-none font-bold tracking-tight">
                    {appData.title}
                  </h1>
                </div>

                {/* Description */}
                <p className="text-3-x">{appData.description}</p>

                {/* Download Buttons */}
                <div className="gap-3-x flex">
                  <StoreButton store="apple" />
                  <StoreButton store="google" />
                </div>
              </div>
            </div>

            {/* Bottom Navigation Buttons */}
            <div className="px-10-x py-6-x self-end">
              <div className="gap-3-x flex">
                <NavButton label="GitHub" href={appData.githubUrl} />
                <NavButton label="Video" href={appData.videoUrl} />
                <NavButton label="Design" href={appData.designUrl} />
              </div>
            </div>
          </div>
        </Glassmorphism>

        {/* RIGHT CONTENT */}
        <div className={`flex-1 ${scrollable ? "overflow-y-auto" : ""}`}>
          <div className="px-10-x py-12-x w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};
