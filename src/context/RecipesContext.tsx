import { createContext, useState } from 'react';

import { Recipes, Recipe, MOCK_DATA } from 'models/recipes';

export interface IRecipesContext {
  recipes: Recipes | [],
  openRecipe: Recipe | null,
  editRecipe: (id: number) => void,
}

const RecipesContext = createContext<IRecipesContext>({
  recipes: [],
  openRecipe: null,
  editRecipe: () => {},
});

export const RecipesProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const editRecipe = (id: number) => {
    console.log(setData, id);
    // TODO: handle edit
  };

  const recipesState = {
    recipes: MOCK_DATA,
    openRecipe: null,
    editRecipe,
  };

  const [data, setData] = useState(recipesState);

  return (
    <RecipesContext.Provider value={data}>
      {children}  
    </RecipesContext.Provider>
  );
};

export default RecipesContext;
