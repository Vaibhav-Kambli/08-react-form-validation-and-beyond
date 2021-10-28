import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import styles from './LoginForm.module.css';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(5),
});

function LoginForm() {
  const { handleSubmit, control, formState:{ errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const formSubmitted = (data) => {
    console.log('FORM SUBMITTED', data);
    // TODO: send to a server...
  };

  console.log(errors);

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
      className={styles.form}
      onSubmit={handleSubmit(formSubmitted)}
    >
      <div className={styles.inputWrapper}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ''}
              label="Email"
              type="email"
              {...field}
              // ^ is shorthand for:
              // onChange={field.onChange}
              // onBlur={field.onBlur}
              // value={field.value}
              // ref={field.ref}
            />
          )}
        />
      </div>
      <div className={styles.inputWrapper}>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ''}
              label="Password"
              type="password"
              {...field}
            />
          )}
        />
      </div>
      <div>
        <Button type="submit" variant="contained">Sign In</Button>
      </div>
    </Box>
  )
}

export default LoginForm;
