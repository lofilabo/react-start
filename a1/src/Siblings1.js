
import React from 'react';
import Component from 'react';

class Sibling1 extends Component {
    render() {
        return (
            <div>
                <div>I am Sibling 1</div>
                <input type="text" 
                 placeholder="Write text" onChange={(e) => updateText(e.target.value)} />
            </div>
        )
    }
}

function updateText(text) {
    this.setState({text})
}

class Sibling2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "Initial State"
        }
        updateText = updateText.bind(this)
    }
    render() {
        return (
            <div>
                <div>I am Sibling 2</div>
                <div>{this.state.text}</div>
            </div>
        )
    }
}

class Example3 extends Component {
    render() {
        return (
            <div>
                <Sibling1 />
                <Sibling2 />
            </div>
        )
    }
}


export default Example3;