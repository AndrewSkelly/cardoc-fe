let apiUrl = 'https://localhost:44382/api/cars';

interface Cars {
    Make: string
    Model: string
    EngineSize: number
    FuelType: string
    Score: number
}

function getData(): Promise<Cars[]> {
    // For now, consider the data is stored on a static `users.json` file
    return fetch(apiUrl)
            // the JSON body is taken from the response
            .then(res => res.json())
            .then(res => {
                    // The response has an `any` type, so we need to cast
                    // it to the `User` type, and return it from the promise
                    return res as Cars[]
            })
}

export default function cars() {
    const table = getData();
    console.log(table)
    return (
        <div>
            <p></p>
        </div>
    );
}
