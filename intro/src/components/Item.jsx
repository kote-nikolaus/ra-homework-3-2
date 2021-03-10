import './listing.css';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Listing from './Listing';

export default function Item(props) {

  let {url, img, title, currency, price, quantity} = props;

  if (title.length > 50) {
    title = title.substring(0, 50) + '...';
  }

  let currencySign;

  if (currency === 'USD') {
    currencySign = '$';
    currency = null;
  }

  if (currency === 'EUR') {
    currencySign = '€';
    currency = null;
  }

  const quantityClasses = classNames('item-quantity', {
    'level-low': quantity <= 10,
    'level-medium': quantity <= 20,
    'level-high': quantity > 20,
  });

  return(
    <div className='item'>
      <div className='item-image'>
        <a href={url}>
          <img src={img}></img>
        </a>
      </div>
      <div class="item-details">
        <p className="item-title">{title}</p>
        <p className="item-price">{currencySign}{price} {currency}</p>
        <p className={quantityClasses}>{quantity} left</p>
      </div>
    </div>
  )
}

Item.propTypes = {
  id: PropTypes.number,
  url: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  currency: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number,
}
