import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header';
import PrivateRoute from './routers/PrivateRoute';
import GlobalStyle from './styles/global';

const Home = lazy(() => import('./pages/Home'));
const Trade = lazy(() => import('./pages/Trade'));

const App = () => (
  <Router>
    <GlobalStyle />
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
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

export default App;
