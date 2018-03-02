import React from 'react';

import SongForm from '../components/SongForm.jsx';
import SongList from '../components/SongList.jsx';

export default class SongsWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wishes: [
                { artist: "Shakira", title: "Hips don't lie", votes: {up: 0, down: 0} },
                { artist: "Ärzte", title: "Unrockbar", votes: {up: 0, down: 0} },
            ],
            artist: "",
            title: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
                [name]: value,
        });
    }

    handleSubmit(event) {
        alert('A artist was submitted: ' + this.state.artist);
        event.preventDefault();
        this.setState((prevState) => {
            console.log(prevState);
            this.setState({
                wishes: [
                    prevState.wishes,
                    { artist: this.state.artist, title: this.state.title, votes: {up: 0, down: 0} },
                ],
            }
        )});
        this.setState({
            form: {
                artist: "",
                title: "",
            }
        });
    }

    render() {
        return (
            <div>
                <SongForm artist={this.state.artist} title={this.state.title} handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit}/>
                <SongList wishes={this.state.wishes} />
            </div>
        )
    }
}