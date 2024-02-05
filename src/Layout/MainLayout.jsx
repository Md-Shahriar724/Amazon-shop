import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
           <section className="flex justify-around   font-bold py-4 shadow-xl">
            <div>
                <h1 className="text-2xl text-pink-400"><a href="/">Amaz<span className="text-purple-800">On</span></a></h1>
            </div>
            <ul className="flex gap-6 text-xl text-purple-800">
                <li>
                    <a href="/products">Products</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/dashboard">Dashboard</a>
                </li>
            </ul>
           </section>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;