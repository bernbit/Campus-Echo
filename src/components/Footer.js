import React from "react";

function Footer() {
  const date = new Date();
  return (
    <footer className="bg-primary  p-2 text-center font-semibold tracking-wide text-white">
      Copyright &copy; {date.getFullYear()}
    </footer>
  );
}

export default Footer;
