import React from 'react';
import MenuItem from './MenuItem';

const Menu: React.FC = () => {
  
  return (
    <div className='list-menu'>
      <MenuItem label="Cadastros" onClick={() => alert('Item 1 clicked')} />
      <MenuItem label="Relatórios" onClick={() => alert('Item 2 clicked')} />
    </div>
  );
};

export default Menu;
