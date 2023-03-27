import React from "react";
import './TodoSearch.css'
import { useState } from 'react';


function TodoSearch({searchValue,setSearchValue}){

    const onSearchValueChange = (event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
        

    }
    return(
        <input
         className="TodoSearch"
         placeholder="Cebolla" 
         value={searchValue}
         onChange={onSearchValueChange}

         />
    );
}

export {TodoSearch};
