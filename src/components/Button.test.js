import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Импортируем BrowserRouter для корректного использования Link
import Button from './Button'; // Импортируем компонент кнопки

test('Button renders correctly', () => {
  const { getByText } = render(
    <Router>
      <Button />
    </Router>
  );
  const buttonElement = getByText('ПОМОЧЬ КОТИКАМ');
  expect(buttonElement).toBeInTheDocument();
});

test('Button redirects to /donats when clicked', () => {
  const { getByText } = render(
    <Router>
      <Button />
    </Router>
  );
  const buttonElement = getByText('ПОМОЧЬ КОТИКАМ');
  fireEvent.click(buttonElement);
  expect(window.location.href).toBe('http://localhost/donats'); // Убедимся, что кнопка перенаправляет пользователя на правильный URL
});
