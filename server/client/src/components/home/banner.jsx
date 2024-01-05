
import Craousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import {styled} from '@mui/material';

import { bannerData } from '../../constants/data';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Image = styled ('img')(({theme}) => ({
    width: '100%', 
    height: 300,
    [theme.breakpoints.down('md')]:{
        objectFit: 'cover',
        height: 200
    }
}));

const Banner = () =>{
    return(
        <Craousel responsive={responsive} 
                swipeable={false}
                draggable={false}
                showDots={false}
                infinite={true}
                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                // autoPlaySpeed={2000}
                // slidesToSlide={1}
                containerClass="carousel-container" 
                dotListClass="custom-dot-list-style" 
                itemClass="carousel-item-padding-40-px">
            {           
                bannerData.map(data =>(
                        <Image src={data.url} alt="img" />
                ))
            }
        </Craousel>
    )
}


export default Banner;