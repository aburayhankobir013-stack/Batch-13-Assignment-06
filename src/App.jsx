import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Review from "./components/Review";
import CardContainer from "./components/CardContainer";
import GetStarted from "./components/GetStarted";
import TransparentPricing from "./components/TransparentPricing";
import CtaCard from "./components/CtaCard";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";



export default function App(){
  const[cards,setCards]=useState([]);
  const[carts,setCarts]=useState([]);
  useEffect(()=>{
    (async()=>{
      const response=await fetch("database/data.json");
      const useableData=await response.json();
      setCards(useableData);
    })();
  },[]);
  return(
    <div className="container mx-auto border-4 rounded-md border-black">
      <NavBar carts={carts}/>
      <Hero />
      <Review />
      <CardContainer cards={cards} carts={carts} setCarts={setCarts}/>
      <GetStarted />
      <TransparentPricing />
      <CtaCard />
      <Footer />
    </div>
  );
}