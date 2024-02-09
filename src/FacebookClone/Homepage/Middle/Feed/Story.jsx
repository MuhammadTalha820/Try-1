import React from 'react';
import Sdata from "./Sdata";
import "./Story.css";

const Story = () => {
  return (
    <div className='Story'>
      {Sdata.map((val, index) => (
        <div className="StoryItem" key={index}>
          <div className="StoryImageContainer">

            <img src={val.img} alt="background_image" className='background_img' />
          
          <div className="StoryUser">

            <img src={val.img} alt="Profile_image" className='profile_img' />
            <span className='person_name'>
              {val.personName}
            </span>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Story;
