import React from 'react';
import Card from "./Card";

const CardList = ({ robots }) => {
    const List = robots.map((user) => {
        return <Card id = { user.id }
        name = { user.name }
        email = { user.email }
        />
    })
    return (
        List
    )
};

export default CardList;