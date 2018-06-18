import React from 'react';

const ToggleInput = (props) => {
    const { id, name, isInEditMode, onValueChange, setEditMode, setRef } = props;
    return (
        !isInEditMode ?
            <div>{name}</div>
            :
            <input type="text"
                ref={(input) => { setRef(input); }}
                onKeyDown={(event) => setEditMode(event)}
                value={name}
                onChange={(event) => onValueChange(event, id)}
            />
    );
}

export default ToggleInput;