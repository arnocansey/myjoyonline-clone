import { BrowserRouter, NavLink } from "react-router-dom";
import "../input.css";
import logo1 from "./myjoyonline-logo.png";
import { FaFacebook } from "react-icons";
export default function Navbar() {
  return (
    <>
      <BrowserRouter>
        <header className="flex flex-row justify-between bg-red-500 border border-y-4 border-black">
          <img src={logo1} />
          <nav className="flex flex-row text-white align-middle">
            <NavLink to="/" className="hover:bg-black p-2">
              Home
            </NavLink>
            <NavLink to="news" className="hover:bg-black p-2">
              News
            </NavLink>
            <NavLink to="entertainment" className="hover:bg-black p-2">
              Entertainment
            </NavLink>
            <NavLink to="business" className="hover:bg-black p-2">
              Business
            </NavLink>
            <NavLink to="sports" className="hover:bg-black p-2">
              Sports
            </NavLink>
            <NavLink to="opinion" className="hover:bg-black p-2">
              Opinion
            </NavLink>
            <NavLink to="research" className="hover:bg-black p-2">
              Research
            </NavLink>
            <NavLink to="live" className="hover:bg-black p-2">
              Live TV/Radio
            </NavLink>
            <NavLink to="media" className="hover:bg-black p-2">
              Media
            </NavLink>
            <NavLink to="elections" className="hover:bg-black p-2">
              Elections
            </NavLink>
          </nav>
        </header>
      </BrowserRouter>
    </>
  );
}
