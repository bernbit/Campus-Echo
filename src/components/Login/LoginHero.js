import React from "react";
import CampusHero from "../../img/CampusHero.svg";

function LoginHero() {
  return (
    <section className="hidden grow basis-[45%] flex-col items-center justify-center gap-2 bg-extra md:flex">
      <div className="grid place-items-center">
        <img src={CampusHero} alt="Campus Echo Hero" className="w-[85%]" />
      </div>
      <div className="pt-10 text-center">
        <p className="text-3xl font-bold text-secondary lg:text-4xl">
          Campus Echo
        </p>
        <p className="text-colorText text-xl">
          Share Your Thought, Rants, and Complain
        </p>
      </div>
    </section>
  );
}

export default LoginHero;
