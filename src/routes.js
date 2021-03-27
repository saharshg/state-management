import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header';
import State from './state/State';
import State2 from './state/State2';
import State3 from './state/State3';
import AutoCount from './useEffect/autoCount';
import Hmm from './useEffect/hmm';
import NotEnough from './useEffect/notEnough';
import Solution from './useEffect/solution';
import Perfection from './useRef/perfection';
import Proof from './useRef/proof';
import Understanding from './useRef/understanding';

const Routes = () => {
  return (
    <Router>
      <Header />
      <section style={{ margin: 100 }}>
        <Switch>
          <Route exact path='/state'>
            <State />
          </Route>
          <Route path='/state/2'>
            <State2 />
          </Route>
          <Route path='/state/3'>
            <State3 />
          </Route>
          <Route exact path='/useEffect'>
            <AutoCount />
          </Route>
          <Route path='/useEffect/2'>
            <NotEnough />
          </Route>
          <Route path='/useEffect/3'>
            <Solution />
          </Route>
          <Route path='/useEffect/4'>
            <Hmm />
          </Route>
          <Route exact path='/useRef'>
            <Understanding />
          </Route>
          <Route path='/useRef/2'>
            <Perfection />
          </Route>
          <Route path='/useRef/3'>
            <Proof />
          </Route>
        </Switch>
      </section>
    </Router>
  );
};

export default Routes;
