import './listing.css';
import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

export default function Listing(props) {
  return (
    <div className='item-list'>
      {props.data.map(o => <Item id={o.listing_id} key={o.listing_id} url={o.url} img={o.MainImage.url_570xN} title={o.title} currency={o.currency_code} price={o.price} quantity={o.quantity}/>)}
    </div>
  )
}
