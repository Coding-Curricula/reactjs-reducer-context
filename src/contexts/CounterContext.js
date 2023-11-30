import React, { createContext, useReducer } from 'react'

export const CounterContext = createContext();

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

export function CounterProvider({ children }) {
    // useReducer Hook
    const [state, dispatch] =
        useReducer(counterReducer,
            { count: 1000, firstName: 'John', lastName: 'Doe' });

    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    )
}
