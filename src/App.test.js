// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RoughFen title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RoughFen/i);
    expect(titleElement).toBeInTheDocument();
});
