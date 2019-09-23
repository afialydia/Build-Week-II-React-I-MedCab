//NEEDS PROPS 

import React from 'react'
import { One, Two, Three, Button } from "./Styles";

const RecCards = () => (
    <div>
        <One className= "recommendation-one">
            <h4>Recommendation 1 is:</h4> 
            <h3>Strain: ajsbcweiocwoi </h3>
            <h3>Effects: kwjvnweiv w;eojvncwpiuvhwe OVWENVWECCNVHKJ woevheruqvhq3rvoinj3qrpiuvne3vh3 0rwjvn 3r9wuvn3 rw[ou</h3>     
            <Button>Save</Button> 
            <Button>Delete</Button>
        </One>  
        <Two className= "recommendation-two">
            <h4>Recommendation 2 is:</h4>
            <h3>Strain: </h3>
            <h3>Effects: </h3>     
            <Button>Save</Button> 
            <Button>Delete</Button>
        </Two> 
        <Three className= "recommendation-three">
            <h4>Recommendation 3 is:</h4>
            <h3>Strain: </h3>
            <h3>Effects: </h3>      
            <Button>Save</Button> 
            <Button>Delete</Button>
        </Three> 
    </div>
)

export default RecCards;
