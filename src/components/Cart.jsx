
export default function Cart({cart,setCarts,carts}){
  const handleDelete = (id) => {
  const updatedCart = carts.filter(item => item.id !== id);
  setCarts(updatedCart);
};
  return(
    <div className="shadow-md rounded-md p-4 flex items-center justify-between bg-gray-100">
      <div className="flex items-center gap-4">
        <figure className="size-10 p-2 ring-2 ring-gray-200 rounded-full">
          <img src={cart.image} alt={cart.title} className="size-full"/>
        </figure>
        <div>
          <h1 className="font-bold">{cart.title}</h1>
          <p className="font-semibold text-gray-500">${cart.price}</p>
        </div>
      </div>
      <button className="text-red-500 font-bold cursor-pointer hover:text-red-800" onClick={()=>handleDelete(cart.id)}>Remove</button>
    </div>
  );
}