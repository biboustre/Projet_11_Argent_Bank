import User from "../pages/User/User";

const login = async (credentials) => {
    const { username, password } = credentials;
    try {
      const response = await fetch('/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        throw new Error('Failed to login');
      }else{
         <User/>
      }
      return await response.json();
    } catch (error) {
      throw error;
    }

  };
  
  export default { login };
  
