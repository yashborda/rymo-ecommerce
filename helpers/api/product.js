export const fetchProductsApi = async (token) => {
    const { data, error } = await useLazyFetch('/api/product', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (error.value) {
      throw new Error('Failed to fetch products');
    }
  console.log(data, "data");

    return data.value;
  };