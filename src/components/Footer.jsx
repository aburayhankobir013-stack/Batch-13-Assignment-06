import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
export default function Footer(){
  return(
    // Footer container
    <div className="container mx-auto flex flex-col gap-5 border border-red-500 bg-slate-900 text-white pb-5">
      <div className="flex justify-between pt-25 px-12.5">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-white">
            DigiTools
          </h1>
          <p className="font-semibold">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">
            Product
          </h1>
          <ul className="flex flex-col gap-1 font-semibold">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">
            Company
          </h1>
          <ul className="flex flex-col gap-1 font-semibold">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">
            Resources
          </h1>
          <ul className="flex flex-col gap-1 font-semibold">
            <li>Documentation</li>
            <li>Help center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">
            Social Links
          </h1>
          <ul className="flex items-center gap-2">
            <li className="size-9 flex justify-center items-center rounded-full bg-white text-black text-xl"><FaInstagramSquare /></li>
            <li className="size-9 flex justify-center items-center rounded-full bg-white text-black text-xl"><FaFacebookSquare /></li>
            <li className="size-9 flex justify-center items-center rounded-full bg-white text-black text-xl"><IoLogoLinkedin /></li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-between px-12.5">
        <p>
          © 2026 Digitools. All rights reserved.
        </p>
        <ul className="flex items-center gap-4">
          <li>Privacy</li>
          <li>Terms of Service</li>
          <li>Cookies</li>
        </ul>
      </div>
    </div>
  );
}