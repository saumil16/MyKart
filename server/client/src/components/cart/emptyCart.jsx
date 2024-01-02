import { Box, Typography, styled } from "@mui/material"

const Image = styled('img')({
    width: '35%',
});

const Component = styled(Box)`
    height: 65vh;
    width: 80%;
    background: #FFFFFF;
    margin: 80px 140px;
`;

const Container = styled(Box)`
    text-align: center;
    padding-top: 80px;
`;

const EmptyCart = () => {

    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

    return (
        <Component>
            <Container>
                <Image src={imgurl} alt="emptyCart" />
                <Typography style={{marginTop: 15, fontSize: 20}}>Your cart is Empty !</Typography>
                <Typography style={{fontWeight: 600, fontSize: 20}}>Add items to your cart now</Typography>
            </Container>
        </Component>
    )
}

export default EmptyCart;