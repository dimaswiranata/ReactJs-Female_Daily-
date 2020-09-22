import React from 'react';

export const H1 = ({ children, style }) => <h1 className={`text-xl sm:text-xl sm:text-xl md:text-xl font-bold ${style}`}>{children}</h1>
export const H2 = ({ children, style }) => <h2 className={`text-lg sm:text-md font-bold ${style}`}>{children}</h2>
export const Body = ({ children, style }) => <p className={`text-sm md:text-base text-gray-600 leading-normal ${style}`}>{children}</p>
export const BodySmall = ({ children, style }) => <p className={`text-xs md:text-base text-gray-600 leading-normal ${style}`}>{children}</p>