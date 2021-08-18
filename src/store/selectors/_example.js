const key = 'users';

const example = (state) => ({
  loaded: state[key].loaded,
  failed: state[key].failed,
  rows: state[key]?.data?.rows,
  count: state[key]?.data?.count,
});

export default example;
