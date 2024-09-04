import React from "react";

function Footer() {
  const date = new Date();
  return (
    <footer className="text-center tracking-wide text-white">
      <div className="flex flex-col  items-center justify-center bg-[#273c48] p-3">
        <img src={`/logo.svg`} alt="Campus Echo Logo" className="w-[50px]" />
        <div>
          <p className="font-koulen text-2xl tracking-widest">CAMPUS ECHO</p>
          <p className="text-sm font-light">
            Share Thoughts, Rants, and Complaints
          </p>
        </div>
      </div>
      <p className="bg-primary p-2 text-sm">
        Copyright &copy; {date.getFullYear()} | Developed by Bernard
      </p>
    </footer>
  );
}

export default Footer;
