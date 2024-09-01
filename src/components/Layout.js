import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import NobuttonNav from "./NobuttonNav";

function Layout() {
  return (
    <>
      <NobuttonNav />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
