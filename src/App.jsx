import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
        <PrivateRoute path="/guestbook">
          <GuestBook />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}
