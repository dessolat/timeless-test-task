import { memo } from 'react';

import cl from './SideStatistics.module.scss';

import { type TUser } from 'types';
import AgeGroups from './AgeGroups';
import GenderGroups from './GenderGroups';

type Props = {
  users: TUser[];
};
function SideStatistics({ users }: Props) {
  const totalUsersText = `${users.length} ${users.length !== 1 ? 'Users' : 'User'}`;

  const accumulatedUserGroups = users.reduce(
    (acc, user) => {
      const { dob, gender } = user;

      if (dob.age >= 11 && dob.age <= 20) acc.ageGroups['11 to 20']++;
      else if (dob.age >= 21 && dob.age <= 30) acc.ageGroups['21 to 30']++;
      else if (dob.age >= 31 && dob.age <= 40) acc.ageGroups['31 to 40']++;
      else if (dob.age >= 41 && dob.age <= 50) acc.ageGroups['41 to 50']++;
      else if (dob.age >= 51) acc.ageGroups['51+']++;

      acc.genderGroups[gender]++;

      return acc;
    },
    {
      ageGroups: {
        '11 to 20': 0,
        '21 to 30': 0,
        '31 to 40': 0,
        '41 to 50': 0,
        '51+': 0
      },
      genderGroups: {
        male: 0,
        female: 0
      }
    }
  );
  return (
    <div className={cl.sidebar}>
      <div className={cl.title}>{totalUsersText}</div>
      <AgeGroups ageGroups={accumulatedUserGroups.ageGroups}/>
      <GenderGroups genderGroups={accumulatedUserGroups.genderGroups}/>
    </div>
  );
}
export default memo(SideStatistics);
