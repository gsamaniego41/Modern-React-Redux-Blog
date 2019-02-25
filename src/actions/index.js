import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  // _.map goes through all the different posts and will pull off only the userId
  // _.uniq will return an array with just the unique userIds

  // iterate over userIds - and for every unique id, call fetchUser()
  userIds.forEach(id => dispatch(fetchUser(id)));
  // async await doesn't work with forEach
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({type: "FETCH_POSTS", payload: response.data});
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({type: "FETCH_USER", payload: response.data});
};

/* ====== Memoized version ====== 
export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({type: "FETCH_USER", payload: response.data});
}); 
*/
