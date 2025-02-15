import React from 'react'


const Foodlist = ({recipes}) => {
   
  return (
    
<div>
      <h1>Random Recipes</h1>
      <div className='container-div'>
        {recipes.map((recipe) => (
          <div key={recipe.id} className='card-div'>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} className='img' />
            <p><strong>Time:</strong> {recipe.readyInMinutes} mins</p>
            <p><strong>Servings:</strong> {recipe.servings}</p>
            <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">View Recipe</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Foodlist