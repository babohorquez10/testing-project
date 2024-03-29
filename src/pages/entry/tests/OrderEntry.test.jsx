import {
  render,
  screen,
  waitFor
} from '../../../test-utils/testing-library-utils';
import { rest } from 'msw';
import { server } from '../../../mocks/server';
import OrderEntry from '../OrderEntry';

test('Testing error banners for options', async () => {
  server.resetHandlers(
    rest.get('/scoops', (req, res, ctx) => res(ctx.status(500))),
    rest.get('/toppings', (req, res, ctx) => res(ctx.status(500)))
  );

  render(<OrderEntry />);

  await waitFor(async () => {
    const alerts = await screen.findAllByRole('alert');
    expect(alerts).toHaveLength(2);
  });
});
