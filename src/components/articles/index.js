import React from 'react'

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

function articles({ data }) {
  return (
    <div className="px-40 py-6">
      <div className="text-xl font-extrabold">Latest Articles</div>
      <div className="flex flex-row justify-between mb-4">
        <div className="text-gray-600">
          So you can make better purchase decision
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="mr-2 text-red-400 font-semibold">
            See more
          </div>
          <ArrowForwardIosIcon style={{ fontSize: 15, marginTop: 2, color: '#DB284E' }}/>
        </div>
      </div>
      <div data-testid="data" className="grid grid-cols-3 gap-4">
        {
          data.map((item, index) => {
            return(
              <div
                key={`articles-${index}`}
                className="mt-3"
              >
                <img
                  data-testid="image"
                  src={item.image}
                  className="w-full h-40 rounded-xl object-cover"
                  alt={`articles-${index}`}
                />
                <div data-testid="title" className="w-19/20 font-bold text-md mt-2">{item.title}</div>
                <div data-testid="author" className="flex flex-row mt-3">
                  <div className="text-sm text-gray-700 font-semibold">
                    {item.author} | 
                  </div>
                  <div data-testid="published_at" className="ml-2 text-sm text-gray-500 font-semibold">{item.published_at}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default articles
