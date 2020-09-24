import React from "react";
import { render } from "@testing-library/react";
import Products from "./index";

import Product1 from "assets/images/products/product1.jpg";

test("Should have data (image, rating, name and description )", () => {
  const data = {
    image : Product1,
    rating : 4.5,
    name : 'SKINCEUTICALS',
    description : 'C. E. Perulic'
  }

  const { getByTestId } = render(
    <Products data={data}/>
  );

  expect(getByTestId('name')).toHaveTextContent('SKINCEUTICALS')
  expect(getByTestId('decription')).toHaveTextContent('C. E. Perulic')
  expect(getByTestId('rating')).toHaveTextContent('4.5')
  expect(getByTestId('image').toBeInTheDocument)
})
