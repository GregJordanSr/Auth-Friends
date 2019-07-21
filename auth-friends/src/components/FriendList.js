import React, { useState, useEffect } from 'react';
import axiosWithAuth from './authConfig';

 const FriendList = () => {
     const [friends, setFriends] = useState([]);

     const bradTheCat = res => {
         setFriends(res)
     }

     useEffect(() => {
      
    axiosWithAuth().get("/friends").then(res=> bradTheCat(res.data) ).catch(error => console.error(error))
     }, [])
    return (
        <div>
         { friends.map((item,key) => (
            <div key={key}>
                <p>{item.name} </p>
                <p>{item.age} </p>
                <p>{item.email} </p>
              
              </div>
          ))}
        </div>
    )
}
export default FriendList;