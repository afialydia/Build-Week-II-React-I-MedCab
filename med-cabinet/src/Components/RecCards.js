//NEEDS PROPS 

import React from 'react'
import { One, Two, Three, Button, Info } from "./Styles";

const RecCards = () => (
    <div>
        <One className= "recommendation-one">
            {/* <h3>Recommendation 1 is:</h3>  */}
            <Info>Strain: Gg-4 </Info>
            <Info>Genetic Attribute: Sativa-Dominant Hybrid</Info>
            <Info>Effects: Relaxed, Happy, Euphoric, Uplifted, Hungry</Info>     
            <Button>Save</Button> 
            <Button>Delete</Button>
        </One>  
        <Two className= "recommendation-two">
            {/* <h4>Recommendation 2 is:</h4> */}
            <Info>Strain: Gg-4 </Info>
            <Info>Genetic Attribute: Sativa-Dominant Hybrid</Info>
            <Info>Effects: Relaxed, Happy, Euphoric, Uplifted, Hungry</Info>     
            <Button>Save</Button> 
            <Button>Delete</Button>
        </Two> 
        <Three className= "recommendation-three">
            {/* <h4>Recommendation 3 is:</h4> */}
            <Info>Strain: Gg-4 </Info>
            <Info>Genetic Attribute: Sativa-Dominant Hybrid</Info>
            <Info>Effects: Relaxed, Happy, Euphoric, Uplifted, Hungry</Info>     
            <Button>Save</Button> 
            <Button>Delete</Button>
        </Three> 
        {/* <Button>TRY AGAIN?</Button> */}
    </div>
)

export default RecCards;
