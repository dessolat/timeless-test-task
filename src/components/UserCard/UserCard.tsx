import { type TDeleteUser, type TUser } from 'types';

import dateFormat from 'dateformat';

import DeleteBtn from 'components/UI/buttons/DeleteBtn/DeleteBtn';

import cl from './UserCard.module.scss';

type Props = {
  user: TUser;
	deleteUser: TDeleteUser
};

function UserCard({ user, deleteUser }: Props) {
  const { name, email, phone, dob, location, picture } = user;

  return (
    <li className={cl.card}>
      <div className={cl.header}>
        <img src={picture.thumbnail} alt='user-avatar' className={cl.avatar} />
        <div className={cl.nameAndMailWrapper}>
          <p className={cl.name}>{`${name.last} ${name.first}`}</p>
          <p className={cl.email}>{email}</p>
        </div>
      </div>
      <div className={cl.infoRows}>
        <div className={cl.infoRow}>
          <span className={cl.fieldName}>Phone No</span>
          <p className={cl.fieldValue}>{phone}</p>
        </div>
        <div className={cl.infoRow}>
          <span className={cl.fieldName}>Birthday</span>
          <p className={cl.fieldValue}>{dateFormat(dob.date, 'd mmmm yyyy')}</p>
        </div>
        <div className={cl.infoRow}>
          <span className={cl.fieldName}>Address</span>
          <p className={cl.fieldValue}>{`${location.city}, ${location.state}, ${location.country}`}</p>
        </div>
      </div>
      <DeleteBtn className={cl.deleteBtn} onClick={deleteUser(user.phone)}/>
    </li>
  );
}
export default UserCard;
