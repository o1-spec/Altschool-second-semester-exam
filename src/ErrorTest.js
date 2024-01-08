import React from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeButton from './ThemeButton';


function ErrorTest({theme, toggleTheme}) {
  const navigate = useNavigate();

  const handleTestButtonClick = () => {
    navigate('/error-success');
  };

  //Clicked before error boundary page
  return (
    <div data-aos="fade-up" className='error-div'>
     <ThemeButton theme={theme} toggleTheme={toggleTheme}/>
      <h1 className='error-boundary'>Error Boundary Test</h1>
      <button className='Error-button' onClick={handleTestButtonClick}>Test Error</button>
    </div>
  );
}

export default ErrorTest;
