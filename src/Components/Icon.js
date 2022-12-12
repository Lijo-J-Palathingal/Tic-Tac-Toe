import React from "react";

import { FaCarAlt,FaBiking,FaPen } from "react-icons/fa";

const Icon = ({name}) =>{
    switch (name){
        case 'Car':
            return <FaCarAlt className="icon"/>
        case 'bike':    
            return <FaBiking className="icon"/>
        default:
            return <FaPen className="icon"/>    
    }
}

export default Icon;