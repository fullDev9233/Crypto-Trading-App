import { FC, memo } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAppSelector } from '../hooks/useRedux';
import { selectIsLoggedIn } from '../redux/authSlice';

interface PrivateRouteProps {
  children: any;
  exact: boolean;
  path: string;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children, ...rest }) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/sign-in',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default memo(PrivateRoute);
