import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from './../../../redux/dialogsReducer';

const DialogItem = (props) => {
    return (
            <div className={`${style.dialog} ${style.active}`}>
                <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
            </div>
    );
}

const Message = (props) => {
    return (
        <div className="message">{props.message}</div>
    );
}

const Dialogs = (props) => {
    
    let dialogElement = props.dialogPage.dialogs.map( data => <DialogItem name={data.name} id={data.id} /> )
    let messageElement = props.dialogPage.messages.map( data => <Message message={data.message}/> )
    let newMessageBody = props.dialogPage.newMessageBody;

    let onNewMessageChange = (event) => {
        props.dispatch(updateNewMessageBodyActionCreator(event.target.value));
    }

    let onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator());
    }
    return (
        <div className={style.dialogs}>

            <div className={style.dialogItem}>
                {dialogElement}
            </div>

            <div className={style.messageItem}>
                <div>
                    {messageElement}
                </div>
                <div>
                    <textarea value={newMessageBody} 
                              placeholder="Enter Your Message"
                              onChange={ onNewMessageChange }/>
                    <div><button onClick={ onSendMessageClick }>Send Massege</button></div>
                </div>
            </div>

        </div>
    );
}
export default Dialogs;