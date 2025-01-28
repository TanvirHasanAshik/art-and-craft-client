import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Navbar/Navbar";


const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
};

export default Root;