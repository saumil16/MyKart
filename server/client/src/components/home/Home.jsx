
import {Fragment, useEffect} from 'react';
import { getProducts } from '../../redux/actions/productAction';
import { useDispatch,useSelector } from 'react-redux';

import {Box,styled} from '@mui/material';

import Navbar from "./navbar";
import Banner from './banner';
import Slide from './slide';
import MidSlide from './midSlide';
import MidSection from './midSection';

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
                <MidSlide products={products} title="Deal of the Day" timer={true}/>
                <MidSection />
                <Slide products={products} title="Discounts for you" timer={false}/>
                <Slide products={products} title="Suggested Items" timer={false}/>
                <Slide products={products} title="Top Selection" timer={false}/>
                <Slide products={products} title="Recommmended Items" timer={false}/>
                <Slide products={products} title="Trending Offers" timer={false}/>
                <Slide products={products} title="Season's Top Picks" timer={false}/>
                <Slide products={products} title="Top Deals on Accessories" timer={false}/>
            </Component>
        </Fragment>
    )
}

export default Home;