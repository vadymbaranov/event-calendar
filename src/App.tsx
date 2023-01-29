import React from 'react';
import './App.scss';

import { Calendar } from './components/Calendar';

export const App: React.FC = () => {
  return (
    <main className="main">
      <div className="main__container">
        <Calendar />
      </div>
    </main>
  );
};
