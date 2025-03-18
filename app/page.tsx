import Navbar from "../app/Components/Navbar";
import Jumbotron from "../app/Components/Jumbotron";
import About from "../app/Components/About";
import Skills from "../app/Components/Skill";
import Service from "../app/Components/Service";
import Portfolio from "../app/Components/Portfolio";
import Feedback from "../app/Components/Feedback";
import Blog from "../app/Components/Blog";
import Footer from "../app/Components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <About />
      <Skills />
      <Service />
      <Portfolio />
      <Feedback />
      <Blog />
      <Footer />
    </div>
  );
}
