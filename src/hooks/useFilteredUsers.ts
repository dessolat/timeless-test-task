import { useMemo } from 'react';

import { type TUser } from 'types';

import dateFormat from 'dateformat';

function useFilteredUsers(users: TUser[], filter: string) {
  return useMemo(
    () =>
      filter !== ''
        ? users.filter(user => {
            const { name, email, phone, dob, location } = user;

            const filterFields = [
              `${name.last} ${name.first}`,
              email,
              phone,
              dateFormat(dob.date, 'd mmmm yyyy'),
              `${location.city}, ${location.state}, ${location.country}`
            ];

            return filterFields.some(field => field.toLowerCase().includes(filter.toLowerCase()));
          })
        : users,
    [users, filter]
  );
}
export default useFilteredUsers;
