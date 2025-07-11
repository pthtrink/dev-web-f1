import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Dropdown } from "bootstrap";
import NavBar from "../components/NavBar";

const Layout = () => {
  useEffect(() => {
    // Inicializa todos os dropdowns na página
    const dropdownElementList = [].slice.call(
      document.querySelectorAll(".dropdown-toggle")
    );
    dropdownElementList.map(function (dropdownToggleEl) {
      return new Dropdown(dropdownToggleEl);
    });
  }, []);

  return (
    <>
      <NavBar />
      <div className="container mt-3">
        <Outlet />
      </div>
    </>
  );
};
export default Layout;