import React from 'react';
import {BodySmall} from '../Layout/Text';

const Footer = () => {

  const styles = {
    footer: `
      w-full flex flex-col justify-center items-center
    `,
    logo: `
      w-20 my-2
    `,
    row: `
      m-0 flex flex-row items-center justify-center p-0
    `,
    text: `
      ml-5
    `
  };

  return (
    <footer className="text-center">
      <BodySmall>Copyright © 2020 </BodySmall>
    </footer>
  )
}

export default Footer;