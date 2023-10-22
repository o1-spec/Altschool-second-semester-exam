import React from 'react';
import { useNavigate } from 'react-router-dom';


function ErrorTest() {
  const navigate = useNavigate();

  const handleTestButtonClick = () => {
    navigate('/error-success');
  };

  //Clicked before error boundary page
  return (
    <div className='error-div'>
      <h1 className='error-boundary'>Error Boundary Test</h1>
      <button className='Error-button' onClick={handleTestButtonClick}>Test Error</button>
    </div>
  );
}

export default ErrorTest;
