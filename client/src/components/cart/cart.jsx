
import { Box, Grid, Typography, styled } from "@mui/material";
import { useSelector } from "react-redux";

import CartItem from "./cartItem";
import TotalView from "./totalview";

const Container = styled(Grid)`
    padding: 30px 135px;
`;

const Cart = () => {

    const { CartItems } = useSelector(state => state.cart);
    console.log(CartItems);

    return(
        <>
            {
                CartItems.length ?
                    <Container container>
                        <Grid item lg={9} md={9} sm={12} sx={12}>
                            <Box>
                                <Typography>My Cart ({CartItems?.length})</Typography>
                            </Box>
                            {
                                CartItems.map(item => (
                                    <CartItem />
                                ))
                            }
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} sx={12}>
                            <TotalView />
                        </Grid>
                    </Container>
                :
                <div>Cart Empty</div>    
            }
        </>
    )
}

export default Cart;