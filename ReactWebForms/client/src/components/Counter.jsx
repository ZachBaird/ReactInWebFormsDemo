import React, { useState } from 'react';

const Counter = props => {
    let [count, setCount] = useState(0);
    return (
        <div>
            <p> {count} </p>
            <button onClick={e => {
                e.preventDefault();
                setCount(count += 1)
            }
            }>
                Do something
            </button>
        </div>
    );
}

export default Counter;