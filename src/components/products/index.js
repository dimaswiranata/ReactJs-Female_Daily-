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
      <div className="pt-5 pb-3 px-3 rounded-xl bg-white min-h-custom">
        <img
          className="h-32"
          src={data.image}
        />
        <div className="flex flex-row items-center mt-2">
          <div className="font-bold font-size-inherit mr-1">{data.rating}</div>
          <StyledRating
            name="customized-color"
            defaultValue={data.rating}
            precision={0.1}
            icon={<StarIcon style={{ fontSize: 17 }} />}
            readOnly 
          />
        </div>
        <div className="font-bold text-black">{data.name}</div>
        <div className="w-32">{data.description}</div>
      </div>
    </div>
  )
}

export default Products
