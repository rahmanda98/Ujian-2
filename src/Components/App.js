import React, { Component } from 'react';
import CheckBox from './CheckBox'

const OPTIONS = ["Trainer JuaraCoding","Manusia","Dilatih Batman", "Bukan Manusia Biasa"];

class App extends Component{
    state = {
        checkboxes: OPTIONS.reduce(
            (options, option)=>({
                ...option,
                [option]: false
            }),
            {}
        )
    };

    selectAllCheckboxes = isSelected => {
        Object.keys(this.state.checkboxes).forEach(checkbox => {
            this.setState(prevState => ({
                checkboxes: {
                    ...prevState.checkboxes,
                    [checkbox]: isSelected
                }
            }));
        });
    };

    selectAll =() => this.selectAllCheckboxes(true);

    deselectAll = () => this.selectAllCheckboxes(false);

    handleCheckBoxChange = changeEvent => {
        const { name } = changeEvent.target;

        this.setState(prevState =>({
            checkboxes: {
                ...prevState.checkboxes,
                [name]: !prevState.checkboxes[name]
            }
        }));
    };

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        Object.keys(this.state.checkboxes)
        .filter(checkbox => this.state.checkboxes[checkbox])
        .forEach(checkbox => {
            console.log(checkbox, "Is Selected");
        });
    };

    createCheckbox = option => (
      <CheckBox
        label={option}
        isSelected={this.state.checkboxes[option]}
        onCheckboxChange={this.handleCheckBoxChange}
        key={option}
    />
    );

    createCheckBoxes = () => OPTIONS.map(this.createCheckBoxes);

    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-12">
                        <form onSubmit={this.handleFormSubmit}>
                            {this.createCheckBoxes()}

                            <div className="form-group mt-2">
                                <button type="button" 
                                className="btn btn-outline-primary mr-2"
                                onClick={this.selectAll}>Pilih Semua Jawaban</button>
                                <button type="button" 
                                className="btn btn-outline-primary mr-2"
                                onClick={this.deselectAll}>Hapus Jawaban</button>
                                <button type="submit" className="btn btn-primary">
                                    Simpan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;