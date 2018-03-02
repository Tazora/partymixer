import React from 'react';

function handleVote() {
    console.log("Submit")
}

const Song = (props) => (
    <li key={props.key}>
        {props.wish.artist} - {props.wish.title} - Upvotes: {props.wish.votes.up} {props.wish.votes.up}
        <a className="button is-active" onClick={this.handleVote}><i className="far fa-thumbs-down"></i></a>
        <a className="button is-active" onClick={this.handleVote}><i className="far fa-thumbs-up"></i></a>
    </li>
)

export default Song;