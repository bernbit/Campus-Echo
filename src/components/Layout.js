import React from "react";
import { Outlet } from "react-router-dom";

// Static Components
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ search, setSearch, resetFocus }) => {
  return (
    <div className="flex min-h-screen flex-col bg-secondary font-montserrat">
      <Header />
      <Nav search={search} setSearch={setSearch} resetFocus={resetFocus} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
