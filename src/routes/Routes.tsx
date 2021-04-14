import React, { useContext, useEffect } from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import { HomeView } from "../view/HomeView"
import { GalleryView } from "../view/navigationtabviews/GalleryView"
import { NewsView } from "../view/navigationtabviews/NewsView"
import { ShopView } from "../view/navigationtabviews/ShopView"
import { SignInView } from "../view/navigationtabviews/SignInView"
import RoutingPath from "./RoutingPath"
import { UserContext } from "../shared/provider/UserProvider"

export const Routes = (props: { children?: React.ReactChild }) => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const checkIfUserIsAuthenticated = () => {
        const getLocalStorage = localStorage.getItem('userName')
        if (getLocalStorage) setAuthenticatedUser(getLocalStorage)
    }

    useEffect(() => {
        checkIfUserIsAuthenticated()
    }, [])

    return (
        <BrowserRouter>
            {props.children}
            <Switch>
                <Route exact path={RoutingPath.galleryView} component={GalleryView} />
                <Route exact path={RoutingPath.newsView} component={NewsView} />
                <Route exact path={RoutingPath.shopView} component={ShopView} />
                <Route exact path={RoutingPath.signInView} component={SignInView} />
                <Route component={HomeView} />
            </Switch>
        </BrowserRouter>
    )
}