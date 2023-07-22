import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/operations';
import { StyledForm } from './StyledForm';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledForm autoComplete="off" onSubmit={handleSubmit} >
      <TextField
        name="name"
        type="text"
        size="small"
        required
        label="Name"
        helperText="Please, enter your name"
      />
      <TextField
        name="email"
        type="email"
        size="small"
        required
        label="Email"
        helperText="Please, enter your e-mail adress"
      />
      <TextField
        name="password"
        type="password"
        size="small"
        required
        label="Password"
        helperText="And your password"
        autoComplete="off"
      />
      <Button variant="outlined" type="submit">
        Register
      </Button>
    </StyledForm>
  );
};
