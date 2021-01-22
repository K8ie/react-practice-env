import React, { useState, useEffect } from 'react'

//main component

function Card(props) {

    // API fetch to get user-data (API used : https://dev.to/api/users)


    const [user, setUser] = useState({});


    useEffect(() => {

        async function fetchData() {
            let username = props.username; // You can write your username here

            // Retrieves json data from DEV API
            let dev_data = await fetch(`https://dev.to/api/users/${username}`)
                .then((res) => res.json())
                .then((data) => data);

            setUser(dev_data);  // Sets the user data
        }
        console.log(user)

        fetchData();  // Calls the above function
    }, [])



    return (
        <div className="card">
            <div className="user-image">
                <img src={user.profile_image} alt="User Profile"></img>
            </div>

            <div className="user-info">
                <div className="name">{user.name}</div>
                <div className="id">{user.id}</div>
                <div className="handle">@{user.username}</div>
                <div className="summary">{user.summary}</div>
            </div>
            <div className="location">{user.location}</div>
        </div>
    )
}

export default Card