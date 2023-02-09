 import {List, styled, Box, SxProps, ButtonBase} from "@mui/material";
 import Theme, {Colors} from "../theme";
 import React from "react";
 import {CSSObject} from "@mui/styled-engine-sc";


export const BannerContainer   = styled(Box)((theme:typeof Theme)=>({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100%',
    padding:'0px, 0px',



}))

 export const BannerContent = styled(Box)((theme: typeof Theme)=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
     width:'75%',
     maxWidth:'75%',
     padding:'20px'
 }));
 export const ImageButton = styled(ButtonBase)(({ theme }) => ({
     position: 'relative',
     height: 400,
     [theme.breakpoints.down('sm')]: {
         width: '100% !important', // Overrides inline-style
         height: 100,
     },
     '&:hover, &.Mui-focusVisible': {
         zIndex: 1,
         '& .MuiImageBackdrop-root': {
             opacity: 0.15,
         },
         '& .MuiImageMarked-root': {
             opacity: 0,
         },
         '& .MuiTypography-root': {
             border: '4px solid currentColor',
         },
     },
 }));

 export const ImageSrc = styled('span')({
     position: 'absolute',
     left: 0,
     right: 0,
     top: 0,
     bottom: 0,
     backgroundSize: 'cover',
     backgroundPosition: 'center 40%',
 });

 export const Image = styled('span')(({ theme }) => ({
     position: 'absolute',
     left: 0,
     right: 0,
     top: 0,
     bottom: 0,
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
     color: theme.palette.common.white,
 }));

 export const ImageBackdrop = styled('span')(({ theme }) => ({
     position: 'absolute',
     left: 0,
     right: 0,
     top: 0,
     bottom: 0,
     backgroundColor: theme.palette.common.black,
     opacity: 0.4,
     transition: theme.transitions.create('opacity'),
 }));

 export const ImageMarked = styled('span')(({ theme }) => ({
     height: 3,
     width: 18,
     backgroundColor: theme.palette.common.white,
     position: 'absolute',
     bottom: -2,
     left: 'calc(50% - 9px)',
     transition: theme.transitions.create('opacity'),
 }));
