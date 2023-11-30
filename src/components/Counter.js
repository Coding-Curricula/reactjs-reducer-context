import React, { useContext } from 'react';
import { CounterContext } from '../contexts/CounterContext';

import Names from './Names'


export default function Counter() {
    const { state, dispatch } = useContext(CounterContext);

    return (
        <div>
            <h1>Counter</h1>
            <p>{state.count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            <button onClick={() => dispatch({ type: "divideByTwo" })}>/2</button>
            <button onClick={() => dispatch({ type: "multiplyByThree" })}>*3</button>
            <Names />
        </div>
    )
}
