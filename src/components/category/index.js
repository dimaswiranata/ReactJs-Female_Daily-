import React from 'react'

function Category() {

  const categories = [
    {
      id: 1,
      catg: 'SKINCARE'
    },
    {
      id: 2,
      catg: 'MAKE UP'
    },
    {
      id: 3,
      catg: 'BODY'
    },
    {
      id: 4,
      catg: 'HAIR'
    },
    {
      id: 5,
      catg: 'FRAGRANCE'
    },
    {
      id: 6,
      catg: 'NAILS'
    },
    {
      id: 7,
      catg: 'TOOLS'
    },
    {
      id: 8,
      catg: 'BRANDS'
    },
  ];

  return (
    <div className="pt-16">
      <div className="flex justify-center items-center py-2 border-b border-gray-400">
        {
          categories.map((item, index) => {
            return(
              <div key={`category-${index}`} className="ml-3 font-bold">
                {item.catg}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Category
