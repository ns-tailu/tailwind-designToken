import React from 'react';
import './Chip.css';

function Chip({ content = 'Status', sentiment = 'neutral', interactive = false, className = '' }) {
    const classes = `chip chip-${sentiment} ${interactive ? 'interactive' : ''} ${className}`.trim();
    return (
        <div className={classes} data-name="sentiment=neutral, size=Default">
            <p>{content}</p>
        </div>
    );
}

export default Chip;


