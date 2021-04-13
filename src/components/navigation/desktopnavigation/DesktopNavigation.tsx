import './DesktopNavigation.css'
import { useHistory } from "react-router-dom"
import logotype from "../../../shared/images/logotype.svg"
import RoutingPath from "../../../routes/RoutingPath"

export const DesktopNavigation = () => {
    const history = useHistory()

    return (
        <div className="desktopnavigationwrapper">
            <div>
                <img onClick={() => history.push(RoutingPath.homeView)} src={logotype} alt="error" />
            </div>
            <div>
                <div onClick={() => history.push(RoutingPath.galleryView)}>Gallery</div>
                <div onClick={() => history.push(RoutingPath.shopView)}>Shop</div>
                <div onClick={() => history.push(RoutingPath.newsView)}>News</div>
            </div>
            <div>
                <div onClick={() => history.push(RoutingPath.signInView)}>Sign In</div>                
            </div>
        </div>
    )
}