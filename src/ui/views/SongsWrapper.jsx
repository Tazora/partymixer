import React from 'react';

import SongForm from '../components/SongForm.jsx';
import SongList from '../components/SongList.jsx';

export default class SongsWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wishes: [
                { artist: "Shakira", title: "Hips don't lie" },
                { artist: "Ärzte", title: "Unrockbar" },
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