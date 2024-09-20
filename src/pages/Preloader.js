import React from "react";

function Preloader() {
  return (
    <main className="flex h-screen w-screen flex-col items-center  justify-center gap-4 bg-secondary ">
      <div className="fixed inset-0 z-10 flex flex-col items-center justify-center gap-4  bg-black bg-opacity-30">
        <div class="preloader">
          <div class="book-container">
            <div class="book">
              <div class="page"></div>
              <div class="page"></div>
              <div class="page"></div>
              <div class="cover"></div>
            </div>
          </div>
        </div>
        <p className="font-koulen text-4xl tracking-wider text-white">
          {Array.from("CAMPUS ECHO").map((letter, index) => (
            <span
              key={index}
              className="animate__animated animate__fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </p>
      </div>
    </main>
  );
}

export default Preloader;
