import React from 'react';



let Users = (props) => {

   
    if (props.users.length === 0){
        props.setUser(
            [
                {id: 1, photo: "https://img.joinfo.ua/i/2019/04/800x0/5cc35e70e4c51.jpg", name: "Dima M", status: "I am a boss", followed: false, country: "Ukraine"},
                {id: 2, photo: "https://img.joinfo.ua/i/2019/04/800x0/5cc35e70e4c51.jpg", name: "Nastiya K", status: "Ya lublu", followed: false, country: "Ukraine"},
                {id: 3, photo: "https://img.joinfo.ua/i/2019/04/800x0/5cc35e70e4c51.jpg", name: "Alina B", status: "I am to", followed: false, country: "Ukraine"}
        ]
        )
    }

    console.log("props =");
    console.log(props.users);
    return (
        <div>
             {props.users.map( user => (
                <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photo} width="100px"/>
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
                            {user.country}
                        </div>
                    </span>
                </div>
             ) )}
        </div>
    );
}
export default Users;