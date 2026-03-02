import { useEffect } from "react";
import { useParams } from "react-router";
import { APPS_DATA } from "../data/appsData";
import {
  FeatureCard,
  ScreenshotGallery,
  AppShowcaseLayout,
} from "../components/ShowcaseComponents";
import Glassmorphism from "../components/Glassmorphism";

const MobileAppShowcase = () => {
  const { appId } = useParams();
  const appData = APPS_DATA[appId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!appData) {
    return (
      <div className="bg-dark text-light flex min-h-screen items-center justify-center">
        <p className="text-3-x">App not found</p>
      </div>
    );
  }

  return (
    <AppShowcaseLayout appData={appData} scrollable={true}>
      {/* Screenshot Gallery */}
      <div className="mb-14-x">
        <ScreenshotGallery screenshots={appData.screenshots} isLoaded={true} />
      </div>

      {/* Features Section */}
      <div className="mb-14-x">
        <div className="mb-10-x mx-auto max-w-2xl text-center">
          <h2 className="text-5-x mb-3-x font-semibold">
            {appData.featuresHeading}
          </h2>
          <p className="text-2-x text-light/50 leading-relaxed">
            {appData.featuresSubHeading}
          </p>
        </div>

        <div className="p-4-x gap-4-x grid w-full max-w-[700px] grid-flow-dense grid-cols-1 place-self-center self-center min-[580px]:grid-cols-[repeat(auto-fill,_minmax(235px,_1fr))]">
          {appData.features.map((feature, index) => (
            <Glassmorphism
              key={index}
              className={feature.span}
              enableHover={false}
            >
              <FeatureCard title={feature.title} subtitle={feature.subtitle} />
            </Glassmorphism>
          ))}
        </div>
      </div>
    </AppShowcaseLayout>
  );
};

export default MobileAppShowcase;
