import React from 'react'

export default function CalcInputDisplay({ className, value }) {
  const { number, operator, result } = value

  return <h2 className={className}>{number}</h2>
}
