import React from 'react';

import Song from './Song.jsx';

export default class SongList extends React.Component {
    constructor(props) {
        super(props);

        this.handleVote = this.handleVote.bind(this);
    }

handleVote(e, index) {
        this.props.handleVote(e, index);
    }


render() {
    return(
        <div>
        {this.props.wishes.map((wish, index) => {
            return (
                <Song wish={wish} key={index} index={index} handleVote={this.handleVote} />
            );
            })}
        </div>
    )
}
}