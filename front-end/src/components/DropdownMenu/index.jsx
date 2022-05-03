import React from 'react';
import './style.css';

const options = ['Otávio', 'Rafael', 'Mega', 'Bel', 'Paulo', 'Elithon'];
const name = 'Vendedor';

const DropdownMenu = () => ( // 1
  <>
    <label htmlFor="select-options" className="DropdownMenu__label">
      { `${name}:` }
    </label>
    <select name={ name } id="select-options" className="DropdownMenu__select">
      <option value="default">Selecione uma opção</option>
      {options.map((option) => (
        <option key={ option } value={ option }>
          { option }
        </option>
      ))}
    </select>
  </>
);

export default DropdownMenu;

// 1
// deverá receber um array de opções quando chamado
// e um nome que identifique se seleciona vendedor
// responsável ou tipo de usuário: Vendedor ou Usuário
// {name, options}, um é uma string e outro é um array de strings
