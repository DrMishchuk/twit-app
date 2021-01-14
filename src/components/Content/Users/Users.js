import React from 'react';
import style from './Users.module.css';



let Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [ ];
        for (let i=1; i<=pageCount; i+=1){
            pages.push(i);
            
        }
        
        return (
            <div>
                <div className={style.containerPagination}>
                    {pages.map( p => <span className={props.currentPage === p ? style.selectedPage : style.paginationLink}
                                onClick={()=>{ props.onPageChange(p) }}>
                                {p}
                            </span>)}
                </div>
                 {props.users.map( user => (
                    <div key={user.id}>
                        <span>
                            <div>
                                <img src={user.photos.small != null ? user.photos.small : "https://forwww.com/wp-content/uploads/2020/02/user_no_photo_300x300.png.pagespeed.ce.I_-dT6aBxJ.png"} width="80px"/>
                            </div>
                            <div>
                                {user.followed 
                                ? <button onClick={()=> {props.unfollow(user.id)}}>Follow</button> 
                                : <button onClick={()=>{props.follow(user.id)}}>UnFoll</button>}
                            </div>
                        </span>
                        <span>
                            <div>
                                {user.name}
                            </div>
                            <div>
                                {"user.country"}
                            </div>
                        </span>
                    </div>
                 ) )}
            </div>
        );
    }

export default Users;