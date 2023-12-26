import { useState, useContext } from 'react';

import {Box,Button,Typography,styled} from '@mui/material';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

import LoginDialog from '../login/LoginDialog';

import { DataContext } from '../../context/dataProvider';
import Profile from './profile';

const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;

    &> button, &> p,&> div{
        margin-right: 40px;
        font-size: 16px;
        align-items: center;
    }
`;

const Container = styled(Box)`
    display: flex;
`;

const StyledButton = styled(Button)`
    padding: 5px 30px;
    height: 32px;
    background: #FFFFFF;
    color: #FF8400;
    font-weight: 600;
    display:flex;
`;

const CustomButtons = () => {

    const [open,setOpen] = useState(false);

    const { account, setAccount} = useContext(DataContext);

    const openDialog = () => {
        setOpen(true);
    }

    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} /> : 
                    <StyledButton variant="contained" onClick={() => openDialog()}> Login </StyledButton>
            }

            <Typography style={{marginTop: 3, width:135 }}>Become a Seller</Typography>
            <Typography style={{marginTop: 3}}>More</Typography>

            <Container>
                <ShoppingCart />
                <Typography>Cart</Typography>
            </Container>

            <LoginDialog open={open} setOpen={setOpen} />            
        </Wrapper>
    )
}

export default CustomButtons;