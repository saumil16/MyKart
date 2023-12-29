import { Box, Button, Typography, styled } from "@mui/material";

import { AddEllipsis } from "../../utils/commonUtils";
import GroupedButton from "./buttongroup";
import { removeFromCart } from "../../redux/actions/cartAction";
import { useDispatch } from "react-redux";

const Component = styled(Box)`
    border-top: 1px solid #f0f0f0;
    display: flex;
    background: #FFFFFF;
`;

const LeftComponent = styled(Box)`
    margin: 20px;
    display: flex;
    flex-direction: column;
`;

const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top:10px;
`;

const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    font-weight: 600;
    color: #000000;
    border-color: #000000;
`;

const CartItem = ({item}) => {

    const dispatch = useDispatch();

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    return(
    <Component>
        <LeftComponent>
            <img src={item.url} alt="product" style={{alignItems:'center', height: 120, width: 120}}/>
            <GroupedButton />
        </LeftComponent>
        <Box margin style={{margin: '20px'}}>
            <Typography>{AddEllipsis(item.title.longTitle)}</Typography>
            <SmallText>Seller: RetailNet</SmallText>
            <Typography style={{margin: '20px 0'}}>
                    <Box component='span' style={{fontWeight: 600, fontSize:18}}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                    <Box component='span' style={{color: '#878787'}}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component='span' style={{color: '#388E3C'}}>{item.price.discount}</Box>
            </Typography>
            <Remove variant="outlined" onClick={() => removeItemFromCart(item.id)}>Remove</Remove>
        </Box>
    </Component>
    )
}

export default CartItem;