import { useState } from 'react';

import './App.scss';

import TopBar from 'components/TopBar/TopBar';
import Content from 'components/Content/Content';

import useUsers from 'hooks/useUsers';

import { type THandleFilterChange } from 'types';

function App() {
  const { users, isLoading, error, getUsers, deleteUser } = useUsers();

  const [searchFilter, setSearchFilter] = useState('');

  const handleFilterChange: THandleFilterChange = value => {
    setSearchFilter(value);
  };

  return (
    <div className='container appWrapper'>
      <TopBar
        getUsers={getUsers}
        isLoading={isLoading}
        error={error}
        handleFilterChange={handleFilterChange}
      />
      <Content users={users} searchFilter={searchFilter} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
