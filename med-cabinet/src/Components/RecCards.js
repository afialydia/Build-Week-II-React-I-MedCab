import React, { useState } from 'react'
import { One, Button, Info } from "./Styles";   

function RecCards({ data, favorites, setFavorites }) {     

    console.log(setFavorites)

    for (let i = 0; i < favorites.length; i++) {
        if (favorites[i] === data) {
            console.log(`${i}: ${favorites[i].Effects}`)
        }
    }

    const [newEffect, setNewEffect] = useState("");

    const handleDelete = () => {
        setFavorites(favorites.filter(item => item.Strain !== data.Strain))
    }

    const handleChange = (event) => {
        setNewEffect(event.target.value)
    }

    const handleSubmit = (event) => {
       event.preventDefault();
       console.log(newEffect)
    }

    return (
        <div>
            <One className= "recommendation-one">
                <Info>Strain: {data.Strain}</Info>
                <Info>Type: {data.Type}</Info>                                              
                <Info>Flavors: {data.Flavor.split(',').join(', ')}</Info>                  
                <Info>Effects: {data.Effects.split(',').join(', ')}</Info> 
                <form onSubmit={(event) => handleSubmit(event)}>
                <Info>Add Effect: 
                    <input type="text" onChange={(event) => handleChange(event)}></input>
                </Info>     
                </form>
                <Button onClick={()=> handleDelete()}>Delete Selection</Button>
            </One>
        </div>
    )
}    

export default RecCards;
