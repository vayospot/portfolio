import { useEffect, useState, useRef } from "react";
import { APPS_DATA } from "../data/appsData";
import {
  FeatureCard,
  ScreenshotGallery,
  AppShowcaseLayout,
} from "../components/ShowcaseComponents";
import Glassmorphism from "../components/Glassmorphism";

const AllShowcases = () => {
  const [visibleApps, setVisibleApps] = useState([]);
  const appRefs = useRef({});

  const appIds = Object.keys(APPS_DATA);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const appId = entry.target.dataset.appId;
          if (entry.isIntersecting) {
            setVisibleApps((prev) => {
              if (!prev.includes(appId)) {
                return [...prev, appId];
              }
              return prev;
            });
          }
        });
      },
      {
        root: null,
        rootMargin: "200px", // Load when within 200px of viewport
        threshold: 0.1,
      },
    );

    // Observe all app sections
    Object.values(appRefs.current).forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-dark text-light min-h-screen w-full">
      {appIds.map((appId, index) => (
        <div
          key={appId}
          ref={(el) => (appRefs.current[appId] = el)}
          data-app-id={appId}
          className={index > 0 ? "mt-4-x" : ""}
        >
          <AppShowcaseLayout appData={APPS_DATA[appId]} scrollable={false}>
            <div className="mb-14-x">
              <ScreenshotGallery
                screenshots={APPS_DATA[appId].screenshots}
                isLoaded={visibleApps.includes(appId)}
              />
            </div>

            <div className="mb-14-x">
              <div className="mb-10-x mx-auto max-w-2xl text-center">
                <h2 className="text-5-x mb-3-x font-semibold">
                  {APPS_DATA[appId].featuresHeading}
                </h2>
                <p className="text-2-x text-light/50 leading-relaxed">
                  {APPS_DATA[appId].featuresSubHeading}
                </p>
              </div>

              <div className="p-4-x gap-4-x grid w-full max-w-[700px] grid-flow-dense grid-cols-1 place-self-center self-center min-[580px]:grid-cols-[repeat(auto-fill,_minmax(235px,_1fr))]">
                {APPS_DATA[appId].features.map((feature, index) => (
                  <Glassmorphism
                    key={index}
                    className={feature.span}
                    enableHover={false}
                  >
                    <FeatureCard
                      title={feature.title}
                      subtitle={feature.subtitle}
                    />
                  </Glassmorphism>
                ))}
              </div>
            </div>
          </AppShowcaseLayout>
        </div>
      ))}
    </div>
  );
};

export default AllShowcases;
