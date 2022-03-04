import { render, screen } from '../../../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import OrderEntry from '../OrderEntry';

test('Testing initial state.', async () => {
  render(<OrderEntry />);

  const scoopsTotal = screen.getByText('Scoops total: $', { exact: false });
  expect(scoopsTotal).toHaveTextContent('0.00');

  const toppingsTotal = screen.getByText('Toppings total: $', { exact: false });
  expect(toppingsTotal).toHaveTextContent('0.00');

  const total = screen.getByText(/Total: /);
  expect(total).toHaveTextContent('0.00');

  // Just to avoid having "Can't perform react state update on an unmounted component" error.
  await screen.findByRole('spinbutton', {
    name: 'Vanilla'
  });
  await screen.findByRole('checkbox', {
    name: 'Cherries'
  });
});

test('Testing scoop amount, topping amount, and total amounts.', async () => {
  render(<OrderEntry />);

  const scoopsTotal = screen.getByText('Scoops total: $', { exact: false });
  expect(scoopsTotal).toHaveTextContent('0.00');

  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla'
  });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '2');
  expect(scoopsTotal).toHaveTextContent('4.00');

  const chocolateInput = await screen.findByRole('spinbutton', {
    name: 'Chocolate'
  });
  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, '3');
  expect(scoopsTotal).toHaveTextContent('10.00');

  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '1');
  expect(scoopsTotal).toHaveTextContent('8.00');

  // Test toppings:

  const toppingsTotal = screen.getByText('Toppings total: $', { exact: false });
  expect(toppingsTotal).toHaveTextContent('0.00');

  const cherriesCheckBox = await screen.findByRole('checkbox', {
    name: 'Cherries'
  });
  userEvent.clear(cherriesCheckBox);
  userEvent.click(cherriesCheckBox);

  expect(toppingsTotal).toHaveTextContent('2.00');

  const hotFudgeCheckBox = await screen.findByRole('checkbox', {
    name: 'Hot fudge'
  });
  userEvent.clear(hotFudgeCheckBox);
  userEvent.click(hotFudgeCheckBox);

  expect(toppingsTotal).toHaveTextContent('4.00');
  userEvent.click(cherriesCheckBox);
  expect(toppingsTotal).toHaveTextContent('2.00');

  // Test total amount:

  const total = screen.getByText(/Total: /);
  expect(total).toHaveTextContent('10.00');

  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '3');
  expect(total).toHaveTextContent('14.00');

  userEvent.click(cherriesCheckBox);
  expect(total).toHaveTextContent('16.00');
});
