import React, { useEffect, useState } from 'react';
import Cloud from './features/introduction/Cloud.component';
import Plant from './features/skills/Plant.component';
import Pot from './features/skills/Pot.component';
import Leaf from './features/skills/Leaf.component';
import { MAX_GROWTH_PERCENTAGE, GROWTH_RATE } from './common';
import { VaraText } from './features/animated_writing/VaraText';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Flower from './features/skills/Flower.component';


export const Resume = () => {
    const [growthPercentage, setGrowthPercentage] = useState(0);
    const emptyFunction = () => {};
    // const handleLeafClick = () => {
    //     setGrowthPercentage(growthPercentage < MAX_GROWTH_PERCENTAGE ? growthPercentage + GROWTH_RATE : growthPercentage);
    // };
    return (
        <Container className='flex-fill ' style={{display: 'flex', paddingTop: '50px', paddingBottom:'50px'}}>
            <Row>
                <Col>
                    <header className='header1'>
                        <div style={{paddingBottom:'50px'}}>
                            <VaraText text='Growing'/>
                        </div>
                    </header>
                </Col>
            </Row>
             <Row>
                <Col>
                    <div className='Flower1'>
                        <Flower></Flower>
                    </div>
                </Col>
             </Row>
            <Row>
                <Col md={6}>
                    <div className='plant-container '>
                        <Plant growthPercentage={100}/>
                    </div>
                    <div className='pot-container  '>
                        <Pot onScroll= {emptyFunction} growthPercentage={growthPercentage}/>
                    </div>
                </Col>
            </Row>
            <Row>
                <footer className='footer fixed-bottom bg-dark text-white text-center py-3'></footer>
            </Row>
        </Container>
        
    );
}
export default Resume;