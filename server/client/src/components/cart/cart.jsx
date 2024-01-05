
import { Box, Button, Grid, Typography, styled } from "@mui/material";
import { useSelector } from "react-redux";

import CartItem from "./cartItem";
import TotalView from "./totalview";
import EmptyCart from "./emptyCart";

const Container = styled(Grid)(({theme}) => ({
    padding: '30px 135px',
    [theme.breakpoints.down('md')]:{
        padding: '30px 0'
    }
}));

const Header =styled(Box)`
    padding: 15px 24px;
    background: #FFFFFF;
`;

const ButtonWrapper = styled(Box)`
    padding: 16px 22px;
    background: #FFFFFF;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0/ 10%);
    border-top: 1px solid #f0f0f0;
`;

const PalceOrderButton = styled(Button)`
    background: '#2847F0';
    display:flex;
    margin-left: auto;
    border-radius: 1px;
    width: 250px;
    height: 50px;
`;

const LeftComponent = styled(Grid) (({theme}) => ({
    paddingRight: '15px',
    [theme.breakpoints.down('md')]: {
        marginBottom: '15px'
    }
}));

const Cart = () => {

    const { CartItems } = useSelector(state => state.cart);
    console.log(CartItems);

    return(
        <>
            {
                CartItems.length ?
                    <Container container>
                        <LeftComponent item lg={9} md={9} sm={12} sx={12}>
                            <Header>
                                <Typography style={{fontWeight: 600, fontSize: 22}}>My Cart ({CartItems?.length})</Typography>
                            </Header>
                            {
                                CartItems.map(item => (
                                    <CartItem item={item} />
                                ))
                            }
                            <ButtonWrapper>
                                <PalceOrderButton variant="contained">Place Order</PalceOrderButton>
                            </ButtonWrapper>
                        </LeftComponent>
                        <Grid item lg={3} md={3} sm={12} sx={12}>
                            <TotalView CartItems={CartItems} />
                        </Grid>
                    </Container>
                :
                <EmptyCart /> 
            }
        </>
    )
}

export default Cart;