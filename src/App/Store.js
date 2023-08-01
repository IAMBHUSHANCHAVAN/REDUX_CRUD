import { configureStore } from '@reduxjs/toolkit'

import UserData from '../feature/UserSlice'

export const store = configureStore({
    reducer : {
        app : UserData
    }
})