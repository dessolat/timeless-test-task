import { useState } from 'react';

import cl from './SearchBar.module.scss';

import useDebounceCallback from 'hooks/useDebounceCallback';

import { type THandleFilterChange } from 'types';

type Props = React.InputHTMLAttributes<HTMLInputElement> & { handleFilterChange: THandleFilterChange };

function SearchBar({ handleFilterChange, ...props }: Props) {
  const [value, setValue] = useState<string>('');

  useDebounceCallback(value, 400, handleFilterChange);
  return (
    <input
      className={cl.searchBar}
      value={value}
      onChange={e => setValue(e.target.value)}
      type='text'
      placeholder='Search'
      {...props}
    />
  );
}
export default SearchBar;
