import React from "react";

export default function Description(props){
  let store = props.store.birdsData[0][0];
  return (
    <aside className='main__description'>
      <img className='main__description-photo' src={store.image} alt='bird-image'/>
      <span className='main__description-name'>{store.name}</span>
      <audio className='main__description-audio' controls/>
      <p className='main__description-about'>{store.description}</p>
    </aside>
  )
};