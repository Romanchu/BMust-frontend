
import './App.css';
import Header from './components/header/header.jsx';
import Body from './components/body/body.jsx';
import Registro from './components/register/registro'
import Login from './components/login/login'
import Carrito from './components/carrito/carrito'

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
          <Route 
            path='/login'
            element={
            <>
              <Header />
              <Login />
            </>
            }
          />
          <Route 
            path='/carrito'
            element={
            <>
              <Header />
              <Carrito />
            </>
            }
          />

        </Routes>

      </Router>
    </>
  );
}

export default App;
