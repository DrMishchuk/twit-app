import React from 'react';
import style from './Content.module.css';
import Profile from './Profile/Profile';
import About from './About/About';

import ContactList from './ContactList/ContactList';
import {Route} from 'react-router-dom';
import DialogsContainer from './Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';

const Content = (props) => {
    return (
        <div className={style.contentWrapper}>
            <Route path='/profile' 
                   render={ () => <Profile  profilePage={props.state.profilePage} 
                   dispatch={props.dispatch} /> } 
            />
            <Route path='/dialogs' render={ () => <DialogsContainer /> } />
            <Route path='/about' component={About} />
            <Route path='/contactlist' render={ () => <ContactList /> } />
            <Route path='/users' render={ () => <UsersContainer /> } />
        </div>
    )
}

export default Content;