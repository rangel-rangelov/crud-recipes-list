import { render } from '@testing-library/react';

import App from './App';


describe('[LIST] Render page', () => {
  it('renders page', () => {
    const { getByText } = render(<App />);

    expect(getByText('Recipes list')).toBeInTheDocument();
  });

  it('renders add button', () => {
    const { getByText } = render(<App />);

    expect(getByText('Add new recipe')).toBeInTheDocument();
  });
});
