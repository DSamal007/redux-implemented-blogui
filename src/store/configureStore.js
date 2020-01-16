import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'


import postReducer from '../reducers/postsReducer'
import userReducer from '../reducers/userReducer'
import commentReducer from '../reducers/commentsReducer'


const configureStore=()=>{
    const store=createStore(combineReducers({
        posts:postReducer,
        users:userReducer,
        comments:commentReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore