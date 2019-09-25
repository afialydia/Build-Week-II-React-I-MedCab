import React from 'react'
// import { One, Two, Three, Button, Info } from "./Styles";
import { One, Button, Info } from "./Styles";



const RecCards = (data) => (          
                                                      
    <div>
        <One className= "recommendation-one">
            <Info>Strain:</Info>
            <Info>{data.Strain}</Info>                                              
            <Info>Genetic Attribute: </Info>                  
            <Info>Effects: </Info>      
            <Button>Delete Selection</Button>
        </One>
    </div>
)

export default RecCards;
