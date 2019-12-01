import React from 'react';
import Head from 'next/head';
import {createStore,applyMiddleware ,compose ,combineReducers} from 'redux';
import test from '../store/reducer/tester';
import thunk from 'redux-thunk';
import {Provider} from "react-redux";
import withRedux from "next-redux-wrapper";

const composeEnhancers = process.env.NODE_ENV==='development'? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:null || compose;
const rootReducer=combineReducers({
  test:test
})

const store=createStore(rootReducer,composeEnhancers(
  applyMiddleware(
    thunk
  )
))

const App=(props)=>{
    const {Component, pageProps, store} = props;
    
    return(<Provider store={store}>
        <Component {...pageProps}/>
    </Provider>);
}

export default withRedux(store)(App);