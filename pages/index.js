import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import CSS from '../style.module.css';
import Button from '@material-ui/core/Button';
import {createStore,applyMiddleware ,compose ,combineReducers} from 'redux';
import test from '../store/reducer/tester';
import thunk from 'redux-thunk';
import {connect} from 'react-redux';

// const composeEnhancers = process.env.NODE_ENV==='development'? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:null || compose;
// const rootReducer=combineReducers({
//   test:test
// })

// const store=createStore(rootReducer,composeEnhancers(
//   applyMiddleware(
//     thunk
//   )
// ))

// const 

const Home = (props) => (
  <div >
    <h1>hello world {props.coun}</h1>
    <Button variant="contained" color="primary">
   Hello World
 </Button>
  </div>


);

const mapStateToProps= state=>{
  return {
      coun:test.counter
  }
}

export default connect(mapStateToProps)(Home)
