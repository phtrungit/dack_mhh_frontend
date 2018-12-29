import { createStore, compose } from 'redux'
import  rootReducer from "../reducers/index"
import {routerMiddleware} from "connected-react-router";
import {applyMiddleware} from "redux/src/index";


export default function configureStore (initialState, history) {

    const createStoreWithMiddleware = compose(
        applyMiddleware(
            routerMiddleware(history),
        )
        )(createStore)
    const store = createStoreWithMiddleware(rootReducer(history))

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}