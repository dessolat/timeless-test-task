import cl from './TopBar.module.scss';

import SearchBar from 'components/UI/inputs/SearchBar/SearchBar';
import RefreshUsersBtn from 'components/UI/buttons/RefreshUsers/RefreshUsersBtn';
import NetworkStatus from 'components/UI/NetworkStatus/NetworkStatus';

import { type THandleFilterChange } from 'types';

type Props = {
  getUsers: (amount: number) => void;
  isLoading: boolean;
  error: string | null;
  handleFilterChange: THandleFilterChange;
};

const TopBar = ({ getUsers, isLoading, error, handleFilterChange }: Props) => {
  const handleRefreshClick = () => {
    if (isLoading) return;

    getUsers(500);
  };

  return (
    <div className={cl.bar}>
      <SearchBar handleFilterChange={handleFilterChange} />
      <NetworkStatus isLoading={isLoading} error={error} />
      <RefreshUsersBtn onClick={handleRefreshClick} disabled={isLoading} />
    </div>
  );
};
export default TopBar;
