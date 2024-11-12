import React, { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode;
  color?: string;
  onClick: () => void
};

const Button = ({children, color = "primary", onClick}: ButtonProps) => {
  return (
    <div className={'btn btn-' + color} onClick={onClick}>{children}</div>
  )
};

export default Button;
