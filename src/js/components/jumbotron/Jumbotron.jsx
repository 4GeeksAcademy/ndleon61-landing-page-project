import React from 'react';
import './jumbotron.css';

export const Jumbotron = () => {
  return (
    <div className='jumbotron'>
      <h1>Hi, I’m David — a Full Stack Developer in Progress... </h1>
      <p>Currently learning full stack development at 4Geeks Academy, building responsive and dynamic websites with HTML, CSS, JavaScript, and React.</p>
      <button className = "btn btn-primary" id = "learnButton" >View my work!</button>
    </div>
  )
}

export default Jumbotron;