import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Form from './pages/Form';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Form}/>
            </Switch>
        </BrowserRouter>
    );
}