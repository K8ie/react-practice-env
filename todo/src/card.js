import React from 'react'


function Card() {
    return (
        <div className="card">
            <div className="user-image">
                <img src="user.png" alt="User Profile"></img>
            </div>

            <div className="user-info">
                <div className="name">John Doe</div>
                <div className="handle">@johndoe</div>
                <div className="summary">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            </div>
            <div className="location">New York</div>
        </div>
    )
}

export default Card