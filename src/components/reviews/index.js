import React from 'react'

function review({ data }) {
  return (
    <div>
      {
        data.map((item, index) => {
          return(
            <div
              key={`review-${index}`}
            >
              <h1>{item.user}</h1>
              {
                item.profile.map((profiles, index) => {
                  return(
                    <div key={`product-${index}`}>
                      <h3>{profiles}</h3>
                    </div>
                  )
                })
              }
              <h1>{item.product.name}</h1>
              <h1>{item.product.desc}</h1>
              <h1>{item.comment}</h1>
              -------------------------
            </div>
          )
        })
      }
    </div>
  )
}

export default review