import { Box,Typography,styled, Menu, MenuItem } from "@mui/material";
import { Fragment, useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';

const ProfileButton = styled(Typography)`
    margin-Top: 3px;
    cursor: pointer;
    display: flex;
    font-size: 16px;
    font-weight: 700;
`;

const Component = styled(Menu)`
    margin-top: 5px;
`;

const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 10px;
`;

const Profile = ({account, setAccount}) =>{

    const [open, setOpen] = useState(false);

    const handleClick = (event) =>{
        setOpen(event.currentTarget);
    }

    const handleClose = () =>{
        setOpen(false);
    } 

    const logout = () =>{
       setAccount(''); 
    }

    return(
        <Fragment>
            <Box onClick={handleClick} style={{display:'flex'}}>
                <ProfileButton>{account}</ProfileButton>
            </Box>    
            <Component
                id="basic-menu"
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={ () => {handleClose(); logout();}}>
                    <LogoutIcon color="primary" fontSize="small"/>
                    <Logout> Logout</Logout>
                </MenuItem>
            </Component>
        </Fragment>
    )
}

export default Profile;