
import './App.css';
import Header from './components/header/header.jsx';
import Body from './components/body/body.jsx';
import Registro from './components/register/registro'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>

        <Routes>

          <Route 
            path='/'
            element={
            <>
              <Header />
              <Body />
              <Registro />
            </>
            }
          />

          <Route 
            path='/registro'
            element={
            <>
              <Header />
              <Registro />
            </>
            }
          />

        </Routes>

      </Router>
    </>
  );
}

export default App;
