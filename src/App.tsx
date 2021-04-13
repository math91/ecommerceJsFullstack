import { Routes } from "./routes/Routes"
import {Navigation} from "./components/navigation/Navigation"
import "./shared/global/Global.css"

export const App = () => {
  return (
    <Routes>
      <Navigation />
    </Routes>
  )
}