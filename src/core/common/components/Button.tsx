import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className = '', children, ...props }) => {
  const classes = className.split(' ');
  const isTextLeft = classes.includes('text-left');
  const isTextCenter = classes.includes('text-center');
  const isTextRight = classes.includes('text-right');

  let style: React.CSSProperties | undefined = undefined;
  if (isTextLeft) style = { justifyContent: 'flex-start', textAlign: 'left' };
  if (isTextCenter) style = { justifyContent: 'center', textAlign: 'center' };
  if (isTextRight) style = { justifyContent: 'flex-end', textAlign: 'right' };

  return (
    <button
      className={className}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
