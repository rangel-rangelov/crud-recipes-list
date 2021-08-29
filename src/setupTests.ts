// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { MOCK_DATA } from 'models/recipes';

const store: Record<string, any> = {
  recipes: MOCK_DATA,
};

Object.defineProperty(window, 'localStorage', { 
  value: {
    getItem: (key: string): any => store[key],
  },
});