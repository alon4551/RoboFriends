import React from 'react';

const Card = ({id,name,email})=> {
        return(
           <a href="#">

           
        <div className="bg-light-green dib br3 ma2 grow  shadow-5">
            <img  src={`https://robohash.org/${id}`} alt={`Photo number ${id}`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>   
        </a> 
        )};

export default Card;