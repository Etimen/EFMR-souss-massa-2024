import{legacy_createStore} from "redux"
import {ProduitReducer} from "./Reducers/ProduitReducers"

const store = legacy_createStore(ProduitReducer)

export default store