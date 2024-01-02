import { ButtonGroup, Button, styled } from "@mui/material";

const Component = styled(ButtonGroup)`
    margin-top: 25px;    
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
`;

const GroupedButton = () => {
    return(
        <Component>
            <StyledButton>-</StyledButton>
            <Button disabled>1</Button>
            <StyledButton>+</StyledButton>
        </Component>
    )
}

export default GroupedButton;