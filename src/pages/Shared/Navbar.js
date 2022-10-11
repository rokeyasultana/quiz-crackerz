import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div>
          <div class="navbar   bg-cyan-500">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content text-black font-bold mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/statistics'>Statistics</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
      </ul>
    </div>
    <Link to='/' class="btn btn-ghost normal-case text-xl"><span className='text-black'>QuizQuark</span></Link>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0 text-black font-bold">
      <li><Link to='/statistics'>Statistics</Link></li>
      <li><Link to ='/blog'>Blog</Link></li>
    </ul>
  </div>
  <div class="navbar-end">
    <Link to='/' ><img style={{height:'40px'}} src={logo} alt="" /></Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;