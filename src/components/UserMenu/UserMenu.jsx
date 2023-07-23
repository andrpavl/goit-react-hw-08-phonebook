import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/Auth/operations';
import { selectUser } from 'redux/Auth/selectors';
import { StyledUserMenu, StyledP } from './UserMenuStyled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <StyledUserMenu>
      <StyledP>Welcome, {user.name}</StyledP>
      <button
        onClick={() => dispatch(logOut())}
        type="button"
        className="btn btn-outline-dark"
      >
        Log out
      </button>
    </StyledUserMenu>
  );
};
