import React, { useState } from 'react';

const SayHi = () => {
    let [canSee, toggleVisible] = useState(false);

    if (canSee) {
        return (
        <div>
            <button onClick={e => {
                e.preventDefault();
                toggleVisible(canSee = !canSee)
            }
                }>Click me you loony!</button>
            <p>Hi!</p>
        </div>
        );
    } else {
        return (
            <div>
               <button onClick={e => {
                    e.preventDefault();
                    toggleVisible(canSee = !canSee)
                }
                    }>Click me!</button>
            </div>
        );
    }
   
}

export default SayHi;