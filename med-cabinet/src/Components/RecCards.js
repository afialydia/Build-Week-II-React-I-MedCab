import React from 'react'
import { One, Button, Info } from "./Styles";



const RecCards = (props) => (          
                                                      
    <div>
        <One className= "recommendation-one">
            <Info>SWAPI TEST: {props.name} </Info>
            <Info>Strain: {props.name}</Info>                                              
            <Info>Genetic Attribute: </Info>                  
            <Info>Effects: </Info>      
            <Button>Delete Selection</Button>
        </One>
    </div>
)

export default RecCards;
