import "./App.css";
import Faq from "./components/Faq";
import Hero from "./components/Hero/Hero";
import UpcomingExaminations from "./components/UpcomingExaminations/UpcomingExaminations";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Statistics from "./components/statistics/Statistics";
import Subscribe from "./components/subscribe/Subscribe";

function App() {
  return (
    <div className="assignment">
      <Navbar />
      <Hero />
      <UpcomingExaminations />
      <Statistics />
      <Faq />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
