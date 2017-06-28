import React from 'react'

const SelectBox = props => {
  let options = ["", "1", "2", "3", "4", "5"].map(option => {
    return(
      <option key={option} value={option}>{option}</option>
    )
  })
  return(
    <div>
      <label>{props.label}:</label>
      <select name={props.name} onChange={props.handleChange}>
        {options}
      </select>
    </div>
  )
}

export default SelectBox
