import React from 'react'

function articles({ data }) {
  return (
    <div>
      {
        data.map((item, index) => {
          return(
            <div
              key={`articles-${index}`}
            >
              <h1>{item.author}</h1>
              <h1>{item.published_at}</h1>
              -------------------------
            </div>
          )
        })
      }
    </div>
  )
}

export default articles
