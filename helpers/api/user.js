export const fetchUserApi = async (token) => {
    const { data, error } = await useLazyFetch('/api/user', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (error.value) {
      throw new Error('Failed to fetch user');
    }
    return data.value;
  };