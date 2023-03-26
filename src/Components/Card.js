import React from 'react';
import './Card.css'


const Card = ({userData}) => {

  const cardData = userData.map((ui,i)=>{
    return(
      <div key={i} className="card mt-5 mx-2 mb-3 h-50" style={{width: "18rem"}}>
    <img src={ui.image} className="card-img-top Image" alt="Cardimage" />
    <div className="card-body bg-light">
    <div className='my-3 d-flex justify-content-between'>
    <h5 className="card-id">P Id - {ui.id}</h5>
    <h5 className="card-text">Price : {ui.price}</h5>
    </div>
    <h5 className="card-title text-success Title">{ui.title}</h5>
    <p className="card-text flex-wrap Description">{ui.description}</p>
    <button className="btn btn-success">Explore More</button>
    </div>
   </div>
    )
  })
  return (
   <>
   <div className='d-flex justify-content-evenly flex-wrap'>
   {cardData}
   </div>
    </>
  );
}

export default Card;
