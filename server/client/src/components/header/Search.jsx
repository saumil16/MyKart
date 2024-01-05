
import {InputBase,Box,styled, List, ListItem} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';

import { useSelector,useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction';

import { Link } from 'react-router-dom';

const StyledBox = styled(Box)`
    background: #FFFFFF;
    width: 38%;
    border-radius: 4px;
    margin-left: 10px;
    display: flex;
`;

const StyledInputBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset;
`;

const StyledSearchIcon = styled(Box)`
    color: #000000;
    padding: 5px;
    display: flex;
`;

const ListWrapper = styled(List)`
    position: absolute;
    background: #FFFFFF;
    color: #000000;
    margin-top: 36px;
`;

const Search = () => {

    const [text,setText] = useState('');

    const dispatch = useDispatch();
    const {products} = useSelector(state => state.getProducts);

    useEffect(() => {
        dispatch(getProducts())
    },[dispatch])

    const getText = (text) => {
        setText(text);
    }   

    return(
        <StyledBox>
            <StyledInputBase placeholder='Search for products, brand and more' onChange={(e) => getText(e.target.value)} value={text}/>
            
            <StyledSearchIcon>
                <SearchIcon />
            </StyledSearchIcon>
            {
                text && 
                    <ListWrapper>
                        {
                            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                                <ListItem>
                                    <Link to={`/product/${product.id}`} onClick={() => setText('')} style={{textDecoration:'none', color:'inherit'}}>
                                        {product.title.longTitle}
                                    </Link>    
                                </ListItem>
                            ))
                        }
                    </ListWrapper>
            }
        </StyledBox>
    )
}

export default Search;