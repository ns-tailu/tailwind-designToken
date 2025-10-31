import React from 'react';
import './Chip.css';

function Chip({ content = 'Status', interactive = false, className = '' }) {
    const classes = `chip-neutral ${interactive ? 'interactive' : ''} ${className}`.trim();
    return (
        <div className={classes} data-name="sentiment=neutral, size=Default">
            <p>{content}</p>
        </div>
    );
}

export default Chip;


