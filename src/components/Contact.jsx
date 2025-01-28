import React from 'react';

const Contact = () => {
  return (
    <section id='contact'>
    <div className='contact-page-wrapper'>
      <h1 className='primary-heading'>Do You Have Any Question?</h1>
      <h1 className='primary-heading'>Let Us Help You</h1>
      <div className='contact-form-container'>
        <input type="text" placeholder='mail@example.com' />
        <button className='secondary-button'>Submit</button>
      </div>
    </div>
    </section>
  );
};

export default Contact
