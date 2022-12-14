import React from 'react';
import {useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';
import {RootState} from '../store';

export function PrivateRoute({component: Component, ...rest}: any) {
  const isLoggedIn = !!useSelector((state: RootState) => state.auth.user.token);
  const userToken = !!localStorage.getItem('token');
  if (isLoggedIn || userToken) return <Component {...rest} />;
  return <Navigate to={'/'} />;
}

export function AdminRoute({component: Component, ...rest}: any) {
  const isAdmin = useSelector((state: RootState) => state.auth.user.role === 'admin');
  const isLoggedIn = !!useSelector((state: RootState) => state.auth.user.token);

  if (isLoggedIn && isAdmin) {
    return <Component {...rest} />;
  }

  return <Navigate to={'/'} />;
}

export function OnlyPublicRoute({component: Component, ...rest}: any) {
  const isLoggedIn = !!useSelector((state: any) => state.auth.user.token);
  if (isLoggedIn) return <Navigate to={'/'} />;
  return <Component {...rest} />;
}
