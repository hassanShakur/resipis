import React from 'react';

const Summary = ({ summary, sourceURL, similarRecipes }) => {
  const localSummary = summary?.replace('spoonacular', 'resipis');

  return (
    <div className='summary'>
      <h3>summary</h3>
      <div className='text'>
        <p dangerouslySetInnerHTML={{ __html: localSummary }}></p>
        <a
          target='_blank'
          rel='noreferrer'
          className='src-btn'
          href={sourceURL}
        >
          Visit Source
        </a>
      </div>
      {/* <div className='similar'>
        <h4>similar</h4>
        {similarRecipes?.map((recipe, id) => (
          <div key={id}>
            <span>{recipe.title}</span>
            <a href={recipe.sourceURL}>view</a>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Summary;
