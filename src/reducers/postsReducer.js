export default (state = [], action) => {
  // initialize state with an empty array,
  // bec if we don't, state will be undefined
  // deals w/ an array aka list of records
  if (action.type === "FETCH_POSTS") {
    return action.payload;
  }

  return state;
};
