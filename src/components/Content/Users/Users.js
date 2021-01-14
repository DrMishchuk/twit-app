import React from 'react';
import * as axios from 'axios';
import style from './Users.module.css';



class Users extends React.Component {

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then( response => {
            this.props.setUser(response.data.items);
        });
    }
    
    onPageChange = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then( response => {
            this.props.setUser(response.data.items);
        });
    }
    render(){
        
        let pageCount = this.props.totalUsersCount / this.props.pageSize;

        let pages = [ ];
        for (let i=1; i<=this.props.pageSize; i+=1){
            pages.push(i);
            
        }
        console.log(pages);
        return (
            <div>
                <div className={style.containerPagination}>
                    {pages.map( p => <span className={this.props.currentPage === p ? style.selectedPage : style.paginationLink}
                                onClick={()=>{this.onPageChange(p)}}>
                                {p}
                            </span>)}
                </div>
                 {this.props.users.map( user => (
                    <div key={user.id}>
                        <span>
                            <div>
                                <img src={user.photos.small != null ? user.photos.small : "https://forwww.com/wp-content/uploads/2020/02/user_no_photo_300x300.png.pagespeed.ce.I_-dT6aBxJ.png"} width="80px"/>
                            </div>
                            <div>
                                {user.followed 
                                ? <button onClick={()=> {this.props.unfollow(user.id)}}>Follow</button> 
                                : <button onClick={()=>{this.props.follow(user.id)}}>UnFoll</button>}
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
}

export default Users;