import { FaCheck } from "react-icons/fa6";

export default function Card({ card,carts,setCarts }) {
  const badgeUpdate = (badge) => {
    if (badge === "Best Seller") {
      return "bg-yellow-100 text-yellow-700";
    } else if (badge === "Popular") {
      return "bg-violet-100 text-violet-700";
    } else {
      return "bg-green-100 text-green-700";
    }
  };

  const addToCart=(currentCard)=>{
    const exists=carts.find((cart)=>cart.id===currentCard.id);
    if(exists){
      alert("Item already added in cart!");
      return;
    }
    setCarts((prevCart)=>[...prevCart,currentCard]);
  }
  return (
    <div className="flex flex-col justify-between p-4 gap-4 rounded-md shadow-md">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <figure className="size-12 p-2 ring-2 ring-gray-200 rounded-full">
            <img src={card.image} alt={card.title} className="size-full" />
          </figure>
          <div className={`w-fit px-2 py-1 rounded-full font-bold shadow-md ${(badgeUpdate(card.badge))}`}>
            {card.badge}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold">{card.title}</h1>
          <p className=" text-gray-500">{card.description}</p>
          <p>
            <span className="text-2xl font-bold">${card.price}/</span>
            <sub className="font-bold text-xl text-gray-500">
              {card.billing}
            </sub>
          </p>
          <ul className="flex flex-col gap-2">
            {card.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <FaCheck className="text-green-700" />
                <span className="text-gray-500">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <button className="bg-violet-800 w-full py-2 rounded-full font-bold text-white cursor-pointer hover:bg-violet-900 shadow-md" onClick={()=>addToCart(card)}>
          Buy Now
        </button>
      </div>
    </div>
  );
}
