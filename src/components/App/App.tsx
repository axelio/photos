import React, { useReducer } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';
import Main from '../Main/Main';
import Sofia from '../Galleries/Sofia';
import Sardinia from '../Galleries/Sardinia';
import WinterBaltic from '../Galleries/WinterBaltic';
import DifferentPlaces from '../Galleries/DifferentPlaces';
import Poland from '../Galleries/Poland/Poland';
import { StateContext, initialState, reducer } from '../../state/store';
import FullPhoto from '../FullPhoto';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{state, dispatch}}>
      <Router>
        <div className="app">
          <Route exact path="/" component={Main} />
          <Route path='/sofia' component={Sofia} />
          <Route path='/sardinia' component={Sardinia} />
          <Route path='/winterbaltic' component={WinterBaltic} />
          <Route path='/differentplaces' component={DifferentPlaces} />
          <Route path='/aroundpoland' component={Poland} />
          <Route path ='/preview' component={FullPhoto} />
        </div>
      </Router>
    </StateContext.Provider>

  )
}

export default App;
