import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import configureStore from './store/configureStore'

import 'bootstrap/dist/css/bootstrap.css'
import {Provider} from 'react-redux'
import {startSetUsers} from './actions/userAction'
import {startSetPost} from './actions/postAction'
import {startSetComment} from './actions/commentAction'



const store=configureStore()
console.log(store.getState())


store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(startSetUsers())
store.dispatch(startSetPost())
store.dispatch(startSetComment())

const jsx=(
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));


