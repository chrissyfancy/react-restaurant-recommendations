import React, { Component } from 'react'

import Restaurant from '../components/Restaurant'
import Reviews from '../components/Reviews'
import ReviewForm from '../components/ReviewForm'

import restaurants from '../constants/restaurants'
import reviews from '../constants/reviews'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants,
      reviews,
      selectedId: restaurants[0].id
    }
    this.restaurantClick = this.restaurantClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  restaurantClick(event) {
    event.preventDefault()
    this.setState({selectedId: event.target.id})
  }

  selectedRestaurant() {
    return this.state.restaurants.find((restaurant) =>
      (restaurant.id === this.state.selectedId)
    )
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    let restaurant_id = this.state.selectedId;
    let name = this.state.user;
    let rating = (parseInt(this.state.rating, 10) * 20);
    let content = this.state.review;
    let newReview = this.state.reviews.concat({restaurant_id: restaurant_id, name: name, rating: rating, content: content})
    this.setState({ reviews: newReview })
  }

  render() {
    let restaurantComponents = this.state.restaurants.map((restaurant) => {
      return (
        <Restaurant key={restaurant.id}
          data={restaurant}
          isSelected={this.state.selectedId === restaurant.id}
          handleClick={this.restaurantClick}/>
      )
    })

    let relevantReviews = this.state.reviews.filter((review) =>
      (this.state.selectedId === review.restaurant_id)
    )

    return(
      <div>
        <div className="row">
          <div className="small-3 columns">
            <h1>Restaurant</h1>
            {restaurantComponents}
          </div>
          <div className="small-7 columns">
            <h2>Reviews for {this.selectedRestaurant().name}</h2>
            <Reviews data={relevantReviews} />
            <ReviewForm
              selectedId={this.restaurantClick}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
