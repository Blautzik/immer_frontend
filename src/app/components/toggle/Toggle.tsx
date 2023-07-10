import React from 'react'
import "./style.css";

const toggle = () => {
  return (
    <div>
      <label className="switch">
        <input
          type="checkbox"
          className=""
        />
        <span className="slider"></span>
      </label>
    </div>
  )
}

export default toggle