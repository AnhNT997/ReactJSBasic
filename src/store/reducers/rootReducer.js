const initState = {
  user: [
    { id: 1, name: "John" },
    { id: 2, name: "Kevin" },
  ],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      console.log("create: ", action.payload);
      let user = state.user;
      user = user.filter((item) => {
        return item && item.id !== action.payload.id;
      });
      return {
        ...state,
        user,
      };
      break;
    default:
      return state;
  }
};
export default rootReducer;
