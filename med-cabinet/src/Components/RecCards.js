import React from 'react'
// import { One, Two, Three, Button, Info } from "./Styles";
import { One, Button, Info } from "./Styles";



function RecCards({ data }) {     

    console.log(data);

    return (
        <div>
            <One className= "recommendation-one">
                <Info>Strain: {data.Strain}</Info>
                <Info>Type: {data.Type}</Info>                                              
                <Info>Flavors: {data.Flavor}</Info>                  
                <Info>Effects: {data.Effects}</Info>      
                <Button>Delete Selection</Button>
            </One>
        </div>
    )
}    
export default RecCards;
