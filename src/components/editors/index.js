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

function editors({ data }) {
  return (
    <div className="px-40 py-6">
      <div className="text-xl font-extrabold">Editor's Choice</div>
      <div className="flex flex-row justify-between mb-4">
        <div className="text-gray-600">
          Curated with love
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {
          data.map((item, index) => {
            return(
              <div
                key={`editors-${index}`}
              >
                <div className="flex flex-row justify-center">
                  <div className="flex mr-2 h-16 w-16 rounded-full bg-gray-500 items-center justify-center">
                    <img
                      src={`https://static.femaledaily.com/dyn/70/images/user-pics/8cfa98979828b03949df998669bcca01.jpg`}
                      className="h-16 w-16 rounded-full"
                      alt={`editor-${index}`}
                    />
                  </div>
                  <div className="">
                    <div data-testid="editor" className="text-sm font-bold">{item.editor}</div>
                    <div data-testid="role" className="text-xs text-gray-600">{item.role}</div>
                  </div>
                </div>

                <div className="pt-12 pb-3 px-3 rounded-xl border border-gray-400 mt-17-">
                  <img
                    data-testid="product-image"
                    className="h-48"
                    src={item.product.image}
                    alt={`products-${index}`}
                  />
                  <div className="flex flex-row items-center mt-2">
                    <div data-testid="product-rating" className="font-bold font-size-inherit mr-1">{item.product.rating}</div>
                    <StyledRating
                      name="customized-color"
                      defaultValue={item.product.rating}
                      precision={0.1}
                      icon={<StarIcon style={{ fontSize: 17 }} />}
                      readOnly 
                    />
                    <div className="font-semibold text-sm mr-1">(7)</div>
                  </div>
                  <div data-testid="product-name" className="font-bold text-black">{item.product.name}</div>
                  <div data-testid="product-description" className="w-32">{item.product.description}</div>
                </div>

              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default editors
