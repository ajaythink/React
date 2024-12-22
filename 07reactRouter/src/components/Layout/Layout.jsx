import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Layout() {
  return (
    <>
      {/* <div>Layout</div> */}
      <Header />
      <Outlet />                          
      <Footer />
    </>
  );
}

export default Layout;
