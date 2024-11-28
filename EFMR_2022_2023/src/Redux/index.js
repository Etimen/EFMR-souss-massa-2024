import{legacy_createStore} from "redux"
import {ProduitReducer} from "./Reducers/ProduitReducers"

const store = legacy_createStore(ProduitReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store