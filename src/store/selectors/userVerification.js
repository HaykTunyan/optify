const key = 'userVerification';

const userVerification = (state) => ({
  loaded: state[key].loaded,
  failed: state[key].failed,
  isVerified: state[key].isVerified,
});

export default userVerification;
