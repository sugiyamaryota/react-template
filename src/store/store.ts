import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducers } from 'modules/index'
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

export const rootReducer = combineReducers({
    ...reducers,
    router: connectRouter(history),
})
export type RootState = ReturnType<typeof rootReducer>
export const store = configureStore({ reducer: rootReducer })
export type AppDispatch = typeof store.dispatch

export default store
