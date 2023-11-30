import React, { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext';

import NamesPresentational from './NamesPresentational';

export default function Names() {
    const { state } = useContext(CounterContext);
    console.log(state);
    const { firstName, lastName } = state;
    return (
        <div>
            <NamesPresentational firstName={firstName} lastName={lastName} />
        </div>
    )
}
