import React, { Component } from 'react';

class Essay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'Tulis pengalaman anda saat Tidur.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value});
    }

    handleSubmit(event) {
        alert('Esaay telah disbumit' + event.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Pengalaman Saat Tidur</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Pengalaman :
                    <textarea value={this.state.value} onChange={this.handleChange}></textarea>
                    </label>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}
export default Essay;