import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../AuthContext/AuthContext";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import Swal from "sweetalert2";


const Navbar = () => {
    const { user, loading } = useContext(UserContext);
    const handleSignout = () => {
        signOut(auth).then(() => {
            Swal.fire({
                icon: "success",
                title: "Successfully sign out",
                showConfirmButton: false,
                timer: 2500
            });
        }).catch((error) => {
            // An error happened.
        });
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/add-craft-items">Add Craft Items</NavLink></li>
        <li><NavLink to="/all-art-craft-items">All Art & craft Items</NavLink></li>
        <li><NavLink to="/my-craft-list">My Art&Craft List</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Art & Craft</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            {!loading && <div className="navbar-end">
                {!user ? <Link to="/signin" className="btn">Sign in</Link> : <Link onClick={handleSignout} className="btn">Sign out</Link>}
            </div>}
        </div>
    );
};

export default Navbar;