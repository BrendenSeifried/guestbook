import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { UserProvider } from './context/UserContext';

describe('Testing behaviour', () => {
  it('just checkin stuff dont mind me', async () => {
    render(
      <UserProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </UserProvider>
    );
    screen.debug();
  });
});
