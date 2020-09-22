import React from 'react';
import PropTypes from 'prop-types';
import { Body } from '../Layout/Text';
import idx from 'indonesia-numbering-formatter';

const Menu__Card = ({ 
  children,
  rounded,
  category="Default Category",
  price=0,
  photo='https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  name="Default Name",
  isFav,
  description=""
}) => {

  let isRounded = rounded ? 'rounded-lg' : 'rounded-none'
  const styles = {
    cardContainer: `
      w-full items-center flex h-32 items-center border-2 rounded-lg my-2
    `,
    image: `
      h-full flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden w-1/4
    `,
    menuName: `
      text-gray-900 font-bold text-xl
    `,
    contentContainer: `
      pl-2 flex flex-col justify-center
    `
  }

  return (
    <div className={styles.cardContainer}>
      <img 
        className={styles.image}
        src={photo}
        alt={'photo of ' + name}
      />
      <div className={styles.contentContainer}>
        <div className={styles.menuName}>{name} {isFav && <span>(Favorite)</span>}</div>
        <Body className="leading-none">{idx.formatCurrency(price)}</Body>
        <p className="text-gray-700 text-base">#{category}</p>
      </div>
    </div>
  )
}

Menu__Card.propTypes = {
  rounded: PropTypes.bool
};

Menu__Card.defaultProps = {
  children: <p>Test</p>
}

export default Menu__Card;
