import React from 'react';
import MenuItem from './MenuItem';

const Menu: React.FC = () => {
  return (
    <div className='list-menu'>
      <MenuItem label="Item 1" onClick={() => alert('Item 1 clicked')} />
      <MenuItem label="Item 2" onClick={() => alert('Item 2 clicked')} />
    </div>
  );
};

export default Menu;
