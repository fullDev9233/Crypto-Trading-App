import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Header from './components/Header';

const Home = lazy(() => import('./pages/Home'));
const Trade = lazy(() => import('./pages/Trade'));

const App = () => (
  <Router>
    <GlobalStyle />
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/trade" component={Trade} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
