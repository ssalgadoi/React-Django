import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Controller } from 'react-hook-form';
import { FormHelperText } from '@mui/material';

export default function MyPassField(props) {
  const [showPassword, setShowPassword] = React.useState(false);
  const { label, name, control } = props;

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Controller
      defaultValue="" 
      name={name} // nombre del campo (por ejemplo, "password")
      control={control} // objeto de control de react-hook-form
      render={({
        field: { onChange, value },
        fieldState: { error },
        // formState,
      }) => (
        <div>
          <FormControl variant="outlined" className={"MyForm"}>
            <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              onChange={onChange}
              value={value || ''}  
              error={!!error}
              
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={showPassword ? 'hide the password' : 'display the password'}
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label={label}
            />
            <FormHelperText sx={{color:'#d32f2f'}}>{error?.message}</FormHelperText>
          </FormControl>
        </div>
      )}
    />
  );
}
