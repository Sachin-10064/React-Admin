import React from 'react'
import logo from '../assets/logo-Org.png';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import Footer from '../components/footer';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



const inputStyle = {
  m: 2,
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: 'gray',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'gray',
    '&.Mui-focused': {
      color: 'black',
    },
  },
}

const LogIn = () => {
  const navigate = useNavigate();
  const [InputValue, setInputValue] = React.useState({});
  const [showPassword, setShowPassword] = React.useState(false);
  const [inputError, setInputError] = React.useState({});
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleInput = (e) => {
    setInputValue({
      ...InputValue,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(InputValue)
    setInputError({})

    if (InputValue.email && InputValue.password) {
      axios.post(' https://reqres.in/api/login', InputValue)
        .then((res) => {
          
          if (res.data.token){
            console.log(res)
            sessionStorage.setItem('token', res.data.token);
            navigate('/')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      if (!InputValue.email || InputValue.email === '') {
        setInputError({ email: 'Email is required' })
      }
      if (!InputValue.password || InputValue.password === '') {
        setInputError({ password: 'Password is required' })
      }
    }
  }

  return (
    <div className='flex flex-col justify-center items-center min-h-[100vh]  min-w-[30rem]'>
      <div className='logo mt-5'>
        <img src={logo} alt="Organization Logo" width={150} height={150} />
      </div>
      <div className='flex flex-col p-6 mt-8 min-w-[30rem] rounded-md border shadow-md  '>
        <h1 className='text-3xl font-bold text-center'>LogIn</h1>
        <p className='pt-3 text-center font-weight-400'>enter your serwiz account details</p>
        <TextField sx={inputStyle} id="outlined-basic" error={inputError.email} name='email' label="Email" variant="outlined" onChange={handleInput} />
        <FormControl sx={inputStyle} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            error={inputError.password}
            helperText={inputError.password}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            name='password'
            onChange={handleInput}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <div className='flex justify-center items-center p-2'>
          <button className='bg-[#0D1D4E] hover:bg-[#0d1d4eb5] text-white font-bold py-2 px-7 rounded' onClick={handleSubmit}>Login</button>
        </div>
        <div className='p-2 text-center'>
          <Link className=' text-[#0D1D4E] font-semibold' to={"/forgotpassword"}>Forgot Password?</Link>
        </div>
      </div>
      <div className=' mt-4 p-5 min-w-[30rem] rounded-md border shadow-lg   '>
        <p className='text-center text-gray-600'>Don't have an account ? <Link to="/signup" className='text-[#0D1D4E] font-semibold'>SignUP</Link></p>
      </div>

      <Footer />
    </div>
  )
}

export default LogIn