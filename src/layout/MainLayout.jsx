import { Outlet } from "react-router";
import DoodleIcons from "../components/DoodleIcons";

function MainLayout() {
  return (
    <div className="bg-dark text-light flex min-h-screen w-full justify-center">
      <DoodleIcons />
      <Outlet />
    </div>
  );
}

export default MainLayout;
