import * as React from "react";
import { HashRouter as Router } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';
import { IntlProvider } from "react-intl";
import English from "./lang/en.json";
//import Spanish from "./lang/es.json";
import Wrapper from "./components/complements/Wrapper";
import Footer from "./components/footer/Footer";


export const App = (props) => {
    const prop = props;
    const locale = navigator.language;
    let pathOrigin = window.location.pathname.split('/', 3);
    let path = "/" + pathOrigin[1] + "/" + pathOrigin[2];

    return (
        <IntlProvider locale={locale} defaultLocale="en"  messages={{ ...English }}>
            <Wrapper>
                <Router>
                    <AppRouter dataProp={prop}/>
                </Router>
                <Footer></Footer>
            </Wrapper>
        </IntlProvider>
    );
};


