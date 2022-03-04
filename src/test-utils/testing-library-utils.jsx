import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';

function Wrapper({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';

export { renderWithContext as render };
