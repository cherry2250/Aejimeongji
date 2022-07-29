const url = '';

const login_API = '/api/auth/login';
const signup_API = '/api/signup';

export const login = async (email, password) => {
  const res = await axios({
    method: 'POST',
    url,
    data: {
      email,
      password,
    },
  });

  // response로 token 받아서 store에 저장해야 됨.
};
