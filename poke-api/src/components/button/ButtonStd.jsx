import React from "react";


export function ButtonStd({src,alt, handleID}){      
      
      return(            
            <button onClick={()=>handleID()}>
                  <img src={src} alt={alt} />
            </button>
      )
}
