import React from 'react';

export interface MenuItemProps {
  label: string;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, onClick }) => {
  return (
    <button className='menu-item' onClick={onClick}>{label}</button>
  );
};

export default MenuItem;
