import { useState } from "react";


export default function CardContainer() {
  const[buttonIsActive,setButtonIsActive]=useState({isProductsBtnActive: true, isCartBtnActive: false});
  const toggling=(currentBtn)=>{
    if(currentBtn==="productBtn"){
      setButtonIsActive({isProductsBtnActive: true, isCartBtnActive: false});
    }
    if(currentBtn==="cartBtn"){
      setButtonIsActive({isProductsBtnActive: false, isCartBtnActive: true});
    }
  }
  return (
    <div className="container mx-auto border border-red-500 min-h-screen flex flex-col gap-4 mt-12.5">
      <div className="border border-red-500 flex-none text-center space-y-4">
        <h1 className="text-3xl font-bold">Premium Digital Tools</h1>
        <p className="font-semibold">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
        <div className="border border-red-500 space-x-4">
          <button className={`w-25 py-2 rounded-full font-bold cursor-pointer border-2 ${buttonIsActive.isProductsBtnActive?`bg-violet-800 text-white`: `bg-white text-black`}`} onClick={()=>toggling("productBtn")}>Products</button>
          <button className={`w-25 py-2 rounded-full font-bold cursor-pointer border-2 ${buttonIsActive.isCartBtnActive?`bg-violet-800 text-white`: `bg-white text-black`}`} onClick={()=>toggling("cartBtn")}>Cart(2)</button>
        </div>
      </div>
      <div className="border border-red-500 flex-1 max-w-5xl mx-auto w-full">I am card container.</div>
    </div>
  );
}
