import React from 'react'

import Products from "../products";

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

import Product1 from "assets/images/products/product1.jpg";
import Product2 from "assets/images/products/product2.jpg";
import Product3 from "assets/images/products/product3.jpg";
import Product4 from "assets/images/products/product4.jpg";
import Product5 from "assets/images/products/product5.jpg";

function Trending() {

  const trendings = [
    {
      id: 1,
      image: Product1,
      rating : 4,
      name : 'SKINCEUTICALS',
      description : 'C. E. Perulic',
    },
    {
      id: 2,
      image: Product2,
      rating : 4,
      name : 'JUICE BEAUTY',
      description : 'Phyto-Pigments Flawless Serum',
    },
    {
      id: 3,
      image: Product3,
      rating : 4,
      name : 'JUICE BEAUTY',
      description : 'Pure Pressed Blush',
    },
    {
      id: 4,
      image: Product4,
      rating : 4,
      name : 'VAL BY VALERIE THOMAS',
      description : 'C. E. Perulic',
    },
    {
      id: 5,
      image: Product5,
      rating : 4,
      name : 'SKINCEUTICALS',
      description : 'Phyto-Pigments Flawless Serum',
    },
  ]

  return (
    <div className="px-40 py-3">
      <div className="text-xl font-extrabold">Trending This Week</div>
      <div className="flex flex-row justify-between mb-4">
        <div className="text-gray-600">
          See our weekly most reviewed products
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="mr-2 text-red-400 font-semibold">
            See more
          </div>
          <ArrowForwardIosIcon style={{ fontSize: 15, marginTop: 2, color: '#fc8181' }}/>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {
          trendings.map((item, index) => {
            return(
              <Products key={`products-${index}`} data={item}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Trending
