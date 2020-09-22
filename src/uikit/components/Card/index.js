import React from 'react';
import PropTypes from 'prop-types';
import Card__Menu from './menus';

const Card = ({ 
  children,
  rounded
}) => {

  let isRounded = rounded ? 'rounded-lg' : 'rounded-none'
  const styles = `
    w-full sm:w-full md:w-full lg:w-1/3 
    shadow-md bg-white 
    m-3 p-3
    flex flex-col
    ${isRounded}
  `

  return (
    <div className={styles}>
      { children }
    </div>
  )
}

Card.propTypes = {
  rounded: PropTypes.bool
};

Card.defaultProps = {
  children: <p>Test</p>
}

export default Card;
export {
  Card__Menu
};