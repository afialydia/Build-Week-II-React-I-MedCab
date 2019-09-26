import React from 'react'
import { One, Button, Info } from "./Styles";

function RecCards({ data, favorites, setFavorites }) {     

    const handleDelete = () => {
        setFavorites(favorites.filter(item => item.Strain !== data.Strain))
    }

    return (
        <div>
            <One className= "recommendation-one">
                <Info>Strain: {data.Strain}</Info>
                <Info>Type: {data.Type}</Info>                                              
                <Info>Flavors: {data.Flavor}</Info>                  
                <Info>Effects: {data.Effects}</Info>      
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