import React from "react";
import './TodoIcon.css';
import {AiFillCheckCircle} from "react-icons/ai"
import {AiOutlineClose} from "react-icons/ai"


function TodoIcon({type,color,onClick}){
    return (
        <span
        className={`Icon-container Icon-container--${type}`}
        onClick={onClick}
    >
        <AiFillCheckCircle/>
    </span>

    );
    }    

export {TodoIcon};