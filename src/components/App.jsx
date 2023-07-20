import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/Auth/operations';
import { selectIsRefreshing } from 'redux/Auth/selectors';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import Loader from './Loader/Loader';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const LogIn = lazy(() => import('../pages/Login'));
const Contacts = lazy(()=> import('../pages/Contacts')) 

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader/>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Home />} />
      <Route
        path="/register"
        element={
          <RestrictedRoute redirectTo="/contacts" component={<Register />} />
        }
      />
        <Route path='/login' element={<RestrictedRoute redirectTo='/contacts' component={<LogIn />} />}/>
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }/>
    </Routes>
  );
};
