import React from "react";
import About from "./about/index";
import Projects from "./projects/index";
import Work from "./work/index";
import Contact from "./contact/index";

import "./body.css";
import Skills from "./skills";

const Body = () => {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="project">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Body;
