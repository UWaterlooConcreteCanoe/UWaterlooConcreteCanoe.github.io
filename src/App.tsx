import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <Link to={'/'} className='navbar-brand mx-3'>uWaterloo Concrete Canoe</Link>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to={'/'} className='nav-link'>Home</Link>
              </li>
              <li className='nav-item'>
                <Link to={'/about'} className='nav-link'>About</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Outlet />
      </header>
    </div>
  );
}

export default App;
