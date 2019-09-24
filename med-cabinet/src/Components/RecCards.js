import React from 'react'
// import { One, Two, Three, Button, Info } from "./Styles";
import { One, Button, Info } from "./Styles";



const RecCards = () => (          
                                                      
    <div>
        <One className= "recommendation-one">
            <Info>SWAPI TEST: </Info>
            <Info>Strain: </Info>                                              
            <Info>Genetic Attribute: </Info>                  
            <Info>Effects: </Info>      
            <Button>Delete Selection</Button>
        </One>
    </div>
)

export default RecCards;
