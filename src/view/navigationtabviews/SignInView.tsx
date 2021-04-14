import {useState, useContext} from "react"
import { UserContext } from "../../shared/provider/UserProvider"
import { useHistory } from "react-router-dom"
import RoutingPath from "../../routes/RoutingPath"

export const SignInView = () => {
    const history = useHistory()
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const [username, setUsername] = useState<String>("")

    const signIn = () => {
        setAuthenticatedUser(username)
        localStorage.setItem('userName', `${username}`)
        history.push(RoutingPath.homeView)
    }

    const displayAuthUserOrSignIn = () => {
        if (authenticatedUser) return <div>{authenticatedUser}</div>
        return (
            <div>
                <input
                    onChange={event => setUsername(event.target.value)}
                />
                <button
                    onClick={signIn}
                >
                    Logga in
                </button>
            </div>
        )
    }

    return (
        <div>
            {displayAuthUserOrSignIn()}
        </div>
    )
} 