import { createStore, applyMiddleware, compose } from "redux";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import thunk from "redux-thunk";
import shopApp from "../reducers/index";
import firebase from "../services/firebase";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(
  shopApp,
  compose(
    composeEnhancer(
      applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
    ),
    reactReduxFirebase(firebase), // redux binding for firebase
    reduxFirestore(firebase) // redux bindings for firestore
  )
);

export default store;
