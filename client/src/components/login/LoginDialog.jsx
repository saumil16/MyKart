import { useState, useContext } from "react";
import { Box, Dialog, TextField, Button, Typography,styled } from "@mui/material";
import { authenticateSignup, authenticateLogin } from "../../service/api";
import { DataContext } from "../../context/dataProvider";

const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
`;

const Image = styled(Box)`
    background: #FF8400 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 75% no-repeat;
    height: 82.7%;
    width: 30%;
    padding: 45px 35px;

    &> h5,&>p {
        color: #000000;
        font-weight: 600;
    }
`;

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 5px 35px;
    flex: 1;

    &> div,&> button,&> p{
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    background: #FFFFFF;
    color: #FF8400;
    font-weight: 600;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/40%);
`;

const RequestOtp = styled(Button)`
    background: #FFFFFF;
    color: #2874F0;
    font-weight: 600;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/40%);
`;

const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;
`;

const CreateAccountText = styled(Typography)`
    font-size: 14px;
    text-align: center;
    color: #2874F0;
    font-weight: 600;
    cursor: pointer;
`;

const Error = styled(Typography)`
    font-size:10px;
    color: #FF6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`;

const AccountValue = {
    login:{
        view: 'login',
        heading: 'Login',
        subHeading: "Get access to your Orders, Wishlist and Recommendations"
    },
    signup:{
        view: 'signup',
        heading: "Welcome",
        subHeading: "Look's like you are new here !"
    }
}

const signupInitialValue = {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password:'',
    mobile: ''
}

const loginInitialValue = {
    username: '',
    password: ''
}


const LoginDialog = ({open,setOpen}) =>{

    const [account, toggleAccount] = useState(AccountValue.login);
    const [signup, setSignup] = useState(signupInitialValue);
    const [login, setLogin] = useState(loginInitialValue);
    const [error,setError] = useState(false);
    const {setAccount} = useContext(DataContext);

    const handleClose = () =>{
        toggleAccount(AccountValue.login);
        setOpen(false);
        setError(false);
    }

    const toggleSignup = () => {
        toggleAccount(AccountValue.signup);
    }

    const toggleLogin = () =>{
        toggleAccount(AccountValue.login);
    }

    const onInputChange = (e) =>{
        setSignup({...signup, [e.target.name]: e.target.value});
    }

    const signupUser = async() =>{
       let response = await authenticateSignup(signup);
       if(!response) return;
       handleClose();
       setAccount(signup.firstname);
    }

    const onValueChange = (e) =>{
        setLogin({...login,[e.target.name]: e.target.value});
    }

    const loginUser = async() =>{
        let response = await authenticateLogin(login);
        console.log(response);
        if(response.status === 200){
            handleClose();
            setAccount(response.data.data.firstname);
        }
        else{
            setError(true);
        }
    }

    return(
            <Dialog open={open} onClose={handleClose} PaperProps={{ sx:{maxWidth: 'unset'}}}>
            <Component>
                <Box style={{display: 'flex', height: '100%'}}>
                    <Image>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{marginTop: '20px'}}>{account.subHeading}</Typography>
                    </Image>
                    {
                        account.view === 'login' ?
                        <Wrapper>
                        <TextField variant="outlined" onChange={ (e) => onValueChange(e)} name='username' label="Enter Username"/>
                        <TextField variant="outlined" onChange={ (e) => onValueChange(e)} name='password' label="Enter Password"/>
                        {error && <Error>Please enter valid username or password</Error>}
                        <Text>By contnuing you are agree to MyKart's Terms of use and Privacy Policy.</Text>
                        <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                        <Typography style={{textAlign: 'center'}}>OR</Typography>
                        <RequestOtp>Request OTP</RequestOtp>
                        <CreateAccountText onClick={() => toggleSignup()} style={{marginTop: '50px'}}>New to MyKart, create account !</CreateAccountText>
                        </Wrapper>
                    :
                        <Wrapper>
                        <TextField variant="standard" onChange={ (e) => onInputChange(e)} name="firstname" label="Enter First Name"/>
                        <TextField variant="standard" onChange={ (e) => onInputChange(e)} name="lastname" label="Enter Last Name"/>
                        <TextField variant="standard" onChange={ (e) => onInputChange(e)} name="email" label="Enter Email"/>
                        <TextField variant="standard" onChange={ (e) => onInputChange(e)} name="username" label="Enter User Name"/>
                        <TextField variant="standard" onChange={ (e) => onInputChange(e)} name="password" label="Enter Password"/>
                        <TextField variant="standard" onChange={ (e) => onInputChange(e)} name="mobile" label="Enter Mobile Number"/>
                        <LoginButton style={{marginTop:'30px'}} onClick={ () => signupUser()}>Sign Up</LoginButton>
                        <RequestOtp onClick={ () => toggleLogin()} style={{marginTop:'20px'}}>Existing User? Log In</RequestOtp>
                        </Wrapper>
                    }
                    
                </Box>    
            </Component>
            </Dialog>
    )
}

export default LoginDialog;