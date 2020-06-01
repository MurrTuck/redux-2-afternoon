import axios from 'axios'


// CREATE AN INITIAL STATE OBJECT THAT WILL EVENTUALLY BE USED TO SET AN INITIAL STATE PROPERTY ON THE REDUX STORE AFTER BEING PASSED THROUGH THE REDUCER
const initialState = {
    email: null,
    firstName: null,
    lastName: null
}

//CREATED THE BASE ACTION TYPES YOU WILL USE
const REQUEST_USER_DATA = REQUEST_USER_DATA


// THE ACTION CREATOR HERE DEFINES AN ACTION TYPE AND PAYLOAD THAT WILL BE USED BY THE REDUCER FUNCTION TO UPDATE VALUES IN THE REDUX STORE. THIS FUNCTION ITSELF WILL BE INVOKED IN A  COMPONENT VIA PROPS ONCE THAT COMPONENT HAS CONNECTED TO IT VIA THE CONNECT METHOD
export function requestUserData() {
    const data = axios.get('/auth/user-data')
        .then(res => res.data)
    return {
        type: REQUEST_USER_DATA,
        payload: data
    }
}


// EXPORT DEFAULT A REDUCER FUNCTION THAT RETURNS A STATE OBJECT TO THE STORE
export default function (state = initialState, action) {
    switch (action.type) {
        case REQUEST_USER_DATA + '_FULFILLED':
            const { email, firstName, lastName } = action.payload.user
            return { email, firstName, lastName }
        default:
            return state
    }
}