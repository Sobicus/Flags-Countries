import React from 'react';
import {useSearchParams} from "react-router-dom";

export const Details = () => {
    let [searchParams, setsearchParams] = useSearchParams()
    let one = searchParams.get()
    return <div>Details </div>;
};

