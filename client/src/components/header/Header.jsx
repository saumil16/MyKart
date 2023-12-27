//components
import Search from './Search';
import CustomButtons from './customButtons';

import {AppBar,Toolbar,styled,Box,Typography} from '@mui/material';
import logoURL from '../header/images/logo.png';

import { Link } from 'react-router-dom';

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

const StyledCustomButton = styled(Box)`
    margin: 0 5% 0 auto;
`;

const Header = () =>
{
    return (
        <StyledHeader>
            <Toolbar style={{minHeight:55}}>
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