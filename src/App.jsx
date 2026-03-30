import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Review from "./components/Review";
import GetStarted from "./components/GetStarted";
import TransparentPricing from "./components/TransparentPricing";

export default function App(){
  return(
    <div className="container mx-auto border border-red-500 flex flex-col gap-10">
      <NavBar />
      <Hero />
      <Review />
      <GetStarted />
      <TransparentPricing />
    </div>
  );
}