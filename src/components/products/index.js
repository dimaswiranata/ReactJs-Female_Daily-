import React from 'react'

import StarIcon from '@material-ui/icons/Star';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';

const StyledRating = withStyles({
  iconFilled: {
    color: '#DB284E',
  },
  iconHover: {
    color: '#DB284E',
  },
})(Rating);

function Products({ data }) {
  return (
    <div>
      <div className="pt-4 pb-3 px-3 rounded-xl bg-white max-h-custom min-h-custom">
        <img
          data-testid="image"
          className="h-32"
          src={data.image}
          alt={`products item`}
        />
        {data.match && <div className="text-xs text-red-500 font-bold mt-2">Match Skin Type</div>}
        <div className="flex flex-row items-center mt-2">
          <div data-testid="rating" className="font-bold font-size-inherit mr-1">{data.rating}</div>
          <StyledRating
            name="customized-color"
            defaultValue={data.rating}
            precision={0.1}
            icon={<StarIcon style={{ fontSize: 17 }} />}
            readOnly 
          />
          <div className="font-semibold text-sm mr-1">(7)</div>
        </div>
        <div data-testid="name" className="font-bold text-black">{data.name}</div>
        <div data-testid="decription" className="w-32">{data.description}</div>
      </div>
    </div>
  )
}

export default Products
