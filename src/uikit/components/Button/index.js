import React from 'react';

const Button = ({ 
  type, 
  onClick, 
  title, 
  isSubmit=false,
  containerStyle
}) => {
  
  const styles = {
    buttonPrimary: `
      bg-blue-500 hover:bg-blue-700
    `,
    buttonDanger: `
      bg-red-500 hover:bg-red-700
    `,
    buttonNeutral: `
      bg-gray-500 hover:bg-gray-700
    `,
    full: `
      w-full flex justify-end
    `,
    buttonStyle: (containerStyle) => `
      text-white font-bold py-3 px-4 rounded my-2 w-full
      ${containerStyle}
    `
  }

  const buttonClass = (type) => {
    switch (type) {
      case 'primary':
        return styles.buttonPrimary;
    
      case 'danger':
        return styles.buttonDanger;

      case 'gray':
      case 'neutral':
        return styles.buttonNeutral;

      default:
        return styles.buttonPrimary;
    }
  }
  return (
    <button 
      className={buttonClass(type) + styles.buttonStyle(containerStyle)}
      onClick={onClick}
      type={isSubmit ? 'submit' : 'button'}
    >
      {title}
    </button>
  )
}

export default Button;