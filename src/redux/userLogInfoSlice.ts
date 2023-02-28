import {createSlice} from "@reduxjs/toolkit";

export const userLogInfoSlice = createSlice({
    name: 'userLogInfo',
    initialState: {
        userLogInfo: {
            id: '',
            name: '',
            email: '',
            password: '',
            phone: '',
            houseNumber: '',
            streetName: '',
            city: '',
            state: '',
            zipCode: '',
           authorities: [
               {authority: ''}
           ],

        },
        isLoggedIn: false,
    },
    reducers: {
        changeUserLogInfo: (state, action) => {
            state.userLogInfo = action.payload
        },
    }

})

export const {changeUserLogInfo} = userLogInfoSlice.actions