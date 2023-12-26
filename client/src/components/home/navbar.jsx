
import {Box,Typography,styled} from '@mui/material';
import { NavData } from '../../constants/data';

const Component = styled(Box)`
    display: flex;
    margin: 55px 100px 0 100px;
    justify-content: space-between;
`;

const Container = styled(Box)`
    padding: 20px 8px;
    width: 100px;
    text-align: center;
`;

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
    text-align: center;
    width: 100px;
`;

const Navbar = () =>{
    return(
       <Component>
          {
            NavData.map(data => (
                <Container>
                    <img src={data.url} alt="nav" style = {{height:90, width:90}} />
                    <Text>{data.text}</Text>
                </Container>
            ))
          }  
       </Component>
    )
}

export default Navbar;