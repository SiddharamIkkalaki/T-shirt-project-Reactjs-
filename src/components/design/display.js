import React from 'react';
import './display.css'

const Display = ({display, formatText}) => {
    console.log(display);
    console.log(formatText);
    console.log(display.textColor);
    return(
        <div className = "card card-content">
            <div className = "imgTshirt text-center">
            <img className = "img-responsive" 
               src= {`https://res.cloudinary.com/dkkgmzpqd/image/upload/v154517305/T-shirt%20Images/${display.tshirtColor}`}
               alt="img-Tshirt"
            />
            </div>
            <div className = "memeText text-center">
               <div className = "uppertext">
               <p style={{fontSize:formatText, color:display.textColor}}>{display.upperText}</p>
               </div>
               <img className = "img-responsive" 
               src= {`${display.url}`|| "http://dummyimage.com/400x300"}
               alt="img-user"
            />
            <div className = "lowertext">
               <p style={{fontSize:formatText, color:display.textColor}}>{display.lowerText}</p>
               </div>
            </div> 
        </div>
    )
}

export default Display;