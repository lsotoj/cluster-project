import { VerticalNavbar } from "./components/Sidebar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div className="flex">
        <VerticalNavbar />
        <div className=" p-3 h-screen w-screen">
          <Outlet />
        </div>
      </div>
    </>
  );
};
