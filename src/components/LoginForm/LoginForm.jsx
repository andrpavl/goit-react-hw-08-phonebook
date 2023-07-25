import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { logIn } from 'redux/Auth/operations';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { StyledForm } from 'components/RegisterForm/StyledForm';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    toast.success('Welcome to your Phonebook');

    form.reset();
  };

  return (
    <StyledForm autocomplete="off" onSubmit={handleSubmit}>
      <TextField
        name="email"
        type="email"
        size="small"
        required
        id="outlined-required"
        label="Email"
        helperText="Please, enter your e-mail adress"
      />
      <TextField
        name="password"
        type="password"
        size="small"
        required
        label="Password"
        autoComplete="off"
        helperText="And your password"
      />
      <Button variant="outlined" type="submit">
        Log in
      </Button>
    </StyledForm>
  );
};
