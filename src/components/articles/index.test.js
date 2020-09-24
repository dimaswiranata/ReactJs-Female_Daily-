import React from "react";
import { render } from "@testing-library/react";
import Articles from "./index";

import Product1 from "assets/images/products/product1.jpg";

test("Should have data (image, title, author and published_at )", () => {
  const data = [
    {
      id : 1,
      image : Product1,
      title : 'Brush dan Alat Makeup Yang Paling Sering Digunakan',
      author : 'celle',
      published_at : '4 hours Ago'
    },
    {
      id : 2,
      image : Product1,
      title : 'Brush dan Alat Makeup Yang Paling Sering Digunakan',
      author : 'celle',
      published_at : '4 hours Ago'
    }
]

  const container = render(
    <Articles data={data}/>
  );

  expect(container.getAllByTestId('published_at').toBeInTheDocument)
  expect(container.getAllByTestId('author').toBeInTheDocument)
  expect(container.getAllByTestId('title').toBeInTheDocument)
  expect(container.getAllByTestId('image').toBeInTheDocument)
})