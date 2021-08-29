import { Recipes } from 'models/recipes';

export const updateStorage = (recipes: Recipes) => {
  localStorage.setItem('recipes', JSON.stringify(recipes));
};

export const getFromStorage = (): Recipes | [] => {
  if (localStorage.getItem('recipes')) {
    return JSON.parse(localStorage.getItem('recipes') || '') as Recipes;
  }

  return [];
};