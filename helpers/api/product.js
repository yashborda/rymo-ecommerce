export const fetchProductsApi = async (token) => {
  const { data, error } = await useFetch("/api/product", {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (error.value) {
    throw new Error("Failed to fetch products");
  }
  console.log("✌️data --->", data.value);

  return data.value;
};

export const fetchProductsDetailsApi = async (token, id) => {
  const { data, error } = await useFetch(`/api/product/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (error.value) {
    throw new Error("Failed to fetch products");
  }

  return data.value;
};
