import React from 'react';
import RecCards from './RecCards';

export default function TestProfile({ favorites }) {
    console.log(favorites);
    return (
        favorites.map(favorite => <RecCards data={favorite}></RecCards>)
    )
}