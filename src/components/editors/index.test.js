import React from "react";
import { render } from "@testing-library/react";
import Editors from "./index";

import Product1 from "assets/images/products/product1.jpg";

test("Should have data (editor, role, name and product )", () => {
  const data = [
    {
      id : 1,
      editor : Product1,
      role : 'Brush dan Alat Makeup Yang Paling Sering Digunakan',
      product : [
        {
          image : Product1,
          rating : 4.5,
          name : 'Y.O.U Makeups',
          description : 'Rouge Velvet Matte Lip Cream'
        }
      ]
    },
    {
      id : 1,
      editor : Product1,
      role : 'Brush dan Alat Makeup Yang Paling Sering Digunakan',
      product : [
        {
          image : Product1,
          rating : 4.5,
          name : 'Y.O.U Makeups',
          description : 'Rouge Velvet Matte Lip Cream'
        }
      ]
    }
  ];

  const container = render(
    <Editors data={data}/>
  );

  expect(container.getAllByTestId('editor').toBeInTheDocument)
  expect(container.getAllByTestId('role').toBeInTheDocument)
  expect(container.getAllByTestId('product-image').toBeInTheDocument)
  expect(container.getAllByTestId('product-rating').toBeInTheDocument)
  expect(container.getAllByTestId('product-name').toBeInTheDocument)
  expect(container.getAllByTestId('product-description').toBeInTheDocument)
})