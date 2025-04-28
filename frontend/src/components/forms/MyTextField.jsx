import * as React from 'react';
import TextField from '@mui/material/TextField';
import '../../App.css';
import { Controller } from 'react-hook-form';

/**
 * Componente reutilizable de TextField conectado con react-hook-form.
 * Espera las props: control, name, label.
 */
export default function MyTextField(props) {
    const { name, control, label } = props;

    return (
        <Controller
            name={name} // nombre del campo (por ejemplo, "email")
            control={control} // objeto de control de react-hook-form
            defaultValue="" // Establece un valor inicial vacío para evitar que el campo sea no controlado
            render={({
                field: { onChange, value },
                fieldState: { error },
            }) => (
                <TextField
                    id={name}
                    label={label}
                    value={value || ''}  // Asegura que siempre haya un valor, incluso si es undefined
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : ''}
                    variant="outlined"
                    className="MyForm"
                    fullWidth
                />
            )}
        />
    );
}
