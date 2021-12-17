import React, {Component} from 'react';

export default class FilterObject extends Component {
    
    constructor() {
        super();

        this.state = {
            unFilteredArray: [
                {
                    artist: "Radiohead",
                    album: "OK Computer",
                    year: 1997
                },
                {
                    artist: "Radiohead",
                    album: "The Bends",
                    year: 1995
                },
                {
                    artist: "Radiohead",
                    album: "A Moon Shaped Pool",
                    year: 2016
                }
            ],

            userInput: "",
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    filterObject(prop) {
        let discography = this.state.unFilteredArray;
        let filteredDiscography = [];

        for (let i = 0; i < discography.length; i++) {
            if (discography[i].hasOwnProperty(prop)) {
                filteredDiscography.push(discography[i]);
            }
        }

        this.setState({ filteredArray: filteredDiscography});
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"> Unfiltered: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => { this.filterObject(this.state.userInput) }}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    }
}