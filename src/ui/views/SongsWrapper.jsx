import React from 'react';

import SongForm from './components/SongForm.jsx';
import SongList from './components/SongList.jsx';

export default class SongsWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
            [name]: value
        });
    }

    handleSubmit(event) {
        alert('A artist was submitted: ' + this.state.artist);
        event.preventDefault();
    }

    render() {
        return (
            <div>
            <SongForm />
            <SongList />
            </div>
        )
    }
}