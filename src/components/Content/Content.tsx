import CardsGrid from 'components/CardsGrid/CardsGrid';
import SideStatistics from 'components/SideStatistics/SideStatistics';

import cl from './Content.module.scss';
import { type TDeleteUser, type TUser } from 'types';
import useFilteredUsers from 'hooks/useFilteredUsers';

type Props = {
  users: TUser[];
  searchFilter: string;
  deleteUser: TDeleteUser;
};

function Content({ users, searchFilter, deleteUser }: Props) {
  const filteredUsers = useFilteredUsers(users, searchFilter);

  return (
    <div className={cl.content}>
      <CardsGrid users={filteredUsers} deleteUser={deleteUser} />
      <SideStatistics users={users} />
    </div>
  );
}
export default Content;
