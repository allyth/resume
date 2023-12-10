import React from 'react';
import { useSpring, animated } from 'react-spring';

export const Plant = ({ growthPercentage }: { growthPercentage: number }) => {
    const springProps = useSpring({
        height: `${growthPercentage}%`,
        config: { duration: 600 },
    });
    return <animated.div className="plant" style={springProps}></animated.div>;
}
export default Plant;