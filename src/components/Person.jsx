import React from 'react';

const person = (props) => {
    return (
        <div>
            <span onClick={() => props.click(props.person.name + (props.id + 1).toString(), props.id)}>{props.person.name}</span>
            <input type="text" value={props.person.name} onChange={(event) => props.onValueChange(event, props.id)} />
        </div>
    )
}

export default person;