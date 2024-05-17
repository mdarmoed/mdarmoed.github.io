import React from 'react';
import { Link } from 'react-router-dom';

function Button() {
  return (
    <button className="btn-donation" id="btn">
      <Link to={`/donats`}>ПОМОЧЬ КОТИКАМ</Link>
    </button>
  );
}

export default Button;
