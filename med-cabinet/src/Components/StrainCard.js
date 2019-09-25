import React, { useState } from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';

export default function StrainCard({ data, favorites, setFavorites }) {

    const handleClick = (event, data) => {
        if (!favorites.includes(data.Strain)) {
            setFavorites(favorites.concat(data.Strain))
        }
        console.log(favorites);
    }

    return (
        <Card>
            <Card.Content>
                <Card.Header>
                    {data.Strain}
                </Card.Header>
                <Card.Description>
                    {data.Description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button onClick={(event) => handleClick(event, data)}>Add to Favorites</Button>
            </Card.Content>
            <Card.Content extra>
                <Icon name="star" />
                Rating: {data.Rating}/5

            </Card.Content>
        </Card>
    )
}