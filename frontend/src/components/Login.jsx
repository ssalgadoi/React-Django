import React from 'react';
import '../App.css';
import { Box } from '@mui/material';
import MyTextField from './forms/MyTextField';
import MyPassField from './forms/MyPassField';
import MyButton from './forms/MyButton';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Axios from './Axios';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const { handleSubmit, control } = useForm();
    const navigate = useNavigate();

    const submission = (data) => {
        Axios.post('login/', {
            email: data.email,
            password: data.password,
        })
            .then((response) => {
                console.log(response);
                localStorage.setItem('Token', response.data.token)
                navigate('/home');
            })
            .catch((error) =>{
                console.error("Error during login", error);
                
            })
    }

    return (
        <div className="myBackground">
            <form onSubmit={handleSubmit(submission)}> {/* Agregar onSubmit */}
                <Box className="whitheBox">
                    <Box className="itemBox">
                        <Box className="title">Login for Auth App</Box>
                    </Box>

                    <Box className="itemBox">
                        <MyTextField
                            name={"email"}  // Asignar un nombre único
                            label={"Email"}
                            control={control}  // Pasar control de react-hook-form
                        />
                    </Box>

                    <Box className="itemBox">
                        <MyPassField
                            name={"password"}  // Asignar un nombre único
                            label={"Password"}
                            control={control}  // Pasar control de react-hook-form
                        />
                    </Box>

                    <Box className="itemBox">
                        <MyButton
                            label={"Login"}
                            type={"sumbit"} />

                    </Box>

                    <Box className="itemBox">
                        <Link to="/register">No account yet? Please register!</Link>
                    </Box>
                </Box>
            </form>
        </div>
    );
};

export default Login;
