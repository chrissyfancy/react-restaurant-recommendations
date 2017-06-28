import React from 'react'

const TextArea = props => {
  return(
    <div>
      <label>{props.label}:</label>
      <textarea
        type='text'
        name={props.name}
        onChange={props.handleChange}
      />
    </div>
  )
}

export default TextArea
