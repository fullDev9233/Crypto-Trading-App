import userCreds from '../config/auth';

interface PromiseProps {
  isLoggedIn: boolean;
  email: string;
  password: string;
}

const authAPI = (userInfo: AuthProps) => {
  const isLoggedIn = userCreds.email === userInfo.email && userCreds.password === userInfo.password;
  const data = isLoggedIn
    ? {
        isLoggedIn,
        email: userInfo.email,
        password: userInfo.password,
      }
    : {
        isLoggedIn,
        email: '',
        password: '',
      };
  return new Promise<{ data: PromiseProps }>((resolve) => setTimeout(() => resolve({ data }), 500));
};

export default authAPI;
