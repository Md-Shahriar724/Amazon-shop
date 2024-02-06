import {Link, NavLink, Outlet } from "react-router-dom";


const MainLayout = () => {

    return (
        <div>
           <section className="flex justify-around   font-bold py-4 shadow-xl">
            <div>
                <h1 className="text-2xl text-pink-400"><Link to="/">Amaz<span className="text-purple-800">On</span></Link></h1>
            </div>
            <ul className="flex gap-6 text-xl text-purple-800">
                <li>
                <NavLink
                    to="/products"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-pink-100 py-2 px-4 rounded-2xl" : ""
                    }>Product</NavLink>
                </li>
                <li>
                <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-pink-100 py-2 px-4 rounded-2xl" : ""
                    }>About</NavLink>
                </li>
                <li>
                <NavLink
                    to="/dashboard"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-pink-100 py-2 px-4 rounded-2xl" : ""
                    }>DashBoard</NavLink>
                </li>
            </ul>
           </section>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;