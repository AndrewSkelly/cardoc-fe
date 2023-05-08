'use client';

import { useState, useEffect } from "react";

let apiUrl = 'https://localhost:7222/api/cars';

interface Car {
    Id: string
    Make: string
    Model: string
    EngineSize: number
    FuelType: string
    Score: number
}

function getData() {
    return fetch(apiUrl)
            .then(res => res.json())
            .then(res => {
                return res as Car[];
            });
}

export default function Cars() {
    const [data, setData] = useState<Car[]>();
    useEffect(() => {
        getData().then(res => {
            setData(res);
            console.log(res);
        });
    }, []);
    return (
        <>
            <ul>
                {
                    data?.map((i) => <li key={data.indexOf(i)}>{i.Id}</li>)
                }
            </ul>
            <div>
                {data?.at(0)?.Make}
            </div>
        </>
    );
}
