import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {MemoryRouter} from 'react-router-dom';

test('renders learn react link', () => {
  render(<App />, {wrapper: MemoryRouter});
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders with spanshot', () => {
  const data = render(<App />, {wrapper: MemoryRouter});
  expect(data).toMatchSnapshot();
});
