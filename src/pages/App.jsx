import React from 'react';
import Person from '../components/Person';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                { name: 'Asd' },
                { name: 'Asd' },
                { name: 'Asd' }
            ]
        }

        this.swtichName = this.swtichName.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
    }

    swtichName(newName, index) {
        const newPersons = [...this.state.persons];
        newPersons[index].name = newName;
        this.setState({
            persons: newPersons
        });
    }

    onNameChange(event, index) {
        const newPersons = [...this.state.persons];
        newPersons[index].name = event.target.value;
        this.setState({
            persons: newPersons
        });
    }

    render() {
        return (
            <main>
                <div>React</div>
                {
                    this.state.persons.map((person, index) => <Person click={this.swtichName} person={person} id={index} key={index} onValueChange={this.onNameChange} />)
                }
            </main>
        )
    }
}

export default App;