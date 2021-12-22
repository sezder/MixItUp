import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
class EditableStarRating extends React.Component {
  constructor() {
    super();
 
    this.state = {
      rating: 0
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
 
  render() {
    const { rating } = this.state;
    
    return (                
      <div>
        <h2>Rating from state: {rating}</h2>
        <StarRatingComponent 
          name="rate" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
          starColor='#465d57'
          emptyStarColor='#d1c1ae'
          // editing={True}
        />
      </div>
    );
  }
}

export default EditableStarRating;
