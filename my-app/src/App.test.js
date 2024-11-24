import { render, screen } from '@testing-library/react';
import App from './App';
import MyComponent from './Test';

test('renders learn react link', () => {
  render(<MyComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
