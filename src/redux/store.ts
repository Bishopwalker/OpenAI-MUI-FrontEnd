import {configureStore} from '@reduxjs/toolkit';
import screenSizeReducer from "./screenSizeSlice";
import {RootState} from "./types";
import {composeWithDevTools} from "@reduxjs/toolkit/dist/devtoolsExtension";
import {consoleLogStateMiddleware} from "./middleware";
import logger from "redux-logger";
import {pageTitleSlice} from "./pageTitleSlice";

const store = configureStore({
    reducer: {
        title: pageTitleSlice.reducer

    },

    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
    })
        .prepend(
            consoleLogStateMiddleware,

        )
    })
export default store;