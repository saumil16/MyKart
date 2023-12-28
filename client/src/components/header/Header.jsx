//components
import Search from './Search';
import CustomButtons from './customButtons';

import {AppBar,Toolbar,styled,Box,Typography, IconButton, Drawer, List, ListItem} from '@mui/material';
import logoURL from '../header/images/logo.png';

import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const StyledHeader = styled(AppBar)`
    background: #FF8400;
    height: 55px;
`;

const StyledBox = styled(Link)`
    margin-left: 8%;
    margin-right: 2%;
    line-height: 0;
    text-align: center;
    color: inherit;
    text-decoration: none;
`;

const StyledTypography = styled(Typography)`
    font-size: 12px;
    font-style: italic;
`;

const StyledCustomButton = styled(Box)(({theme}) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]:{
        display: 'none'
    }
}));

const MenuButton = styled(IconButton)(({theme}) => ({
    display: 'none',
    color: '#FFFFFF',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));

const Header = () =>
{
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () =>{
        setOpen(false);
    }

    const list = () => (
        <Box style={{width: 200}} onClick={handleClose}>
            <List>
                <ListItem>
                    <CustomButtons />
                </ListItem>
            </List>
        </Box>
    )

    return (
        <StyledHeader>
            <Toolbar style={{minHeight:55}}>
                <MenuButton onClick={handleOpen}>
                    <MenuIcon />
                </MenuButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

                <StyledBox to='/'>
                    <img src={logoURL} alt="logo" style = {{width:105}}/>
                    
                    <Box>
                        <StyledTypography>Explore 
                            <Box component="span" style={{color:'#000000'}}> Plus</Box>
                        </StyledTypography>
                    </Box>
                </StyledBox>
                <Search />
                <StyledCustomButton>
                    <CustomButtons />
                </StyledCustomButton>    
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;