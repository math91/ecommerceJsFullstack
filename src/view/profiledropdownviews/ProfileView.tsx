import E_COMMERCE_APIService from "../../shared/api/service/E_COMMERCE_APIService"
import {useState} from "react"

export const ProfileView = () => {
    const [serverResponse, setServerResponse] = useState<any>([])

    const fetchData = async () => {
        const { data } = await E_COMMERCE_APIService.getAllUsers()
        setServerResponse(data)
        console.log(data)
    }
 
    const displayData = () => {
        return (
            serverResponse.map((person: any) => <h1>{person.username}</h1>)
        )
    }

    return (
        <>
            <h1>Profile View</h1>
            <button onClick={fetchData}>Klick</button>
            <h2>{displayData()}</h2>
        </>
    )
}