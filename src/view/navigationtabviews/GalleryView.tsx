import Axios from "axios"
import React, { useState } from "react"
import StarWarsAPIService from "../../shared/api/service/StarWarsAPIService"

export const GalleryView = () => {
    const [data, setData] = useState<any>()
    const [characterID, setCharacterID] = useState<string>('')

    const fetchData = async () => {
        try {
            let response = await StarWarsAPIService.getStarWarsCharacter(characterID)
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>This is GalleryView!</h1>
            <input
                placeholder="Search for character id"
                onChange={(event) => setCharacterID(event.target.value)}
            />
            <button
                onClick={fetchData}
            >
                Make api call
            </button>
            <button
                onClick={() => console.log(data)}
            >
                Check api call
            </button>
            <h1>{data?.name}</h1>
        </div>
    )
} 