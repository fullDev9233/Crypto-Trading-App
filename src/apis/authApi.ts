import userCreds from '../config/auth';

const authAPI = (userInfo: AuthProps) => {
  const isLoggedIn = userCreds.email === userInfo.email && userCreds.password === userInfo.password;
  return new Promise<{ data: boolean }>((resolve) =>
    setTimeout(() => resolve({ data: isLoggedIn }), 500),
  );
};

export default authAPI;
