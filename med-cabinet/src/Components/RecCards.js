import React, { useState } from 'react'
import { One, Button, Info } from "./Styles";   

function RecCards({ data, favorites, setFavorites }) {    


/*     for (let i = 0; i < favorites.length; i++) {
        if (favorites[i] === data) {
            console.log(`${i}: ${favorites[i].Effects}`);
            setFavorites(...favorites, favorites[i].Strain = "Test");
        }
    } */

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

    const handleClick = () => {
        setFavorites(favorites.map(newFavorite => {
            if (newFavorite.Strain === data.Strain) {
                newFavorite.Effects += ", " + newEffect
            }
            return newFavorite
        }))
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
                    <Button onClick={() => handleClick()}>Add</Button>
                </Info>     
                </form>
                <Button onClick={()=> handleDelete()}>Delete Selection</Button>
            </One>
        </div>
    )
}    

export default RecCards;


/*
    useEffect? inside of reccards function?
    import axios

    hand submit func. that runs the axios delete on submit
    call it on click?
    
    *****waiting for the endpoint from backend***

    const deleteColor = color => {
     
    // make a delete request to delete this color
    axios.delete(`http://localhost:5000/api/colors/${color.id}`, colorToEdit )
    .then(res => console.log(res))
    .catch(err => console.log(err.response))
    window.location.reload()
  };
*/