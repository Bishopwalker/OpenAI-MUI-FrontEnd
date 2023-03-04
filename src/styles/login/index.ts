import {Box, CSSObject, styled} from "@mui/material";


export const LoginContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    border: '1px solid black',
    padding: '0px, 0px',
    backgroundImage: 'url(/images/NNGC.LOGO.NW.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'bottom',

} as CSSObject));

export const LoginContent = styled(Box)(({ theme }) => ({
    display: 'flex',
    zIndex: 4,
    flexDirection: 'column',
    alignSelf: 'flex-start',
    justifyContent:'center',
    width: '75%',
    maxWidth: '75%',
    height:'40vh',
    padding: '20px',
    border: '10px solid black',
    borderRadius: '10px',

} as CSSObject));