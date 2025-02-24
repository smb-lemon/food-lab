import React from 'react';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Foodlist from '../components/Foodlist';
import Searchform from '../components/Searchform';

const randomFoodUrl = 'https://api.spoonacular.com/recipes/random';
const searchFoodUrl = 'https://api.spoonacular.com/recipes/complexSearch';

export const loader = async ({ request }) => {
  try {
    const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
    const url = new URL(request.url);
    const searchQuery = url.searchParams.get('query');

    let response;
    if (searchQuery) {
      response = await axios.get(searchFoodUrl, {
        params: {
          apiKey: API_KEY,
          query: searchQuery,
          number: 8,
        },
      });
      return response.data.results; 
    } else {
      response = await axios.get(randomFoodUrl, {
        params: {
          apiKey: API_KEY,
          number: 8,
        },
      });
      return response.data.recipes;
    }
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

const Landing = () => {
  const recipes = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (query) => {
    setSearchParams({ query });
  };

  return (
    <>
      <Searchform onSearch={handleSearch} />
      <Foodlist recipes={recipes} />
    </>
  );
};

export default Landing;
