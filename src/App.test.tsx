import App from './App';
import { render, screen } from '@testing-library/react';

describe('App component', () => {

  test('renders npm install text', () => {
    render(<App />);
    const linkElement = screen.getByText(/npm i react-image-zooom/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders title and header content', () => {
    render(<App />);
    expect(screen.getByText(/ImageZoom/)).toBeInTheDocument();
    expect(screen.getByText(/Simple React component/)).toBeInTheDocument();
    expect(screen.getByAltText('ImageZoom logo')).toBeInTheDocument();
  });
  
});

