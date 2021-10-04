// it is notfound component ,when user search random things on google search bar it will show them this,it 404 image
import React from 'react';
import img from "../../utilities/images/pagenotfound.jpg"
const NotFound = () => {
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;