import {combineReducers, configureStore} from '@reduxjs/toolkit';
import screenSizeReducer from "./screenSizeSlice";
import {RootState} from "./types";
import {composeWithDevTools} from "@reduxjs/toolkit/dist/devtoolsExtension";
import {consoleLogStateMiddleware} from "./middleware";
import logger from "redux-logger";
import {pageTitleSlice} from "./pageTitleSlice";
import {userLogInfoSlice} from "./userLogInfoSlice";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage,
}
const rootReducer = combineReducers({
    title: pageTitleSlice.reducer,
    userInfo: userLogInfoSlice.reducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
    })
        .prepend(
            consoleLogStateMiddleware,
            thunk,

        )
    })
export default store;