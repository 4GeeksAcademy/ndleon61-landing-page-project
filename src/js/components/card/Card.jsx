import React from 'react';
import './card.css';

export const Card = () => {
  return (
    <div id='cards'>
      <div className='card'>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/021/599/588/small_2x/abstract-white-and-gray-overlap-circles-background-3d-paper-circle-banner-with-drop-shadows-minimal-simple-design-for-presentation-flyer-brochure-website-book-etc-vector.jpg" alt="" className="cad-img-top" />
      <div className="card-body">
        <h5 className="card-title">Instagram Feed Layout</h5>
        <p className="card-text">A responsive Instagram-style feed built using Bootstrap 5. This project demonstrates layout design, grid systems, and component structure for social media interfaces.</p>
      </div>
      <div className="card-footer">
         <a href="" className='btn btn-primary'>View</a>
      </div>
    </div>

     <div className='card'>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/021/599/588/small_2x/abstract-white-and-gray-overlap-circles-background-3d-paper-circle-banner-with-drop-shadows-minimal-simple-design-for-presentation-flyer-brochure-website-book-etc-vector.jpg" alt="" className="cad-img-top" />
      <div className="card-body">
        <h5 className="card-title">Random Excuse Generator</h5>
        <p className="card-text">A JavaScript-based generator that outputs funny random excuses on button click.</p>
      </div>
      <div className="card-footer">
        <a href="" className='btn btn-primary'>View</a>
      </div>
    </div>

     <div className='card'>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/021/599/588/small_2x/abstract-white-and-gray-overlap-circles-background-3d-paper-circle-banner-with-drop-shadows-minimal-simple-design-for-presentation-flyer-brochure-website-book-etc-vector.jpg" alt="" className="cad-img-top" />
      <div className="card-body">
        <h5 className="card-title">Random Card Generator</h5>
        <p className="card-text">A JavaScript-based app that generates and displays a random playing card on page load. Built with HTML, CSS, and DOM manipulation, it’s a fun way to practice logic and styling.</p>
      </div>
      <div className="card-footer">
        <a href="" className='btn btn-primary'>View</a>
      </div>
    </div>

    </div>
  
  )
}

export default Card;