import Nav from "./components/nav";
import NetworkBackground from "./components/network-background";
import About from "./sections/about";
import Contact from "./sections/contact";
import Hero from "./sections/hero";
import Homelab from "./sections/homelab";
import Projects from "./sections/projects";
import Resume from "./sections/resume";

export default function Home() {
  return (
    <>
      <NetworkBackground />
      <Nav />
      <main>
        <Hero />
        <About />
        <Resume />
        <Homelab />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
