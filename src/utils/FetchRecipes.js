const FetchRecipes = async (URL) => {
  const res = await fetch(URL);
  const data = await res.json();

  return data;
};

export default FetchRecipes;
