import { mockedData } from './services/Mock';
import { screen, render } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { UserProvider } from './context/UserContext';
import userEvent from '@testing-library/user-event';

const server = setupServer(
  rest.post(
    `https://ezwbsacoojmonmiqffad.supabase.co/auth/v1/token`,
    (req, res, ctx) => res(ctx.json(mockedData))
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close);

test('should test my stuff bro', async () => {
  render(
    <UserProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </UserProvider>
  );

  const emailLink = await screen.findByPlaceholderText('Email');
  userEvent.type(emailLink, '1@1');

  const passLink = await screen.findByPlaceholderText('Password');
  userEvent.type(passLink, '123456');

  const submitBtn = await screen.findByRole('button');
  userEvent.click(submitBtn);

  server.use(
    rest.post(
      `https://ezwbsacoojmonmiqffad.supabase.co/rest/v1/entries`,
      (req, res, ctx) => res(ctx.json(user))
    )
  );

  const guesttest = await screen.findByPlaceholderText('enter message');
  userEvent.type(guesttest, 'testing123');

  const clickAdd = await screen.findByText('Add');
  userEvent.click(clickAdd);

  server.use(
    rest.get(
      `https://ezwbsacoojmonmiqffad.supabase.co/rest/v1/entries`,
      (req, res, ctx) => res(ctx.json(user))
    )
  );

  const user = {
    id: 1,
    created_at: '2022-6-6T00:17:29+00:00',
    content: 'test',
  };

  await screen.findByText('test');

  screen.debug();
});
