import React from 'react';

const Search = ({event,name})=> {
    return(
                     <input type="text" placeholder={name} className="ma2 pa2 tc" onChange={event}></input>
        );
       }
           
     

export default Search;