import React from 'react';

const person = (props) => {
    return (
        <div className="person-card">
            <div className="person-image" style={{ backgroundImage: `url(${props.person.picture})` }} />
            <div className="person-info">
                <div className="person-info__name">
                    {props.person.name}
                </div>
                <div className="person-info__about" title={props.person.about}>
                    {props.person.about}
                </div>
                {/* <input type="text" value={props.person.name} onChange={(event) => props.onValueChange(event, props.id)} /> */}
            </div>
            <div className="person-actions">
                <i className="fa fa-cog" />
                <i className="fa fa-trash" onClick={() => props.deletePerson(props.person.id)} />
            </div>
        </div>
    )
}

export default person;