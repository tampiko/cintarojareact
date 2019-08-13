import React, {Fragment} from 'react';
import MainContainer from './containers/MainContainer/MainContainer';
import {BrowserRouter, Route} from 'react-router-dom';
import AddMovieContainer from './containers/AddMovieContainer/AddMovieContainer';

function App() {

  return (
      <Fragment>
        <BrowserRouter>
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/add" component={AddMovieContainer} />
        </BrowserRouter>
      </Fragment>
  );
}

export default App;