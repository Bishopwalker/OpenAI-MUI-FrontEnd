import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {Link} from 'react-router-dom'

const HomeMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                For Home
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                <Link to={'/residential_t'} >
                    Learn about Residential Trash Pickup
                </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={'/dumpster'}>
                    Learn about Residential Dumpster Services
                    </Link>
                    </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={'/yardwaste'}>
                    Sign up for Yard Cleanup Services
                    </Link>
                    </MenuItem>
            </Menu>
        </div>
    )
}
export default HomeMenu