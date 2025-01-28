import React from 'react';
import PickMeals from '../assets/pick-meals-image.png';
import ChooseMeals from '../assets/choose-image.png';
import DeliveryMeals from '../assets/delivery-image.png';

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione nemo laborum alias neque atque cum.",
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, sint corporis. Repudiandae, recusandae voluptates? Magni, nesciunt.",
        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat libero quam laboriosam.",
        },
    ];
  return (
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <p className='primary-subheading'>Work</p>
        <h1 className='primary-heading'>How It Works</h1>
        <p className='primary-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consectetur dolorum voluptatem quidem consequatur quod aliquam sunt modi, repellat pariatur?
        </p>
      </div>
      <div className='work-section-bottom'>
        {
            workInfoData.map((data) => (
                <div className='work-section-info'>
                    <div className='info-boxes-img-container'>
                        <img src={data.image} alt="" />
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Work
