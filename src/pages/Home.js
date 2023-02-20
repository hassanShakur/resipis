import React from 'react';
import Footer from '../components/Home/Footer';

import Hero from '../components/Home/Hero';
import Background from '../components/UI/Background';

const Home = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(URL);
  //     let data = await res.json();
  //     let { recipes } = data;
  //     recipes = recipes.map((recipe) => ({
  //       id: recipe.id,
  //       title: recipe.title,
  //       image: recipe.image,
  //       cookTime: recipe.cookingMinutes + recipe.readyInMinutes,
  //     }));

  //     console.log(recipes[0]);
  //   };
  //   try {
  //     fetchData();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);
  return (
    <Background className='home' page='home'>
      <div className='content'>
        <Hero />
        <Footer />
      </div>
    </Background>
  );
};

export default Home;
