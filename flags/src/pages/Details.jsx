import React from 'react';
import {IoArrowBack} from 'react-icons/io5'
import {useParams} from "react-router-dom";

export const Details = () => {
    const {name} = useParams()

    return <div>Details {name} </div>;
};

