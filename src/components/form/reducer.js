const initialState = {
    guest: 'Guest'
}

const formReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'REGISTER_GUEST':
            //{"guest":"Daniel"}
            return {
                guest: action.payload.guest
            }
        default: return state
    }
}

export default formReducer