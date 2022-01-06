export const generateId = (id1, id2) => (id1 > id2 ? id1 + id2 : id2 + id1);

export const getMatchedUserInfo = (users, userLoggedIn) => {
  const newUsers = { ...users };
  delete newUsers[userLoggedIn];

  const [id, user] = Object.entries(newUsers).flat();
  return { id, ...user };
};
