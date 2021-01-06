import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';


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
    return (
        <div className={style.dialogs}>

            <div className={style.dialogItem}>
                <DialogItem name='Dima' id='1' />
                <DialogItem name='Valeri' id='2' />
                <DialogItem name='Sveta' id='3' />
            </div>

            <div className={style.messageItem}>
                <div>
                    <Message message='Hi'/>
                    <Message message='Hi is Yo'/>
                    <Message message='Hello'/>
                </div>
            </div>

        </div>
    );
}
export default Dialogs;