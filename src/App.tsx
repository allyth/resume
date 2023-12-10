import React, { useState } from 'react';
import './App.css';
import Resume from './Resume';
import Leaf from './features/skills/Leaf.component';

export const App = () => {
    return (
        <div className="App">
            <Resume></Resume>
        </div>
    );
}

export default App;
