import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { loginReducers } from "../reducers/loginReducers";
import { registerReducers } from "../reducers/registerReducers";
import { favoriteReducers } from "../reducers/favoriteReducers";
import thunk from "redux-thunk";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducers,
    register: registerReducers,
    favorites: favoriteReducers, 
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)