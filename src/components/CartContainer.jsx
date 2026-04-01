import { toast } from "react-toastify";
import Cart from "./Cart";

export default function CartContainer({carts,setCarts}){
  const totalPrice=carts.reduce((total,cart)=>{
    return total+cart.price;
  },0);

  const removeHandle=()=>{
    setCarts([]);
    toast.error("All carts removed!");
  }

  return(
    <div className="size-full flex flex-col p-5 gap-5 relative">
      {carts.length!==0?<><h1 className="flex-none text-xl font-bold">
        Your Cart
      </h1>
      <div className="flex-1 rounded-md shadow-md flex flex-col gap-2">
        {carts.map((cart)=><Cart key={cart.id} cart={cart} setCarts={setCarts} carts={carts}/>)}
      </div>
      <div className="flex-none flex flex-col gap-5">
        <div className="flex justify-between font-bold text-xl bg-gray-200 px-2 py-1 rounded-full shadow-mdv">
          <span>Total:</span>
          <span>${totalPrice}</span>
        </div>
        <button className="bg-violet-800 font-bold py-2 shadow-md rounded-full text-white cursor-pointer hover:bg-violet-900" onClick={()=>removeHandle()}>Proceed To Checkout</button>
      </div></>:<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-2xl text-gray-400">Empty Cart</div>}
    </div>
  );
}