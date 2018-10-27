import { createStore, combineReducers } from 'redux'
import formReducer from '../components/form/reducer'

const rootReducer = combineReducers({
    guestName: formReducer
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store