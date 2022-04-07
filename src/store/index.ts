import currencyReducer from "./currencyReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {combineReducers, createStore} from "redux";

const rootReducer = combineReducers({
    currency: currencyReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>

export default store;