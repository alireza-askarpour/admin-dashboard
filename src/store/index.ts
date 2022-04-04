import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { todoReducer } from './reducers/todo'

const reducer = combineReducers({
  todo: todoReducer,
})

const todoListStorage = JSON.parse(localStorage.getItem('todoList') || '[]')

const initialState: any = {
  todo: { todoList: todoListStorage, filter: '', search: '' },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
