import { Typography,Box, styled, Table, TableBody, TableRow, TableCell } from "@mui/material";

import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const Text = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    &> p{
        font-size: 14px;
        margin-top: 5px;
    }
`;

const Badge = styled(LocalOfferIcon)`
    margin-right: 5px;
    color: #00CC00;
    font-size: 15px;
`;

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    &> td:{
        font-size: 14px;
        margin-top: 10px;
    }
`;

const ProductDetail = ({product}) =>{

    // const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const date = new Date(new Date().getTime() + (5*24*60*60*1000));

    return(
       <>
            <Typography style={{fontWeight: 600, fontSize: 22}}>{product.title.longTitle}</Typography>
                <Box style={{display: 'flex'}}>
                    <Typography style={{marginTop:5, color:'#878787', fontSize:14}}>8 ratings & 1 review</Typography>
                    {/* <Box component="span"><img src={fassured} alt="rateImage" style={{width: 75, marginLeft:20}} /></Box> */}
                </Box>
                <Typography>
                    <Box component='span' style={{fontSize: 28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                    <Box component='span' style={{color: '#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component='span' style={{color: '#388E3C'}}>{product.price.discount}</Box>
                </Typography>
                <Typography style={{marginTop: 10}}>Available Offers</Typography>
                <Text>
                    <Typography><Badge />Get extra 9% off (price inclusive of cashback/coupon)T&C</Typography>
                    <Typography><Badge />Get extra 10% off upto ₹40 on 1 item(s) (price inclusive of cashback/coupon)T&C</Typography>
                    <Typography><Badge />Bank Offer 5% Cashback on Flipkart Axis Bank CardT&C</Typography>
                    <Typography><Badge />Bank Offer Extra ₹1000 off on IDFC FIRST Bank Credit Card EMI Txns on a Net Cart Value of ₹29,990 and above T&C</Typography>
                    <Typography><Badge />Extra ₹2000 off on IDFC FIRST Bank Credit Card EMI Txns on a Net Cart Value of ₹59,990 and above T&C</Typography>
                </Text>
                <Table>
                    <TableBody>
                        <ColumnText>
                            <TableCell style={{color: '#878787'}}>Delivery</TableCell>
                            <TableCell style={{fontWeight: 600}}>Delivery by {date.toDateString()} | ₹40 </TableCell>
                        </ColumnText>
                        <ColumnText>
                            <TableCell style={{color: '#878787'}}>Warranty</TableCell>
                            <TableCell style={{fontWeight: 600}}>1 Year</TableCell>
                        </ColumnText>
                        <ColumnText>
                            <TableCell style={{color: '#878787'}}>Seller</TableCell>
                            <TableCell>
                                <Box component="span" style={{color: '#2874F0', fontWeight: 550}}>SuperComNet</Box>
                                <Typography>* 14 Days return Policy *</Typography>
                                <Typography>* GST Invoice Available *</Typography>
                            </TableCell>
                        </ColumnText>
                        <ColumnText>
                            <TableCell colSpan={2}>
                                <img src={adURL} style={{width: 390}} alt="SuperCoin" />
                            </TableCell>
                        </ColumnText>
                        <ColumnText>
                            <TableCell style={{color: '#878787'}}>Description</TableCell>
                            <TableCell style={{fontWeight: 600}}>{product.description}</TableCell>
                        </ColumnText>
                    </TableBody>
                </Table>
       </>
    )
}

export default ProductDetail;