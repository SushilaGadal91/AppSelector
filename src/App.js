import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Login from './pages/Login.js';
import Home from './pages/Home.js';
import Iphone from './pages/Iphone.js';
import Android from './pages/Android.js';

export default function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/android" element={<Android />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function NotFound() {
  return (
    <div className="screen">
      <h1>404</h1>
      <p>That page doesn’t exist.</p>
      <Link className="btn" to="/login">Go to Login</Link>
    </div>
  );
}
