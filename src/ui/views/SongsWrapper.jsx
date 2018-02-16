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
        };
    }

    render() {
        return (
            <div>
                <SongForm />
                <SongList wishes={this.state.wishes} />
            </div>
        )
    }
}