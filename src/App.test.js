import React from 'react';
import ReactDOM from 'react-dom';
import Fashion from './Fashion';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Fashion />, div);
  ReactDOM.unmountComponentAtNode(div);
});
