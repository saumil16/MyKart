
import {Fragment} from 'react';

import {Box,styled} from '@mui/material';

import Navbar from "./navbar";
import Banner from './banner';

const Component = styled(Box)`
    background: #F2F2F2;
    padding: 10px 10px;
`;

const Home = () =>{
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