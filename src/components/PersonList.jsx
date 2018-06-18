import React from 'react';
import Person from './Person';

const PersonList = (props) => {
    const { persons, onNameChange, deletePerson } = props;
    return (
        persons.map(person =>
            <Person person={person} key={person.id} onValueChange={onNameChange} deletePerson={deletePerson} />
        )
    );
}

export default PersonList;

