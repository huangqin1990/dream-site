import React from 'react';
import './css/Divider.css';

const Divider = ({ text = 'Dream Chain Tech' }) => {
    return (
        <div className="divider text-gray-400 pt-4 pb-4">
            <span>{text}</span>
        </div>
    );
};

export default Divider;