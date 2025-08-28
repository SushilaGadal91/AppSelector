import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="screen">
      <div className="card">
        <h2>Home</h2>
        <div className="choices">
          <Link className="choice" to="/iphone">iPhone</Link>
          <Link className="choice" to="/android">Android</Link>
        </div>
      </div>
    </div>
  );
}
