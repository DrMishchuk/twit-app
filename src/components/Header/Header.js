import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';


const Header = () => {
  return (
    <div className={style.headerWrapper}>
      Header
      <div>
        <NavLink to={'/login'}>Login</NavLink>
      </div>
    </div>
    
  )
}

export default Header;
