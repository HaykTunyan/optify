const pricing = (state) => ({
  plans: state.pricing,
  planById: (id) => state.pricing.find((item) => item.id === Number(id)),
});

export default pricing;
