import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getItemFromId } from '../services/api';
import Rating from '../components/Rating';

export default class ProductPage extends Component {
  constructor() {
    super();

    this.state = {
      product: undefined,
      loading: true,
      reviews: [],
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const getReviews = JSON.parse(localStorage.getItem('reviews'));
    getItemFromId(id)
      .then((data) => this.setState({ product: data,
        loading: false,
        reviews: getReviews || [] }));
  }

  addReview = (review) => {
    const { reviews } = this.state;

    this.setState({ reviews: [...reviews, review] }, () => {
      const { reviews: reviewAtt } = this.state;
      localStorage.setItem('reviews', JSON.stringify(reviewAtt));
    });
  }

  render() {
    const { reviews, product, loading } = this.state;
    return (
      <>
        <div>
          {!loading
        && <h2 data-testid="product-detail-name">{product.title}</h2>}

        </div>
        <Rating addReview={ this.addReview } />
        { reviews.map((review, index) => (
          <div key={ index }>
            <p>
              {' '}
              {review.email}
              {' '}
            </p>
            <p>
              {' '}
              {review.rating}
              {' '}
            </p>
            <p>
              {' '}
              {review.comment}
              {' '}
            </p>
          </div>))}
      </>
    );
  }
}

ProductPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;
