import React, { useEffect } from 'react';

import Search from '../components/Home/Search';
import Display from '../components/Home/Display';
import Pagination from '../components/Home/Pagination';
import Container from '../components/UI/Container';

const URL =
  'https://api.spoonacular.com/recipes/random?number=1&apiKey=d98e8989f48349e38f7bad430d139b47';

const Home = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL);
      let data = await res.json();
      let { recipes } = data;
      recipes = recipes.map((recipe) => ({
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        cookTime: recipe.cookingMinutes + recipe.readyInMinutes,
      }));

      console.log(recipes[0]);
    };
    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <Container className='home'>
      <Search />
      <Display />
      <Pagination />
    </Container>
  );
};

export default Home;
