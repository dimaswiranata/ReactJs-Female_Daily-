import React from 'react'

function editors({ data }) {
  return (
    <div>
      {
        data.map((item, index) => {
          return(
            <div
              key={`editors-${index}`}
            >
              <h1>{item.editor}</h1>
              <h1>{item.role}</h1>
              <h1>{item.product.description}</h1>
              <h1>{item.product.name}</h1>
              -------------------------
            </div>
          )
        })
      }
    </div>
  )
}

export default editors
