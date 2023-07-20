import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/Auth/operations';
import { selectUser } from 'redux/Auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button onClick={() => dispatch(logOut)}>Log out</button>
    </div>
  );
};
