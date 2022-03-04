import { render, screen } from '../../../test-utils/testing-library-utils';
import Options from '../Options';

test('Displays image for each scoop', async () => {
  render(<Options optionType="scoops" />);

  const scoops = await screen.findAllByRole('img', {
    name: /scoop$/i
  });

  expect(scoops).toHaveLength(2);

  const altTexts = scoops.map(item => item.alt);
  expect(altTexts).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('Displays image for toppings', async () => {
  render(<Options optionType="toppings" />);

  const toppings = await screen.findAllByRole('img', {
    name: /topping$/i
  });

  expect(toppings).toHaveLength(3);

  const altTexts = toppings.map(item => item.alt);
  expect(altTexts).toEqual([
    'M&Ms topping',
    'Hot fudge topping',
    'Cherries topping'
  ]);
});
