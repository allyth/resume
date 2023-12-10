import React, { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import Leaf from './Leaf.component';
import { MAX_GROWTH_PERCENTAGE } from '../../common';

interface LeafType {
    id: number;
    height: number;
    size: number;
}

export const Pot = ({ onClick, growthPercentage }: { onClick: () => void, growthPercentage: number }) => {
    const [leaves, setLeaves] = useState<LeafType[]>([]);
    const getRandomHeight = () => Math.floor(Math.random() * 30) + 10;

    const handlePotClick = () => {
        if (growthPercentage < MAX_GROWTH_PERCENTAGE) {
            const newLeaf: LeafType = {
                id: leaves.length + 1,
                height: 70 * leaves.length,
                size: getRandomHeight(),
            };
    
            setLeaves([newLeaf, ...leaves]);
        }
        onClick();
    };

    return (
        <div className="pot" onClick={handlePotClick}>
            <animated.div className="leaf-container">
                {
                    leaves.map((leaf) => (
                        <Leaf key={leaf.id} id={leaf.id} height={leaf.height} size={leaf.size} />
                    ))
                }
            </animated.div>
        </div>
    );
};

export default Pot;