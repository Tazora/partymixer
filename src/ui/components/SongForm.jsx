import React from 'react';

export default class Songform extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.props.handleInputChange(e);
    }

    handleSubmit(e) {
        this.props.handleSubmit(e);
    }

    render() {
        return (
            <div className="field is-grouped-centered">
                <label className="label">Songwunsch:</label>
                <div className="control">
                    <input className="input" name="artist" type="text" value={this.props.artist} onChange={this.handleChange} placeholder="Shakira" />
                </div>
                <div className="control">
                    <input className="input" name="title" type="text" value={this.props.title} onChange={this.handleChange} placeholder="Hips don't lie" />
                </div>
                <input className="button" type="submit" value="Wunsch abschicken" onClick={this.handleSubmit} />
            </div>
        )
    }
}