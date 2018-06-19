import React from 'react';
import Person from '../components/Person';
import '../../assets/scss/main.scss';
import 'font-awesome-sass-loader';
import PersonList from '../components/PersonList';
import ListToggle from '../components/ListToggle';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                {
                    "id": "5b1f9fa98c0084b3d0a0630c",
                    "index": 0,
                    "guid": "0553ef09-6247-4239-8f30-b5c2465f563a",
                    "isActive": true,
                    "balance": "$1,899.76",
                    "picture": "http://www.clker.com/cliparts/B/R/Y/m/P/e/blank-profile-md.png",
                    "age": 38,
                    "eyeColor": "green",
                    "name": "Faith Moreno",
                    "gender": "female",
                    "company": "MANUFACT",
                    "email": "faithmoreno@manufact.com",
                    "phone": "+1 (825) 418-3794",
                    "address": "101 Opal Court, Ladera, Washington, 4234",
                    "about": "Velit velit do occaecat excepteur sint ea enim aliquip. Nisi excepteur deserunt sit sunt magna in laboris elit. Nisi sint ut deserunt dolore sint deserunt aliqua.\r\n",
                    "registered": "2016-04-06T09:37:15 -02:00",
                    "latitude": -13.437588,
                    "longitude": -80.874163,
                    "tags": [
                        "qui",
                        "irure",
                        "id",
                        "laborum",
                        "deserunt",
                        "magna",
                        "exercitation"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Cooper Zamora"
                        },
                        {
                            "id": 1,
                            "name": "Lester Witt"
                        },
                        {
                            "id": 2,
                            "name": "Lupe Vaughan"
                        }
                    ],
                    "greeting": "Hello, Faith Moreno! You have 8 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "id": "5b1f9fa90e108b8265a55d80",
                    "index": 1,
                    "guid": "a53b5829-895c-45cf-956f-63cf951aaa53",
                    "isActive": true,
                    "balance": "$1,216.01",
                    "picture": "http://www.clker.com/cliparts/B/R/Y/m/P/e/blank-profile-md.png",
                    "age": 20,
                    "eyeColor": "brown",
                    "name": "Benjamin Mcneil",
                    "gender": "male",
                    "company": "TSUNAMIA",
                    "email": "benjaminmcneil@tsunamia.com",
                    "phone": "+1 (877) 539-2153",
                    "address": "343 Essex Street, Campo, Minnesota, 1903",
                    "about": "Nostrud nostrud anim aliqua laborum fugiat et dolore cillum id esse eiusmod. Incididunt consectetur minim do adipisicing do voluptate irure aliquip fugiat. Fugiat reprehenderit consectetur pariatur culpa aliqua magna fugiat consectetur commodo voluptate aute velit ad irure. Lorem voluptate nostrud ipsum esse minim ex enim non commodo est. Exercitation nostrud sint pariatur ex irure magna enim velit laborum.\r\n",
                    "registered": "2015-10-02T02:46:08 -02:00",
                    "latitude": -61.051963,
                    "longitude": 168.507665,
                    "tags": [
                        "commodo",
                        "adipisicing",
                        "ipsum",
                        "cillum",
                        "consectetur",
                        "ea",
                        "elit"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Marietta Leblanc"
                        },
                        {
                            "id": 1,
                            "name": "Thornton Serrano"
                        },
                        {
                            "id": 2,
                            "name": "Gabrielle Everett"
                        }
                    ],
                    "greeting": "Hello, Benjamin Mcneil! You have 5 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "id": "5b1f9fa9cc45ff22dbdb9610",
                    "index": 2,
                    "guid": "f63a32bb-59db-4a89-9210-638ef9cbd06b",
                    "isActive": true,
                    "balance": "$3,016.95",
                    "picture": "http://www.clker.com/cliparts/B/R/Y/m/P/e/blank-profile-md.png",
                    "age": 21,
                    "eyeColor": "blue",
                    "name": "Erin Bell",
                    "gender": "female",
                    "company": "PHUEL",
                    "email": "erinbell@phuel.com",
                    "phone": "+1 (879) 596-3728",
                    "address": "803 Hope Street, Worton, Tennessee, 8921",
                    "about": "Occaecat enim commodo do veniam aliquip in ex culpa eu irure eiusmod anim. Qui ipsum laborum dolor qui anim. Nostrud sunt veniam enim esse sunt cupidatat magna ullamco Lorem minim cupidatat. Cupidatat ut sint nisi velit exercitation.\r\n",
                    "registered": "2017-12-30T07:21:25 -01:00",
                    "latitude": 60.075214,
                    "longitude": -172.337062,
                    "tags": [
                        "officia",
                        "minim",
                        "eu",
                        "aliqua",
                        "labore",
                        "minim",
                        "tempor"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Eve Rosa"
                        },
                        {
                            "id": 1,
                            "name": "Susanna Howard"
                        },
                        {
                            "id": 2,
                            "name": "Jillian Avery"
                        }
                    ],
                    "greeting": "Hello, Erin Bell! You have 10 unread messages.",
                    "favoriteFruit": "apple"
                }
            ],
            isListVisible: true
        }

        this.onNameChange = this.onNameChange.bind(this);
        this.deletePerson = this.deletePerson.bind(this);
        this.onListCollapseCallback = this.onListCollapseCallback.bind(this);
    }

    onNameChange(event, id) {
        const newPersons = [...this.state.persons];
        const modifiedPersonIndex = newPersons.findIndex(p => p.id === id);
        newPersons[modifiedPersonIndex].name = event.target.value;
        this.setState({
            persons: newPersons
        });
    }

    deletePerson(id) {
        const persons = [...this.state.persons];
        this.setState({ persons: persons.filter(person => person.id !== id) });
    }

    onListCollapseCallback() {
        this.setState({ isListVisible: !this.state.isListVisible })
    }

    render() {
        return (
            <div>
                <ListToggle title={'Persons'} onListCollapse={this.onListCollapseCallback} />
                {this.state.isListVisible ?
                
                    <PersonList persons={this.state.persons} onNameChange={this.onNameChange} deletePerson={this.deletePerson} />
                    :
                    null
                }
            </div>
        )
    }
}

export default App;