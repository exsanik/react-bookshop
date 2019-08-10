import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {HomePage, CartPage} from '../pages';
import Header from '../header';

import './app.css';

const App = () => {
    return(
        <React.Fragment>
            <Header total={140} items={3} />
            <Switch >
                <Route path ="/" component={HomePage} exact/>
                <Route path ="/cart" component={CartPage}/>
            </Switch>
        </React.Fragment>
    );
}

export default App;