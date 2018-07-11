import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PhotoGrid from './PhotoGrid';
import PhotoDetails from './PhotoDetails';

class Main extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <Switch>
                <Route exact path="/" component={PhotoGrid}></Route>
                <Route path="/view/:postId" component={PhotoDetails}></Route>
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default Main;
