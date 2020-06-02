import axios from 'axios'


//CREATE AN INITAL STATE OBJECT THAT WILL BE PASSED THROUGH THE REDUCER TO SET AN INITIAL STATE FOR THE STORE.
const initalState = {
    purchases: [],
    bugetLimit: null,
    loading: false
}

const REQUEST_BUDGET_DATA = 'REQUEST_BUDGET_DATA'

export const requestBudgetData = () => {
    let data = axios.get('/api/budget-data').then(res => res.data)
    return {
        type: REQUEST_BUDGET_DATA,
        payload: data
    }
}

//EXPORT DEFAULT A REDUCER FUNCTION THAT RETURNS A STATE OBJECT
export default function reducer(state = initalState, action) {
    switch (action.type) {
        case REQUEST_BUDGET_DATA + '_PENDING':
            return { ...state, loading: true }
        case REQUEST_BUDGET_DATA + '_FULLFILLED':
            return { ...state, ...action.payload, loading: false }
        default:
            return state
    }
}

