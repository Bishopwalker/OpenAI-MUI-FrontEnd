import {Button, IconButton, styled} from "@mui/material";
import Box from "@mui/material/Box";
import {Colors} from "../theme";
// @ts-ignore
import {slideInBottom, slideInRight} from '../../animation/index.js'
export const Product = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    height: 'auto',
    margin: 'auto',
    [theme.breakpoints.up('md')]: {
        position: 'relative',
        width: '30vw',
    }
} as const))

export const ProductImage = styled('img')(({src,theme}) => ({
    src:`${src}`,
    width: '100%',
    background: '#dadada',
    height: '325px',
  //  padding: theme.spacing(2),
   padding: '10px',
    [theme.breakpoints.up('md')]: {
        width:'80%',
        //padding: theme.spacing(4),
      padding: '24px'

    }
} as const))

// @ts-ignore
export const ProductActionButton = styled(IconButton)(({isfav,theme}) => ({
    background: Colors.white,
    margin: 4

} as const))


// @ts-ignore
export const ProductFavButton= styled(ProductActionButton)(({isfav,theme}) => ({
            color: isfav ? Colors.primary : Colors.light,
             [theme.breakpoints.up('md')]: {
                position: 'absolute',
                 top:0,
                    right:0,
             }
} as const))

// @ts-ignore
export  const ProductAddToCart = styled(Button)(({show,theme})=>({

    width: '120px',
    fontSize: '12px',
    [theme.breakpoints.up('md')]: {
        position: 'absolute',
        bottom:'2%',
        width: '300px',
        //padding: theme.spacing(2),
        padding: '10px 5px'
    },
    background: Colors.secondary,
    opacity : 0.9,
    animation: show && `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
}))

export const ProductMetaWrapper = styled(Box)(({theme}) => ({
    padding:4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
} as const))

//@ts-ignore
export const ProductActionsWrapper = styled(Box)(({show,theme}) => ({
    [theme.breakpoints.up('md')]: {
        display: show? 'visable' : 'hidden',
        position: 'absolute',
        right:0,
        top:"20%",
        animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    }
} as const))