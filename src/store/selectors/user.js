const key = 'user';

const user = (state) => ({
  loaded: state[key].loaded,
  failed: state[key].failed,
  data: state[key].data?.user,
  token: state[key].data?.token,
});

export default user;
