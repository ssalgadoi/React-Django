import React from 'react';
import '../App.css';
import { Box } from '@mui/material';
import MyTextField from './forms/MyTextField';
import MyPassField from './forms/MyPassField';
import MyButton from './forms/MyButton';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'; // Importar useForm

const Login = () => {
    const { handleSubmit, control } = useForm(); // Usar useForm para manejar el control

    // Función de envío del formulario (por ejemplo, hacer la autenticación)
    const onSubmit = (data) => {
        console.log(data); // Aquí harías la llamada para autenticar al usuario
    };

    return (
        <div className="myBackground">
            <form onSubmit={handleSubmit(onSubmit)}> {/* Agregar onSubmit */}
                <Box className="whitheBox">
                    <Box className="itemBox">
                        <Box className="title">Login for Auth App</Box>
                    </Box>

                    <Box className="itemBox">
                        <MyTextField
                            name="email"  // Asignar un nombre único
                            label="Email"
                            control={control}  // Pasar control de react-hook-form
                        />
                    </Box>

                    <Box className="itemBox">
                        <MyPassField
                            name="password"  // Asignar un nombre único
                            label="Password"
                            control={control}  // Pasar control de react-hook-form
                        />
                    </Box>

                    <Box className="itemBox">
                        <MyButton label="Login" />
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
