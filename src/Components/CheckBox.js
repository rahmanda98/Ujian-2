import React from 'react';

const CheckBox = ({label, isSelected, onCheckboxChange}) => (
    <div>
        <label>
            <input 
            type="checkbox"
            name={label}
            checked={isSelected}
            onChange={onCheckboxChange}
            className="form-check-input">
            </input>
        </label>
    </div>
);

export default CheckBox;