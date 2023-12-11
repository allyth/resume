import React from 'react';
import { useSpring, animated } from 'react-spring';
import './flower.scss'; 

export const Flower = ({}: {}) => {
    return (
        <div>
          <div className='container flower'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          {/* <div className='container leaf'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div> */}
          {/* <div className='container stem'>
          </div> */}
        </div>
      );
};
export default Flower;