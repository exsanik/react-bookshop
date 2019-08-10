import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import BookstoreService from './services/bookstore-service';
import {BookstoreProvider} from './components/bookstore-context';

import store from './store';

const bookstoreService = new BookstoreService();



ReactDOM.render(
    <Provider store ={store} > 
        <ErrorBoundry>
            <BookstoreProvider value={bookstoreService}>
                <Router basename={process.env.PUBLIC_URL}>
                    <App />
                </Router>
            </BookstoreProvider>
        </ErrorBoundry>
    </Provider>, 
    document.getElementById("root")
    );