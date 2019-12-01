import React from "react";
import {createStore,applyMiddleware ,compose ,combineReducers} from 'redux';
import {Provider} from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import test from '../store/reducer/tester'
import thunk from "redux-thunk";
import devtoolsEnhacher,{ composeWithDevTools } from 'remote-redux-devtools';


//const composeEnhancers = composeWithDevTools({ realtime: true, port: 3000 });

const reducer = combineReducers({
    test:test
})
//const composeEnhancers = process.env.NODE_ENV==='development'? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:null || compose;
const composeEnhancers = typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const makeStore = (initialState, options) => {
//     return createStore(reducer, applyMiddleware(thunk));
// };

const makeStore = (initialState, options) => {
    return createStore(reducer,composeEnhancers( applyMiddleware(thunk)));
};

class MyApp extends App {

    static async getInitialProps({Component, ctx}) {

        // we can dispatch from here too
        //ctx.store.dispatch({type: 'FOO', payload: 'foo'});

        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        return {pageProps};

    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }

}

export default withRedux(makeStore)(MyApp);