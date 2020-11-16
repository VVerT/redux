import React from 'react';

function Counter(props) {
    console.log(props);
    return (
        <div className="App">
            <h1>{props.count}</h1>
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.decrement}>Decrement</button>
            <button onClick={props.reset}>RESET</button>
            <button onClick={() => props.send(props.count)}>Saved</button>
            <h1>{props.saved}</h1>
        </div>
    );
}

export default Counter;