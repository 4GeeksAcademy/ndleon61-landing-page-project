import React from 'react';
import './card.css';

export const Card = () => {
  return (
    <div id='cards'>
      <div className='card'>
      <img src= "https://elfsight.com/wp-content/uploads/2018/08/instagram-feed_screenshot-1.jpg" alt="" className="cad-img-top" />
      <div className="card-body">
        <h5 className="card-title">Instagram Feed Layout</h5>
        <p className="card-text">A responsive Instagram-style feed built using Bootstrap 5. This project demonstrates layout design, grid systems, and component structure for social media interfaces.</p>
      </div>
      <div className="card-footer">
         <a href="" className='btn btn-primary'>View</a>
      </div>
    </div>

     <div className='card'>
      <img src= "https://theexcusegoose.com/assets/img/og.png" alt="" className="cad-img-top" />
      <div className="card-body">
        <h5 className="card-title">Random Excuse Generator</h5>
        <p className="card-text">A JavaScript-based generator that outputs funny random excuses on button click.</p>
      </div>
      <div className="card-footer">
        <a href="" className='btn btn-primary'>View</a>
      </div>
    </div>

     <div className='card'>
      <img src= "https://substackcdn.com/image/fetch/w_1250,h_703,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe479d48e-0fed-44a9-a824-38f3dffd0bb2_1728x1728.webp" alt="" className="cad-img-top" />
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