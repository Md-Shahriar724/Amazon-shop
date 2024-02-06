import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {


    return (
        <div>
            <div>
                <p> this is dashboard layout</p>
            </div>
            <div className='bg-pink-500 w-1/4'>
                <h1><Link to='/dashboard'>DashBoard</Link> </h1>
                <h1> <Link to='/dashboard/profile' >Profile</Link> </h1>
            </div>

            <div>
            <Outlet></Outlet>
            </div>
            

        </div>
    );
};

export default DashboardLayout;