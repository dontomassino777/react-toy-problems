import React, {Component} from 'react';

export default class Palindrome extends Component {

    constructor() {
        super();

        this.state = {
            userInput: '',
            palindrome: '',
        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    isPalindrome(userInput) {
        let testStr = userInput
        let revStr = []

        for (let i=0; i<testStr.length; i++) {
            revStr.unshift(testStr[i])
        }

        if (revStr.join('') === testStr) {
            this.setState({ palindrome: 'true'})
        } else {
            this.setState({ palindrome: 'false'})
        }

    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome?</h4>
                <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className='confirmationButton'onClick={ () => this.isPalindrome(this.state.userInput) }>Check</button>
                <span className='resultsBox'>Palindrome: { JSON.stringify(this.state.palindrome)}</span>
            </div>
        )
    }
}