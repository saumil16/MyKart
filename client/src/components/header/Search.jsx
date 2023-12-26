
import {InputBase,Box,styled} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

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

const Search = () => {
    return(
        <StyledBox>
           <StyledInputBase placeholder='Search for products, brand and more' />
        <StyledSearchIcon>
            <SearchIcon />
        </StyledSearchIcon>
        </StyledBox>
    )
}

export default Search;