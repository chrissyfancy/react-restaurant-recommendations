import React from 'react'
import SelectBox from './SelectBox'
import TextArea from './TextArea'

const ReviewForm = props => {
  return(
    <div>
      <form id="restaurant-review-form" onSubmit={props.handleSubmit}>
        <TextArea
          label="Name"
          id="user"
          name="user"
          handleChange={props.handleChange}
          />
        <SelectBox
          label="Rating"
          name="rating"
          handleChange={props.handleChange}
          />
        <TextArea
          label="Review"
          id="review"
          name="review"
          handleChange={props.handleChange}
          />
        <input type="submit" className="button" value="Submit "/>
      </form>
    </div>
  )
}

export default ReviewForm
