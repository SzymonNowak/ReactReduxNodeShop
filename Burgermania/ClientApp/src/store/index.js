import { createStore, applyMiddleware, compose } from 'redux';
import shopApp from '../reducers/index';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebase from '../services/firebase';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// const store = createStore(
//   shopApp /* preloadedState, */,
//   composeEnhancer(applyMiddleware(thunk.withExtraArgument(getFirestore, getFirebase))),

// );
const store = createStore(
  shopApp,
  compose(
    composeEnhancer(applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))),
    reduxFirestore(firebase),
    reactReduxFirebase(firebase),
  )

);

export default store;
