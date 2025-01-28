import React from 'react';
import ProfilePic from '../assets/carlos sainz aesthetic_.jpg';
import { AiFillStar } from 'react-icons/ai';

const Testimonials = () => {
  return (
    <section id='testimonials'>
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <p className='primary-subheading'>Testimonial</p>
        <h1 className='primary-heading'>What Are They Saying</h1>
        <p className='primary-text'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis accusantium laudantium ipsam, natus explicabo officiis ullam.
        </p>
      </div>
      <div className='testimonial-section-bottom'>
        <img src={ProfilePic} alt="" />
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ex illum odio quia ducimus eius, iure magnam qui repellendus aperiam?
        </p>
        <div className='testimonials-stars-container'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
        </div>
        <h2>Carlos Sainz</h2>
      </div>
    </div>
    </section>
  );
};

export default Testimonials
