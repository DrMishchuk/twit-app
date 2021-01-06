import React from 'react';
import style from './Content.module.css';
import Profile from './Profile/Profile';
import About from './About/About';
import Dialogs from './Dialogs/Dialogs';
import {Route} from 'react-router-dom';



const Content = (props) => {
    return (
        <div className={style.contentWrapper}>
            <Route path='/profile' component={Profile} />
            <Route path='/dialogs' render={Dialogs} />
            <Route path='/about' component={About} />
        </div>
    )
}

export default Content;