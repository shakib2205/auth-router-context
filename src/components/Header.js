import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log('context', user);

    const handleSignOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.error(error));
    }
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Awesome Auth</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/home'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/order'>Orders</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log In</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {user?.email && <span>Welcome,{user.email}</span>}
                {
                    user?.email?
                    <button onClick={handleSignOut} className="btn btn-sm">SignOut</button>
                    : <Link  to='/login'>
                        <button className='btn btn-sm'>LogIn</button>
                    </Link>
                }
            </div>

        </div>
    );
};

export default Header;