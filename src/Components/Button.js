import React from 'react'


export default function Button({className, value, key}) {
    return <button  key={key} className={className}>{value}</button>
}