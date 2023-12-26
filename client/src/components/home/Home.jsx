
import {Fragment, useEffect} from 'react';
import { getProducts } from '../../redux/actions/productAction';
import { useDispatch,useSelector } from 'react-redux';

import {Box,styled} from '@mui/material';

import Navbar from "./navbar";
import Banner from './banner';

const Component = styled(Box)`
    background: #F2F2F2;
    padding: 10px 10px;
`;

const Home = () =>{

    const {products} = useSelector(state => state.getProducts);
    console.log(products);

    const dispatch = useDispatch();

    useEffect( () =>{
        dispatch(getProducts())
    }, [dispatch])

    return(
        <Fragment>
            <Navbar />
            <Component>
                <Banner />
            </Component>
        </Fragment>
    )
}

export default Home;