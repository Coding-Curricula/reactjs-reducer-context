import React from 'react'

export default function NamesPresentational({ firstName, lastName }) {
    return (
        <div>
            <h1>Names</h1>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
        </div>
    )
}
