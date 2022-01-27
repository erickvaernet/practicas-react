import React from "react";
import "./styles.css"


export function ButtonStd({src,alt, handleID}){      
      
      return(            
            <button onClick={()=>handleID()} >
                  <img src={src} alt={alt} className="button"/>
            </button>
      )
}
