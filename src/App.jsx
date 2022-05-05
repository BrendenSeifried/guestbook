import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getUser } from './services/fetch';
import Auth from './views/Auth/Auth';
import GuestBook from './views/GuestBook/GuestBook';
// import Home from './views/Home/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        {/* <PrivateRoute path="/"> */}
        <Route path="/">
          <GuestBook />
        </Route>
        {/* </PrivateRoute> */}
      </Switch>
    </BrowserRouter>
  );
}
