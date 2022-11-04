import React, {useEffect, useState} from 'react';
import {IoArrowBack} from 'react-icons/io5'
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {searchByCountry} from "../config";
import {Button} from "../components/Button";
import {Info} from "../components/Info";

export const Details = () => {
    const {name} = useParams()
    const navigate = useNavigate()
    const [country, setCounry] = useState(null)

    useEffect(() => {
        axios.get(searchByCountry(name)).then(
            ({data}) => setCounry(data[0])
        )
    }, [name])

    return (
        <div>
            <Button onClick={() => navigate('/')}>
                <IoArrowBack/> Back
            </Button>
            {country && <Info {...country}/>}
            Details {name}
        </div>
    );
};

