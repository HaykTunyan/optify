const key = 'email';

const email = (state) => ({
  loading: state[key].loading,
  loaded: state[key].loaded,
  failed: state[key].failed,
  data: state[key].data,
});

export default email;
