import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

import { Recipes, Recipe, MOCK_DATA } from 'models/recipes';

export interface IRecipesContext {
  recipes: Recipes | [],
  expandedRecipeId: number | null,
  recipeEdited: Recipe | null,
  isAddEditModalOpen: boolean,
  openRecipeEdit: (id: number) => void,
  editRecipe: (editedRecipe: Recipe, id: number) => void,
  expandRecipe: (id: number | null) => void,
  closeAddEditModal: () => void,
}

const RecipesContext = createContext<IRecipesContext>({
  recipes: [],
  expandedRecipeId: null,
  recipeEdited: null,
  isAddEditModalOpen: false,
  openRecipeEdit: () => {},
  editRecipe: () => {},
  expandRecipe: () => {},
  closeAddEditModal: () => {},
});

export const RecipesProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const openRecipeEdit = (id: number) => {
    console.log('here');
    const recipeEdited = data.recipes.find((recipe) => recipe.id === id ) || null;

    setData(prevState => ({
      ...prevState,
      recipeEdited,
      isAddEditModalOpen: Boolean(recipeEdited),
    }));
  };

  const editRecipe = (editedRecipe: Recipe, id: number) => {
    setData(prevState => {
      const index = prevState.recipes.findIndex(recipe => recipe.id = id);
      const newRecipes = [...prevState.recipes];
      newRecipes[index] = editedRecipe;

      return ({
        ...prevState,
        recipes: newRecipes,
      });
    });

    toast('Recipe edited successfully!');
  };

  const expandRecipe = (id: number | null) => {
    setData(prevState => ({
      ...prevState,
      expandedRecipeId: id,
    }));
  };

  const closeAddEditModal = () => {
    setData(prevState => ({
      ...prevState,
      isAddEditModalOpen: false,
    }));
  };

  const recipesState = {
    recipes: MOCK_DATA,
    expandedRecipeId: null,
    recipeEdited: null,
    isAddEditModalOpen: false,

    openRecipeEdit,
    editRecipe,
    expandRecipe,
    closeAddEditModal,
  };

  const [data, setData] = useState<IRecipesContext>(recipesState);

  return (
    <RecipesContext.Provider value={data}>
      {children}  
    </RecipesContext.Provider>
  );
};

export default RecipesContext;
