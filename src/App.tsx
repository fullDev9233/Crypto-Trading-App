import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from './components/Header';
import { useAppSelector } from './hooks/useRedux';
import PrivateRoute from './routers/PrivateRoute';
import { selectIsLoggedIn } from './redux/authSlice';
import GlobalStyle from './styles/global';

const Home = lazy(() => import('./pages/Home'));
const Trade = lazy(() => import('./pages/Trade'));

const App = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/sign-in">
            {isLoggedIn && <Redirect to="/" />}
          </Route>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <PrivateRoute exact path="/trade">
            <Trade />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
