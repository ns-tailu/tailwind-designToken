import React from 'react';
import './Toggle.css';

function Toggle({ 
    size = 'regular', 
    value = 'off', 
    disabled = false,
    onChange,
    className = '' 
}) {
    const isOn = value === 'on' || value === true;
    
    const handleClick = () => {
        if (!disabled && onChange) {
            onChange(!isOn);
        }
    };

    const classes = `toggle toggle-${size} toggle-${isOn ? 'on' : 'off'} ${disabled ? 'toggle-disabled' : ''} ${className}`.trim();

    return (
        <div 
            className={classes}
            onClick={handleClick}
            role="switch"
            aria-checked={isOn}
            aria-disabled={disabled}
        >
            <div className="toggle-thumb" />
        </div>
    );
}

export default Toggle;

