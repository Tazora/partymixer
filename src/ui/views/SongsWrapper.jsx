import React from 'react';
import 'bulma/css/bulma.css';

import SongForm from '../components/SongForm.jsx';
import SongList from '../components/SongList.jsx';

export default class SongsWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wishes: [
                { artist: "Shakira", title: "Hips don't lie", votes: { up: 0, down: 0, votedUp: false, votedDown: false } },
                { artist: "Ärzte", title: "Unrockbar", votes: { up: 0, down: 0, votedUp: false, votedDown: false } },
            ],
            form: {
                artist: "",
                title: "",
            },
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleVote = this.handleVote.bind(this);
    }

    componentDidMount() {
        const cachedWishes = localStorage.getItem('wishes');
        if (cachedWishes) {
            const newWishes = JSON.parse(cachedWishes);
            const wishes = this.state.wishes;
            newWishes.map((wish, index) => {
                if (wishes[index]) {
                    wishes[index].votes.votedUp = wish.votes.votedUp;
                    wishes[index].votes.votedDown = wish.votes.votedDown;
                }
                return null;
            });
            this.setState(
                {
                    wishes: wishes,
                }
            )
            return;
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const form = this.state.form;
        form[name] = value;

        this.setState(
            {
                form: form,
            }
        );
    }

    handleSubmit(event) {
        this.setState((prevState) => ({
            wishes: prevState.wishes.concat({ artist: this.state.form.artist, title: this.state.form.title, votes: { up: 0, down: 0, votedUp: false, votedDown: false } }),
        })
        );
        this.setState({
            form: {
                artist: "",
                title: "",
            }
        });
    }

    handleVote(event, index) {
        const target = event.target;
        const name = target.name;
        const wishes = this.state.wishes;

        if (name === 'up') {
            if (wishes[index].votes.votedUp === false) {
                wishes[index].votes.votedUp = true;
                wishes[index].votes.up += 1;
                if (wishes[index].votes.votedDown === true) {
                    wishes[index].votes.votedDown = false;
                    wishes[index].votes.down -= 1;
                }
            }
            else if (wishes[index].votes.votedUp === true) {
                wishes[index].votes.votedUp = false;
                wishes[index].votes.up -= 1;
            }
        }
        else if (name === 'down') {
            if (wishes[index].votes.votedDown === false) {
                wishes[index].votes.votedDown = true;
                wishes[index].votes.down += 1;
                if (wishes[index].votes.votedUp === true) {
                    wishes[index].votes.votedUp = false;
                    wishes[index].votes.up -= 1;
                }
            }
            else if (wishes[index].votes.votedDown === true) {
                wishes[index].votes.votedDown = false;
                wishes[index].votes.down -= 1;
            }
        }

        this.setState({
            wishes: wishes,
        })

        localStorage.setItem('wishes', JSON.stringify(wishes));
    }

    render() {
        return (
            <div>
                <SongForm artist={this.state.form.artist} title={this.state.form.title} handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} />
                <SongList wishes={this.state.wishes} handleVote={this.handleVote} />
            </div>
        )
    }
}