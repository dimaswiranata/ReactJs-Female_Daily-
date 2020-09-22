import React from 'react';
import { Content } from '../Layout/Content';
import { H1 } from '../Layout/Text';

const Header = () => {
  return (
    <header className="w-full flex flex-col justify-center items-center">
      <img
        src={''}
        alt=""
        className={"w-1/3  md:w-2/12 lg:w-2/12 xl:w-2/12 my-2"}
      />
      <h1 className={'text-4xl font-bold'}>Default</h1>
    </header>
  )
}

export default Header;