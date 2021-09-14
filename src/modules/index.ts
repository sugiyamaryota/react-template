import { configureStore, combineReducers } from '@reduxjs/toolkit'
import loginModules from './loginModules'
export const reducers = {
    loginModules: loginModules.reducer,
}
export const store = configureStore({
    reducer: combineReducers(reducers),
})
