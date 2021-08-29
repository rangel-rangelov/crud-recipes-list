import { createContext, useState } from 'react';

import { Recipes, Recipe, MOCK_DATA } from 'models/recipes';

export interface IRecipesContext {
  recipes: Recipes | [],
  expandedRecipeId: number | null,
  editRecipe: (id: number) => void,
  expandRecipe: (id: number | null) => void,
}

const RecipesContext = createContext<IRecipesContext>({
  recipes: [],
  expandedRecipeId: null,
  editRecipe: () => {},
  expandRecipe: () => {},
});

export const RecipesProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const editRecipe = (id: number) => {
    console.log(setData, id);
    // TODO: handle edit
  };

  const expandRecipe = (id: number | null) => {
    console.log(id);
    setData(prevState => ({
      ...prevState,
      expandedRecipeId: id,
    }));
  };

  const recipesState = {
    recipes: MOCK_DATA,
    expandedRecipeId: null,
    editRecipe,
    expandRecipe,
  };

  const [data, setData] = useState<IRecipesContext>(recipesState);

  return (
    <RecipesContext.Provider value={data}>
      {children}  
    </RecipesContext.Provider>
  );
};

export default RecipesContext;
