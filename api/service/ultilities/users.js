
import Users from '../collections/users';

export const validateHeader = async (token) => {
  const user = await Users.findOne({ 'accessToken.token': token });

  // Check user available
  if (!user) return null;

  // Check expired time.
  const { expiredTime } = user.accessToken;
  if (new Date() > expiredTime) return null;

  return user;
};

export const log = () => {

};

