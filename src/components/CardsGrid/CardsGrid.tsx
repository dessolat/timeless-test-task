import cl from './CardsGrid.module.scss';

import UserCard from 'components/UserCard/UserCard';

import { type TDeleteUser, type TUser } from 'types';

type Props = {
  users: TUser[];
  deleteUser: TDeleteUser;
};

function CardsGrid({ users, deleteUser }: Props) {
  return (
    <ul className={cl.grid}>
      {users.map(user => (
        <UserCard key={user.phone} user={user} deleteUser={deleteUser} />
      ))}
    </ul>
  );
}
export default CardsGrid;
