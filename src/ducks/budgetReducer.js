import axios from 'axios'


//CREATE AN INITAL STATE OBJECT THAT WILL BE PASSED THROUGH THE REDUCER TO SET AN INITIAL STATE FOR THE STORE.
const initalState = {
    purchases: [],
    bugetLimit: null,
    loading: false
}

//EXPORT DEFAULT A REDUCER FUNCTION THAT RETURNS A STATE OBJECT
export default function reducer(state = initalState, action) {
    return state
}

