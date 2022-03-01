import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SummaryForm from '../SummaryForm';

test('Init state.', () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', {
    name: /Terms and Conditions/i
  });

  expect(checkbox).toBeInTheDocument();
  expect(checkbox).not.toBeChecked();

  const button = screen.getByRole('button', {
    name: /Confirm order/i
  });

  expect(button).toBeInTheDocument();
  expect(button).toBeDisabled();
});

test('button enabled and disabled on checkbox change.', () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', {
    name: /Terms and Conditions/i
  });

  const button = screen.getByRole('button', {
    name: /Confirm order/i
  });

  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
});

test('T&C popover', async () => {
  render(<SummaryForm />);

  const nullPopover = screen.queryByText(/Popover terms and conditions/i);
  expect(nullPopover).not.toBeInTheDocument();

  const tyc = screen.queryByText(/Terms and Conditions/i);
  userEvent.hover(tyc);

  const popover = screen.getByText(/Popover terms and conditions/i);
  expect(popover).toBeInTheDocument();

  userEvent.unhover(tyc);

  await waitForElementToBeRemoved(() =>
    screen.queryByText(/Popover terms and conditions/i)
  );
});
