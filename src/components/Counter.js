import React, { useReducer } from 'react';

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'decrement':
            return { ...state, count: state.count - 1 };
        case 'divideByTwo':
            return { ...state, count: state.count / 2 };
        case 'multiplyByThree':
            return { ...state, count: state.count * 3 };
        default:
            throw new Error();
    }
}

export default function Counter() {
    // useReducer Hook
    const [state, dispatch] = useReducer(counterReducer, { count: 0, firstName: 'John', lastName: 'Doe' });

    return (
        <div>
            <h1>Counter</h1>
            <p>{state.count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            <button onClick={() => dispatch({ type: "divideByTwo" })}>/2</button>
            <button onClick={() => dispatch({ type: "multiplyByThree" })}>*3</button>
        </div>
    )
}
