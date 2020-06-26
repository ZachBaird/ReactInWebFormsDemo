import React, { Component } from 'react';
import Counter from './Counter';
import SayHi from './SayHi';

export class Main extends Component {
    render() {
        return (
            <div>
                <p className="hello-text">Hello from React!</p>
                <Counter initialCount="0" />
                <SayHi />
            </div>
        )
    }
}

export default Main