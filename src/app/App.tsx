import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollEffects from "../components/ScrollEffects/ScrollEffects";
import Hero from "../sections/Hero/Hero";
import Experience from "../sections/Experience/Experience";
import Cases from "../sections/Cases/Cases";
import Focus from "../sections/Focus/Focus";
import Contact from "../sections/Contact/Contact";

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        К содержанию
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Experience />
        <Cases />
        <Focus />
        <Contact />
      </main>
      <Footer />
      <ScrollEffects />
    </>
  );
}
