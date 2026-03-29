import CartIcon from "../assets/images/shopping-cart.png";

export default function NavBar(){
  return(
    <header className="container mx-auto shadow-md">
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
          <figure>
            <img src={CartIcon} alt="cart icon"/>
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