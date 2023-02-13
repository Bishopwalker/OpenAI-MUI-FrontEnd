import Box from "@mui/material/Box";
import {styled} from "@mui/material";

export const AppointmentContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
} as const))