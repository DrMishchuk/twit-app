import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className={style.navbarWrapper}>
        <div className={style.item}>
          <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/dialogs" activeClassName={`${style.active}`}>Dialogs</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/about" activeClassName={`${style.active}`}>About</NavLink>
        </div>
        <div className={`${style.item} ${style.active}`}>
          <a href="#">Settings</a>
        </div>
    </nav>
    
  )
}

export default Navbar;
