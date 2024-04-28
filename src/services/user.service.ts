import axios from 'axios';

import { type TUser } from 'types';

type ResponseInfo = {
  seed: string;
  results: number;
  page: number;
  version: string;
};

type TResponse = {
  results: TUser[];
  info: ResponseInfo;
};

class UserService {
  private URL = 'https://randomuser.me/api';

  async fetchAmount(amount: number): Promise<TResponse> {
    const response = await axios.get(this.URL, {
      params: {
        inc: 'gender,name,location,email,dob,phone,id,picture',
        results: amount
      }
    });

    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    return response.data;
  }
}

export default new UserService();
