import React from 'react'
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import Foodlist from '../components/Foodlist';

const foodSearchUrl = 'https://api.spoonacular.com/recipes/random';

export const loader = async () => {
  try {
    const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
    const response = await axios.get(`${foodSearchUrl}`, {
      params: {
        apiKey: API_KEY,
        number:8,
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
    <>
    <Foodlist recipes={recipes}/>
    </>
  )
 }

export default Landing

