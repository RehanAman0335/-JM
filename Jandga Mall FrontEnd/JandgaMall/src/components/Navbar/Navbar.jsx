import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Jandga from "/src/assets/Images/Jandga.jpg";
import { MdOutlineShoppingCart } from "react-icons/md";
import SignUp from "../SignUp/SignUp";
import SignIn from "../signIn/SignIn";

function Navbar() {
  return (
    <>
      <nav className="nav">
        <img className="d-block w-24  h-20" src={Jandga} alt="Jandga" />
        <div className="dl">
          <ul className="pge">
            <Link to="/home">
              <li className="p">Home</li>
            </Link>
            <Link to="/about">
              <li className="p">About Us</li>
            </Link>
            <Link to="/contact">
              <li className="p">Contact</li>
            </Link>
          </ul>
        </div>

        <div bg="dark" data-bs-theme="light">
          <input className="si" type="search" placeholder="Search Products" />
          <button className="cart-icon ml-5">
            <FaSearch />
          </button>
          <button
            className="cart-icon ml-5"
            onClick={() => {
              if (!isSignIn) {
                alert("Please sign in first to view cart.");
              } else {
                // Display cart layout logic here
              }
            }}
          >
            <MdOutlineShoppingCart />
          </button>
        </div>

        <ul className="ul">
          <li className="sign">
            <SignIn />
          </li>
          <li className="sign">
            <SignUp />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
