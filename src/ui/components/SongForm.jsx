import React from 'react';

export default class Songform extends React.Component {
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
            <div className="field is-grouped is-grouped-centered">
                <label className="label">Song:</label>
                <div className="control">
                    <input className="input" name="artist" type="text" value={this.state.artist} onChange={this.handleInputChange} placeholder="Shakira" />
                </div>
                <div className="control">
                    <input className="input" name="title" type="text" value={this.state.title} onChange={this.handleInputChange} placeholder="Hips don't lie" />
                </div>
                <input className="button" type="submit" value="Submit input" onClick={this.handleSubmit} />
            </div>
        )
    }
}