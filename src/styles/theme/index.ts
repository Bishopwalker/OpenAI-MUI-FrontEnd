import {createTheme, CSSObject, SxProps, Theme} from "@mui/material";
import shadows from "@mui/material/styles/shadows";

 interface Colors {
    primary: string;
    secondary: string;
    success: string;
    info: string;
    danger: string;
    warning: string;
    dark: string;
    light: string;
    muted: string;
    border: string;
    inverse: string;
    shaft: string;
    dim_grey: string;
    dove_grey: string;
    body_bg: string;
    light_grey: string;
    white: string;
    black: string;

}
 export const Colors: Colors = {
    primary: '#5f2c3e',
    secondary: '#d1adcc',
    success: '#4caf50',
    info: '#00a2ff',
    danger: '#ff5722',
    warning: '#ffc107',
    dark: '#0e1b20',
    light: '#aaa',
    muted: '#abafb3',
    border: '#dddfe1',
    inverse: '#2f3d4a',
    shaft: '#333333',
    dim_grey: '#696969',
    dove_grey: '#d5d5d5',
    body_bg: '#f3f6f9',
    light_grey: '#rgb(230, 230, 230)',
    white: '#ffffff',
    black: '#000000',
}
const theme = createTheme({

    palette: {
        primary: {
            main: Colors.primary,
        },
        secondary: {
            main: Colors.secondary,
        }
    },
    breakpoints: {
           values: {
                xs: 0,
                sm: 600,
                md: 960,
                lg: 1280,
                xl: 1920,
           },
        down: (breakpoint: any) => `@media (max-width:${breakpoint})`,
        up: (breakpoint: any) => `@media (min-width:${breakpoint})`,

    },

    components:{
        MuiButton:{
            defaultProps:{
                disableElevation: true,
                //disableRipple: true,
            }
        }
    }
})
export default theme;