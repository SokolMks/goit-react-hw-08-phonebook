const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUserName = (state) => state.auth.user.name;
const getIsFetchingCurrentUser = (state) => state.auth.isFetchingCurrentUser;

export default { getIsLoggedIn, getUserName, getIsFetchingCurrentUser };
