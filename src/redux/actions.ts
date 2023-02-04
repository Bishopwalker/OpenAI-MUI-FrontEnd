

//create an enum of screen size types
export const SWITCH_SCREEN_SIZE = 'screenSize/mobileScreenSize';
export type ActionTypes = {
    type: typeof SWITCH_SCREEN_SIZE,
    payload: boolean
}