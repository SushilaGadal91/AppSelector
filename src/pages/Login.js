import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    navigate('/home');
  };

  return (
    <div className="screen">
      <div className="card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="form">
          <label>
            Email
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@example.com" />
          </label>
          <label>
            Password
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="••••••••" />
          </label>
          {error && <p className="error">{error}</p>}
          <button className="btn" type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
}
