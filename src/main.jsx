import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import SideNav from './components/sidenav.jsx';
import Login from './pages/login.jsx';
import Protected from './components/protected.jsx';

const router = (
  <Router>
    <Routes>
      <Route path='*' element={<App />}>
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Protected />}>
          <Route path='*' element={<SideNav />} />
        </Route>
      </Route>
    </Routes>
  </Router>
);

ReactDOM.render(router, document.getElementById('root'));
