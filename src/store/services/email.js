import client from 'store/client';
import endpoints from 'store/endpoints';

const email = {
  verify: (payload) => client().post(endpoints.emailVerify, payload),
  find: (payload) => client().post(endpoints.emailFind, payload),
};

export default email;
