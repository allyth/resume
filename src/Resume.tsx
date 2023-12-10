import React, { useEffect, useState } from 'react';
import Cloud from './features/introduction/Cloud.component';
import Plant from './features/skills/Plant.component';
import Pot from './features/skills/Pot.component';
import Leaf from './features/skills/Leaf.component';
import { MAX_GROWTH_PERCENTAGE, GROWTH_RATE } from './common';

export const Resume = () => {
    const [growthPercentage, setGrowthPercentage] = useState(0);
    const handleLeafClick = () => {
        setGrowthPercentage(growthPercentage < MAX_GROWTH_PERCENTAGE ? growthPercentage + GROWTH_RATE : growthPercentage);
    };
    return (
        <div className="app-container">
            <Plant growthPercentage={growthPercentage} />
            <Pot onClick={handleLeafClick} growthPercentage={growthPercentage}/>
        </div>
    );
}
export default Resume;