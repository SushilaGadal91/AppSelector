import React from 'react';
import { Link } from 'react-router-dom';

export default function Android() {
  const items = ['Pixel 9', 'Galaxy S24', 'OnePlus 12R', 'Moto Edge'];
  return (
    <div className="screen">
      <div className="card">
        <div className="header">
          <h2>Android Phones</h2>
          <Link className="btn small" to="/home">Back</Link>
        </div>
        <ul className="grid">
          {items.map((it) => <li key={it} className="tile">{it}</li>)}
        </ul>
      </div>
    </div>
  );
}
