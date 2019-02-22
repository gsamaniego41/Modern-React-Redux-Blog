import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = async () => {
  // Bad approach - breaks a Redux rule
  const response = await jsonPlaceholder.get("/posts");
  return {
    type: "FETCH_POSTS",
    payload: response
  };
};
