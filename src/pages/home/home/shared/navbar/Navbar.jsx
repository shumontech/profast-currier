import React from 'react';
import { Link, NavLink } from 'react-router';
import ProFastLogo from '../profastlogo/ProFastLogo';
import UseAuth from '../../../../../hooks/UseAuth';


const Navbar = () => {
  const {user} = UseAuth;

  console.log("user info", user);

    const navItems = (<>
        
        <li className='text-2xl bold'><NavLink to='/'>Home</NavLink></li>
        
        <li className='text-2xl bold'><NavLink to='/sendParcel'>Send A Parcel</NavLink></li>
        <li className='text-2xl bold'><NavLink to='/coverage'>Coverage</NavLink></li>

          {
            // user && 
            <>
            <li className='text-2xl bold'><NavLink to='/dashboard'>Dashboard</NavLink></li>
            </>
          }



        <li className='text-2xl bold'><NavLink to='/register'>About</NavLink></li>
    </>
    );  
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {navItems}
      </ul>
    </div>
   <ProFastLogo></ProFastLogo>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/login">
    <a className="btn btn-primary">Login</a>
    </Link>
    
  </div>
</div>
    );
};

export default Navbar;