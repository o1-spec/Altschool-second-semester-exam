import React from 'react';
import { Link } from 'react-router-dom';

//Successfull error boundary function
function ErrorBoundarySuccess() {
  return (
    <div className='success-container'>
      <h1 className='error-success'>Oops... an error occurred somewhere in the component </h1>
      <button className="back">
          <Link to="/">Homepage</Link>
      </button>
    </div>
  );
}

export default ErrorBoundarySuccess;
