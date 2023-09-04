// rafce
import React from 'react';
import Slider from 'react-slick';

const EnterainmentCard = (props) => {
  return (
    <>
      <div className="w-full h-full rounded-lg">
        <img src={props.src} alt="Entertainment" className='w-full h-full rounded-lg' />
      </div>
    </>
  )
}

//main component

//Images should be added here

const EnterainmentCardSlider =()=>{
  const EntertainmentImage = [];
  
  const settings ={
    infinite : true,
    autoplay : true,
    slidesToShow: 5,
    slidesToScroll : 4,
    initialSlide : 0,
    dots:true,
    arrows:true,
    responsive :[
      {
        breakpoint:1024,
        settings:{
          slidesToShow : 3,
          slidesToScroll :2,
        }
      },
      {
        breakpoint:600,
        settings:{
          slidesToShow : 3,
          slidesToScroll :1,
        }
      },
      {
        breakpoint:480,
        settings:{
          slidesToShow : 2,
          slidesToScroll :1,
        }
      }
    ]
  }

  return(
    <>
    <Slider {...settings} >
    {EntertainmentImage.map((image)=>(
      <EnterainmentCard src={image}/>
    ))}
    </Slider>
    </>
  )
}

export default EnterainmentCardSlider;


