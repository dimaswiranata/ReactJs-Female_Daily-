import React from 'react';

export const Content = ({ children, className }) => {
  return (
    <div 
      className={`
        flex flex-col p-2 bg-gray-200 justify-start items-center h-screen overflow-auto
        ${className}
      `}
    >
      {children}
    </div>
  )
}