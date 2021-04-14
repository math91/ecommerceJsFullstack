import { Routes } from "./routes/Routes"
import {Navigation} from "./components/navigation/Navigation"
import "./shared/global/Global.css"
import { UserProvider } from "./shared/provider/UserProvider"

export const App = () => {
  return (
    <UserProvider>
      <Routes>
          <Navigation />
      </Routes>
    </UserProvider>
  )
}