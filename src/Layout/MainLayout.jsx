import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            <div className="bg-green-400">Nav</div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;