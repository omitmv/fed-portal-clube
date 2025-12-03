import React from 'react';
import Button from '../../../core/common/components/Button';

export interface MenuItemProps {
  label: string;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, onClick }) => {
  return (
    <Button className='menu-item' onClick={onClick}>{label}</Button>
  );
};

export default MenuItem;
