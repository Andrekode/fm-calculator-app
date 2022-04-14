import React from 'react'

export default function InputRange({ className, handleChange, e, value }) {
  return (
    <input
      className={className}
      type="range"
      min="1"
      max="3"
      value={value}
      name="theme"
      onChange={(e) => handleChange(e)}
    />
  )
}
