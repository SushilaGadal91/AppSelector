import React from 'react';
import { Link } from 'react-router-dom';

export default function Iphone() {
  const items = ['iPhone 16', 'iPhone 15', 'iPhone 14', 'iPhone SE'];
  return (
    <div className="screen">
      <div className="card">
        <div className="header">
          <h2>iPhones</h2>
          <Link className="btn small" to="/home">Back</Link>
        </div>
        <ul className="grid">
          {items.map((it) => <li key={it} className="tile">{it}</li>)}
        </ul>
      </div>
    </div>
  );
}
