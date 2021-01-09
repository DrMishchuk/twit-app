import React from 'react';
import style from './Content.module.css';
import Profile from './Profile/Profile';
import About from './About/About';
import Dialogs from './Dialogs/Dialogs';
import ContactList from './ContactList/ContactList';
import {Route} from 'react-router-dom';

const Content = (props) => {
    return (
        <div className={style.contentWrapper}>
            <Route path='/profile' render={ () => <Profile 
                                                    profilePage={props.state.profilePage} 
                                                    dispatch={props.dispatch} 
                                                  /> } 
            />
            <Route path='/dialogs' render={ () => <Dialogs 
                                                    dialogPage={props.state.dialogPage} 
                                                    dispatch={props.dispatch} 
                                                  /> } 
            />
            <Route path='/about' component={About} />
            <Route path='/contactlist' render={ () => <ContactList /> } />
        </div>
    )
}

export default Content;