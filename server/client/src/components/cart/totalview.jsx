import { Box, Typography, styled } from "@mui/material"

import { useState, useEffect } from "react";

const Header = styled(Box)`
    padding: 15px 24px;
    background: #FFFFFF;
    border-bottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
    color: #878787;
`;

const Container = styled(Box)`
    padding: 15px 24px;
    background: #ffffff;
    &> p {
        margin-bottom: 20px;
        font-size: 14px;
    }
    &> h6 {
        margin-bottom: 20px;
        font-weight: 600;
    }
`;

const Price = styled(Box)`
    float: right;
`;

const Discount = styled(Typography)`
    color: green;
    font-weight: 500;
`;

const TotalView = ({CartItems}) =>{

    const [price, setPrice] = useState(0);
    const [discount,setDiscount] = useState(0);

    useEffect(() => {
        totalAmount();
    },[CartItems])

    const totalAmount = () => {
        let price=0, discount=0;

        CartItems.map(item => {
            price += item.price.mrp;
            discount += (item.price.mrp - item.price.cost);
        });

        setPrice(price);
        setDiscount(discount);
    }

    return(
        <Box>
            <Header>
                <Heading>PRICE DETAILS</Heading>
            </Header>
            <Container>
                <Typography>Price ({CartItems?.length} item)
                    <Price component='span'>₹{price}</Price>
                </Typography>
                <Typography>Discount
                    <Price component='span'>-{discount}</Price>
                </Typography>
                <Typography>Delivery Charges
                    <Price component='span'>₹40</Price>
                </Typography>
                <Typography variant='h6'>Total Amount
                    <Price component='span'>₹{price-discount+40}</Price>
                </Typography>
                <Discount>You will save ₹{discount - 40} on this order</Discount>
            </Container>
        </Box>
    )
}


export default TotalView;
