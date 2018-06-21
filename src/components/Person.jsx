import React from 'react';
import ToggleInput from './ToggleInput';
import Icon from './Icon';
import PropTypes from "prop-types";

class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isInEditMode: false
        }
        this.refInput = React.createRef();
        this.setEditMode = this.setEditMode.bind(this);
    }

    setEditMode(event) {
        if (!event || event.keyCode === 13) {
            this.setState({ isInEditMode: !this.state.isInEditMode })
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', () => this.clickOutSide, false);
    }

    componentDidUpdate() {
        if (this.state.isInEditMode) {
            this.refInput.current.focus();
        }
    }

    componentWillUnMount() {
        document.removeEventListener('mousedown', () => this.clickOutSide, false);
    }

    clickOutSide(event) {
        if (this.state.isInEditMode &&
            this.personCard &&
            this.personCard.contains(event.target)) {
            this.setEditMode();
        } else {
            this.setState({ isInEditMode: false });
        }
    }

    render() {
        const { person, deletePerson, onValueChange } = this.props;

        return (
            <div className="person-card" ref={(el) => { this.personCard = el; }}>
                <div className="person-image" style={{ backgroundImage: `url(${person.picture})` }} />
                <div className="person-info">
                    <div className="person-info__name" onClick={() => this.setEditMode()}>
                        <ToggleInput
                            name={person.name}
                            id={person.id}
                            isInEditMode={this.state.isInEditMode}
                            inputRef={this.refInput}
                            onValueChange={onValueChange}
                            setEditMode={this.setEditMode} />
                    </div>
                    <div className="person-info__about" title={person.about}>
                        {person.about}
                    </div>
                </div>
                <div className="person-actions">
                    <Icon iconClass={'fa fa-cog orange'} />
                    <Icon iconClass={'fa fa-trash'} iconActionHandler={deletePerson} id={person.id} />
                </div>
            </div>
        )
    }
}

Person.propTypes = {
    deletePerson: PropTypes.func.isRequired,
    onValueChange: PropTypes.func.isRequired,
    person: PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.string
    })
}

export default Person;