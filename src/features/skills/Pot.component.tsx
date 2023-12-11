import React, { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import Leaf from './Leaf.component';
import { MAX_GROWTH_PERCENTAGE } from '../../common';

const MAX_HEIGHT = 2500;
interface LeafType {
    id: number;
    height: number;
    size: number;
}

export const Pot = ({ onScroll, growthPercentage }: { onScroll: () => void, growthPercentage: number }) => {
    const [leaves, setLeaves] = useState<LeafType[]>([]);
    const [prevScrollY, setPrevScrollY] = useState<number>(0);
    const [totalLeavesHeight, setTotalLeavesHeight] = useState<number>(0);
    const getRandomHeight = () => Math.floor(Math.random() * 50) + 30;
  
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const currentScrollPercentage = (currentScroll / scrollHeight) * 100;
  
      const adjustedGrowthPercentage = Math.min(MAX_GROWTH_PERCENTAGE, currentScrollPercentage);
  
      if (
        currentScroll > prevScrollY &&
        adjustedGrowthPercentage > growthPercentage &&
        totalLeavesHeight < MAX_HEIGHT
      ) {
        // Add a delay before generating a new leaf
        setTimeout(() => {
          const newLeaf: LeafType = {
            id: leaves.length + 1,
            height: 80 * leaves.length,
            size: getRandomHeight(),
          };
  
          setLeaves([newLeaf, ...leaves]);
          setTotalLeavesHeight(totalLeavesHeight + newLeaf.height);
          onScroll();
        }, 300); // Adjust the delay time (in milliseconds) as needed
      }
  
      setPrevScrollY(currentScroll);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [leaves, growthPercentage, prevScrollY, totalLeavesHeight]);

    return (
        <div className="pot" onScroll={handleScroll}>
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