import {styled} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Colors} from "../theme";

export const FooterContainer = styled(Box)(() => ({

    width: '100',
 opacity: '0.5',
background: Colors.shaft,
    color: Colors.white,
height: '300px',
} ))

export const FooterTitle=styled(Typography)(() => ({
    textTransform: 'uppercase',
    marginBotton: '1rem',
} ))