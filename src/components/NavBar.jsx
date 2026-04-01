import CartIcon from "../assets/images/shopping-cart.png";

export default function NavBar({carts}){
  return(
    <header className="container mx-auto shadow-md sticky top-0 z-50 bg-gray-100">
      <nav className="flex justify-between items-center py-4 px-2">
        <h1 className="text-violet-900 text-2xl font-bold">
          DigiTools
        </h1>
        <ul className="flex gap-4 font-semibold">
          <li>Products</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>FAQ</li>
        </ul>
        <div className="flex items-center gap-4">
          <figure className="relative size-7 p-1 flex">
            <img src={CartIcon} alt="cart icon size-full inline-block justify-center items-center"/>
            <span className="absolute -top-1 -right-1.5 inline-block font-bold">
              {carts.length===0?null:carts.length}
            </span>
          </figure>
          <button className="font-bold cursor-pointer">
            Login
          </button>
          <button className="px-4 py-2 cursor-pointer hover:bg-violet-950 shadow-md bg-violet-800 font-bold rounded-full text-white">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}