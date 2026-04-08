import { Outlet } from "react-router";
import { Navigation } from "./Navigation";

export function Layout() {
  return (
    <div className="min-h-screen bg-[#e8dfd3]">
      <Navigation />
      <Outlet />
    </div>
  );
}
