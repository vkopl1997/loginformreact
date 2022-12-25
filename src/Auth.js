
import { useState } from 'react';
import {Box, Button, TextField, Typography} from '@mui/material'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';

function Auth() {
    const [isSignUP, setisSignUP] = useState(false);

    const [input, setInput] = useState({
        name:'',
        email:'',
        password:''
    });

    const handleChange = (e) =>{
        setInput((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }));
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(input);
    };
    const reset = () => {
        setisSignUP(!isSignUP);
        setInput({name:'',email:'',password:''})
    }
    // console.log(isSignUP);
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Box display='flex'
             flexDirection={'column'}
              maxWidth={400}
              alignItems='center'
              justifyContent='center'
              margin='auto'
              marginTop={5}
              padding={5}
              borderRadius={5}
              boxShadow={'5px 5px 10px #ccc'}
              sx={{
                ':hover':{
                    boxShadow:'10px 10px 20px #ccc'
                }}}
               >
                <Typography variant='h2' padding={5}
                 textAlign='center'
                 >
                    { isSignUP ? 'Sign Up': 'Log in'}
                </Typography>
                {isSignUP && <TextField margin='normal'
                 type={'text'}
                 variant='outlined'
                 placeholder='Name'
                 name='name'
                 value={input.name}
                 onChange={handleChange}
                />}
                <TextField margin='normal'
                 type={'email'}
                 variant='outlined'
                 placeholder='Email'
                 name='email'
                 value={input.email}
                 onChange={handleChange}
                />
                <TextField margin='normal'
                 type={'password'}
                 variant='outlined'
                 placeholder='Password'
                 name='password'
                 value={input.password}
                 onChange={handleChange}
                />
                <Button 
                 endIcon={ isSignUP? <LoginOutlinedIcon/> : <HowToRegOutlinedIcon/>}
                 type='submit'
                 color='warning'
                 variant='contained'
                 sx={{marginTop:3,borderRadius:4}}
                 >
                    {isSignUP ? 'Sign up': 'Log in'}
                </Button>
                <Button 
                endIcon={isSignUP ? <LoginOutlinedIcon/>:<HowToRegOutlinedIcon/>}
                onClick={reset}
                 sx={{marginTop:3,borderRadius:4}}>
                    { isSignUP ? 'change to login': 'change to signup'}
                </Button>
            </Box>
        </form>
    </div>
  )
}

export default Auth