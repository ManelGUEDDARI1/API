import React, {useEffect, useState} from "react";
import {render} from "react-dom";
import axios from 'axios'
const Users = () => {
    const [listOfUSer, setListOfUSer] = useState([]); 
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => setListOfUSer(response.data)).catch(err => setError(err));

    }, [])

const showUsers= listOfUSer.map((user) => {
    return <div style={{ background:"linear-gradient(90deg, #fdfbfb 0%, #ebedee 100%)"}}>
        <h4 style={{color:"red" , textAlign :"center" }} >Name : {user.name} </h4>
        <h4 style={{ textAlign :"center" }} >Username :{ user.username} </h4>
        <h4 style={{ textAlign :"center" }} >Email :{ user.email} </h4>
        <h4 style={{ textAlign :"center" }} >Address : { user.address.street} ,{user.address.city},{user.address.zipcode}  </h4>
        <h4 style={{ textAlign :"center" }} >Phone :{ user.phone} </h4>
        
    </div>
 
}) 
    return ( 
        <>
        {listOfUSer && showUsers}
        </>      
    )
}


export default Users;
