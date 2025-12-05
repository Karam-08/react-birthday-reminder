import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {people} from './data/people'

import BirthdayList from './components/BirthdayList';
import MonthBirthdays from './components/MonthBirthdays';
import TodayBirthdays from './components/TodayBirthdays';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BirthdayList people={people} />
    <MonthBirthdays people={people}/>
    <TodayBirthdays people={people}/>
  </React.StrictMode>
);
