import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

export default function StrainCard({ data }) {
    console.log(data);
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
                <Icon name="star" />
                Rating: {data.Rating}/5
            </Card.Content>
        </Card>
    )
}