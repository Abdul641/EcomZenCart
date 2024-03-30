export const fetchProducts = async () => {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
    console.log(data);
    // console.log(data[0].category.image);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
