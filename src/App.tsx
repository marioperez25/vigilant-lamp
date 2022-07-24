import React from 'react';
import { Counter } from './features/counter/Counter';

// bostrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/esm/ThemeProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/counter" element={<Counter />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
