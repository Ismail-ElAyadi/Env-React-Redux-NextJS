import React from 'react'
import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'

//####### IMPORT REDUCERS
import connectionReducer from './Reducer/connectionReducer'


const rootReducer= combineReducers({
  connectionReducer,
})
const store = createStore(rootReducer)

export default function CustomProvider({children}) {
    return (
        <Provider store ={store} >
          {children}
        </Provider>
    )
}
