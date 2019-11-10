import React, { useReducer } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';
import Main from '../Main/Main';
import Architecture from '../Galleries/Architecture';
import WinterBaltic from '../Galleries/WinterBaltic';
import Nature from '../Galleries/Nature';
import { StateContext, initialState, reducer } from '../../state/store';
import FullPhoto from '../FullPhoto';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{state, dispatch}}>
      <Router>
        <div className="app">
          <Route exact path="/" component={Main} />
          <Route path='/architecture' component={Architecture} />
          <Route path='/winterbaltic' component={WinterBaltic} />
          <Route path='/nature' component={Nature} />
          <Route path ='/preview' component={FullPhoto} />
        </div>
      </Router>
    </StateContext.Provider>

  )
}

export default App;
