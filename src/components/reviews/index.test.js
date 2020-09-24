import React from "react";
import { render } from "@testing-library/react";
import Review from "./index";

test("Should have data (editor, role, name and product )", () => {
   const data = [
    {
        user: "atikaxr",
        profile: [
            "Oily",
            "Medium Dark",
            "Warm",
            "19 - 24"
        ],
        product: {
            image: "https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg",
            name: "Tony Moly",
            desc: "Delight Tony Tint"
        },
        star: 3,
        comment: "liptint pertamaku haha dengan harga yang affordable udah bisa membuat korean look di wajahku (ga cocok si haha), cairrr, mudah kering jadi"
    },
    {
        user: "atikaxr",
        profile: [
            "Oily",
            "Medium Dark",
            "Warm",
            "19 - 24"
        ],
        product: {
            image: "https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg",
            name : "Tony Moly",
            desc: "Delight Tony Tint"
        },
        star: 3,
        comment : "liptint pertamaku haha dengan harga yang affordable udah bisa membuat korean look di wajahku (ga cocok si haha), cairrr, mudah kering jadi"
    },
    {
        user: "atikaxr",
        profile: [
            "Oily",
            "Medium Dark",
            "Warm",
            "19 - 24"
        ],
        product : {
            image: "https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg",
            name: "Tony Moly",
            desc: "Delight Tony Tint"
        },
        star: 3,
        comment : "liptint pertamaku haha dengan harga yang affordable udah bisa membuat korean look di wajahku (ga cocok si haha), cairrr, mudah kering jadi"
    }
]

  const container = render(
    <Review data={data}/>
  );

  expect(container.getAllByTestId('user').toBeInTheDocument)
  expect(container.getAllByTestId('profile').toBeInTheDocument)
  expect(container.getAllByTestId('star').toBeInTheDocument)
  expect(container.getAllByTestId('product-name').toBeInTheDocument)
  expect(container.getAllByTestId('product-desc').toBeInTheDocument)
  expect(container.getAllByTestId('product-image').toBeInTheDocument)
})