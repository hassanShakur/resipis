import React from 'react';

const Summary = ({ summary, sourceURL, similarRecipes }) => {
  const localSummary = summary?.replace('spoonacular', 'resipis');
  return (
    <div className='summary'>
      <h3>summary</h3>
      <div className='text'>
        <p dangerouslySetInnerHTML={{ __html: localSummary }}></p>
        <a href={sourceURL}>Visit Source</a>
      </div>
      <div className='similar'>
        <h4>similar</h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Fugiat illo laborum maiores nam culpa necessitatibus quisquam
        tempora itaque cupiditate atque nobis, adipisci voluptas cum
        veritatis? Eveniet blanditiis omnis consectetur laboriosam?
      </div>
    </div>
  );
};

export default Summary;
