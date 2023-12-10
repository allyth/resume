import React from 'react';
import { useSpring, animated } from 'react-spring';

export const Leaf = ({ id, height, size }: { id : number, height : number, size : number }) => {
    return <div className="leaf" style={{bottom: `${height}px`, height: `${size}px` }} key={id}></div>;
}
export default Leaf;