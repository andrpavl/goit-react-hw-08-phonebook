import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/Auth/selectors';
import { StyledCont, StyledHome, StyledNav, StyledTitle } from './StyledNav';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <StyledNav>
      <StyledTitle to="/">Phonebook</StyledTitle>
      <StyledHome to="/">Home</StyledHome>
      {isLoggedIn && <StyledCont to="/contacts">Contacts</StyledCont>}
    </StyledNav>
  );
};
