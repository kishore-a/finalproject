import React from 'react';
// import './homedesc.css'; // Assuming you have a CSS file named homedesc.css in the same directory

const HomeDesc = () => {
    return (
        <div className="container">
            <img src="path_to_your_image.jpg" alt="Your image" className="image"/>
            <div className="description">
                <p>Your description goes here</p>
            </div>
        </div>
    );
};

export default HomeDesc;