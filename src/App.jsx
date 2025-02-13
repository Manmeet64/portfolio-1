// import Hero from "./components/hero/Hero";
// import Services from "./components/services/Services";
// import Portfolio from "./components/portfolio/Portfolio";
// import Contact from "./components/contact/Contact";

import { lazy, Suspense } from "react";
import LazyLoad from "react-lazyload";

const Hero = lazy(() => import("./components/hero/Hero"));
const About = lazy(() => import("./components/experiance/About"));
const Skills = lazy(() => import("./components/skills/Skills"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contact/Contact"));

const App = () => {
  return (
    <div className="container">
      <section id="home">
        <Hero />
      </section>

      <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={100}>
          <section id="about">
            <About />
          </section>
        </LazyLoad>
      </Suspense>
      <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={100}>
          <section id="skills">
            <Skills />
          </section>
        </LazyLoad>
      </Suspense>
      <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={100}>
          <Portfolio />
        </LazyLoad>
      </Suspense>
      <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={100}>
          <section id="contact">
            <Contact />
          </section>
        </LazyLoad>
      </Suspense>
    </div>
  );
};

export default App;
