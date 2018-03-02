import React from 'react';

export default class Song extends React.Component {
    constructor(props) {
        super(props);

        this.handleVote = this.handleVote.bind(this);
    }

    handleVote(e) {
        this.props.handleVote(e, this.props.index);
    }

    render() {
        return (
            <li>
                {this.props.wish.artist} - {this.props.wish.title} -

                    {this.props.wish.votes.votedUp ?
                    <button className="button is-primary" onClick={this.handleVote} type="submit" value="up" name="up">Up</button> :
                    <button className="button" onClick={this.handleVote} type="submit" value="up" name="up">Up</button>}
                - {this.props.wish.votes.up}
                {this.props.wish.votes.votedDown ?
                    <button className="button is-primary" onClick={this.handleVote} type="submit" value="down" name="down">Down</button> :
                    <button className="button" onClick={this.handleVote} type="submit" value="down" name="down">Down</button>}
                - {this.props.wish.votes.down}
            </li>
        )
    }
}