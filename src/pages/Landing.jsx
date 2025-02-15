import React from 'react'
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

const foodSearchUrl = 'https://api.spoonacular.com/recipes1/random';

export const loader = async () => {
  try {
    const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
    const response = await axios.get(`${foodSearchUrl}`, {
      params: {
        apiKey: API_KEY,
        number:4,
      }
    })
    console.log(response);
    return response.data.recipes;
  } catch(error) {
      throw new Error("Failed to fetch data")
  }
};
const Landing = () => {
  const recipes = useLoaderData();
  return (
    <div>
      <h1>Food Recipe</h1>
      <ul>
        {recipes.map((recipe)=>{
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} width='200'/>
          </li>
        })}
      </ul>
    </div>
  )
 }


export default Landing

