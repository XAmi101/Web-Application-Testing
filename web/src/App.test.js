import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';


test('App renders without crashing', () => {
  render(<App />);
});

test('contains scoreboard Title', () => {
  const { getByText }  = render(<App />);
  getByText("Lets Play Baseball!");

});
