import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {people} from './data/people'

import BirthdayList from './components/BirthdayList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BirthdayList people={people} />
  </React.StrictMode>
);
