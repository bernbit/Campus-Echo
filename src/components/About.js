import React from "react";

function About() {
  return (
    <div className="flex grow flex-col items-center justify-center px-4 py-2">
      <main className=" flex grow  flex-col justify-center gap-y-4 rounded-md bg-primary px-6  py-6 text-white md:w-9/12 md:py-4">
        <h2 className="font-koulen text-4xl tracking-wide">
          About Campus Echo
        </h2>
        <p>
          Campus Echo is more than an app. It is a dynamic digital campus
          designed for unrestricted student expression. Break free from
          limitations and join a vibrant community where your voice, thoughts,
          and experiences converge. Campus Echo celebrates diversity, fosters
          connections, and amplifies your unique perspective. It's not just a
          platform; it's your space to express, connect, and be part of a new
          era in student communication. Welcome to Campus Echo.
        </p>
      </main>
    </div>
  );
}

export default About;
