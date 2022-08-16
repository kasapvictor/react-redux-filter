import React from 'react';

import { Header } from './components';
import { Positions } from './features/positions/Positions';

export const App = () => (
  <div className="container">
    <Header />
    <Positions />
  </div>
);
