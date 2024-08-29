import React from "react";
import { GoInfo, GoGoal, GoEye } from "react-icons/go";
function About() {
  const aboutInfo = [
    {
      title: "About",
      description:
        "Campus Echo is more than an app. It is a dynamic digital campus designed for unrestricted student expression. Break free from limitations and join a vibrant community where your voice, thoughts,and experiences converge. Campus Echo celebrates diversity, fosters connections, and amplifies your unique perspective. It's not just a platform; it's your space to era in student communication. Welcome to Campus Echo",
      icon: GoInfo,
    },
    {
      title: "Mission",
      icon: GoGoal,
      description:
        "Inclusivity, Respect, Freedom of Expression, Community Engagement.",
    },
    {
      title: "Vision",
      icon: GoEye,
      description:
        "Our mission is to provide a safe, anonymous platform for students to express themselves openly, engage in meaningful conversations, and connect with the broader campus community.",
    },
    {
      title: "Vision",
      icon: GoEye,
      description:
        "Our mission is to provide a safe, anonymous platform for students to express themselves openly, engage in meaningful conversations, and connect with the broader campus community.",
    },
  ];

  return (
    <main className="border-test flex h-screen grow flex-col items-center justify-center px-4">
      <div className="border-test px-6  py-6 text-white md:w-9/12 md:py-10"></div>
    </main>
  );
}

export default About;
