import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/Auth/operations';
import { selectIsRefreshing } from 'redux/Auth/selectors';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const  isRefreshing  = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route
              path="register"
              element={
                <RestrictedRoute
                  component={<RegisterPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute
                  component={<LoginPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute
                  component={<ContactsPage />}
                  redirectTo="/login"
                />
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
};
