import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext } from "react";

const NavBar = () => {

  const {user,logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() =>{})
    .catch( error => console.log(error))
}

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      
      
    </>
  );
  return (
    <div className="navbar bg-base-100 h-28">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className=" ">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-secondary mr-8">Appointment</button>
      </div>
      
      {user?.email?<li onClick={handleLogOut} ><button className="bg-slate-400 border-slate-400 border-2 h-100 rounded hover:bg-transparent w-[78px]  px-2" >Log out</button></li>:<li><Link to="/login"><button className="bg-slate-400 border-slate-400 border-2 h-8 rounded hover:bg-transparent   px-2">Login </button></Link></li>}
    </div>
  );
};

export default NavBar;
