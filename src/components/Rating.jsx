import PropTypes from 'prop-types';
import React from 'react';

class Rating extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      rating: '',
      comment: '',
    };
  }

handleClick = () => {
  const { email, rating, comment } = this.state;
  const { addReview } = this.props;
  addReview({ email, rating, comment });
  this.setState({
    email: '',
    rating: '',
    comment: '',
  });
}

  handleChange = ({ target }) => {
    const valor = (target.name === 'rating') ? target.id : target.value;
    const { name } = target;

    this.setState({
      [name]: valor,
    });
  }

  render() {
    const { email, comment } = this.state;

    return (
      <section>
        <form>
          <label htmlFor="emailField">
            Email:
            <input
              name="email"
              data-testid="product-detail-email"
              type="email"
              value={ email }
              onChange={ this.handleChange }

            />
          </label>

          <label htmlFor="1-rating">
            <span> 1 </span>
            <input
              id="1"
              name="rating"
              data-testid="1-rating"
              type="radio"
              onChange={ this.handleChange }

            />
          </label>

          <label htmlFor="2-rating">
            <span> 2 </span>
            <input
              name="rating"
              id="2"
              data-testid="2-rating"
              type="radio"
              value="2"
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="3-rating">
            <span> 3 </span>
            <input
              onChange={ this.handleChange }
              name="rating"
              id="3"
              data-testid="3-rating"
              type="radio"
              value="3"
            />

          </label>

          <label htmlFor="4-rating">
            <span> 4 </span>
            <input
              onChange={ this.handleChange }
              id="4"
              name="rating"
              data-testid="4-rating"
              type="radio"
              value="4"
            />
          </label>

          <label htmlFor="5-rating">
            <span> 5 </span>
            <input
              onChange={ this.handleChange }
              name="rating"
              id="5"
              data-testid="5-rating"
              type="radio"
              value="5"
            />
          </label>

          <label htmlFor="commentField">
            <textarea
              name="comment"
              value={ comment }
              data-testid="product-detail-evaluation"
              placeholder="Deixe o seu comentário"
              rows="5"
              cols="33"
              onChange={ this.handleChange }
            />
          </label>

          <button
            onClick={ this.handleClick }
            type="button"
            data-testid="submit-review-btn"
          >
            {' '}
            Enviar
            {' '}

          </button>

        </form>

      </section>
    );
  }
}

Rating.propTypes = {
  addReview: PropTypes.func.isRequired,
};

export default Rating;
