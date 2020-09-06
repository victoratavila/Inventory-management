import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './Components/pages/Dashboard/Dashboard';
import ProductsList from './Components/pages/ProductsList/ProductsLists';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/" component = {Dashboard} />
                <Route path = "/produtos" component = {ProductsList} />
            </Switch>
        </BrowserRouter>
    )
}