import React from 'react';
import axios from "axios";
import {useEffect, useState} from "react";
import {useHistory, useNavigate} from 'react-router-dom'
import {ALL_COUNTRIES} from "../config";
import {List} from "../components/List";
import {Card} from "../components/Cards";
import {Controls} from "../components/Controls";

export const HomePage = () => {
    const [countries, setCountries] = useState([])

    const navigate = useNavigate()

    console.log(countries)
    useEffect(() => {
        axios.get(ALL_COUNTRIES).then(({data}) => setCountries(data))
    }, [])

    return <>
        <Controls/>
        <List>
            {
                countries.map((c) => {
                    const countryInfo = {
                        img: c.flags.png,
                        name: c.name,
                        info: [
                            {
                                title: 'Population',
                                description: c.population.toLocaleString()
                            },
                            {
                                title: 'Region',
                                description: c.region
                            },
                            {
                                title: 'Capital',
                                description: c.capital
                            },
                        ],
                    }
                    return (
                        <Card key={c.name} onClick={() => {
                            navigate(`/country/${c.name}`)
                        }}{...countryInfo}/>
                    )
                })
            }
        </List>
    </>;
};

