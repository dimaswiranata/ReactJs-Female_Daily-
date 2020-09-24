import React from 'react'

import Products from "../products";

import MatchesPhoto from "assets/images/matches_image.png";

import Product1 from "assets/images/products/product1.jpg";
import Product2 from "assets/images/products/product2.jpg";
import Product3 from "assets/images/products/product3.jpg";

function Matches() {

  const products_matches = [
    {
      id: 1,
      image: Product1,
      rating : 4.5,
      name : 'SKINCEUTICALS',
      description : 'C. E. Perulic',
    },
    {
      id: 2,
      image: Product2,
      rating : 4.5,
      name : 'JUICE BEAUTY',
      description : 'Phyto-Pigments Flawless Serum',
    },
    {
      id: 3,
      image: Product3,
      rating : 4.5,
      name : 'JUICE BEAUTY',
      description : 'Pure Pressed Blush',
    },
  ]

  return (
    <div className="bg-red-300 flex flex-row">
      <div className=" flex flex-col-reverse mr-4 mt-3">
        <img
          className="h-80"
          src={MatchesPhoto}
          alt="matches photo"
        />
      </div>
      <div className="w-64 flex flex-col mt-5">
        <div className="text-xl font-extrabold">Looking for products that are just simply perfect for you?</div>
        <div className="font-semibold">Here are some products that we believe match your skin, hair and body! Have we mentioned that they solve your concerns too?</div>
        <div className="flex flex-row-reverse mt-4">
          <div className="py-2 px-3 text-base bg-red-600 rounded-lg text-white">
            See My Matches
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 my-3 ml-10">
        {
          products_matches.map((item, index) => {
            return(
              <Products key={`products-${index}`} data={item}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Matches
