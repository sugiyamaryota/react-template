import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type LoginErrorType = {
    email?: string
    password?: string
    notMatch?: string
    network?: string
}

export type LoginType = {
    email: string
    password: string
    keepLogin: boolean
}

type Reducer = {
    updateEmail: (state: LoginType, action: PayloadAction<string>) => void
    updatePassword: (state: LoginType, action: PayloadAction<string>) => void
    updateKeepLogin: (state: LoginType, action: PayloadAction<boolean>) => void
}

const initialState: LoginType = {
    email: '',
    password: '',
    keepLogin: true,
}

const loginModules = createSlice<LoginType, Reducer>({
    name: 'login',
    initialState,
    reducers: {
        updateEmail: (state, action) => {
            state.email = action.payload
        },
        updatePassword: (state, action) => {
            state.password = action.payload
        },
        updateKeepLogin: (state, action) => {
            state.keepLogin = action.payload
        },
    },
})

export const { updateEmail, updatePassword, updateKeepLogin } = loginModules.actions
export default loginModules