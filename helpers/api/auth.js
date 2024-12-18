export const loginApi = async (credentials) => {
    const { data, error } = await useLazyFetch('/api/login', {
      method: 'POST',
      body: credentials,
    });
    if (error.value) {
      throw new Error('Login failed');
    }
    return data.value;
  };