
//IMPORTING THE REDUX FUNCTIONS, MIDDLEWARE, AND REDUCERS THAT WILL BE USED TO CREATE A STORE
import { createStore, combineReducers, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import budgetReducer from './budgetReducer'
import userReducer from './userReducer'

//USE COMBINE REDUCERS TO COMBINE REDUCERS INTO A SINGLE, 'ROOT' REDUCER THAT WILL BE USED BY THE STORE. EVENTUALLY YOU MAY HAVE MULTIPLE REDUCERS IN AN APPLICATION, AND THIS STEP HELPS US COMBINE THOSE INTO ONE ROOT REDUCER THAT CAN BE USED TO CREATE A STORE.
// step #4 --> ADD THE USER REDUCER TO THE ROOT REDUCER OBJECT THAT WILL BE USED TO CREATE THE REDUX STORE STATE
const rootReducer = combineReducers({
    budget: budgetReducer,
    user: userReducer
})

//CREATE THE STORE USING THE CREATE STORE FUNCTION. PASS IN THE APPROPRIATE ARGUMENTS. 
//YOU ARE EXPLORING IT SO THAT IT CAN BE USED BY THE PROVIDER COMPOENT LATER ON. 

export default createStore(
    rootReducer,
    applyMiddleware(promiseMiddleware)
)