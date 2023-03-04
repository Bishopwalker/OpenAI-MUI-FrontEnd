import {ActionTypes, SWITCH_SCREEN_SIZE} from "./actions";
import {RootState} from "./types";



const initialState = {
    screenType:  true

}

export function switchScreenSize(screenType: ActionTypes) {
    return {
        type: SWITCH_SCREEN_SIZE,
        payload: screenType
    }
}

export default function screenSizeReducer(state = initialState, action: ActionTypes) {
    switch (action.type) {
        case SWITCH_SCREEN_SIZE:
            console.log(action.payload, 'action.payload')
            return {
                ...state,
                screenType: action.payload
            }
        default:
            return state
    }
}

//export const screenType= (state: RootState) => state.screenType;