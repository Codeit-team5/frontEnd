import Nav from "./Nav";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Nav />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
