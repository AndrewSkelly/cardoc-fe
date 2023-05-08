'use client';

import { useState, useEffect } from "react";

let apiUrl = 'https://localhost:7222/api/cars';

interface Car {
    id: string
    make: string
    model: string
    engineSize: number
    fuelType: string
    score: number
}

export default function Cars() {
    const [data, setData] = useState<Car[]>([]);
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <ul>
                {
                    data?.map((car, index) => <li key={index}>{car.make}</li>)
                }
            </ul>
        </>
    );

    function getData() {
        return fetch(apiUrl)
                .then(res => res.json())
                .then(res => {
                    setData([...res]);
                });
    }
}
