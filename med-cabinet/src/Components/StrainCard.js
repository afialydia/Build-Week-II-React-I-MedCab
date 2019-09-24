import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

export default function StrainCard(props) {
    return (
        <Card>
            <Image src="#" alt="strain"/>
            <Card.Content>
                <Card.Header>
                    Strain Name
                </Card.Header>
                <Card.Description>
                    Strain Description
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name="star" />
                Rating: 5/5
            </Card.Content>
        </Card>
    )
}