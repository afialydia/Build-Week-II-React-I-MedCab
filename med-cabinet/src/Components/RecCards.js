import React from 'react'
import { One, Button, Info } from "./Styles";

function RecCards({ data, favorites, setFavorites }) {     

    const handleDelete = () => {
        setFavorites(favorites.filter(item => item.Strain !== data.Strain))
    }
    console.log(data.Effects.split(',').join(', '))
    return (
        <div>
            <One className= "recommendation-one">
                <Info>Strain: {data.Strain}</Info>
                <Info>Type: {data.Type}</Info>                                              
                <Info>Flavors: {data.Flavor.split(',').join(', ')}</Info>                  
                <Info>Effects: {data.Effects.split(',').join(', ')}</Info>      
                <Button onClick={()=> handleDelete()}>Delete Selection</Button>
            </One>
        </div>
    )
}    

export default RecCards;
