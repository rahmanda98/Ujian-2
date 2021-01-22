import React, { Component } from 'react';
//import radiobuttons from './Radiobutton';


class Radiobutton extends Component {

   constructor(){
       super();
       this.state = {
           name: "React"
       };
       this.onValueChange = this.onValueChange.bind(this);
       this.formSubmit = this.formSubmit.bind(this);
   }

   onValueChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
   }

   formSubmit(event){
       event.preventDefault();
       console.log(this.state.selectedOption)
   }

    render() {
        return(
           <form onSubmit={this.formSubmit}>
               <h1>Siapa Penemu Baling Baling Bambu?</h1>
               <div className="radio">
                    <label>
                    <input type="radio" value="doraemeon"  checked={this.state.selectedOption === "doraemon"}
                         onChange={this.onValueChange}>Doraemon</input>
                    </label>
               </div>
               <div className="radio">
                   <label>
                   <input type="radio" value="nobita"  checked={this.state.selectedOption === "nobita"}
                         onChange={this.onValueChange}>Nobita</input>
                   </label>
               </div>
               <div className="radio">
                    <label>
                    <input type="radio" value="Suneo"  checked={this.state.selectedOption === "suneo"}
                         onChange={this.onValueChange}>Suneo</input>
                    </label>
               </div>
               <div className="radio">
               <label>
                    <input type="radio" value="sutarma"  checked={this.state.selectedOption === "sutarma"}
                         onChange={this.onValueChange}>Tatang Sutarma dan Maliki</input>
                    </label>
               </div>
               <div>
                   Yang Terpilih adalah : {this.state.selectedOption}
               </div>
               <button className="btn btn-default" type="submit">
                   Kumpul !!!
               </button>
           </form>
        );
    }
}
export default Radiobutton;