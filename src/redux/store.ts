import {configureStore} from '@reduxjs/toolkit';
import screenSizeReducer from "./screenSizeSlice";
import {RootState} from "./types";
import {composeWithDevTools} from "@reduxjs/toolkit/dist/devtoolsExtension";
import {consoleLogStateMiddleware} from "./middleware";
import logger from "redux-logger";

const store = configureStore({
    reducer: screenSizeReducer,

    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
    })
        .prepend(
            consoleLogStateMiddleware,

        ).concat(logger)
    })
export default store;