import * as React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import { HomeComponent } from "../pages/home/HomeComponent";
import Navbar from '../components/global/navbar/Navbar';
import { AboutUs } from "../pages/aboutUs/AboutUs";
import { OurWork } from "../pages/ourWork/OurWork";
import { DetailsOurWork } from "../components/ourWork/detailsOurWork/detailsOurWork";
import { Resources } from "../pages/resources/Resources";
import { Technologies } from "../pages/technologies/Technologies";
import { Solutions } from "../pages/solutions/Solutions";
import { Services } from "../pages/services/Services";
import { TechnologiesHome } from "../pages/technologies/Observatory";
import { SolutionsHome } from "../pages/solutions/SolutionsHome";
import { Regional } from "../pages/regional/Regional";
import { InnerPage } from "../pages/innerPage/InnerPage";

export const AppRouter = ({ dataProp }) => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route exact path="/about-us">
                    <AboutUs dataProp={dataProp} />
                </Route>
                <Route exact path="/regional">
                    <Regional dataProp={dataProp} />
                </Route>
                <Route  path="/regional/:siteid">
                    <InnerPage  />
                </Route>

                <Route exact path="/services">
                    <Services dataProp={dataProp} />
                </Route>
                <Route exact path="/our-work">
                    <OurWork dataProp={dataProp} />
                </Route>
                <Route path="/our-work/:projectID">
                    <DetailsOurWork dataProp={dataProp} />
                </Route>
                <Route exact path="/resources">
                    <Resources dataProp={dataProp} />
                </Route>
                <Route exact path="/observatory/technologies/:slug">
                    <Technologies dataProp={dataProp} />
                </Route>
                <Route exact path="/observatory/technologies">
                    <TechnologiesHome dataProp={dataProp} />
                </Route>
                <Route exact path="/observatory/solutions/companies">
                    <Solutions />
                </Route>
                <Route exact path="/observatory/solutions">
                    <SolutionsHome dataProp={dataProp} />
                </Route>
                <Route exact path="*">
                    <HomeComponent />
                </Route>
            </Switch>
        </>
    );
};