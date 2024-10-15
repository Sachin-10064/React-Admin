import React from 'react'

import logo from '../assets/logo-Org.png';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import Footer from '../components/footer';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { red } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

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

const SignUp = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConformPassword, setShowConformPassword] = React.useState(false);
    const [inputError, setInputError] = React.useState({});
    const requiredFields = ["email", "password", "conformPassword"];
    const [inputValue, setInputValue] = React.useState({});

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConformPassword = () => setShowConformPassword((show) => !show);

    const handleInput = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputError({});
        let errors = {};

        requiredFields.forEach((field) => {
            if (!inputValue[field]) {
                errors[field] = `${field} is required.`;
            }
        });

        setInputError(errors);
        if (Object.keys(errors).length === 0) {
            if (inputValue.password !== inputValue.conformPassword) {
                setInputError({ conformPassword: "Password and conform password should be same." })
            } else {
                const { email, password } = inputValue;
                axios.post('https://reqres.in/api/register', { email, password })
                    .then((res) => {
                        if (res.data.token) {
                            sessionStorage.setItem('token', res.data.token);
                            navigate('/')
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })

            }
        }
    }


    return (
        <div className='flex flex-col justify-center items-center min-h-screen  min-w-[30rem]'>
            <div className='logo mt-5'>
                <img src={logo} alt="Organization Logo" width={150} height={150} />
            </div>
            <div className='flex flex-col p-6 mt-8 min-w-[30rem] rounded-md border shadow-md  '>
                <h1 className='text-3xl font-bold text-center'>Sign Up</h1>
                <p className='pt-3 text-center font-weight-400'>Fill the details to create new account</p>
                <TextField error={inputError.email ? true : false} name="email" onChange={handleInput} sx={inputStyle} required id="outlined-basic" label="Email" variant="outlined" helperText={inputError.email} />
                <FormControl sx={inputStyle} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        error={inputError.password ? true : false}
                        required
                        name='password'
                        onChange={handleInput}
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
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
                    {inputError.password && <FormHelperText sx={{ color: 'red' }}>{inputError.password}</FormHelperText>}

                </FormControl>
                <FormControl sx={inputStyle} variant="outlined">
                    <InputLabel htmlFor="outlined-conform-password">Conform Password</InputLabel>
                    <OutlinedInput
                        error={inputError.conformPassword ? true : false}
                        required
                        name='conformPassword'
                        onChange={handleInput}
                        id="outlined-conform-password"
                        type={showConformPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowConformPassword}
                                    edge="end"
                                >
                                    {showConformPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Conform Password"
                    />
                    {inputError.conformPassword && <FormHelperText sx={{ color: 'red' }}>{inputError.conformPassword}</FormHelperText>}

                </FormControl>
                <div className='flex justify-center items-center p-2'>
                    <button className='bg-[#0D1D4E] hover:bg-[#0d1d4eb5] text-white font-bold py-2 px-7 rounded' onClick={handleSubmit}>Sign Up</button>
                </div>
            </div>
            <div className=' mt-4 p-5 min-w-[30rem] rounded-md border shadow-lg   '>
                <p className='text-center text-gray-600'>Already have an account ? <a href="/login" className='text-[#0D1D4E] font-semibold'>Login</a></p>
            </div>

            <Footer />
        </div>
    )
}

export default SignUp