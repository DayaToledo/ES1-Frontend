import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Form from './pages/Form';
import FeedbackOrientador from './pages/FeedbackOrientador';
import FeedbackCoordenador from './pages/FeedbackCoordenador';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Form}/>
                <Route path="/orientador/feedback" exact component={FeedbackOrientador}/>
                <Route path="/coordenador/feedback" exact component={FeedbackCoordenador}/>
            </Switch>
        </BrowserRouter>
    );
}