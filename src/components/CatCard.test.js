import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CatCard from '../components/CatCard';

// Очищаем DOM и моки после каждого теста
afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe('CatCard Component', () => {
  const catProps = {
    name: 'Fluffy',
    age: 3,
    description: 'A very cute kitten.',
    image: 'fluffy.jpg'
  };

  test('renders the CatCard component', () => {
    render(<CatCard {...catProps} />);
    
    expect(screen.getByText(catProps.name)).toBeInTheDocument();
    expect(screen.getByText(`Возраст: ${catProps.age}`)).toBeInTheDocument();
    expect(screen.getByAltText(catProps.name)).toHaveAttribute('src', catProps.image);
    expect(screen.queryByText(catProps.description)).not.toBeInTheDocument();
  });

  test('shows description when "Показать больше" button is clicked', () => {
    render(<CatCard {...catProps} />);
    
    const button = screen.getByText('Показать больше');
    fireEvent.click(button);
    
    expect(screen.getByText(catProps.description)).toBeInTheDocument();
    expect(screen.getByText('Скрыть')).toBeInTheDocument();
  });

  test('hides description when "Скрыть" button is clicked again', () => {
    render(<CatCard {...catProps} />);
    
    const button = screen.getByText('Показать больше');
    fireEvent.click(button);
    fireEvent.click(button);
    
    expect(screen.queryByText(catProps.description)).not.toBeInTheDocument();
    expect(screen.getByText('Показать больше')).toBeInTheDocument();
  });
});
