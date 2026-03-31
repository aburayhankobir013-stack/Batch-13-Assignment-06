import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Review from "./components/Review";
import CardContainer from "./components/CardContainer";
import GetStarted from "./components/GetStarted";
import TransparentPricing from "./components/TransparentPricing";
import CtaCard from "./components/CtaCard";
import Footer from "./components/Footer";

export default function App(){
  return(
    <div className="container mx-auto border-4 rounded-md border-black">
      <NavBar />
      <Hero />
      <Review />
      <CardContainer />
      <GetStarted />
      <TransparentPricing />
      <CtaCard />
      <Footer />
    </div>
  );
}