import React from 'react'
import '../App.css'
import { Box } from '@mui/material'
import MyTextField from './forms/MyTextField'
import MyPassField from './forms/MyPassField'
import MyButton from './forms/MyButton'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Axios from './Axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();
    const { handleSubmit, control, getValues } = useForm();

    const submission = () => {
        const { email, password } = getValues();
        
        Axios.post('register/', {
            email: email,
            password: password,
        })
        .then(() => {
            // Aquí se redirige al home, que usualmente es '/'
            navigate('/');
        })
        .catch((error) => {
            // Puedes manejar errores aquí si es necesario
            console.error('Error al registrarse:', error);
        });
    }

    return (
        <div className={"myBackground"}>
            <form onSubmit={handleSubmit(submission)}>  
                <Box className={"whitheBox"}>
                    <Box className={"itemBox"}>
                        <Box className={"title"}>
                            User registration
                        </Box>
                    </Box>

                    <Box className={"itemBox"}>
                        <MyTextField
                            label={"Email"}
                            name={"email"}
                            control={control}
                        />
                    </Box>

                    <Box className={"itemBox"}>
                        <MyPassField
                            label={"Password"}
                            name={"password"}
                            control={control}
                        />
                    </Box>
                    <Box className={"itemBox"}>
                        <MyPassField
                            label={"Confirm Password"}
                            name={"password2"}
                            control={control}
                        />
                    </Box>

                    <Box className={"itemBox"}>
                        <MyButton
                            type={"submit"}
                            label={"Register"}
                        />
                    </Box>
                    <Box className={"itemBox"}>
                        <Link to="/">Already registered? Please login!</Link>
                    </Box>
                </Box>
            </form>
        </div>
    )
}

export default Register;
